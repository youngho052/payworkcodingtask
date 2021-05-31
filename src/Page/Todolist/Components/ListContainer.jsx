import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { axiosList } from "../../../store/action";
import styled from "styled-components";

function ListContainer(props) {
  const { todolist } = props;
  // const todolist = useSelector((state) => state.reducer.lists?.todoList);
  // const { todolist, count } = useSelector((state) => ({
  //   todolist: state.todoReducer[0]?.todoList,
  //   count: state.todoReducer[0]?.count,
  // }));
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(axiosList());
  // }, []);

  // useEffect(() => {}, [count]);
  return (
    <ListContainers>
      {todolist?.map((item, index) => {
        return (
          <List key={index}>
            <div>
              <input type="checkbox" />
              <span style={{ marginLeft: "30px" }}>{item.content}</span>
            </div>
            <div>
              <button>수정</button>
              <button>삭제</button>
            </div>
          </List>
        );
      })}
    </ListContainers>
  );
}

export default ListContainer;

const ListContainers = styled.div`
  width: 90%;
  margin-top: 55px;
  border: 1px solid red;
`;

const List = styled.div`
  ${(props) => props.theme.flexSpacebetween}
  margin-top:15px;
`;
