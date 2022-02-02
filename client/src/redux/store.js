import { createStore, combineReducers } from "redux";

import tikersReducer from "./reduser";

const rootReducer = combineReducers({
  tikers: tikersReducer,
});
const store = createStore(rootReducer);
export default store;
