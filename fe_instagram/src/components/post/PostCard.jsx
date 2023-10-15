import { useDisclosure } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
  BsBookmark,
  BsBookmarkFill,
  BsEmojiSmile,
  BsThreeDots,
} from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { isPostLikedByUser, isSavedPost } from "~/config/logic";
import {
  likePost,
  savePost,
  unLikePost,
  unsavePost,
} from "~/redux/post/Action";
import CommentModal from "../comment/CommentModal";
import "./PostCard.css";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const token = localStorage.getItem("token");
  const data = { jwt: token, postId: post?.id };
  const user = useSelector((store) => store.user);
  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handlePostLike = () => {
    dispatch(likePost(data));
    setIsPostLiked(true);
  };

  const handlePostUnLike = () => {
    dispatch(unLikePost(data));
    setIsPostLiked(false);
  };
  const handleSavePost = () => {
    dispatch(savePost(data));
    setIsSaved(true);
  };

  const handleUnSavePost = () => {
    dispatch(unsavePost(data));
    setIsSaved(false);
  };
  const handleOpenCommentModal = () => {
    navigate(`/comment/${post.id}`);
    onOpen();
  };

  useEffect(() => {
    setIsPostLiked(isPostLikedByUser(post, user.reqUser.id));
    setIsSaved(isSavedPost(user.reqUser, post.id));
  }, [post.likedByUsers, user.reqUser]);

  return (
    <div>
      <div className="border rounded-md w-full">
        <div className="flex justify-between items-center w-full py-4 px-5 ">
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full"
              src={
                post.userImage ||
                "https://dailysuzukihadong.com/wp-content/uploads/2020/03/unnamed.jpg"
              }
            />
            <div className="pl-2">
              <p className="font-semibold text-sm "> {post?.user.username}</p>
              <p className="font-thin text-sm">{post.location} </p>
            </div>
          </div>
          <div className="dropdown">
            <BsThreeDots className="dots" onClick={() => handleClick()} />
            <div className="dropdown-content">
              {showDropdown && (
                <p className="bg-black text-white py-1 px-4 rounded-md cursor-pointer">
                  Delete
                </p>
              )}
            </div>
          </div>
        </div>
        <div className="w-full">
          <img src={post?.image} alt="" className="w-full" />
        </div>
        <p className="font-extralight text-sm ml-5 mt-1">{post.caption}</p>
        <div className="flex justify-between items-center w-full px-5 py-4">
          <div className="flex items-center space-x-2">
            {isPostLiked ? (
              <AiFillHeart
                className="text-2xl hover:opacity-50 cursor-pointer text-red-600"
                onClick={handlePostUnLike}
              />
            ) : (
              <AiOutlineHeart
                className="text-2xl hover:opacity-50 cursor-pointer"
                onClick={handlePostLike}
              />
            )}

            <FaRegComment
              onClick={handleOpenCommentModal}
              className="text-xl hover:opacity-50 cursor-pointer"
            />
            <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
          </div>
          <div className="cursor-pointer">
            {isSaved ? (
              <BsBookmarkFill
                onClick={handleUnSavePost}
                className="text-xl hover:opacity-50 cursor-pointer"
              />
            ) : (
              <BsBookmark
                onClick={handleSavePost}
                className="text-xl hover:opacity-50 cursor-pointer"
              />
            )}
          </div>
        </div>
        <div className="w-full py-2 px-5">
          {post.likedByUsers.length > 0 && (
            <p>{post.likedByUsers.length} like</p>
          )}
          {post.comments.length > 0 && (
            <p className="opacity-50 py-2 cursor-pointer">
              view all {post.comments.length} comments
            </p>
          )}
        </div>
        <div className="border border-t w-full">
          <div className="flex w-full items-center px-5">
            <BsEmojiSmile />
            <input
              type="text"
              className="commnetInput"
              placeholder="Add a comment..."
            />
          </div>
        </div>
      </div>

      <CommentModal
        handlePostLike={handlePostLike}
        onClose={onClose}
        isOpen={isOpen}
        handleSavePost={handleSavePost}
        isPostLiked={isPostLiked}
        isSaved={isSaved}
      />
    </div>
  );
};
PostCard.propTypes = {
  post: PropTypes.object,
};
export default PostCard;
