import React from "react";
import styled from "styled-components";
import profileImg from "../assets/profile.jpg";


const AboutTitle=styled.h3`

`

const AboutLayout=styled.div`
`

const Profile=styled.div`
`

const Info=styled.div`

`




export default function About() {
    return (
      <>
        <AboutTitle id="about">ABOUT</AboutTitle>
        <AboutLayout>
          <Profile>
            <img src={profileImg} alt="profile" />
            <h2>진성원</h2>
            <p>
              ☎ 010-3225-3742<br />
              ☞ 2171129@hansung.ac.kr<br />
              ▲ 서울특별시 관악구 신림동
            </p>
          </Profile>
          <Info>
            <div>
              <h3>EDUCATION</h3>
              <p>
                한성대학교 컴퓨터공학부<br />
                2021.03 ~ 2027.02
              </p>
            </div>
            <div>
              <h3>SKILLS</h3>
              <p>
                Java<br />
                JavaScript<br />
                React
              </p>
            </div>
            <div>
              <h3>WORK</h3>
              <p>TA 조교</p>
            </div>
            <div>
              <h3>ACTIVITIES</h3>
              <p>
                멋쟁이사자처럼 13기<br />
                버그24-2
              </p>
            </div>
          </Info>
        </AboutLayout>
      </>
    );
  }