import React from "react";
import * as S from "../Main.style";
import Input from "../Input";
import Button from "../Button";

export default function CommentEditor({ inputText, setInputText, addComment }) { // 구조분해할당
  return (
    <S.AddCommentWrapper>
      <Input 
        inputText={inputText}
        setInputText={setInputText}
        addComment={addComment} // Input 내부가 addTodo를 기대한다면 유지
      />
      <Button text={"+ 추가하기"} addComment={addComment}></Button>
    </S.AddCommentWrapper>
  );
}
