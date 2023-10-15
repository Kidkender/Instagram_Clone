import axios from "axios";
import {
  CREATE_COMMENT,
  GET_POST_COMMNENT,
  LIKE_COMMENT,
  UNLIKE_COMMENT,
} from "./ActionType";

const url = "http://localhost:8181/api/v1/comment";

export const createCommnent = (data) => async (dispatch) => {
  // console.log("data in fetch", data);
  try {
    const res = await fetch(
      `http://localhost:8181/api/v1/comment/create/${data.postId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + data.jwt,
        },
        body: JSON.stringify(data),
      }
    );
    const comment = await res.json();
    console.log("Created comment ", comment);
    dispatch({ type: CREATE_COMMENT, payload: comment });
  } catch (error) {
    console.log("catch ", error);
  }
};

export const findPostCommnent = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${url}/${data.postId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const comment = await res.json();
    console.log("find comment ", comment);
    dispatch({ type: GET_POST_COMMNENT, payload: comment });
  } catch (error) {
    console.log("catch ", error);
  }
};

export const likeComment = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${url}/like/${data.commentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const comment = await res.json();
    console.log("Liked commnent ", comment);
    dispatch({ type: LIKE_COMMENT, payload: comment });
  } catch (error) {
    console.log("catch ", error);
  }
};

export const unlikeComment = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${url}/unlike/${data.commentId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const comment = await res.json();
    console.log("unlike comment ", comment);
    dispatch({ type: UNLIKE_COMMENT, payload: comment });
  } catch (error) {
    console.log("catch ", error);
  }
};
