import { useDisclosure } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HomeRight from "~/components/homeright/HomeRight";
import PostCard from "~/components/post/PostCard";
import StoryCircle from "~/components/story/StoryCircle";
import { findUserPostAction } from "~/redux/post/Action";

const HomePage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [userIds, setUserIds] = useState();
  const { user, post } = useSelector((store) => store);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  console.log("redux User ", user);
  console.log("post :", post);
  useEffect(() => {
    const newIds = user?.reqUser?.data?.following?.map((user) => user.id);
    setUserIds([user.reqUser?.data?.id, ...newIds]);
  }, [user.reqUser]);

  useEffect(() => {
    const data = { jwt: token, userIds: [userIds].join(",") };
    console.log("list following user ", data);
    dispatch(findUserPostAction(data));
  }, [userIds, post.createdPost, post.deletedPost]);

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
              post.userPost.map((item, index) => <PostCard key={index} />)}
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
