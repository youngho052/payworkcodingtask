import { call, put, takeEvery } from "redux-saga/effects";
import {
  TODO_LIST,
  ADD_LIST,
  DELETE_LIST,
  MODIFY_LIST,
  TODO_LIST_SUCCESS,
  ADD_LIST_SUCCESS,
  DELETE_LIST_SUCCESS,
  MODIFY_LIST_SUCCESS,
} from "../store/types";
import axios from "axios";

const headers = { "Access-Control-Allow-Origin": "*" };

// 초기 todolist 데이터 처리 로직
function* axiosList() {
  const todoList = yield call(() =>
    axios
      .get("/todo", {
        headers,
      })
      .then((res) => res.data)
      .catch((error) => alert(error))
  );

  yield put({ type: TODO_LIST_SUCCESS, payload: todoList });
}

// todolist content 추가 처리 로직
function* addList(add) {
  const addList = yield call(() =>
    axios
      .post("/todo", {
        headers,
        content: add.payload.addItem,
      })
      .then((res) => res)
      .catch((error) => alert(error))
  );

  yield put({ type: ADD_LIST_SUCCESS, payload: { addList } });
  yield put({ type: TODO_LIST });
}

// todolist content 삭제 처리 로직
function* deleteList(deleteItem) {
  const deleteList = yield call(() =>
    axios
      .delete(`/todo/${deleteItem.payload}`, {
        headers,
      })
      .then((res) => res)
      .catch((error) => alert(error))
  );

  yield put({ type: DELETE_LIST_SUCCESS, payload: deleteList });
  yield put({ type: TODO_LIST });
}

// todolist 수정 처리와 체크박스 처리 로직
function* modifyList(checkItem) {
  const modifyList = yield call(() =>
    axios
      .post(`todo/${checkItem.payload.id}`, {
        headers,
        content: checkItem.payload.content,
        isCheck: true,
      })
      .then((res) => res)
      .catch((error) => alert(error))
  );

  yield put({ type: MODIFY_LIST_SUCCESS, payload: { modifyList } });
  yield put({ type: TODO_LIST });
}

function* watchaxiosList() {
  yield takeEvery(TODO_LIST, axiosList);
}

function* watchaddList() {
  yield takeEvery(ADD_LIST, addList);
}

function* watchdeleteList() {
  yield takeEvery(DELETE_LIST, deleteList);
}

function* watchcheckList() {
  yield takeEvery(MODIFY_LIST, modifyList);
}

export default [
  watchaxiosList(),
  watchaddList(),
  watchdeleteList(),
  watchcheckList(),
];
