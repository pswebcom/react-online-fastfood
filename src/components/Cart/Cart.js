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
  color: red;
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
  font-size: 1.2rem;

  padding: 1rem 0 2rem 0;
  border-bottom: 1px solid gray;
  margin-bottom: 8rem;
  @media screen and (max-width: 991px) {
    font-size: 1.1rem;
  }
`;

const OrderImageStyled = styled.div`
  width: 25px;
  height: 25px;
  text-align: center;
`;

const OrderItemStyled = styled.div`
  font-size: 1.1rem;
  width: 205px;
  text-align: center;
  @media screen and (max-width: 991px) {
    font-size: 1.1rem;
  }
`;

const OrderPriceStyled = styled.div`
  font-size: 1.1rem;
  width: 90px;
  text-align: center;
  @media screen and (max-width: 991px) {
    font-size: 1.1rem;
  }
`;

const OrderQtyStyled = styled.div`
  font-size: 1.1rem;
  width: 90px;
  text-align: center;
  @media screen and (max-width: 991px) {
    font-size: 1.1rem;
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

const OrderEditStyled = styled.div`
  font-size: 1.15rem;

  i {
    cursor: pointer;
    color: green;

    &:hover {
      opacity: 0.6;
    }
  }

  @media screen and (max-width: 991px) {
    font-size: 1.1rem;
  }
`;

const OrderCancelStyled = styled.div`
  position: relative;
  font-size: 1.25rem;
  i {
    cursor: pointer;
    color: red;

    &:hover {
      opacity: 0.6;
    }
    padding-top: 0.1rem;
    padding-left: 0.2rem;
  }

  @media screen and (max-width: 991px) {
    font-size: 1.2rem;
    padding-top: 0.1rem;
  }

  @media screen and (max-width: 800px) {
    font-size: 1.2rem;
    padding-top: 0rem;
  }
`;

const Cart = ({ ordersHook }) => {
  let modifiedOrders = ordersHook;
  console.log(modifiedOrders);
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
          {ordersHook.length === 0 ? (
            <OrderContainerStyled>
              <OrderContentStyled>This Cart is empty</OrderContentStyled>
            </OrderContainerStyled>
          ) : (
            <OrderContainerStyled>
              <div>This Cart has {ordersHook.length} Items</div>
            </OrderContainerStyled>
          )}

          <OrderItemsContainerStyled>
            {/* {showItems()} */}
            {ordersHook.map((order) => (
              <RowStyled>
                <OrderImageStyled>
                  <i
                    className={order.myIcon}
                    style={{ color: order.color }}
                  ></i>
                </OrderImageStyled>
                <OrderItemStyled>{order.name}</OrderItemStyled>
                <OrderPriceStyled>
                  $
                  {`${order.quantity.quantityHook}` *
                    parseFloat(`${order.price}`)}
                </OrderPriceStyled>
                <OrderQtyStyled>
                  {order.quantity.quantityHook === 1
                    ? `${order.quantity.quantityHook} Item`
                    : `${order.quantity.quantityHook} Items`}
                </OrderQtyStyled>
                <OrderEditStyled>
                  <i class="fas fa-edit"></i>
                  {/* <TooltipEdit className="xcv">
                    <span>Edit Order</span>
                  </TooltipEdit> */}
                </OrderEditStyled>
                <OrderCancelStyled>
                  <i className="fas fa-window-close"></i>
                  {/* <TooltipCancel>
                    <span>Cancel</span>
                  </TooltipCancel> */}
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
