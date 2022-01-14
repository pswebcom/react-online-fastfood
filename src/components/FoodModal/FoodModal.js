import React from "react";
import styled from "styled-components";

const DialogShadowStyled = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background-color: black;
  opacity: 0.9;
  z-index: 4;
`;

const DialogStyled = styled.div`
  width: 22%;
  background-color: #fff;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 5;
  max-height: calc(100%-100px);
  left: calc(50%-250px);
`;

const IconStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const DialogBannerStyled = styled.div`
//   min-height: 200px;
//   margin-bottom: 20px;
// `;

const Foodmodal = ({ FoodInfo }) => {
  return FoodInfo ? (
    <>
      <DialogShadowStyled>
        <DialogStyled>
          <IconStyled>
            <i
              class="fas fa-hamburger"
              style={{
                color: FoodInfo.color,
                fontSize: "12rem",
              }}
            ></i>
          </IconStyled>
        </DialogStyled>
      </DialogShadowStyled>
    </>
  ) : (
    ""
  );
};

export default Foodmodal;
