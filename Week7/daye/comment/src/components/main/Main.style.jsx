import styled from "styled-components";

export const SectionTitle = styled.div`
  font-size: larger;
  font-weight: 700;
`;

/* TodoComment */
export const CommentListLayout = styled.div`
  width: 60vw;
`;

export const AddCommentWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;

export const CommentListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 1rem 0;
`;

export const CommentSection = styled.div`
  width: 60vw;
`;

export const InputLayout = styled.div`
  width: 100%;
  height: 3rem;
  border: 1px solid gray;
  margin: 0.5rem 0;
`;

export const InputContainer = styled.input`
  width: 100%;
  height: 100%;
  line-height: 1.5rem;
  padding: 0.5rem;
`;

export const ButtonLayout = styled.button`
  width: 100px;
  height: 3rem;
  text-align: center;
  background-color: #5664f5;
`;
export const ButtonContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const CommentItemLayout = styled.div`
  width: 80%;
  height: 3.8rem;
  border: 1px solid gray;
  display: flex;
  justify-content: space-between;
  padding: 0.6rem;
  
`;

export const CheckboxAndTodoText = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const CheckboxImgContainer = styled.button``;
export const CheckboxImg = styled.img``;

export const TodoText = styled.div``;

export const DeleteButton = styled.button`
  width: 50px;
  height: 30px;
  border: 1px solid grey;
`;

export const ModifyButton = styled.button`
  width: 60px;
  height: 30px;
  border: 1px solid grey;
  `;

export const LikeButton = styled.button`
  width: 50px;
  border: 1px solid grey;
`;
export const like = styled.span`
  `;

export const DMButtonContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const DeleteImg = styled.img``;

export const CommentlistWrapper = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const CommentItemLayoutAlt = styled.div`
  width: 85%;
  height: 4rem;
  border: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem;
  max-height: 10rem;
  overflow: auto; /*스크롤 기능*/
  word-wrap: break-word; /* 긴 단어를 줄바꿈 */
`;

export const CommentText = styled.div`
  flex: 1;
  word-wrap: break-word;
  word-break: break-word;
`;

export const DateText = styled.div``;

export const EditButton = styled.button`
  width: 50px;
  height: 30px;
  border: 1px solid grey;
`;

export const DeleteAndEdit = styled.div`
  display: flex;
  gap: 0.3rem;
`;

export const EditInput = styled.input`
  width: 100%;
  height: 100%;
`;
