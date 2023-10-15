import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { isCommentLikedByUser, timeDifference } from "~/config/logic";
import { likeComment, unlikeComment } from "~/redux/comment/Action";
const CommentCard = ({ comment }) => {
  const [isCommentLiked, setisCommentLiked] = useState(false);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const user = useSelector((store) => store.user);
  const data = {
    commentId: comment.id,
    jwt: token,
  };
  const handleLikeComment = () => {
    setisCommentLiked(true);
    // console.log("liike comment");
    dispatch(likeComment(data));
  };

  const handleUnLikeComment = () => {
    // console.log("Unlike Comment");
    setisCommentLiked(false);
    dispatch(unlikeComment(data));
  };
  const createdTime = timeDifference(comment?.createdAt);

  useEffect(() => {
    // console.log(
    //   "is Comment Like ",
    //   isCommentLikedByUser(comment, user.reqUser.id)
    // );
    setisCommentLiked(isCommentLikedByUser(comment, user.reqUser?.id));
  }, [user.reqUser, comment]);

  return (
    <div>
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center">
          <div>
            <img
              src={
                comment?.user.userImage ||
                "https://dailysuzukihadong.com/wp-content/uploads/2020/03/unnamed.jpg"
              }
              alt=""
              className="w-9 h-9 rounded-full"
            />
          </div>
          <div className="ml-3">
            <p>
              <span className="font-semibold">{comment.user.username}</span>

              <span className="ml-2">{comment.content}</span>
            </p>
            <div className="flex items-center space-x-3 text-xs opacity-60 pt-2">
              <span>{createdTime}</span>
              {comment.likedByUsers.length > 0 && (
                <span>{comment.likedByUsers.length} like</span>
              )}
            </div>
          </div>
        </div>

        {isCommentLiked ? (
          <AiFillHeart
            onClick={handleUnLikeComment}
            className="mr-4 text-xs hover:opacity-50 cursor-pointer text-red-600"
          />
        ) : (
          <AiOutlineHeart
            onClick={handleLikeComment}
            className="mr-4 text-xs hover:opacity-50 cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

CommentCard.propTypes = {
  comment: PropTypes.object,
};
export default CommentCard;
