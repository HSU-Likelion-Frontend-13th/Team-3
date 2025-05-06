import * as S from "./Header.style";
import CHECK from "../../assets/check.png";

export default function Header() {
  return (
    <S.HeaderLayout>
      <S.CheckIcon src={CHECK} />
      <S.Title>Comment</S.Title>
    </S.HeaderLayout>
  );
}
