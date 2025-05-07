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
          index={index}//list의 몇번째 요소인지 보기
          commentText={comment}//원래 텍스트
          inputText={inputText}//현재 입력중인 텍스트
          commentList={commentList}//모든 댓글 목록
          setCommentList={setCommentList}//댓글 목록 업데이트 하는 함수수
        />
        ))}
      </S.CommentWrapper>
    </S.CommentLayout>
  );
}
