import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { AuthReducer } from "../auth/Reducer";
import thunk from "redux-thunk";
import { UserReducer } from "../user/Reducer";
import { PostReducer } from "../post/Reducer";
import { CommnentReducer } from "../comment/Reducer";
import { configureStore } from "@reduxjs/toolkit";
import { StoryReducer } from "../story/Reducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
  post: PostReducer,
  comment: CommnentReducer,
  story: StoryReducer,
});

// export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export const store = configureStore({
  reducer: rootReducer,
});
