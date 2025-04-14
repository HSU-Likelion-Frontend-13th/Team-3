import React from "react";
import styled from "styled=components";

const NavLayout=styled.nav`

`;

const NavItem=styled.a`

`;

export default function Nav() {
    return (
      <NavLayout>
        
          <NavItem href="#about">ABOUT</NavItem>
          <NavItem href="#hobby">HOBBY</NavItem>
          <NavItem href="#">CONTACT</NavItem>
        
      </NavLayout>
    );
  }