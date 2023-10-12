import {
  FOLLOW_USER,
  GET_USERS_BY_USER_IDS,
  GET_USER_BY_USERNAME,
  REQ_USER,
  SEARCH_USER,
  UNFOLLOW_USER,
  UPDATE_USER,
} from "./ActionType";

const initialValue = {
  reqUser: null,
  findByUsername: null,
  findUserByUserIds: [],
  followUser: null,
  unfollowUser: null,
  searchUser: null,
  updateUser: null,
};

export const UserReducer = (store = initialValue, { type, payload }) => {
  if (type === REQ_USER) {
    return { ...store, reqUser: payload };
  }
  if (type === GET_USER_BY_USERNAME) {
    return { ...store, findUserByUsername: payload };
  }
  if (type === GET_USERS_BY_USER_IDS) {
    return { ...store, findUserByUserIds: payload };
  }
  if (type === FOLLOW_USER) {
    return { ...store, followUser: payload };
  }
  if (type === UNFOLLOW_USER) {
    return { ...store, unfollowUser: payload };
  }
  if (type === SEARCH_USER) {
    return { ...store, searchUser: payload };
  }
  if (type === UPDATE_USER) {
    return { ...store, updateUser: payload };
  }
  return store;
};
