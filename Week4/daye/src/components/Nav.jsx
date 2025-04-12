import React from "react";
import styled from "styled-components";

//Nav 스타일 컴포넌트
const NavLayout = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`;
const NavItem = styled.p`
    display: flex;
    gap: 2vw;
    align-items: center;
    font-weight: bold;
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
