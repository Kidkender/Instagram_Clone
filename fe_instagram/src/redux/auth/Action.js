import { SIGN_IN, SIGN_UP } from "./ActionType";

const URL = "http://localhost:8181";

export const signinAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(URL + "/signin", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic " + btoa(data.email + ":" + data.password),
      },
    });
    const token = await res.headers.get("authorization");

    localStorage.setItem("token", token);
    dispatch({ type: SIGN_IN, payload: token });
  } catch (error) {
    console.log(error);
  }
};

export const signupAction = (data) => async (dispatch) => {
  try {
    const res = await fetch(URL + "/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const user = res.json();
    dispatch({ type: SIGN_UP, payload: user });
  } catch (error) {
    console.error(error);
  }
};
