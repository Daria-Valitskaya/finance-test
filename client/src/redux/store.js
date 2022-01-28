import { createStore } from "redux";
const initialState = {};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "tiker/add":
      return;
    case "tiker/remove":
      return;
    default:
      return state;
  }
};
const store = createStore(reducer);
export default store;
