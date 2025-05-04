import React, { useState, useEffect } from "react";
import * as S from "../Main.style";
import CommentEditor from "./CommentEditor";
import CommentItem from "./CommentItem";

export default function CommentList() {
  const [commentlist, setCommentlist] = useState([]); // 댓글 목록
  const [inputText, setInputText] = useState(""); // 댓글 입력 상태

  const addComment = () => {
    if (inputText.trim() === "") return;
    setCommentlist([...commentlist, inputText]); // 댓글 추가
    setInputText(""); // 입력 필드 초기화
  };

  useEffect(() => {
    console.log("댓글 목록", commentlist);
  }, [commentlist]);

  return (
    <S.CommentListLayout>
      <S.SectionTitle>✏️ 댓글 작성</S.SectionTitle>
      <CommentEditor
        inputText={inputText}
        setInputText={setInputText}
        addComment={addComment}
      />
      <S.CommentListWrapper>
        {commentlist.map((comment, index) => (
          <CommentItem
            key={index}
            commentText={comment}
            commentlist={commentlist}
            setCommentlist={setCommentlist}
          />
        ))}
      </S.CommentListWrapper>
    </S.CommentListLayout>
  );
}