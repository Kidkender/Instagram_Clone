import {
  CREATE_COMMENT,
  GET_POST_COMMNENT,
  LIKE_COMMENT,
  UNLIKE_COMMENT,
} from "./ActionType";

import axios from "axios";

const url = import.meta.env.BACKEND_URL_API_COMMENT;

export const createCommnent = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${url}/${data.postId}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const comment = res.data;
    console.log("Created comment ", comment);
    dispatch({ type: CREATE_COMMENT, payload: comment });
  } catch (error) {
    console.log("catch ", error);
  }
};

export const findPostCommnent = (data) => async (dispatch) => {
  try {
    const res = await axios.get(`${url}/${data.postId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const comment = res.data;
    console.log("find comment ", comment);
    dispatch({ type: GET_POST_COMMNENT, payload: comment });
  } catch (error) {
    console.log("catch ", error);
  }
};

export const likeComment = (data) => async (dispatch) => {
  try {
    const res = await axios.put(`${url}/like/${data.postId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const comment = res.data;
    console.log("Liked commnent ", comment);
    dispatch({ type: LIKE_COMMENT, payload: comment });
  } catch (error) {
    console.log("catch ", error);
  }
};

export const unlikeComment = (data) => async (dispatch) => {
  try {
    const res = await axios.put(`${url}/unlike/${data.postId}`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const comment = res.data;
    console.log("unlike comment ", comment);
    dispatch({ type: UNLIKE_COMMENT, payload: comment });
  } catch (error) {
    console.log("catch ", error);
  }
};
