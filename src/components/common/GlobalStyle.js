import { createGlobalStyle } from "styled-components";

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

export { GlobalStyle };
