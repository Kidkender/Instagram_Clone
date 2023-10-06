import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
const CommentCard = () => {
  const [isCommentLiked, setisCommentLiked] = useState();
  const handleLikeComment = () => {
    setisCommentLiked(!isCommentLiked);
  };

  return (
    <div>
      <div className="flex items-center justify-between py-5">
        <div className="flex items-center">
          <div>
            <img
              src="https://images.pexels.com/photos/17327094/pexels-photo-17327094/free-photo-of-pac-man-protagonists-cutouts.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="w-9 h-9 rounded-full"
            />
          </div>
          <div className="ml-3">
            <p>
              <span className="font-semibold">username</span>

              <span className="ml-2">nice post</span>
            </p>
            <div className="flex items-center space-x-3 text-xs opacity-60 pt-2">
              <span> 1 min ago</span>
              <span>30 likes</span>
            </div>
          </div>
        </div>

        {isCommentLiked ? (
          <AiFillHeart
            onClick={handleLikeComment}
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

export default CommentCard;
