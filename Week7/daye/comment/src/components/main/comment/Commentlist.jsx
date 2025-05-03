import React, { use, useEffect } from "react";
import { useState } from "react";
import * as S from "../Main.style";
import CommentEditor from "./CommentEditor";
import CommentItem from "./CommentItem";

export default function CommentList() {
    const [commentlist, setCommentlist] = useState([]);
    const [inputText, setInputText] = useState("");

    const addComment = () => {
        if(inputText.trim() === "") return;
        setCommentlist([...commentlist, inputText]); // commentlist 배열에 댓글을 넣는다
        setInputText(""); // 댓글 작성 후 inputText를 초기화한다.
    }

    useEffect(() => {
        console.log("댓글 목록", commentlist);
    }, [commentlist]); // commentlist가 변경될 때마다 콘솔에 출력한다.

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
                        commentlist = {commentlist}
                        setCommentlist = {setCommentlist}/>
                ))}
            </S.CommentListWrapper>
        </S.CommentListLayout>
    );
    }