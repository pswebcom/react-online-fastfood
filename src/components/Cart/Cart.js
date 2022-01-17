import React from "react";
import { CartStyled } from "../common";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const OrderContentStyled = styled.div`
  padding: 10px 0;
  font-family: "Ubuntu", sans-serif;
`;

const OrderContainerStyled = styled.div`
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid gray;
  text-align: center;
`;

const RowStyled = styled.div`
  display: flex;
  padding: 0.5rem;
  font-family: "Exo", sans-serif;
  justify-content: space-between;
  font-weight: 500;

  &:nth-child(even) {
    background: #eee;
  }
`;

const OrderItemsContainerStyled = styled.div`
  overflow: scroll;
  width: 99.5%;
  font-size: 1.4rem;
  padding: 1rem 0 2rem 0;
  border-bottom: 1px solid gray;
  margin-bottom: 8rem;
`;

const OrderImageStyled = styled.div`
  width: 25px;
  height: 25px;
  text-align: center;
`;

const OrderItemStyled = styled.div`
  font-size: 1.5rem;
  width: 205px;
  text-align: center;
  @media screen and (max-width: 991px) {
    font-size: 1.3rem;
  }
`;

const OrderPriceStyled = styled.div`
  font-size: 1.5rem;
  width: 90px;
  text-align: center;
  @media screen and (max-width: 991px) {
    font-size: 1.3rem;
  }
`;

const OrderButtonDivStyled = styled.div`
  display: flex;
  padding: 1rem 0;
  justify-content: center;
  align-items: center;
  background: #ffca33;
  box-shadow: 0 2px 20px 0 gray;
  z-index: 5;
  width: 100%;
  font-size: 1.5rem;
  font-family: "Exo", sans-serif;

  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  @media screen and (max-width: 800px) {
    width: 88%;
  }
`;

const OrderCancelStyled = styled.div`
  font-size: 1.5rem;
  i {
    cursor: pointer;
    color: red;

    &:hover {
      opacity: 0.6;
    }
  }

  @media screen and (max-width: 991px) {
    font-size: 1.3rem;
  }
`;

const showItems = () => {};

const Cart = ({ orders }) => {
  let modifiedOrders = orders;
  const checkIconStaus = (modifiedOrders) => {
    modifiedOrders.forEach((mOrder) => {
      let _id = mOrder.id;
      if (_id.includes("b")) {
        mOrder["myIcon"] = "fas fa-hamburger";
      } else if (_id.includes("p")) {
        mOrder["myIcon"] = "fas fa-pizza-slice";
      } else {
        mOrder["myIcon"] = "fab fa-gulp";
      }
    });
  };

  if (modifiedOrders) {
    checkIconStaus(modifiedOrders);
  }

  let location = useLocation();
  return (
    <>
      {location.pathname !== "/" && (
        <CartStyled>
          {orders.length === 0 ? (
            <OrderContainerStyled>
              <OrderContentStyled>This Cart is empty</OrderContentStyled>
            </OrderContainerStyled>
          ) : (
            <OrderContainerStyled>
              <div>This Cart has {orders.length} Items</div>
            </OrderContainerStyled>
          )}

          <OrderItemsContainerStyled>
            {showItems()}
            {orders.map((order) => (
              <RowStyled>
                <OrderImageStyled>
                  <i
                    className={order.myIcon}
                    style={{ color: order.color }}
                  ></i>
                </OrderImageStyled>
                <OrderItemStyled>{order.name}</OrderItemStyled>
                <OrderPriceStyled>{order.price}</OrderPriceStyled>
                <OrderCancelStyled>
                  <i className="fas fa-window-close"></i>{" "}
                </OrderCancelStyled>
              </RowStyled>
            ))}
          </OrderItemsContainerStyled>

          <OrderButtonDivStyled>Proceed To Checkout</OrderButtonDivStyled>
        </CartStyled>
      )}
    </>
  );
};

export default Cart;
