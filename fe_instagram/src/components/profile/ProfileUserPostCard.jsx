import { AiFillHeart } from "react-icons/ai";
import "./ProfileUserPostCard.css";
import { FaComment } from "react-icons/fa";

const ProfileUserPostCard = () => {
  return (
    <div className="p-2">
      <div className="post w-60 h-60">
        <img
          src="https://cdn.pixabay.com/photo/2023/03/28/07/51/trees-7882545_1280.jpg"
          className="cursor-pointer"
          alt=""
        />
        <div className="overlay">
          <div className="overlay-text flex justify-between">
            <div>
              <AiFillHeart /> <span>10</span>
            </div>
            <div>
              <FaComment />
              <span>30</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserPostCard;
