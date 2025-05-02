// components > main > Todolist > TodoItem.jsx
import React, { useState } from "react";

import * as S from "../Main.style";
import CHECKBOX from "../../../assets/checkbox.png";
import CHECKBOXBLUE from "../../../assets/check-blue.png";

export default function TodoItem({ todoText, todolist, setTodolist }) {
  const [isChecked, setIsChecked] = useState(false); // 완료선택 상태변수

  const deleteTodo = () => {
    setTodolist(todolist.filter((todo) => todo !== todoText));
  };

  const completeTodo = () => {
    setIsChecked(!isChecked);
  };

  return (
    <S.TodoItemLayout>
      <S.CheckboxAndTodoText>
        <S.CheckboxImgContainer onClick={completeTodo}>
          <S.CheckboxImg
            src={isChecked ? CHECKBOXBLUE : CHECKBOX}
            alt="체크박스"
          />
        </S.CheckboxImgContainer>
        <S.TodoText>{todoText}</S.TodoText>
      </S.CheckboxAndTodoText>
      <S.DMButtonContainer>
      <S.DeleteButton onClick={deleteTodo}>삭제</S.DeleteButton>
      <S.ModifyButton>수정</S.ModifyButton>
      </S.DMButtonContainer>
    </S.TodoItemLayout>
  );
}
