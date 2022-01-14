import React from "react";
import Burger from "./Burger";
import {
  SectionTitle,
  TemplateComponentStyled,
  WrapStyledColumn,
} from "../../common";

const burgers = [
  { id: 1, name: "Chilli Burger", price: "$11", color: "red" },
  { id: 2, name: "Veggie Burger", price: "$15", color: "green" },
  { id: 3, name: "Egg Burger", price: "$11", color: "#F4c430" },
  { id: 4, name: "Chicken Burger", price: "$11", color: "goldenrod" },
  { id: 5, name: "Mushroom Burger", price: "$12", color: "tomato" },
  { id: 6, name: "Cheese Burger", price: "$14", color: "#355e3b" },
  { id: 7, name: "Steak Burger", price: "$11", color: "yellowgreen" },
  { id: 8, name: "Noodle Burger", price: "$11", color: "olive" },
];

// const burgerList = burgers.map((burger) => <Burger burger={burger} />);

const Burgers = (props) => {
  return (
    <WrapStyledColumn>
      <SectionTitle>BURGERS</SectionTitle>
      <TemplateComponentStyled>
        {burgers.map((burger) => (
          <Burger key={burger.id} burger={burger} {...props} />
        ))}
      </TemplateComponentStyled>
    </WrapStyledColumn>
  );
};

export default Burgers;
