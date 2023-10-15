import { AiFillHeart } from "react-icons/ai";
import "./ProfileUserPostCard.css";
import { FaComment } from "react-icons/fa";
import PropTypes from "prop-types";

const ProfileUserPostCard = ({ post }) => {
  return (
    <div className="p-2">
      <div className="post w-60 h-60">
        <img src={post?.image} className="cursor-pointer" alt="" />
        <div className="overlay">
          <div className="overlay-text flex justify-between">
            <div>
              <AiFillHeart /> <span>{post?.likedByUsers?.length}</span>
            </div>
            <div>
              <FaComment />
              <span>{post?.comments?.length}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileUserPostCard.propTypes = { post: PropTypes.object };

export default ProfileUserPostCard;
