import { TbCircleDashed } from "react-icons/tb";

const ProfileUserDetail = () => {
  return (
    <div className="py-10 w-full">
      <div className="flex items-center">
        <div className="w-[15%]">
          <img
            src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t39.30808-1/380648173_2278801195843000_1962275687173073084_n.jpg?stp=dst-jpg_p320x320&_nc_cat=102&ccb=1-7&_nc_sid=fe8171&_nc_ohc=Z7pBIelxPNQAX-uwMYJ&_nc_ht=scontent.fsgn2-8.fna&oh=00_AfAD6JPwXT3mGTiXyp1OBx3BSHzeilGeyC1bcrM21zBT1g&oe=652480E6"
            className="w-32 h-32 rounded-full"
          />
        </div>
        <div className="space-y-5">
          <div className="flex space-x-10 items-center">
            <p>Duyen_Xink</p>
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
            <p className="font-semibold">Nguyen Thi My Duyen</p>
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
