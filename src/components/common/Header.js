import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.section`
  background: green;
  transition: all 1s ease-in-out;

  h1 {
    color: #fff;
  }

  .title {
    color: #eee;
  }

  &:hover {
    background-color: blue;
    cursor: pointer;
  }
`;

const Header = ({ title }) => {
  return (
    <HeaderWrapper>
      <h1>{title}</h1>
      <h2 className="title">Another Title</h2>
    </HeaderWrapper>
  );
};

export { Header };
