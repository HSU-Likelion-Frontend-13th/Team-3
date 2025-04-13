import React from 'react'
import styled from 'styled-components'
import ProfileImg from "../../assets/home/profileImg.jpg"

const AboutSectionLayout=styled.div`
  display: flex;
  background-color: #F3F5FF;
  flex-direction: column;
`;
const Title=styled.div`
  text-align: center;
  color: #6c82ff;
  font-size: 3em;
  font-weight: bold;
  margin: 1em 0;
`
const ContentWrapper=styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 4em;
  padding: 2em;
`
const ProfileCard=styled.div`
  background-color: white;
  padding: 2em;
  border-radius: 1.5em;/*모서리는 둥글게*/
  text-align: center;/*가운데 정렬*/
  width: 20em;
  height: 27em;
`;
const ProfileImage = styled.img`
  width: 11em;
  height: 11em;
  border-radius: 50%;     /* 원형으로 */
  object-fit: cover;      /* 비율 유지하며 채움 */
  margin-bottom: 1em;
`;
const ProfileName=styled.div`
  font-weight: bold;/*굵게*/
  font-size: 2em;
  color: #4a86ff;
  margin-bottom: 0.5em;
`
const ProfileInfo=styled.div`
  font-size: 1.4em;
  color: #484A64;
  text-align: left;/*좌측 정렬*/
  margin-bottom: 0.5em;/*0.5em씩 띄우기*/
`
const InfoCard=styled.div`
   display: grid;
  /*grid 레이아웃 2행2열의 고정된 영역을 사용하므로*/
  grid-template-columns: repeat(2, minmax(10em, 1fr));
  /*2열을 만들고 각열은 최소 10em, 최대 화면 전체 */
  gap: 4em;
  /*열과 행 사이 간격*/
`;
const InfoBlock = styled.div`
  h3 {
    margin-bottom: 0.5em;
    font-size: 1.8em;
    font-weight: bold;
  }

  p {
    font-size: 1.4em;
    line-height: 1.5;
    color: #626682;
  }
`;

export default function AboutSection() {
  return (
   <AboutSectionLayout>
    <Title>About</Title>
      <ContentWrapper>
      <ProfileCard>
        <ProfileImage src={ProfileImg} alt="프로필 이미지" />
        <ProfileName>박성훈</ProfileName>
        <ProfileInfo>📞 010-8927-7435</ProfileInfo>
        <ProfileInfo>📧 2171164@hansung.ac.kr</ProfileInfo>
        <ProfileInfo>📍서울특별시 성북구구</ProfileInfo>

      </ProfileCard>
      <InfoCard>
      <InfoBlock>
            <h3>EDUCATION</h3>
            <p>한성대학교 컴퓨터공학부<br />2021.03 ~ 2025.02</p>
          </InfoBlock>
          <InfoBlock>
            <h3>SKILLS</h3>
            <p>Python<br />Java<br />C++<br />JavaScript</p>
          </InfoBlock>
          <InfoBlock>
            <h3>WORK</h3>
            <p>프론트엔드 개발자</p>
          </InfoBlock>
          <InfoBlock>
            <h3>ACTIVITIES</h3>
            <p>멋쟁이사자처럼 13기</p>
          </InfoBlock>
      </InfoCard>
    </ContentWrapper>
   </AboutSectionLayout> 
  
  )
}
