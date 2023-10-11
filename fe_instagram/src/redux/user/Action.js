import axios from "axios";
import { REQ_USER } from "./ActionType";

const url = import.meta.env.BACKEND_URL_API;

export const getUserProfileAction = (jwt) => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8181/api/v1/user/myprofile", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + jwt,
      },
    });
    dispatch({ type: REQ_USER, payload: res });
  } catch (error) {
    console.error("catch", error);
  }
};
