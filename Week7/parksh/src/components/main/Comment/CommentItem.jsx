import React, { useState } from "react";
import * as S from "../Main.style";
import CHECKBOX from "../../../assets/checkbox.png";
import CHECK from "../../../assets/check.png";

export default function CommentItem({ commentText, commentList, setCommentList }) {
  const [isClick, setIsClick] = useState(false);

  const deleteComment = () => {
    setCommentList(commentList.filter((comment) => comment !== commentText));
  };

  const toggleComplete = () => {
    setIsClick(!isClick);
  };

  return (
    <S.CommentItemLayout>
      <S.CheckboxAndTodoText>
        <S.CheckboxImgContainer onClick={toggleComplete}>
          <S.CheckboxImg src={!isClick ? CHECKBOX : CHECK} alt="체크박스" />
        </S.CheckboxImgContainer>
        <S.CommentText>{commentText}</S.CommentText>
      </S.CheckboxAndTodoText>
      <S.DeleteButton onClick={deleteComment}>삭제</S.DeleteButton>
    </S.CommentItemLayout>
  );
}
