import {
  TODO_LIST,
  ADD_LIST,
  DELETE_LIST,
  EDIT_LIST,
  CHECK_LIST,
  TODO_LIST_SUCCESS,
  ADD_LIST_SUCCESS,
} from "../types";

// const initialState = {
//   lists: [],
// };

const initialState = [];

const reducer = (state = initialState, action) => {
  console.log("actiontype", action.type);
  switch (action.type) {
    case TODO_LIST_SUCCESS:
      console.log("사가 투두리스트", action.payload.todoList);
      return [action.payload.todoList];
    case ADD_LIST_SUCCESS:
      console.log("addlist", action.payload.addList);
      return [...state, action.payload.addList];
    default:
      return state;
  }
};

export default reducer;

// export const reducer = (state = initialState, action) => {
//   console.log("actiontype", action.type);
//   switch (action.type) {
//     case TODO_LIST_SUCCESS:
//       console.log("asdasdasd", action.payload.todoList);
//       return {
//         ...state,
//         lists: [...state.lists, action.payload.todoList],
//       };
//     case ADD_LIST_SUCCESS:
//       console.log("addlist", action.payload.addList);
//       return {
//         ...state,
//         lists: [...state.lists, action.payload.addList],
//       };
//     default:
//       return { ...state };
//   }
// };
