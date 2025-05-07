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
    if(isEditing){
    setTodolist(todolist.map((todo)=>todo===todoText?editText:todo));
    setIsEditing(false);

    }else{
      setIsEditing(true);
      setEditText(todoText);}
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
      <S.EditButton onClick={fixTodo}>{isEditing ? "수정완료" :"수정"}</S.EditButton>
    </S.TodoItemLayout>
  );
}
