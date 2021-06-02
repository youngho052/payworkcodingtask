import { TODO_LIST, ADD_LIST, DELETE_LIST, MODIFY_LIST } from "../types";

export const axiosList = () => ({
  type: TODO_LIST,
});

export const addList = (addItem) => ({
  type: ADD_LIST,
  payload: { addItem },
});

export const delteList = (deleteItemId) => ({
  type: DELETE_LIST,
  payload: deleteItemId,
});

export const modifyList = (checkItemId, content, check) => ({
  type: MODIFY_LIST,
  payload: {
    id: checkItemId,
    content,
    check,
  },
});
