import * as S from "./Header.style";
import React from "react";
import CHECK from "../../assets/check.png";


const Header = () => {
  return (
    <S.HeaderLayout>
      <S.CheckIcon src={CHECK} />
      <S.Title>Comment</S.Title>
    </S.HeaderLayout>
  )
};

export default Header

