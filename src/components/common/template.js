import styled from "styled-components";

const TemplateComponentStyled = styled.div`
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 2rem;
  margin: 0 auto;
  text-align: center;
`;

const TemplateStyled = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 20rem;
  height: 310px;
  border: 0.2px solid #ccc;
  padding: 0.3rem;

  &:hover {
    background-color: #fff;
    cursor: pointer;
  }
`;

const TemplateImageStyled = styled.div`
  text-align: center;
  font-size: 7rem;
`;

const TemplateDescStyled = styled.div`
  color: darkgray;
  text-align: center;
  font-size: 1.5rem;
`;

export {
  TemplateStyled,
  TemplateImageStyled,
  TemplateDescStyled,
  TemplateComponentStyled,
};
