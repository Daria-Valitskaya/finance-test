import { createAction } from '@reduxjs/toolkit';
// export const add = (value) => ({
//   type: actionTypes.ADD,
//   payload: value,
// });

// export const remove = (value) => ({
//   type: actionTypes.REMOVE,
//   payload: value,
// });

// export const set = (items) => ({
//   type: actionTypes.SET_TIKER,
//   payload: items,
// });

export const setTiker = createAction('tiker/set');
export const add = createAction('tiker/add');
export const remove = createAction('tiker/remove');
