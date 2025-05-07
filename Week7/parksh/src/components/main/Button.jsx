import React from "react";
import * as S from "./Main.style";

export default function Button({ text, addComment }) {
  return (
    <S.ButtonLayout onClick={addComment}>
      <S.ButtonContainer>{text}</S.ButtonContainer>
    </S.ButtonLayout>
  );
}
