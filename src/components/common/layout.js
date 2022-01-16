import styled from "styled-components";

const WrapStyledRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin: 0 auto;
  border: 2px solid green;
`;

const WrapStyledColumn = styled.div`
  display: flex;
  flex-flow: column;
`;

const CartStyled = styled.div`
  height: 83vh;
  min-width: 38%;
  max-width: 38%;
  margin-top: 6.3rem;
  margin-right: 1rem;
  position: fixed;
  right: 0;
  padding: 1rem;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #ccc;
  background-color: #fff;
`;

export { WrapStyledColumn, WrapStyledRow, CartStyled };
