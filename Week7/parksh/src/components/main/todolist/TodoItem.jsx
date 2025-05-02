// components > main > Todolist > TodoItem.jsx
import React from "react";
import * as S from "../Main.style";
import CHECKBOX from "../../../assets/checkbox.png";
import CHECK from "../../../assets/check.png";

import { useState } from "react";



export default function TodoItem({ todoText, todoList, setTodoList }) {
  const[isClick, setIsClick]=useState(false);
  const deleteTodo=()=>{
    setTodoList(todoList.filter((todo)=>todo!==todoText));
  }
  const completeTodo=()=>{
    setIsClick(!isClick);
  }
  return (
    <S.TodoItemLayout>
      <S.CheckboxAndTodoText>
        <S.CheckboxImgContainer onClick={completeTodo}>
          <S.CheckboxImg src={!isClick ? CHECKBOX : CHECK } alt="체크박스" />
        </S.CheckboxImgContainer>
        <S.TodoText>{todoText}</S.TodoText>
      </S.CheckboxAndTodoText>
      <S.DeleteButton 
      onClick={deleteTodo}
      
      >삭제</S.DeleteButton>
    </S.TodoItemLayout>
  );
}
