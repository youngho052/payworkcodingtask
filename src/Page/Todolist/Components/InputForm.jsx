import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addList } from "../../../store/action";
import styled from "styled-components";

function InputForm() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  // 작성한 인풋 값 받아오는 핸들
  const inputValueHandle = (e) => {
    setInputValue(e.target.value);
  };

  // 리스트 추가 핸들
  const addListHandle = () => {
    dispatch(addList(inputValue));

    setInputValue("");
  };

  // 리스트 추가 엔터 핸들
  const enterHandle = (e) => {
    if (e.key === "Enter") {
      addListHandle();
    }
  };

  return (
    <InputForms>
      <TodoListInput
        value={inputValue}
        onChange={(e) => inputValueHandle(e)}
        onKeyPress={(e) => enterHandle(e)}
      />
      <TodoListButton onClick={addListHandle}>선택</TodoListButton>
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
