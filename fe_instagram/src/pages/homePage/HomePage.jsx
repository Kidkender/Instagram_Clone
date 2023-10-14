import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeRight from "~/components/homeright/HomeRight";
import PostCard from "~/components/post/PostCard";
import StoryCircle from "~/components/story/StoryCircle";
import { findUserPostAction } from "~/redux/post/Action";
import { findUserByUserIds, getUserProfileAction } from "~/redux/user/Action";

const HomePage = () => {
  const [userIds, setUserIds] = useState([]);

  const reqUser = useSelector((store) => store.user.reqUser);
  const post = useSelector((store) => store.post);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    if (reqUser) {
      const newIds = reqUser?.following?.map((user) => user.id);
      setUserIds([reqUser?.id, ...newIds]);
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

  return (
    <div>
      <div className="mt-10 flex w-[100%] justify-center">
        <div className="w-[44%] px-10 ">
          <div className="storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full">
            {[1, 1, 1].map((item, index) => (
              <StoryCircle key={index} />
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
          <HomeRight />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
