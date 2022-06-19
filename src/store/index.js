import { legacy_createStore as createStore } from "redux";
import taskReducer from "./tasks/reducer";

const store = createStore(
  taskReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
