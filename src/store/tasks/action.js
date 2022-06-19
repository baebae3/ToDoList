export const ADD_TASK = "ADD_TASK";
export const DELETE_TASK = "DELETE_TASK";
export const CHANGE_CHECKED = "CHANGE_CHECKED";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});

export const changeChecked = (checkId) => ({
  type: CHANGE_CHECKED,
  payload: checkId,
});
