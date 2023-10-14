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

const url = "http://localhost:8181/api/v1/post";

export const createPostAction = (data) => async (dispatch) => {
  // try {
  //   const res = await axios.post(`${url}/create`, data.data, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer " + data.jwt,
  //     },
  //   });

  //   const post = await res.data;
  //   console.log("find post by user ids ", post);

  //   dispatch({ type: CREATE_NEW_POST, payload: post });
  // } catch (error) {
  //   console.log("catch error ", error);
  // }

  try {
    const res = await fetch(`${url}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
      body: JSON.stringify(data.data),
    });

    const createdPost = await res.json();
    console.log("createdPost", createdPost);
    dispatch({ type: CREATE_NEW_POST, payload: createdPost });
  } catch (error) {}
};

export const findUserPostAction = (data) => async (dispatch) => {
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
    console.log("find posts by user ids fetch", posts);
    dispatch({ type: GET_USER_POST, payload: posts });
  } catch (error) {
    console.log("catch error :", error);
  }
};

export const likePost = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${url}/like/${data.postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
      // body: JSON.stringify(data),
    });
    const post = await res.json();
    console.log("req user post ", post.postId);
    dispatch({ type: LIKE_POST, payload: post });
  } catch (error) {
    console.log("Catch ", error);
  }
};

export const unLikePost = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${url}/unlike/${data.postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
      // body: JSON.stringify(data),
    });
    const post = await res.json();
    console.log("Unlike post ", post);
    dispatch({ type: UNLIKE_POST, payload: post });
  } catch (error) {
    console.log("Catch ", error);
  }
};

export const savePost = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${url}/save_post/${data.postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
      body: JSON.stringify(data),
    });
    const post = await res.json();
    console.log("saved post ", post);
    dispatch({ type: SAVE_POST, payload: post });
  } catch (error) {
    console.log("Catch ", error);
  }
};

export const unsavePost = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${url}/unsave_post/${data.postId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
      body: JSON.stringify(data),
    });
    const post = await res.json();
    console.log("unsaved post ", post);
    dispatch({ type: UNSAVE_POST, payload: post });
  } catch (error) {
    console.log("Catch ", error);
  }
};

export const findPostById = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${url}/${data.postId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
    });
    const post = await res.json();
    console.log("find post by id ", post);
    dispatch({ type: GET_SINGLE_POST, payload: post });
  } catch (error) {
    console.log("Catch ", error);
  }
};
export const deletePost = (data) => async (dispatch) => {
  try {
    const res = await fetch(`${url}/delete/${data.postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + data.jwt,
      },
      body: JSON.stringify(data),
    });
    const post = await res.data;
    console.log("deleted  ", post);
    dispatch({ type: DELETE_POST, payload: post });
  } catch (error) {
    console.log("Catch ", error);
  }
};
