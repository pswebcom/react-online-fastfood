import React from "react";
import { createGlobalStyle } from "styled-components";
import { Header, ButtonProps } from "./components/common";

const GlobalStyle = createGlobalStyle`
body {
  color: #000;
  background-color:#f2f2f2;
  font-family: 'Ubuntu', sans-serif;
}
html {
  height: 100%;
}
h1,h2,h3{
  font-family: 'Exo', sans-serif;
}
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header title="hi this is from app.js" />
      <ButtonProps bcolor="blue" color="white">
        Primary Button
      </ButtonProps>
      <ButtonProps bcolor="white" color="#696969">
        Secondary Button
      </ButtonProps>
      <ButtonProps>Third Button</ButtonProps>
    </>
  );
};

export default App;
