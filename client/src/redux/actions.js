import * as actionTypes from "./type";
export const add = (value) => ({
  type: actionTypes.ADD,
  payload: value,
});

export const remove = (value) => ({
  type: actionTypes.REMOVE,
  payload: value,
});

export const set = (items) => ({
  type: actionTypes.SET_TIKER,
  payload: items,
});
