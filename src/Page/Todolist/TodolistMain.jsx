import React, { useEffect, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { axiosList, addList } from "../../store/action";
import styled from "styled-components";
import InputForm from "./Components/InputForm";
import ListContainer from "./Components/ListContainer";

function TodolistMain() {
  const [inputValue, setInputValue] = useState();
  // const todolist = useSelector((state) => state.todoReducer[0]?.todoList);
  const { todolist, count } = useSelector(
    (state) => ({
      todolist: state.todoReducer[0]?.todoList,
      count: state.todoReducer[0]?.count,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(axiosList());
  }, []);

  // 인풋 값 받아오는 핸들
  const inputValueHandle = (e) => {
    setInputValue(e.target.value);
  };

  // 리스트 추가 핸들
  const addListHandle = () => {
    dispatch(addList(inputValue));

    setInputValue();
    // window.location.reload();
  };

  console.log("부모", todolist);
  return (
    <TodoLists>
      <TodoListContainer>
        <TodoListTitle>My TodoList</TodoListTitle>
        <InputForm
          inputValueHandle={inputValueHandle}
          addListHandle={addListHandle}
          inputValue={inputValue}
        />
        <ListContainer todolist={todolist} />
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
