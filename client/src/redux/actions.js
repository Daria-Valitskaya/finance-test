export const add = (value) => ({
  type: "tiker/add",
  payload: value,
});

export const remove = (value) => ({
  type: "tiker/remove",
  payload: value,
});
