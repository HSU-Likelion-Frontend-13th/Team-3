import React from "react";
import * as S from "./Main.style";

export default function Input({ inputText, setInputText }) {
  return (
    <S.InputLayout>
      <S.InputContainer
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="댓글을 작성해주세요."
      ></S.InputContainer>
    </S.InputLayout>
  );
}
