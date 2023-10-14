import axios from "axios";
import { SIGN_IN, SIGN_UP } from "./ActionType";

const URL = "http://localhost:8181";

export const signinAction = (data) => async (dispatch) => {
  try {
    const res = await axios.get(URL + "/signin", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(data.email + ":" + data.password),
      },
    });
    if (res.status == 202) {
      const token = res.headers["authorization"];

      localStorage.setItem("token", token);
      dispatch({ type: SIGN_IN, payload: token });
    }
  } catch (error) {
    console.log(error);
  }
};

export const signupAction = (data) => async (dispatch) => {
  try {
    const res = await axios.post(URL + "/signup", data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    const user = res.data;
    dispatch({ type: SIGN_UP, payload: user });
  } catch (error) {
    console.error(error);
  }
};
