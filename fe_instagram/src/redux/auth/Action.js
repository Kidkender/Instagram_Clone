import axios from "axios";
import { SIGN_IN, SIGN_UP } from "./ActionType";

export const signinAction = (data) => async (dispatch) => {
  try {
    const res = await axios.get("http://localhost:8181/signin", {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(data.email + ":" + data.password),
      },
    });

    if (res.status == 202) {
      const token = res.headers.hasAuthorization;

      console.log("signin user ", token);

      localStorage.setItem("token", token);
      dispatch({ type: SIGN_IN, payload: token });
    }
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

export const signupAction = (data) => async (dispatch) => {
  try {
    const res = await fetch("http://localhost:8181/signup", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const user = await res.json();
    console.log("signup user :", user);
    dispatch({ type: SIGN_UP, payload: user });
  } catch (error) {
    console.log(error);
  }
};
