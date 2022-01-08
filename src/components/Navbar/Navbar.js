import React from "react";
import styled from "styled-components";
import { NavbarColor, Title } from "../common";

const NavbarStyled = styled.div`
  background-color: ${NavbarColor};
  padding: 0.5rem;
`;

const Logo = styled(Title)`
  color: #fff;
  font-size: 1.4rem;
  letter-spacing: 2px;
  padding-left: 5px;
  text-shadow: 2px 2px 3px #edaf6b;
`;

const Navbar = () => {
  return (
    <NavbarStyled>
      <Logo>Fast Food Online 🍔 </Logo>
    </NavbarStyled>
  );
};

export default Navbar;
