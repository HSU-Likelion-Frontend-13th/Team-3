import React from "react";
import * as S from "../Main.style";
import Input from "../Input";
import Button from "../Button";

export default function TodoEditor({ inputText, setInputText, addTodo }) {
  return (
    <S.AddTodoWrapper>
      <Input inputText={inputText} setInputText={setInputText} />
      <Button text={"댓글 작성하기"} addTodo={addTodo}></Button>
    </S.AddTodoWrapper>
  );
}
