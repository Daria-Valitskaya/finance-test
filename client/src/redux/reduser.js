import { combineReducers } from "redux";
import * as types from "./type";
const tiker = (state = [], { type, payload }) => {
  switch (type) {
    case types.SET_TIKER:
      return [...state, payload];
    default:
      return state;
  }
};
const filter = (state = [], action) => {
  return state;
};
export default combineReducers({
  tiker,
  filter,
});
