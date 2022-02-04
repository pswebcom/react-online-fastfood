import React from "react";
import styled from "styled-components";

const ToppingsContainerStyled = styled.div`
  margin: 2rem 1rem;
  text-align: center;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  padding: 0.5rem;
  h3 {
    margin-bottom: 0.6rem;
    margin-top: 0;
  }

  height: auto;
`;

const ToppingsStyled = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const ToppingStyled = styled.div`
  height: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1 0 200px;
`;

const CheckBoxStyled = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 0.5rem;
  border: 2px solid red;
`;

const ToppingInput = ({ toppingVal }) => {
  let val;

  toppingVal.includes("Burger")
    ? (val = "Choose Ingredients")
    : toppingVal.includes("Pizza")
    ? (val = "Choose Toppings")
    : (val = "");

  return (
    <>
      <ToppingsContainerStyled>
        <h3> {val}</h3>
        <ToppingsStyled>
          <ToppingStyled>
            <CheckBoxStyled
              type="checkbox"
              id="topping1"
              name="topping1"
              value="Tomatoes"
            />
            <label for="topping1">Tomatoes</label>
          </ToppingStyled>
          <ToppingStyled>
            <CheckBoxStyled
              type="checkbox"
              id="topping2"
              name="topping2"
              value="Black Olives"
            />
            <label for="topping2">Black Olives</label>
          </ToppingStyled>
          <ToppingStyled>
            <CheckBoxStyled
              type="checkbox"
              id="topping3"
              name="topping3"
              value="Green Peppers"
            />
            <label for="topping3">Green Pepper</label>
          </ToppingStyled>
          <ToppingStyled>
            <CheckBoxStyled
              type="checkbox"
              id="topping4"
              name="topping4"
              value="Onions"
            />
            <label for="topping4">Onions</label>
          </ToppingStyled>
          <ToppingStyled>
            <CheckBoxStyled
              type="checkbox"
              id="topping5"
              name="topping5"
              value="Extra Cheese"
            />
            <label for="topping5">Extra Cheese</label>
          </ToppingStyled>
          <ToppingStyled>
            <CheckBoxStyled
              type="checkbox"
              id="topping6"
              name="topping6"
              value="Chicken"
            />
            <label for="topping1">Chicken</label>
          </ToppingStyled>
          <ToppingStyled>
            <CheckBoxStyled
              type="checkbox"
              id="topping7"
              name="topping7"
              value="Meat"
            />
            <label for="topping7">Meat</label>
          </ToppingStyled>
          <ToppingStyled>
            <CheckBoxStyled
              type="checkbox"
              id="topping8"
              name="topping8"
              value="Steak"
            />
            <label for="topping8">Steak</label>
          </ToppingStyled>
          <ToppingStyled>
            <CheckBoxStyled
              type="checkbox"
              id="topping9"
              name="topping9"
              value="Green Olives"
            />
            <label for="topping9">Green Olives</label>
          </ToppingStyled>
        </ToppingsStyled>
      </ToppingsContainerStyled>
    </>
  );
};

export default ToppingInput;
