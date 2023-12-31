import {
  CREATE_NEW_POST,
  DELETE_POST,
  GET_ALL_POST,
  GET_SINGLE_POST,
  GET_USER_POST,
  LIKE_POST,
  SAVE_POST,
  UNLIKE_POST,
  UNSAVE_POST,
} from "./ActionType";

const initialValue = {
  createdPost: null,
  userPost: [],
  deletedPost: null,
  likedPost: null,
  unlikedPost: null,
  savedPost: [],
  unsavedPost: [],
  singlePost: null,
  allPostUser: [],
};

export const PostReducer = (store = initialValue, { type, payload }) => {
  if (type === CREATE_NEW_POST) {
    return { ...store, createdPost: payload };
  } else if (type === GET_USER_POST) {
    return { ...store, userPost: payload };
  } else if (type === DELETE_POST) {
    return { ...store, deletedPost: payload };
  } else if (type === LIKE_POST) {
    return { ...store, likedPost: payload };
  } else if (type === UNLIKE_POST) {
    return { ...store, unlikedPost: payload };
  } else if (type === SAVE_POST) {
    return { ...store, savedPost: payload };
  } else if (type === UNSAVE_POST) {
    return { ...store, unsavedPost: payload };
  } else if (type === GET_SINGLE_POST) {
    return { ...store, singlePost: payload };
  } else if (type === GET_ALL_POST) {
    return { ...store, allPostUser: payload };
  }
  return store;
};
