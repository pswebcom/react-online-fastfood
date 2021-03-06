import styled from "styled-components";

const TemplateComponentStyled = styled.div`
  min-width: 55%;
  max-width: 55%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 2rem;
  text-align: center;
  @media screen and (max-width: 991px) {
    min-width: 40%;
    max-width: 44%;
  }

  @media screen and (max-width: 760px) {
    min-width: 42%;
    max-width: 42%;
  }

  @media screen and (max-width: 700px) {
    min-width: 100%;
  }
`;

const TemplateStyled = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 18rem;
  min-width: 18rem;
  height: 225px;
  border: 0.2px solid #ccc;
  padding: 0.3rem;

  &:hover {
    background-color: #fff;
    cursor: pointer;
  }
`;

const TemplateImageStyled = styled.div`
  text-align: center;
  font-size: 8rem;
`;

const TemplateDescStyled = styled.div`
  color: #696969;
  text-align: center;
  font-size: 2rem;
`;

const TemplateMenuStyled = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  background-color: #fff;
  height: 65vh;
  align-items: center;
  width: 50%;
  margin: 7rem auto;
  border: 3px solid green;
`;

const TemplateMenuComponentStyled = styled.div`
  width: 95%;
  height: 140px;
  margin: 0 auto;
  background-color: #33cd32;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.6;
    cursor: pointer;
  }
`;

export {
  TemplateStyled,
  TemplateImageStyled,
  TemplateDescStyled,
  TemplateComponentStyled,
  TemplateMenuStyled,
  TemplateMenuComponentStyled,
};
