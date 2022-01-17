import React from "react";
import styled from "styled-components";
import { NavbarColor, Title } from "../common";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import "./Navbar.css";

const NavbarStyled = styled.div`
  background-color: ${NavbarColor};
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  font-family: "Exo", sans-serif;
`;

const Logo = styled(Title)`
  color: #355e3b;
  font-size: 1.8rem;
  letter-spacing: 2px;
  padding-left: 5px;
  text-shadow: 2px 2px 3px #edaf6b;
  font-weight: 800;
`;

const MenuListStyled = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 25%;
`;
const ListStyled = styled.li`
  NavLink {
    color: #355e3b;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

const Navbar = () => {
  let location = useLocation();
  return (
    <>
      {location.pathname !== "/" && (
        <NavbarStyled>
          <Logo>Fast Food Online 🍔 </Logo>
          <MenuListStyled>
            <ListStyled>
              <NavLink
                to="/burger"
                exact="true"
                className={({ isActive }) =>
                  isActive ? "active" : "not-active"
                }
              >
                Burger
              </NavLink>
            </ListStyled>
            <ListStyled>
              <NavLink
                to="/drink"
                exact="true"
                className={({ isActive }) =>
                  isActive ? "active" : "not-active"
                }
              >
                Drink
              </NavLink>
            </ListStyled>
            <ListStyled>
              <NavLink
                to="/pizza"
                exact="true"
                className={({ isActive }) =>
                  isActive ? "active" : "not-active"
                }
              >
                Pizza
              </NavLink>
            </ListStyled>
            <ListStyled>
              <NavLink
                to="/cart"
                exact="true"
                className={({ isActive }) =>
                  isActive ? "active" : "not-active"
                }
              >
                <i className="fa fa-shopping-cart"></i>
              </NavLink>
            </ListStyled>
          </MenuListStyled>
        </NavbarStyled>
      )}
    </>
  );
};

export default Navbar;
