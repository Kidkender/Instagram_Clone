import axios from "axios";
import {
  FOLLOW_USER,
  GET_USERS_BY_USER_IDS,
  GET_USER_BY_USERNAME,
  REQ_USER,
  SEARCH_USER,
  UNFOLLOW_USER,
  UPDATE_USER,
} from "./ActionType";

const url = import.meta.env.BACKEND_URL_API_USER;

export const getUserProfileAction = (jwt) => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:8181/api/v1/user/myprofile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + jwt,
      },
    });
    const profile = await res.json();
    console.log("profile: ", profile);
    dispatch({ type: REQ_USER, payload: profile });
  } catch (error) {
    console.error("catch", error);
  }
};

export const findUserByUserName = (data) => async (dispatch) => {
  const res = await fetch(url + `/username/${data.username}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + data.jwt,
    },
  });
  const user = await res.json();
  console.log("find by username ", user);
  dispatch({ type: GET_USER_BY_USERNAME, payload: user });
};

export const findUserByUserIds = (data) => async (dispatch) => {
  const res = await fetch(url + `/m/${data.userIds}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + data.jwt,
    },
  });
  const users = await res.json();
  console.log("find by ids ", users);
  dispatch({ type: GET_USERS_BY_USER_IDS, payload: users });
};

export const followUser = (data) => async (dispatch) => {
  const res = await axios.put(url + `/follow/${data.userId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + data.token,
    },
  });
  const user = res.data;
  console.log("follow user  ", user);
  dispatch({ type: FOLLOW_USER, payload: user });
};

export const unfollowUser = (data) => async (dispatch) => {
  const res = await axios.put(`${url}/unfollow/${data.userId}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + data.token,
    },
  });
  const user = res.data;
  console.log("unfollow user  ", user);
  dispatch({ type: UNFOLLOW_USER, payload: user });
};

export const searchUser = (data) => async (dispatch) => {
  const res = await axios.get(`${url}/search?q=${data.query}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + data.token,
    },
  });
  const user = res.data;
  console.log("Search user  ", user);
  dispatch({ type: SEARCH_USER, payload: user });
};

export const editUser = (data) => async (dispatch) => {
  const res = await axios.put(`${url}/account/edit`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + data.token,
    },
  });
  const user = res.data;
  console.log("Updated user  ", user);
  dispatch({ type: UPDATE_USER, payload: user });
};
