import { useNavigate } from "react-router-dom";

const StoryCircle = ({ user }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/story/${user.id}`);
  };

  return (
    <div
      onClick={handleNavigate}
      className="cursor-pointer flex flex-col items-center"
    >
      <img
        src={
          user.image ||
          "https://toppng.com/uploads/preview/instagram-default-profile-picture-11562973083brycehrmyv.png"
        }
        className="w-16 h-16 rounded-full"
      />
      <p>{user.userName}</p>
    </div>
  );
};

export default StoryCircle;
