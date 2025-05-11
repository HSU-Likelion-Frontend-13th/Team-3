import styled from "styled-components";

// ✅ 제목
export const SectionTitle = styled.div`
  font-size: larger;
  font-weight: 700;
`;

// ✅ 댓글 레이아웃
export const CommentLayout = styled.div` // 오타 수정: CommetLayout → CommentLayout
  width: 60vw;
`;

export const CommentSection = styled.div`
  width: 60vw;
`;

export const AddCommentWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;
`;

export const CommentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 1rem 0;
`;

export const CommentlistWrapper = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const CommentItemLayout = styled.div`
  width: 85%;
  height: 4rem;
  border: 1px solid gray;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem;
`;

export const CommentText = styled.div``;
export const DateText = styled.div``;

// 입력창
export const InputLayout = styled.div`
  width: 100%;
  height: 3rem;
  border: 1px solid gray;
  margin: 0.5rem 0;
`;

export const InputContainer = styled.input`
  width: 100%;
  height: 100%;
`;

export const EditInput = styled.input`
  width: 100%;
  height: 100%;
`;

// 버튼
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

export const EditButton = styled.button`
  width: 50px;
  height: 30px;
  border: 1px solid grey;
`;

export const DeleteButton = styled.button`
  width: 50px;
  border: 1px solid grey;
`;

export const DeleteAndEdit = styled.div`
  display: flex;
  gap: 0.3rem;
`;
export const CheckboxAndTodoText = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const CheckboxImgContainer = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const CheckboxImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const ModifyButton=styled.button`
  width: 50px;
  border: 1px solid grey; 
`;

export const AddButtonLayout=styled.button`
width: 100px;
height: 3rem;
text-align: center;
display: flex;          
gap: 0.3rem;            
align-items: center;    
`;