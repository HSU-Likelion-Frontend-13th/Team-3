import React from 'react'
import styled from "styled-components";
import MyPhoto from "../assets/김다예.jpg"
const AboutLayout = styled.div`
background-color: #F3F5FF;
width: 100%;
justify-content: center;
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
 align-items: center;
 font-weight: bold;
 font-size: 2vw;

`;

const ProfileImageBox = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 380px;
    height: 400px;
    box-sizing: border-box;
    border-radius:1rem;
    background-color: #FFFFFF;
    margin: 0 auto;

`;

// 사진
const Photo = styled.img`
    display: block;
    margin: 0 auto;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    padding: 2rem;
    
`;

//이름
const Name = styled.h2`
text-align: center;
font-size: 2vw;
font-weight: bold;

`;

const ProfileItem = styled.p`
  display: block;
  gap: 10px;
  margin: 10px 0;
  font-size: 1.2em;
  padding: 1rem 0;
  text-align: left;
`;

const Icon = styled.span`
  margin-right: 10px;
`;

const ProfileInfoBox = styled.div`
 font-size: 1.5em;
  color: #4A86FF;
`;

export default function About() {
  return (
    <AboutLayout>
        <Title>ABOUT</Title>
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
          <Icon>📍</Icon>  
          서울시 강서구 마곡동</ProfileItem>
        </ProfileImageBox>
    <Profile>
        
    </Profile>

    </AboutLayout>
  )
}
