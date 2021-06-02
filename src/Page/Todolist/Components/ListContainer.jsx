import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";

function ListContainer() {
  const item = useSelector((state) => state.todoReducer);

  return (
    <TodoList>
      {item.todoList.map((items, index) => {
        return (
          <List key={index}>
            <TodoListItem items={items} />
          </List>
        );
      })}
    </TodoList>
  );
}

export default ListContainer;

const TodoList = styled.ul`
  width: 100%;
  margin-top: 50px;
`;

const List = styled.li`
  ${(props) => props.theme.flexSpacebetween}
  padding: 15px;
  background-color: #fefefe;
  border-radius: 10px;
  margin-top: 15px;

  &:last-child {
    border-bottom: 1px solid gray;
  }
`;
