import styled from "styled-components";

const ButtonProps = styled.button`
  background: ${(props) => (props.bcolor ? props.bcolor : "green")};
  color: ${(props) => (props.color ? props.color : "#fff")};
  padding: 1rem;
  font-size: 2rem;
`;

export { ButtonProps };
