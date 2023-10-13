import { TbCircleDashed } from "react-icons/tb";

const ProfileUserDetail = () => {
  return (
    <div className="py-10 w-full">
      <div className="flex items-center">
        <div className="w-[15%]">
          <img
            src="https://images.pexels.com/photos/16108218/pexels-photo-16108218/free-photo-of-food-healthy-sea-black-and-white.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className="w-32 h-32 rounded-full"
          />
        </div>
        <div className="space-y-5">
          <div className="flex space-x-10 items-center">
            <p>Con vit ne</p>
            <button>Edit Profile</button>
            <TbCircleDashed />
          </div>

          <div className="flex space-x-10">
            <div>
              <span className="font-semibold mr-2">10</span>
              <span>posts</span>
            </div>
            <div>
              <span className="font-semibold mr-2">3</span>
              <span>follower</span>
            </div>
            <div>
              <span className="font-semibold mr-2">3000</span>
              <span>following</span>
            </div>
          </div>
          <div>
            <p className="font-semibold">Duck Huu</p>
            <p className="font-thin text-sm">
              Engineering Grab 🥷 | Coder 👨‍💻 | traveller 🧳
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUserDetail;
