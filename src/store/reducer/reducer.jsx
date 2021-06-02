import {
  TODO_LIST_SUCCESS,
  ADD_LIST_SUCCESS,
  DELETE_LIST_SUCCESS,
  MODIFY_LIST_SUCCESS,
} from "../types";

const initialState = {
  count: 0,
  todoList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_LIST_SUCCESS:
      return action.payload;
    case ADD_LIST_SUCCESS:
      return state;
    case DELETE_LIST_SUCCESS:
      return state;
    case MODIFY_LIST_SUCCESS:
      return state;
    default:
      return state;
  }
};

export default reducer;
