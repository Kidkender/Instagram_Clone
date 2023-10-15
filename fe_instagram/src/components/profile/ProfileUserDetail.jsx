import { TbCircleDashed } from "react-icons/tb";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProfileUserDetail = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const post = useSelector((store) => store.post);
  const allPostUser = useSelector((store) => store.post?.allPostUser);
  console.log("post ", post);
  console.log("user ", user);
  console.log("All post user ", allPostUser.length);
  const countPost = allPostUser.length;

  return (
    <div className="py-10 w-full">
      <div className="flex items-center">
        <div className="w-[15%]">
          <img
            src={
              user.reqUser?.image ||
              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/2048px-Default_pfp.svg.png"
            }
            className="w-32 h-32 rounded-full"
          />
        </div>
        <div className="space-y-5">
          <div className="flex space-x-10 items-center">
            <p>{user.reqUser?.userName}</p>
            <button onClick={() => navigate("/account/edit")}>
              Edit Profile
            </button>
            <TbCircleDashed />
          </div>

          <div className="flex space-x-10">
            <div>
              <span className="font-semibold mr-2">{countPost}</span>
              <span>posts</span>
            </div>
            <div>
              <span className="font-semibold mr-2">
                {user.reqUser?.follower?.length || 0}
              </span>
              <span>follower</span>
            </div>
            <div>
              <span className="font-semibold mr-2">
                {user.reqUser?.following?.length || 0}
              </span>
              <span>following</span>
            </div>
          </div>
          <div>
            <p className="font-semibold">{user.reqUser?.name}</p>
            <p className="font-thin text-sm">
              {user.reqUser?.bio ||
                "Engineering Grab 🥷 | Coder 👨‍💻 | traveller 🧳 "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserDetail;
