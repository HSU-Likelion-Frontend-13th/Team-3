import React from 'react'
import * as S from "./Main.style";
import CommentList from "../../components/main/comment/Commentlist";
export default function Main() {
  return (
    <S.MainLayout>
        <CommentList/>
    </S.MainLayout>
  )
}
