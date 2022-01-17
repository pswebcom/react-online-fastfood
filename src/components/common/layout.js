import styled from "styled-components";

const WrapStyledRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 98%;
  margin: 0 auto;
  box-sizing: border-box;
`;

const WrapStyledColumn = styled.div`
  display: flex;
  flex-flow: column;
`;

const CartStyled = styled.div`
  height: 83vh;
  min-width: 43%;
  margin-top: 6.3rem;
  box-sizing: border-box;
  position: fixed;
  right: 0.7rem;
  padding: 1rem;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;

  @media screen and (max-width: 991px) {
    max-width: 45.5%;
    min-width: 45.5%;
  }

  @media screen and (max-width: 800px) {
    padding: 0;
  }

  @media screen and (max-width: 760px) {
    max-width: 55%;
    min-width: 55%;
  }
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export { WrapStyledColumn, WrapStyledRow, CartStyled };
