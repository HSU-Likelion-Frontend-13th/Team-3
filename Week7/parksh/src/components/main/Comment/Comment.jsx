import React, { useEffect, useState } from "react";
import CommentEditor from "./CommentEditor"; // 댓글 입력창 컴포넌트
import * as S from "../Main.style";
import CommentItem from "./CommentItem";     // 각각의 댓글을 나타내는 컴포넌트

export default function Comment() {
  const [commentList, setCommentList] = useState([]);
  const [inputText, setInputText] = useState("");

  const addComment = () => {
    if (inputText.trim() === "") return;
    setCommentList([...commentList, inputText]); // 댓글 배열에 댓글 텍스트를 넣는다.
    setInputText(""); // 입력창 초기화
  };

  useEffect(() => {
    console.log("할일 : " + commentList);
  }, [commentList]);

  //const addModifyButton = () => {
    // (예정) 댓글 수정 버튼 추가 기능
  //};

  return (
    <S.CommentLayout>
      <S.SectionTitle>💬댓글 달기</S.SectionTitle>
      <CommentEditor 
        inputText={inputText}
        setInputText={setInputText}
        addComment={addComment}
      />
      <S.CommentWrapper>
        {commentList.map((comment, index) => (
          <CommentItem
            key={index}
            commentText={comment}
            commentList={commentList}
            setCommentList={setCommentList}
          />
        ))}
      </S.CommentWrapper>
    </S.CommentLayout>
  );
}
