import styled from "styled-components";

const bcolor = "purple";
const color = "white";
const padding = "padding:1rem";
const margin = "margin:1rem";

const borderRadius = (width = "5px") => {
  return `
  border-radius:${width}
    `;
};

const ButtonBasic = styled.button`
  background-color: orangered;
  color: #fff;
  font-weight: bold;
  ${padding};
  ${margin};
  ${borderRadius("5px")};
  box-shadow: none;
  font-size: 1rem;
  width: 100%;
  border: none;
  cursor: pointer;
`;

const ButtonSpl = styled.button`
  background-color: ${bcolor};
  color: ${color};
  font-weight: bold;
  padding: 10px;
  ${borderRadius()};
  box-shadow: none;
  font-size: 1rem;
  width: 100%;
  border: none;
  cursor: pointer;
  ${padding};
  ${margin};
`;

export { ButtonBasic, ButtonSpl };
