import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { axiosList } from "../../store/action";
import styled from "styled-components";
import InputForm from "./Components/InputForm";
import ListContainer from "./Components/ListContainer";

function TodolistMain() {
  const item = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  // 초기 todolist 받아오는 로직
  useEffect(() => {
    dispatch(axiosList());
  }, []);

  return (
    <TodoLists>
      <TodoListContainer>
        <TodoListTitle>My TodoList</TodoListTitle>
        <InputForm />
        <ListContainer item={item} />
      </TodoListContainer>
    </TodoLists>
  );
}

export default TodolistMain;

const TodoLists = styled.div`
  width: 800px;
  margin: 25px auto;
  padding: 50px;
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
