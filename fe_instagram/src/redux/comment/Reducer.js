import {
  CREATE_COMMENT,
  GET_POST_COMMNENT,
  LIKE_COMMENT,
  UNLIKE_COMMENT,
} from "./ActionType";

const initialValue = {
  createdComment: null,
  postCommnent: null,
  likeComment: null,
  unlikeCommnent: null,
};

export const CommnentReducer = (store = initialValue, { type, payload }) => {
  if (type === CREATE_COMMENT) {
    return { ...store, createdComment: payload };
  } else if (type === GET_POST_COMMNENT) {
    return { ...store, postCommnent: payload };
  } else if (type === LIKE_COMMENT) {
    return { ...store, likeComment: payload };
  } else if (type === UNLIKE_COMMENT) {
    return { ...store, unlikeComment: payload };
  }
  return store;
};
