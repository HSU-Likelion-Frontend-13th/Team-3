import React, { useState } from "react";
import * as S from "../Main.style";

export default function CommentItem({
  commentText, // 현재 댓글 텍스트
  commentList, // 댓글 목록 배열
  setCommentList, // 댓글 목록 변경 함수
  index // 현재 댓글의 index
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(commentText); // 수정 중인 텍스트

  const deleteComment = () => {
    const updated = commentList.filter((_, i) => i !== index);
    setCommentList(updated);
  };

  const modifyComment = () => {
    if (isEditing) {
      const updated = commentList.map((comment, i) =>
        i === index ? editText : comment
      );
      setCommentList(updated);
    }
    setIsEditing(!isEditing); 
  };

  return (
    <S.CommentItemLayout>
      <S.CheckboxAndTodoText>
        {isEditing ? (
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            autoFocus 
            style={{ border: "1px solid black" }}

          />
        ) : (
          <S.CommentText>{commentText}</S.CommentText>
        )}
      </S.CheckboxAndTodoText>
      <S.AddButtonLayout>
        <S.DeleteButton onClick={deleteComment}>삭제</S.DeleteButton>
        <S.ModifyButton onClick={modifyComment} >
          {isEditing ? "수정 중" : "수정"}
        </S.ModifyButton>
      </S.AddButtonLayout>
    </S.CommentItemLayout>
  );
}
