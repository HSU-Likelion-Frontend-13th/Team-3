import React from 'react'
import styled from "styled-components";
import MyPhoto from "../assets/김다예.jpg"
import Github from "../assets/github.jpg"

const AboutLayout = styled.div`
background-color: #F3F5FF;
width: 100%;

@media (max-width: 768px) {
    min-width: 320px;
    padding: 0.5rem;
  }

`;

const Title = styled.p`
 color: #4A86FF; 
 font-weight: bold;
 text-align: center;
 padding: 3rem;
 font-size: 2vw;
`;
const Profile = styled.div`
  display : flex;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;

   @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 1rem;
  }

`;

const ProfileImageBox = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 380px;
    height: 450px;
    box-sizing: border-box;
    border-radius:1rem;
    background-color: #FFFFFF;
    padding: 2rem;
    
    
    @media (max-width: 768px) {
    width: 90%;
    min-height: 350px;
    padding: 1rem;
  }

`;

// 사진
const Photo = styled.img`
    display: block;
    margin: 0 auto;
    width: 140px;
    height: 130px;
    border-radius: 50%;
    padding: 2rem;
    
`;

//이름
const Name = styled.h2`
text-align: center;
font-weight: bold;
font-size: 1.5rem;
`;

const ProfileItem = styled.p`
  display: block;
  gap: 10px;
  margin: 5px 0;
  font-size: 1.2em;
  padding: 1rem 0;
  text-align: left;
  color: #555;
`;

const Icon = styled.span`
  margin-right: 10px;
`;

const ProfileInfoBox = styled.div`
 display: grid;
 grid-template-columns: repeat(2, 200px); /*열2개, 너비 200px*/
 gap: 7rem;
 padding: 2rem;

 
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoTitle = styled.h3`
   color: #555;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
  `;
const InfoItem = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  
  ol {
    list-style: none;
    padding: 0;
    
    li {
      margin-bottom: 0.5rem;
    }
  }
`;
const GithubImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

const GithubLink = styled.a`
  text-decoration: none; /* 링크 밑줄 제거 */
  `;

export default function About() {
  return (
    <AboutLayout>
        <Title>ABOUT</Title>
        <Profile>
        <ProfileImageBox>
        <Photo src={MyPhoto} alt ="프로필 사진"/>
        <Name>김다예</Name>
        <ProfileItem>
          <Icon>📞</Icon>  
          010.5423.0147</ProfileItem>
        <ProfileItem>
          <Icon>✉️</Icon>   
          dbk1102@naver.com</ProfileItem>
        <ProfileItem>
          <Icon>🏠</Icon>  
          서울시 강서구 마곡동</ProfileItem>

          <ProfileItem>
          <GithubImg src = {Github} alt="github" />
          <GithubLink href="https://github.com/Allyeeah">github</GithubLink></ProfileItem>

        </ProfileImageBox>


        <ProfileInfoBox>
          <InfoSection>
          <InfoTitle>EDUCATION</InfoTitle>
            <InfoItem>2021.03 ~ 2026.02 </InfoItem>
            <InfoItem>한성대학교 컴퓨터공학과</InfoItem>
            </InfoSection>

            <InfoSection>
          <InfoTitle>SKILLS</InfoTitle>
            <InfoItem><ol>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li> 
              <li>React</li>
              <li>Java</li>
              
              </ol></InfoItem>
              </InfoSection>
              
          <InfoSection>
          <InfoTitle>WORK</InfoTitle>
            <InfoItem>프론트엔드 개발자</InfoItem>
            </InfoSection>
          <InfoSection>

          <InfoTitle>ACTIVITIES</InfoTitle>
            <InfoItem>멋쟁이사자처럼 13기</InfoItem>
          </InfoSection>

          </ProfileInfoBox>
    
          </Profile>
    </AboutLayout>
  )
}
