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
  height: 60px;
  padding: 15px;
  border-top: 1px solid gray;

  &:last-child {
    border-bottom: 1px solid gray;
  }
`;
