import styled from "styled-components";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import StoryProgressbar from "./StoryProgressbar";

const StoryViewerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
`;

const StoryImage = styled.img`
  max-height: 90vh;
  object-fit: contain;
`;
const StoryViewer = ({ stories }) => {
  const [currentStoryIndex, setCurrentStoryIndex] = useState(0);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleNextStory = () => {
    if (currentStoryIndex < stories.length - 1) {
      setCurrentStoryIndex(currentStoryIndex + 1);
      setActiveIndex(activeIndex + 1);
    } else if (currentStoryIndex === stories.length - 1) {
      setCurrentStoryIndex(0);
      setActiveIndex(0);
    }
  };

  useEffect(() => {
    const inteterval = setInterval(() => {
      handleNextStory();
    }, 2000);
    return () => clearInterval(inteterval);
  }, [currentStoryIndex]);

  return (
    <div className="relative w-full">
      <StoryViewerContainer>
        <StoryImage src={stories?.[currentStoryIndex].image} />
        <div className="absolute top-0 flex w-full ">
          {stories.map((item, index) => (
            <StoryProgressbar
              key={index}
              duration={2000}
              index={index}
              activeIndex={activeIndex}
            />
          ))}
        </div>
      </StoryViewerContainer>
    </div>
  );
};

StoryViewer.propTypes = {
  stories: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default StoryViewer;
