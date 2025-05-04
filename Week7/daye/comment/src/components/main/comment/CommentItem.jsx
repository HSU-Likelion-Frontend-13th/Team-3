// components > main > Todolist > TodoItem.jsx
import React, { useState } from "react";

import * as S from "../Main.style";
import CHECKBOX from "../../../assets/checkbox.png";
import CHECKBOXBLUE from "../../../assets/check-blue.png";

export default function CommentItem({ commentText, commentlist, setCommentlist}) {
  const [isEditing, setIsEditing] = useState(false); //수정 상태 변수
  const [editedText, setEditedText] = useState(commentText); //수정 중인 텍스트 상태
  const [like, setLike] = useState(0); // 좋아요 상태 변수
  const [isReply, setIsReply] = useState(false); // 대댓글 상태 변수
  const [replyText, setReplyText] = useState(""); // 대댓글 상태 변수
  const [replyList, setReplyList] = useState([]); //대댓글 목록 관리

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

   // 대댓글 작성 상태 변경 함수
   const commentReply = () =>{
    setIsReply(true); // 대댓글 작성 상태로 변경
  };

  // 대댓글 추가 함수
        const addReply = () => {
          if(replyText.trim() === "") return;
          setReplyList([...replyList, replyText]); // replyList 배열에 댓글을 넣는다
          setReplyText(""); // 댓글 작성 후 ReplyText를 초기화한다.
          setIsReply(false); // 대댓글 작성 상태 종료
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
      <S.ReplyButton onClick={() => setIsReply(true)}>대댓글</S.ReplyButton>
      <S.LikeButton onClick={likeComment}>👍
      <S.like>{like}</S.like>
      </S.LikeButton>
      </S.DMButtonContainer>

       {/*대댓글 작성 input 필드 */}
       {isReply && (
        <S.ReplyInputContainer>
          <S.ReplyInput 
          type="text"
          placeholder="대댓글을 작성해주세요"
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}/>
          <S.ReplyButton onClick={addReply}>작성</S.ReplyButton>
        </S.ReplyInputContainer>
      )}
      {/* 대댓글 목록 */}
      {replyList.map((reply, index) => (
        <S.Reply key={index}>{reply}</S.Reply>
      ))}

    </S.CommentItemLayoutAlt>

  );
}
