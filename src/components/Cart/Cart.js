import React from "react";
import { CartStyled } from "../common";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
// import {
//   OrderButtonDivStyled,
//   OrderButtonStyled,
// } from "../FoodModal/FoodModal";

const OrderButtonDivStyled = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffca33;
  box-shadow: 0 2px 20px 0 gray;
  z-index: 5;
  width: 100%;
  font-size: 1.5rem;
`;

const Cart = () => {
  let location = useLocation();

  return (
    <>
      {location.pathname !== "/" && (
        <CartStyled>
          <div>This is Cart</div>
          <OrderButtonDivStyled>Proceed To Checkout</OrderButtonDivStyled>
        </CartStyled>
      )}
    </>
  );
};

export default Cart;
