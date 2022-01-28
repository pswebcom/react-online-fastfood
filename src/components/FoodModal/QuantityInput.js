import React from "react";
import styled from "styled-components";
import { Title } from "../common/title";

const QuantityInputStyled = styled.div`
  text-align: center;
  font-size: 25px;
  margin-bottom: 0.5rem;

  h3 {
    margin: 0;
    margin-top: 1rem;
  }

  input {
    font-size: 1rem;
    text-align: center;
    display: block;
    width: 20%;
    border: none;
    outline: none;
  }
`;

const IncrementContainer = styled(Title)`
  display: flex;
  height: 25px;
  justify-content: center;
  margin: 1rem;

  input {
    border: 1px solid darkgray;
    height: 35px;
    width: 50px;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const IncrDecrButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 35px;
  font-size: 50px;
  text-align: center;
  cursor: pointer;
  line-height: 23px;
  margin: 0 10px;
  border: 1px solid darkgray;
  outline: none;
  ${({ disabled }) =>
    disabled &&
    `
  opacity:0.5;
  cursor:auto;

  `}

  &:hover {
    background-color: #ffe3e3;
  }

  span {
    user-select: none;
  }
`;

const QuantityInput = ({ quantity }) => {
  const handleClickDecr = () => {
    if (quantity.quantityHook > 1) {
      quantity.setQuantityHook(quantity.quantityHook - 1);
    }
  };

  const handleClickIncr = () => {
    quantity.setQuantityHook(quantity.quantityHook + 1);
  };

  return (
    <>
      <QuantityInputStyled {...quantity}>
        <h3>Quantity</h3>
        <IncrementContainer>
          <IncrDecrButton
            onClick={handleClickDecr}
            disabled={quantity.quantityHook === 1}
          >
            <span>-</span>
          </IncrDecrButton>
          <input value={quantity.quantityHook} />
          <IncrDecrButton onClick={handleClickIncr}>
            {" "}
            <span>+</span>
          </IncrDecrButton>
        </IncrementContainer>
      </QuantityInputStyled>
    </>
  );
};

export default QuantityInput;
