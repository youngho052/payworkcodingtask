import React from "react";
import styled from "styled-components";

function InputForm() {
  return (
    <InputForms>
      <TodoListInput />
      <TodoListButton>선택</TodoListButton>
    </InputForms>
  );
}

export default InputForm;

const InputForms = styled.div`
  ${(props) => props.theme.flexSpacebetween}
  width: 450px;
  margin-top: 45px;
`;

const TodoListInput = styled.input`
  width: 400px;
  height: 35px;
  border: 1px solid gray;
`;
const TodoListButton = styled.button`
  width: 50px;
  height: 35px;
  border: 1px solid gray;
`;
