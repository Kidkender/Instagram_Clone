import { Modal, ModalBody, ModalContent, ModalOverlay } from "@chakra-ui/react";

import PropTypes from "prop-types";
import {
  BsBookmark,
  BsBookmarkFill,
  BsEmojiSmile,
  BsThreeDots,
} from "react-icons/bs";
import CommentCard from "./CommentCard";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import "./CommentModal.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createCommnent, findPostCommnent } from "~/redux/comment/Action";
import { findPostById } from "~/redux/post/Action";
import { timeDifference } from "~/config/logic";

const CommentModal = ({
  handlePostLike,
  onClose,
  isOpen,
  handleSavePost,
  isPostLiked,
  isSaved,
}) => {
  const [commentContent, setCommentContent] = useState();

  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const { postId } = useParams();
  const comment = useSelector((store) => store.comment);
  const post = useSelector((store) => store.post);

  console.log("post ", post);
  useEffect(() => {
    const data = { jwt: token, postId };

    if (postId) {
      // dispatch(findPostCommnent(data));
      dispatch(findPostById(data));
    }
  }, [comment.createdComment, postId]);

  const timeCreated = timeDifference(post.singlePost?.createdAt);

  return (
    <div>
      <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalBody>
            <div className="flex h-[75vh] ">
              <div className="w-[45%] flex flex-col justify-center">
                <img
                  className="max-h-full w-full"
                  alt=""
                  src={post.singlePost?.image}
                />
              </div>
              <div className="w-[55%] pl-10 relative">
                <div className="flex justify-between items-center py-5">
                  <div className="flex items-center">
                    <div>
                      <img
                        src="https://images.pexels.com/photos/17801570/pexels-photo-17801570/free-photo-of-dag-gezisi.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt=""
                        className="w-9 h-9 rounded-full"
                      />
                    </div>
                    <div className="ml-2">
                      <p>{post.singlePost?.user?.username}</p>
                    </div>
                  </div>
                  <BsThreeDots />
                </div>
                <hr />
                {/* <p className="text-sm font-sans">{post.singlePost?.caption}</p> */}
                <div className="comment">
                  {post.singlePost?.comments?.map((item, index) => (
                    <CommentCard key={index} comment={item} />
                  ))}
                </div>

                <div className="absolute bottom-0 w-[90%]   ">
                  <div className="flex justify-between items-center w-full py-4">
                    <div className="flex items-center space-x-2">
                      {isPostLiked ? (
                        <AiFillHeart
                          className="text-2xl hover:opacity-50 cursor-pointer text-red-600"
                          onClick={handlePostLike}
                        />
                      ) : (
                        <AiOutlineHeart
                          className="text-2xl hover:opacity-50 cursor-pointer"
                          onClick={handlePostLike}
                        />
                      )}

                      <FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />
                      <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
                    </div>
                    <div className="cursor-pointer">
                      {isSaved ? (
                        <BsBookmarkFill
                          onClick={handleSavePost}
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
                  <div className="w-full py-2 ">
                    {post.singlePost?.likedByUsers.length > 0 && (
                      <p>{post.singlePost?.likedByUsers?.length} like</p>
                    )}
                    <p className="opacity-50 text-sm">{timeCreated}</p>
                  </div>

                  <div className="flex  items-center w-full   ">
                    <BsEmojiSmile />
                    <input
                      type="text"
                      className="commnetInput"
                      placeholder="Add a comment..."
                      onChange={(e) => setCommentContent(e.target.value)}
                      value={commentContent}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          const data = {
                            postId,
                            jwt: token,
                            content: commentContent,
                          };
                          dispatch(createCommnent(data));
                          setCommentContent("");
                        }
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
};

CommentModal.propTypes = {
  onClose: PropTypes.func,
  isOpen: PropTypes.bool,
  handlePostLike: PropTypes.func,
  isSaved: PropTypes.bool,
  handleSavePost: PropTypes.func,
  isPostLiked: PropTypes.bool,
};

export default CommentModal;
