import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoList from "./Page/Todolist/TodolistMain";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={TodoList} />
      </Switch>
    </Router>
  );
}

export default Routes;
