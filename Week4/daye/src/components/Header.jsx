import React from "react";
import styled from "styled-components";
import Nav from "./Nav"

//Header 스타일 컴포넌트

const HeaderLayout = styled.div`
    width: 100vw;
    height: 10vh;
    padding: 0 25vw;
    display: flex;
    justify-content: baseline;
    align-items: center;

`;

const Logo = styled.div`
    font-size: 2vw;
    font-weight: bold;
    color: #4a86ff;
    
`;

export default function Header(){
    return (
        <HeaderLayout>
        <Logo>PORTFOILIO.</Logo>
        <Nav />  {/* Nav 컴포넌트를 Header 안에서 사용 */}
        </HeaderLayout>
    );
}
