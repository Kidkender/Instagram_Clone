import StoryViewer from "~/components/story/StoryViewer";

const StoryPage = () => {
  const story = [
    {
      image:
        "https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/08/14/21/44/mountain-8190836_1280.jpg",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/09/17/19/10/building-8259184_1280.jpg",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/08/30/09/24/leaves-8222919_1280.jpg",
    },
  ];

  return (
    <div>
      <StoryViewer stories={story} />
    </div>
  );
};

export default StoryPage;
