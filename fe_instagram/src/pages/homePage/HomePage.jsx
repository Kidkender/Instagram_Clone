import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeRight from "~/components/homeright/HomeRight";
import PostCard from "~/components/post/PostCard";
import StoryCircle from "~/components/story/StoryCircle";
import { hasStory, suggetions } from "~/config/logic";
import { findUserPostAction } from "~/redux/post/Action";
import { findUserByUserIds, getUserProfileAction } from "~/redux/user/Action";

const HomePage = () => {
  const [userIds, setUserIds] = useState([]);
  const [suggestedUser, setSuggestedUser] = useState([]);
  const user = useSelector((store) => store.user);
  const reqUser = useSelector((store) => store.user.reqUser);
  const post = useSelector((store) => store.post);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    if (reqUser) {
      const newIds = reqUser?.following?.map((user) => user.id);
      setUserIds([reqUser?.id, ...newIds]);
      setSuggestedUser(suggetions(reqUser));
    }
  }, [reqUser]);

  useEffect(() => {
    const data = {
      userIds: [userIds].join(","),
      jwt: token,
    };

    if (userIds.length > 0) {
      dispatch(findUserPostAction(data));
      dispatch(findUserByUserIds(data));
    }
  }, [userIds, post.createdPost, post.deletePost]);

  useEffect(() => {
    dispatch(getUserProfileAction(token));
  }, [token]);

  const storyUsers = hasStory(user.findUsersByUserIds);

  return (
    <div>
      <div className="mt-10 flex w-[100%] justify-center">
        <div className="w-[44%] px-10 ">
          <div className="storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full">
            {storyUsers.length > 0 &&
              storyUsers.map((item, index) => (
                <StoryCircle user={item} key={index} />
              ))}
          </div>
          <div className="space-y-10 w-full mt-10">
            {post.userPost.length > 0 &&
              post.userPost.map((item, index) => (
                <PostCard post={item} key={index} />
              ))}
          </div>
        </div>
        <div className="w-[27%]">
          <HomeRight suggestedUser={suggestedUser} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
