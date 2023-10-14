const isPostLikedByUser = (post, userId) => {
  for (let item of post.likedByUsers) {
    if (item.id === userId) {
      return true;
    }
  }
  return false;
};

const isCommentLikedByUser = (comment, userId) => {
  for (let item of comment.likedByUsers) {
    if (item.userId === userId) return true;
  }
  return false;
};

const isSavedPost = (user, postId) => {
  for (let item of user.savedPost) {
    if (item.id === postId) {
      return true;
    }
  }
  return false;
};

const isFollowing = (reqUser, user) => {
  if (reqUser && user) {
    for (let item of user.follower) {
      if (reqUser.id === item.id) {
        return true;
      }
    }
  }
  return false;
};

const timeDifference = (timestamp) => {
  if (timestamp === null) {
    return "5 minutes ago";
  } else {
    const date = new Date(timestamp);

    const diff = Date.now() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(weeks / 4);
    const years = Math.floor(months / 12);

    if (years > 0) {
      return years + " year" + (years === 1 ? "" : "s") + " ago";
    } else if (months > 0) {
      return months + " month" + (months === 1 ? "" : "s") + " ago";
    } else if (weeks > 0) {
      return weeks + " week" + (weeks === 1 ? "" : "s") + " ago";
    } else if (days > 0) {
      return days + " day" + (days === 1 ? "" : "s") + " ago";
    } else if (hours > 0) {
      return hours + " hour" + (hours === 1 ? "" : "s") + " ago";
    } else if (minutes > 0) {
      return minutes + " minute" + (minutes === 1 ? "" : "s") + " ago";
    } else if (seconds > 0) {
      return seconds + " second" + (seconds === 1 ? "" : "s") + " ago";
    }
  }
};

export {
  timeDifference,
  isFollowing,
  isSavedPost,
  isCommentLikedByUser,
  isPostLikedByUser,
};
