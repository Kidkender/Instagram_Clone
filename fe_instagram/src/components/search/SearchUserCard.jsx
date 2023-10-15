import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
const SearchUserCard = ({ user }) => {
  const navigate = useNavigate();

  return (
    <div onClick={navigate(`${user.userName}`)} className="py-2 cursor-pointer">
      <div className="flex items-center">
        <img
          src={
            user.image ||
            "https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png"
          }
          alt=""
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-3">
          <p>{user.name}</p>
          <p className="opacity-70">{user.userName}</p>
        </div>
      </div>
    </div>
  );
};

SearchUserCard.propTypes = {
  user: PropTypes.object,
};

export default SearchUserCard;
