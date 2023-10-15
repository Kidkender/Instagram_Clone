import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { AiOutlineTable, AiOutlineUser } from "react-icons/ai";
import { BiBookmark } from "react-icons/bi";
import { RiVideoAddLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { reqUserPostAction } from "~/redux/post/Action";
import ProfileUserPostCard from "./ProfileUserPostCard";
("react-icons/ai");

const ProfileUserPost = ({ user }) => {
  const [activeTab, setActiveTab] = useState();
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const post = useSelector((store) => store.post);
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

  useEffect(() => {
    if (user) {
      const data = { jwt: token, userId: user?.id };
      dispatch(reqUserPostAction(data));
    }
  }, [user, post.createdPost]);

  return (
    <div>
      <div className="flex space-x-14 border-t relative">
        {tabs.map((item, index) => (
          <div
            key={index}
            className={`${
              activeTab === item.tab ? "border-t border-black" : "opacity-60"
            }   flex items-center cursor-pointer py-2 text-sm`}
            onClick={() => {
              console.log(item.tab);
              setActiveTab(item.tab);
            }}
          >
            <p>{item.icon}</p>
            <p className="ml-1 ">{item.tab}</p>
          </div>
        ))}
      </div>
      <div>
        <div className="flex flex-wrap">
          {activeTab === "Post"
            ? post.allPostUser?.map((item, index) => (
                <ProfileUserPostCard post={item} key={index} />
              ))
            : user?.savedPost.map((item, index) => (
                <ProfileUserPostCard key={index} post={item} />
              ))}
        </div>
      </div>
    </div>
  );
};

ProfileUserPost.propTypes = {
  user: PropTypes.object,
};

export default ProfileUserPost;
