import HomeRight from "~/components/homeright/HomeRight";
import PostCard from "~/components/post/PostCard";
import StoryCircle from "~/components/story/StoryCircle";

const HomePage = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();

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
            {[1, 1].map((item, index) => (
              <PostCard key={index} />
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
