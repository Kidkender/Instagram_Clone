import { AiOutlineTable, AiOutlineUser } from "react-icons/ai";
import { RiVideoAddLine } from "react-icons/ri";
("react-icons/ai");
import { BiBookmark } from "react-icons/bi";
import { useState } from "react";
import ProfileUserPostCard from "./ProfileUserPostCard";
const ProfileUserPost = () => {
  const [activeTab, setActiveTab] = useState();
  const tabs = [
    {
      tab: "Post",
      icon: <AiOutlineTable />,
      activeTab: "",
    },
    {
      tab: "Reels",
      icon: <RiVideoAddLine />,
      activeTab: "",
    },

    {
      tab: "Saved",
      icon: <BiBookmark />,
      activeTab: "",
    },
    {
      tab: "Tagged",
      icon: <AiOutlineUser />,
      activeTab: "",
    },
  ];

  return (
    <div>
      <div className="flex space-x-14 border-t relative">
        {tabs.map((item, index) => (
          <div
            key={index}
            className={`${
              activeTab === item.tab ? "border-t border-black" : "opacity-60"
            }   flex items-center cursor-pointer py-2 text-sm`}
            onClick={() => setActiveTab(item.tab)}
          >
            <p>{item.icon}</p>
            <p className="ml-1 ">{item.tab}</p>
          </div>
        ))}
      </div>
      <div>
        <div className="flex flex-wrap">
          {[1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
            <ProfileUserPostCard key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileUserPost;
