import React from "react";
import * as S from "./Main.style";

export default function Button({ text, addTodo }) {
  return (
    <S.ButtonLayout onClick={addTodo}>
      <S.ButtonContainer>{text}</S.ButtonContainer>
    </S.ButtonLayout>
  );
}
