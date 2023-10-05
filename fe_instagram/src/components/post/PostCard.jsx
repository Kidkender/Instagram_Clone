import { BsBookmark, BsBookmarkFill, BsThreeDots } from "react-icons/bs";
import { useState } from "react";
import "./PostCard.css";
import { AiFillAlert, AiFillHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
const PostCard = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isPostLiked, setIsPostLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const handleClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handlePostLiked = () => {
    setIsPostLiked(!isPostLiked);
  };

  const handleSavePost = () => {
    setIsPostLiked(!isSaved);
  };
  return (
    <div>
      <div className="border rounded-md w-full">
        <div className="flex justify-between items-center w-full py-4 px-5 ">
          <div className="flex items-center">
            <img
              className="h-12 w-12 rounded-full"
              src="https://cdn.pixabay.com/photo/2023/08/22/08/59/road-8205773_1280.jpg"
            />
            <div className="pl-2">
              <p className="font-semibold text-sm "> username</p>
              <p className="font-thin text-sm">location </p>
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
          <img
            src="https://cdn.pixabay.com/photo/2023/08/15/17/25/fall-8192375_1280.png"
            alt=""
          />
        </div>
        <div className="flex justify-between items-center w-full px-5 py-4">
          <div className="flex items-center space-x-2">
            {isPostLiked ? (
              <AiFillAlert
                className="text-xl hover:opacity-50 cursor-pointer"
                onClick={handlePostLiked}
              />
            ) : (
              <AiFillHeart
                className="text-xl hover:opacity-50 cursor-pointer"
                onClick={handlePostLiked}
              />
            )}

            <FaRegComment className="text-xl hover:opacity-50 cursor-pointer" />
            <RiSendPlaneLine className="text-xl hover:opacity-50 cursor-pointer" />
          </div>
          <div className="cursor-pointer">
            {isSaved ? (
              <BsBookmarkFill className="text-xl hover:opacity-50 cursor-pointer" />
            ) : (
              <BsBookmark className="text-xl hover:opacity-50 cursor-pointer" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
