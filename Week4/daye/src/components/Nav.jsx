import React from "react";
import styled from "styled-components";

//Nav 스타일 컴포넌트
const NavLayout = styled.div`
    display: flex;
    gap: 5vw;
    justify-content: baseline;
    align-items: center;
    margin-left: 20vw; 
    
`;
const NavItem = styled.p`
    font-weight: bold;
    font-size: 1vw;

`;



export default function Nav() {
  return (
   <NavLayout>
        <NavItem>ABOUT</NavItem>
        <NavItem>CONTACT</NavItem>
        <NavItem>HOBBY</NavItem>
   </NavLayout>
  );
}
