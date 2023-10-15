import { useEffect } from "react";
import StoryViewer from "~/components/story/StoryViewer";
import { findStoryByUserId } from "~/redux/story/Action";

const StoryPage = () => {
  const { userId } = useParams();
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();
  const { story } = useSelector((store) => store);
  // const story = [
  //   {
  //     image:
  //       "https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg",
  //   },
  //   {
  //     image:
  //       "https://cdn.pixabay.com/photo/2023/08/14/21/44/mountain-8190836_1280.jpg",
  //   },
  //   {
  //     image:
  //       "https://cdn.pixabay.com/photo/2023/09/17/19/10/building-8259184_1280.jpg",
  //   },
  //   {
  //     image:
  //       "https://cdn.pixabay.com/photo/2023/08/30/09/24/leave s-8222919_1280.jpg",
  //   },
  // ];
  useEffect(() => {
    const data = { jwt: token, userId };
    dispatch(findStoryByUserId(data));
  }, [userId]);
  return (
    <div>
      {story.stories?.length > 0 && <StoryViewer stories={story?.stories} />}
    </div>
  );
};

export default StoryPage;
