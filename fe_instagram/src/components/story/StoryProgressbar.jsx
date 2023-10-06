import "./StoryProgressbar.css";
import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const StoryProgressbar = ({ index, activeIndex, duration }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 1;
        } else {
          clearInterval(interval);
          return prevProgress;
        }
      });
    }, duration / 100);
    return () => {
      clearInterval(interval);
    };
  }, [duration, activeIndex]);

  console.log("percen:", progress);
  useEffect(() => {
    setProgress(0);
  }, [activeIndex]);

  const isActive = index === activeIndex;

  return (
    <div className={`progress-bar-container ${isActive ? "active" : ""}`}>
      <div
        className={`${isActive ? "progress-bar" : ""}`}
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

StoryProgressbar.propTypes = {
  index: PropTypes.number,
  activeIndex: PropTypes.number,
  duration: PropTypes.number,
};

export default StoryProgressbar;
