// components > main > Todolist > TodoItem.jsx
import React, { useState } from "react";

import * as S from "../Main.style";
import CHECKBOX from "../../../assets/checkbox.png";
import CHECKBOXBLUE from "../../../assets/check-blue.png";

export default function TodoItem({ todoText, todolist, setTodolist }) {
  const [isChecked, setIsChecked] = useState(false); // 완료선택 상태변수
  const [isEditing, setIsEditing] = useState(false); //수정 상태 변수
  const [editedText, setEditedText] = useState(todoText); //수정 중인 텍스트 상태


  const deleteTodo = () => {
    setTodolist(todolist.filter((todo) => todo !== todoText));
  };

  const modifyTodo = () => {
    setIsEditing(true);
  };

  const modifyComplete = () => {
    setTodolist(todolist.map((todo) => (todo === todoText ? editedText : todo )));
    // 수정된 내용 반영
    setIsEditing(false);
  };

  const completeTodo = () => {
    setIsChecked(!isChecked);
  };

  return (
    <S.TodoItemLayout>
      <S.CheckboxAndTodoText>
        {isEditing ? (
          <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)
          }
          />) : (<S.TodoText>{todoText}</S.TodoText>)}
        
      </S.CheckboxAndTodoText>
      <S.DMButtonContainer>
      <S.DeleteButton onClick={deleteTodo}>삭제</S.DeleteButton>
      {isEditing ? (
        <S.ModifyButton onClick={modifyComplete}>수정완료</S.ModifyButton>) : 
        (<S.ModifyButton onClick={modifyTodo}>수정</S.ModifyButton>)
      }
      </S.DMButtonContainer>
    </S.TodoItemLayout>
  );
}
