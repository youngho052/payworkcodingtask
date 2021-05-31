import React, { useEffect } from "react";
import styled from "styled-components";
import InputForm from "./Components/InputForm";
import axios from "axios";

function TodolistMain() {
  useEffect(() => {
    // fetch("/todo", {
    //   headers: {
    //     "Access-Control-Allow-Origin": "*",
    //   },
    // })
    //   .then((res) => res.json())
    //   .then((result) => console.log(result));

    axios
      .get("/todo", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((res) => console.log(res.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <TodoLists>
      <TodoListContainer>
        <TodoListTitle>My TodoList</TodoListTitle>
        <InputForm />
      </TodoListContainer>
    </TodoLists>
  );
}

export default TodolistMain;

const TodoLists = styled.div`
  width: 800px;
  height: 700px;
  margin: 25px auto;
  border: 1px solid #000;
`;

const TodoListContainer = styled.div`
  ${(props) => props.theme.flexColumn}
`;

const TodoListTitle = styled.h1`
  font-size: 45px;
  font-weight: bold;
  color: blue;
  margin-top: 35px;
`;
