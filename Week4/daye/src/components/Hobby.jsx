import React from 'react'
import styled from "styled-components";
import Musical from "../assets/Musical.jpg"
import Band from "../assets/Band.jpg"
import Shopping from "../assets/Shopping.jpg"


const HobbyLayout = styled.div`
background-color: #F3F5FF;
width: 100%;
justify-content: center;

`;

const Title = styled.p`
 color: #4A86FF; 
 font-weight: bold;
 text-align: center;
 padding: 3rem;
 font-size: 3vw;
`;
const HobbyBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    text-align: center;
    gap: 40px;
     flex-wrap: wrap; /* 화면 작아질 때 아이템이 줄바꿈되도록 설정 */
    
`;
const HobbyItem = styled.div`
    width: 300px;
    height: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    border-radius: 12px;
    border-radius: 12px;
    background-color: #FFFFFF;
    margin-bottom: 100px;
    overflow: hidden;
    justify-content: flex-start;
   

`;

const HobbyTitle = styled.div`
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
    background-color: #4A86FF;
    color: white;
    font-weight: bold;
    padding-top: 15px;
    padding-bottom: 15px;
    margin-top: 0px;
`;

const HobbyImage = styled.img`
    
    margin: 0 auto;
    width: 200px;
    height: 180px;
    border-radius: 25%;
    padding: 2rem;
    justify-content: center;
   
    
`;



const Hobby = () => {
  return (
    <HobbyLayout>
      <Title>HOBBY</Title>
      <HobbyBox> 
        <HobbyItem>
          <HobbyTitle>뮤지컬 보기</HobbyTitle>
          <HobbyImage src={Musical} alt='뮤지컬' />
          </HobbyItem>
        <HobbyItem>
          <HobbyTitle>밴드음악</HobbyTitle>
          <HobbyImage src={Band} alt='밴드' />
          </HobbyItem>
        <HobbyItem>
          <HobbyTitle>쇼핑하기</HobbyTitle>
          <HobbyImage src={Shopping} alt='쇼핑' />
          </HobbyItem>

      </HobbyBox>
    </HobbyLayout>
  );
};
export default Hobby;
