// components > main > Todolist > TodoItem.jsx
import React, { useState } from "react";

import * as S from "../Main.style";
import CHECKBOX from "../../../assets/checkbox.png";
import CHECKBOXBLUE from "../../../assets/check-blue.png";

export default function CommentItem({ commentText, commentlist, setCommentlist }) {
  const [isChecked, setIsChecked] = useState(false); // 완료선택 상태변수
  const [isEditing, setIsEditing] = useState(false); //수정 상태 변수
  const [editedText, setEditedText] = useState(commentText); //수정 중인 텍스트 상태
  const [like, setLike] = useState(0); // 좋아요 상태 변수

  const deleteTodo = () => {
    setCommentlist(commentlist.filter((comment) => comment !== commentText));
  };

  const modifyComment = () => {
    setIsEditing(true);
  };

  const modifyComplete = () => {
    setCommentlist(commentlist.map((comment) => (comment === commentText ? editedText : comment )));
    // 수정된 내용 반영
    setIsEditing(false);
  };

  const likeComment = () => {
    setLike(like+1); // 좋아요 수 증가
  };

  return (
    <S.CommentItemLayoutAlt>
      <S.CheckboxAndTodoText>
        {isEditing ? (
          <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)
          }
          />) : (<S.CommentText>{commentText}</S.CommentText>)}
        
      </S.CheckboxAndTodoText>
      <S.DMButtonContainer>
      <S.DeleteButton onClick={deleteTodo}>삭제</S.DeleteButton>
      {isEditing ? (
        <S.ModifyButton onClick={modifyComplete}>수정완료</S.ModifyButton>) : 
        (<S.ModifyButton onClick={modifyComment}>수정</S.ModifyButton>)
      }
      <S.LikeButton onClick={likeComment}>👍
      <S.like>{like}</S.like>
      </S.LikeButton>
      </S.DMButtonContainer>
    </S.CommentItemLayoutAlt>
  );
}
