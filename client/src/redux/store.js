import { createStore, combineReducers } from "redux";
import * as actionTypes from "./type";
import tikersReducer from "./reduser";
const initialState = {
  tikerValue: 0,
};
const tikerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.ADD:
      return {
        tikerValue: state.tikerValue + payload,
      };
    case actionTypes.REMOVE:
      return {
        tikerValue: state.tikerValue - payload,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  tiker: tikerReducer,
  tikers: tikersReducer,
});
const store = createStore(rootReducer);
export default store;
