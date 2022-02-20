import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from '../redux/actions';
const tiker = createReducer([], {
  [actions.setTiker]: (state, { payload }) => [...state, payload],
});

export default combineReducers({
  tiker,
});
