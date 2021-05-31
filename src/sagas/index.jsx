import { all } from "redux-saga/effects";
import Todolistsaga from "./todolist";

function* rootSaga() {
  yield all([...Todolistsaga]);
}

export default rootSaga;
