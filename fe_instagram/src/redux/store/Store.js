import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { AuthReducer } from "../auth/Reducer";
import thunk from "redux-thunk";
import { UserReducer } from "../user/Reducer";

const rootReducer = combineReducers({
  auth: AuthReducer,
  user: UserReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
