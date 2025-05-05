import React from "react";
import * as S from "./Main.style";

export default function Button({ text, onClick }) {
  return (
    <S.ButtonLayout onClick={onClick}>
      <S.ButtonContainer>{text}</S.ButtonContainer>
    </S.ButtonLayout>
  );
}
