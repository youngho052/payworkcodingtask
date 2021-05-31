import { call, put, takeEvery } from "redux-saga/effects";
import {
  TODO_LIST,
  ADD_LIST,
  DELETE_LIST,
  EDIT_LIST,
  CHECK_LIST,
  TODO_LIST_SUCCESS,
  ADD_LIST_SUCCESS,
} from "../store/types";
import axios from "axios";

const headers = { "Access-Control-Allow-Origin": "*" };

function* axiosList() {
  const todoList = yield call(() =>
    axios
      .get("/todo", {
        headers,
      })
      .then((res) => res.data)
  );
  console.log("사가 todolist", todoList);

  yield put({ type: TODO_LIST_SUCCESS, payload: { todoList } });
}

function* addList(add) {
  console.log(">>>>>>>>>>", add.payload.addItem);
  const addList = yield call(() =>
    fetch("/todo", {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: add.payload.addItem,
      }),
      method: "POST",
    }).then((res) => res.json())
  );

  yield put({ type: ADD_LIST_SUCCESS, payload: { addList } });
}

function* deleteList(deletes) {
  const deleteList = yield call(() => axios.delete("/todo/:id"));
}

// function* addList(payload) {
//   const addList = yield call(() =>
//     axios
//       .post("/todo", {
//         headers,
//         body: {
//           content: payload.value,
//         },
//       })
//       .then((res) => console.log(res))
//   );
//   console.log("addlist", addList);
//   yield put({ type: ADD_LIST_SUCCESS, payload: { addList } });
// }

function* watchaxiosList() {
  yield takeEvery(TODO_LIST, axiosList);
}

function* watchaddList() {
  yield takeEvery(ADD_LIST, addList);
}

export default [watchaxiosList(), watchaddList()];
