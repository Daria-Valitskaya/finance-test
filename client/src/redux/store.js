import { configureStore } from '@reduxjs/toolkit';

import tikersReducer from './reduser';

// const store = createStore(rootReducer);
const store = configureStore({
  reducer: {
    tikers: tikersReducer,
  },
});
export default store;
