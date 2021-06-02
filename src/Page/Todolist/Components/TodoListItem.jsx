import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { delteList, modifyList } from "../../../store/action";
import styled from "styled-components";

function TodoListItem(props) {
  const { items } = props;
  const [toggleInput, setToggleInput] = useState(true);
  const [modifyInput, setModifyInput] = useState("");
  const [check, setCheck] = useState(false);

  const dispatch = useDispatch();

  // 리스트 삭제 핸들
  const deleteHandle = (id) => {
    dispatch(delteList(id));
  };

  // 리스트 수정 로직
  const listmodifyHandle = (id, content) => {
    dispatch(modifyList(id, content, check));
    setModifyInput("");
    toggleHandle();
  };

  // 수정 toggle 핸들
  const toggleHandle = () => {
    setToggleInput(!toggleInput);
  };

  // 리스트 값 수정 핸들
  const modifyHandle = (e) => {
    setModifyInput(e.target.value);
  };

  // 체크박스 체크 로직
  const testcheckHandle = (isCheck) => {
    setCheck(!isCheck);
  };

  const { id, isCheck, content } = items;

  return (
    <>
      <ListItem>
        <CheckInput
          type="checkbox"
          checked={isCheck}
          onChange={() => testcheckHandle(isCheck)}
        />
        {toggleInput ? (
          <ContentContainer>
            <Content>{content}</Content>
          </ContentContainer>
        ) : (
          <ContentInput
            type="text"
            value={modifyInput}
            onChange={(e) => modifyHandle(e)}
          />
        )}
      </ListItem>
      <ListItem>
        {toggleInput ? (
          <>
            <ModifyButton onClick={() => toggleHandle()}>수정</ModifyButton>
            <DeleteButton onClick={() => deleteHandle(id)}>삭제</DeleteButton>
          </>
        ) : (
          <>
            <ModifyButton onClick={() => listmodifyHandle(id, modifyInput)}>
              수정하기
            </ModifyButton>
            <CancelButton onClick={() => toggleHandle()}>취소</CancelButton>
          </>
        )}
      </ListItem>
    </>
  );
}

export default TodoListItem;

const ListItem = styled.div`
  ${(props) => props.theme.flexStyle}
`;

const CheckInput = styled.input`
  margin-right: 20px;
`;

const ContentContainer = styled.div`
  width: 550px;
`;

const Content = styled.span`
  font-size: 16px;
`;

const ContentInput = styled.input`
  width: 400px;
  margin-left: 10px;
  border: 1px solid gray;
  padding: 8px 12px;
`;

const ModifyButton = styled.button`
  padding: 8px 12px;

  &:hover {
    background-color: lightskyblue;
    border: none;
  }
`;

const DeleteButton = styled.button`
  padding: 8px 12px;

  &:hover {
    background-color: lightskyblue;
    border: none;
  }
`;

const CancelButton = styled(DeleteButton)``;
