import React from "react";
import styled from "styled-components";

const DialogShadowStyled = styled.div` width: 100%; height: 100%; position: fixed; top: 0; background-color: black; opacity: 1; z-index: 4; cursor: pointer;`;

const DialogStyled = styled.div` width: 30%; background-color: #fff; position: fixed; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 5; max-height: calc(100%-100px); left: calc(50%-250px); padding-top: 1rem;`;

const IconStyled = styled.div` display: flex; justify-content: center; align-items: center;`;

const NameStyled = styled.div` text-align: center; font-size: 2rem; h3 { margin-bottom: 0.2rem; margin-top: 0.5rem; }`;

const PriceStyled = styled.div`
text-align: center;
font-size: 2rem;

h3 {
margin: 0;
}
`;

const DescStyled = styled.div` padding: 1rem; text-align: left; font-size: 1rem; p { font-size: 1.2rem; margin-top: 0; }`;

const CancelIconStyled = styled.div`
position: absolute;
right: 1rem;
top: 2rem;
cursor: pointer;

i {
font-size: 5rem;
color: #fff;
}
`;

const OrderManageStyled = styled.div``;

export const OrderButtonDivStyled = styled.div` height: 60px; display: flex; justify-content: center; background: #ffca33; box-shadow: 0 2px 20px 0 gray; z-index: 5;`;

export const OrderButtonStyled = styled.div`
color: #000;
height: 40px;
padding: 10px;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
cursor: pointer;
background-color: transparent;
font-size: 1.5rem;

&:hover {
opacity: 0.4;
}
`;

const Foodmodal = ({ openFood, setOpenFood, orders, setOrders }) => {
const close = () => {
setOpenFood();
};

const order = {
...openFood,
};
const addToOrder = () => {
//previous orders + latest order
setOrders([...orders, order]);
//hook closed
close();
};

let myVal;
const checkIconStaus = (Info) => {
let id = Info.id;
if (id.includes("b")) {
myVal = "fas fa-hamburger";
} else if (id.includes("p")) {
myVal = "fas fa-pizza-slice";
} else {
myVal = "fab fa-gulp";
}
};

if (openFood) {
checkIconStaus(openFood);
}

return openFood ? (
<>
<DialogShadowStyled onClick={close}>
<DialogStyled>
<IconStyled>
<i
className={myVal}
style={{
                color: openFood.color,
                fontSize: "12rem",
              }} ></i>
</IconStyled>
<NameStyled>

<h3>{openFood.name}</h3>
</NameStyled>
<PriceStyled>
<h3>{openFood.price}</h3>
</PriceStyled>
<DescStyled>
<p>{openFood.desc}</p>
</DescStyled>
<OrderManageStyled></OrderManageStyled>
<OrderButtonDivStyled>
<OrderButtonStyled onClick={addToOrder}>
Add To Order
</OrderButtonStyled>
</OrderButtonDivStyled>
</DialogStyled>
<CancelIconStyled onClick={close}>
<i class="fas fa-window-close"></i>
</CancelIconStyled>
</DialogShadowStyled>
</>
) : (
""
);
};

export default Foodmodal;
