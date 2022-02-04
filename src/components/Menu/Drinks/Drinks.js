import React from "react";
import Drink from "./Drink";
import {
  SectionTitle,
  TemplateComponentStyled,
  WrapStyledColumn,
} from "../../common";

const drinks = [
  {
    id: "d1",
    name: "Coke.",
    price: 3.75,
    color: "#C71514",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",

    quantity: 1,
  },
  {
    id: "d2",
    name: "Diet Coke.",
    price: 3.55,
    color: "#ADB2B6",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    quantity: 1,
  },
  {
    id: "d3",
    name: "Pepsi.",
    price: 3.75,
    color: "#056DB4",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    quantity: 1,
  },
  {
    id: "d4",
    name: "Diet Pepsi.",
    price: 3.5,
    color: "#837D79",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    quantity: 1,
  },
  {
    id: "d5",
    name: "Sprite.",
    price: 3.75,
    color: "#036B26",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    quantity: 1,
  },
];

// const drinkList = drinks.map((drink) => <Drink drink={drink} />);

const Drinks = (props) => {
  return (
    <WrapStyledColumn>
      <SectionTitle>DRINKS</SectionTitle>
      {/* <TemplateComponentStyled>{drinkList}</TemplateComponentStyled> */}
      <TemplateComponentStyled>
        {drinks.map((drink) => (
          <Drink key={drink.id} drink={drink} {...props} />
        ))}
      </TemplateComponentStyled>
    </WrapStyledColumn>
  );
};

export default Drinks;
