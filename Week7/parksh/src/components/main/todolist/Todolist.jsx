import React, { useEffect, useState } from "react";
import TodoEditor from "./TodoEditor";
import * as S from "../Main.style";
import TodoItem from "./TodoItem";

export default function Todolist() {
  const [todoList, setTodoList]=useState([]);
  const [inputText, setInputText]=useState("");
  const addTodo=()=>{
    if(inputText.trim()==="")return;
    setTodoList([...todoList, inputText]);//todolist 배열에 할일 텍스트를 넣는다.
    setInputText("");//입력창 초기화
  };
  useEffect(()=>{
    console.log("할일 : "+todoList);
  },[todoList]);

  return (
    <S.TodoListLayout>
      <S.SectionTitle>📝 My TodoList</S.SectionTitle>
        <TodoEditor 
          inputText={inputText}
          setInputText={setInputText}
          addTodo={addTodo}
        />
      <S.TodoListWrapper>
        {todoList.map((todo, index)=>(
          <TodoItem
          key={index}
          todoText={todo}
          todoList={todoList}
          setTodoList={setTodoList}
          />
          ))}
      </S.TodoListWrapper>
    </S.TodoListLayout>
  );
}
