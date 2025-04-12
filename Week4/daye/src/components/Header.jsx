import React from "react";
import styled from "styled-components";
import Nav from "./Nav"

//Header 스타일 컴포넌트

const HeaderLayout = styled.div`
 width: 100vw;
 height: 10vh;
 display: flex;
 justify-content: space-between;
 align-items: center;

`;

const Logo = styled.div`
    font-size: 1.5vw;
    font-weight: bold;
    color: #4a86ff;
    
`;

export default function Header(){
    return (
        <HeaderLayout>
        <Logo>PORTFOILIO</Logo>
        <Nav />
        </HeaderLayout>
    );
}
