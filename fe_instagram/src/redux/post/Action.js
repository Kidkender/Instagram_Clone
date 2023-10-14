import axios from "axios";
import {
  CREATE_NEW_POST,
  DELETE_POST,
  GET_SINGLE_POST,
  GET_USER_POST,
  LIKE_POST,
  SAVE_POST,
  UNLIKE_POST,
  UNSAVE_POST,
} from "./ActionType";

const url = import.meta.env.BACKEND_URL_API_POST;

export const createPostAction = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${url}/post/create`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const post = res.data;
    console.log("created post ", post);

    dispatch({ type: CREATE_NEW_POST, payload: post });
  } catch (error) {
    console.log("Catch ", error);
  }
};

export const findUserPostAction = (data) => async (dispatch) => {
  let result_axios;
  try {
    const res = await axios
      .get(`http://localhost:8181/api/v1/post/following/${data.userIds}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.jwt}`,
        },
        withCredentials: true,
      })
      .then((response) => {
        console.log(response);
        return response;
      });

    const posts = await res.data;
    result_axios = posts;
    // dispatch({ type: GET_USER_POST, payload:posts });
    console.log("response ", posts);
    console.log("find posts by user ids AXIOS ", posts);
  } catch (error) {
    console.log("catch error :", error);
  }
  let result_fetch;
  try {
    const res = await fetch(
      `http://localhost:8181/api/v1/post/following/${data.userIds}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + data.jwt,
        },
      }
    );
    const posts = await res.json();
    result_fetch = posts;
    console.log("find posts by user ids fetch", posts);
    dispatch({ type: GET_USER_POST, payload: posts });
  } catch (error) {
    console.log("catch error :", error);
  }

  console.log(result_fetch == result_axios);
};

export const likePost = (data) => async (dispatch) => {
  try {
    const res = await axios.put(`${url}/like/${data.postId}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const post = await res.data;
    console.log("req user post ", post.postId);
    dispatch({ type: LIKE_POST, payload: post });
  } catch (error) {
    console.log("Catch ", error);
  }
};

export const unLikePost = (data) => async (dispatch) => {
  try {
    const res = await axios.put(`${url}/unlike/${data.postId}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const post = await res.data;
    console.log("Unlike post ", post);
    dispatch({ type: UNLIKE_POST, payload: post });
  } catch (error) {
    console.log("Catch ", error);
  }
};

export const savePost = (data) => async (dispatch) => {
  try {
    const res = await axios.put(`${url}/save_post/${data.postId}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const post = await res.data;
    console.log("saved post ", post);
    dispatch({ type: SAVE_POST, payload: post });
  } catch (error) {
    console.log("Catch ", error);
  }
};

export const unsavePost = (data) => async (dispatch) => {
  try {
    const res = await axios.put(`${url}/unsave_post/${data.postId}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const post = await res.data;
    console.log("unsaved post ", post);
    dispatch({ type: UNSAVE_POST, payload: post });
  } catch (error) {
    console.log("Catch ", error);
  }
};

export const findPostById = (data) => async (dispatch) => {
  try {
    const res = await axios.post(`${url}/${data.postId}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const post = await res.data;
    console.log("find post by id ", post);
    dispatch({ type: GET_SINGLE_POST, payload: post });
  } catch (error) {
    console.log("Catch ", error);
  }
};
export const deletePost = (data) => async (dispatch) => {
  try {
    const res = await axios.delete(`${url}/delete/${data.postId}`, data, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const post = await res.data;
    console.log("deleted  ", post);
    dispatch({ type: DELETE_POST, payload: post });
  } catch (error) {
    console.log("Catch ", error);
  }
};
