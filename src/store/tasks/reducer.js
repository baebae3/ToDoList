import { ADD_TASK, CHANGE_CHECKED, DELETE_TASK } from "./action";
const initialState = {
  taskItems: [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        taskItems: [
          ...state.taskItems,
          {
            text: action.payload,
            id: `id${state.taskItems.length}`,
            isChecked: false,
          },
        ],
      };

    case DELETE_TASK:
      return {
        ...state,
        taskItems: [
          ...state.taskItems.filter((taskId) => taskId.id !== action.payload),
        ],
      };

    case CHANGE_CHECKED:
      return {
        ...state,
        taskItems: [
          ...state.taskItems.map((taskId) =>
            taskId.id === action.payload
              ? { ...taskId, isChecked: !taskId.isChecked }
              : { ...taskId },
          ),
        ],
      };

    default:
      return state;
  }
};

export default taskReducer;
