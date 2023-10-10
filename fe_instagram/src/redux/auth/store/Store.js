import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { AuthReducer } from "../Reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: AuthReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
