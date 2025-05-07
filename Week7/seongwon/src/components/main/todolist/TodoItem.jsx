// components > main > Todolist > TodoItem.jsx
import React, { useState } from "react";

import * as S from "../Main.style";

export default function TodoItem({ todoText, todolist, setTodolist }) {

  const [isEditing,setIsEditing]=useState(false); //초기설정은 false로로
  const [editText, setEditText] = useState(todoText); 


  const deleteTodo = () => {
    setTodolist(todolist.filter((todo) => todo !== todoText));
  };

  const fixTodo=()=>{
    setIsEditing(true); //눌리면 수정 중으로 변경됌됌
  };
 

  return (
    <S.TodoItemLayout>
      <S.CheckboxAndTodoText>
        {isEditing ?(
          <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          />
        ):(
        
        <S.TodoText>{todoText}</S.TodoText>
        )}
      </S.CheckboxAndTodoText>
      <S.DeleteButton onClick={deleteTodo}>삭제</S.DeleteButton>
      <S.EditButton onClick={fixTodo}>수정</S.EditButton>
    </S.TodoItemLayout>
  );
}
