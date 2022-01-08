import React from "react";
import { createGlobalStyle } from "styled-components";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
const GlobalStyle = createGlobalStyle`
body {
  color: #000;
  background-color:#f2f2f2;
  font-family: 'Ubuntu', sans-serif;
  margin: 0;
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
      <Navbar />
      <Menu />
    </>
  );
};

export default App;
