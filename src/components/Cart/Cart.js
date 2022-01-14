import React from "react";
import { CartStyled } from "../common";
import { useLocation } from "react-router-dom";

const Cart = () => {
  let location = useLocation();

  return (
    <>
      {location.pathname !== "/" && (
        <CartStyled>
          <div>This is Cart</div>
        </CartStyled>
      )}
    </>
  );
};

export default Cart;
