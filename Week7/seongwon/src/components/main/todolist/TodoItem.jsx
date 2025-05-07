// components > main > Todolist > TodoItem.jsx
import React, { useState } from "react";

import * as S from "../Main.style";

export default function TodoItem({ todoText, todolist, setTodolist }) {

  const deleteTodo = () => {
    setTodolist(todolist.filter((todo) => todo !== todoText));
  };

  const fixTodo=()=>{
    console.log("클릭됌");
  };
 

  return (
    <S.TodoItemLayout>
      <S.CheckboxAndTodoText>
        <S.TodoText>{todoText}</S.TodoText>
      </S.CheckboxAndTodoText>
      <S.DeleteButton onClick={deleteTodo}>삭제</S.DeleteButton>
      <S.EditButton onClick={fixTodo}>수정</S.EditButton>
    </S.TodoItemLayout>
  );
}
