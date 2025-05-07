import React, { useState } from "react";
import * as S from "../Main.style";
import CHECKBOX from "../../../assets/checkbox.png";
import CHECK from "../../../assets/check.png";

export default function CommentItem({
  commentText,//현재 화면의 텍스트
  commentList,//모든 댓글 텍스트
  setCommentList,//댓글 목록 업데이트 하는 함수
  inputText,//현재 입력중인 텍스트
  index//몇 번째 리스트인지 알려주기
}) {
  const [isClick, setIsClick] = useState(false);
  const [isEditing, setIsEditing]=useState(false);//useState(false)로 작성했기 때문에 boolean 변수
  const deleteComment = () => {
    setCommentList(commentList.filter((comment) => comment !== commentText));
  };
  const toggleComplete = () => {
    setIsClick(!isClick);
  };


  const modifyComment = () => {//수정 하는 함수
    if (isEditing) {
      const updated = commentList.map((comment, i) =>
        i === index ? inputText : comment
      );
      setCommentList(updated);
    }
    setIsEditing(!isEditing);
  };

  return (
    <S.CommentItemLayout>
      <S.CheckboxAndTodoText>
        <S.CheckboxImgContainer onClick={toggleComplete}>
          <S.CheckboxImg src={!isClick ? CHECKBOX : CHECK} alt="체크박스" />
        </S.CheckboxImgContainer>
        <S.CommentText>{commentText}</S.CommentText>
      </S.CheckboxAndTodoText>
      <S.AddButtonLayout>
        <S.DeleteButton onClick={deleteComment}>삭제</S.DeleteButton>
        <S.ModifyButton onClick={modifyComment}> {isEditing ? "수정중" : "수정"}</S.ModifyButton>
      </S.AddButtonLayout>
    </S.CommentItemLayout>
  );
}
