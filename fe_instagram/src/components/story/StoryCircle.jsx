import { useNavigate } from "react-router-dom";

const StoryCircle = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/story");
  };

  return (
    <div
      onClick={handleNavigate}
      className="cursor-pointer flex flex-col items-center"
    >
      <img
        src="https://cdn.pixabay.com/photo/2023/08/30/13/13/el-chalten-8223303_1280.jpg"
        className="w-16 h-16 rounded-full"
      />
      <p>username</p>
    </div>
  );
};

export default StoryCircle;
