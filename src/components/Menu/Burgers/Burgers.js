import React from "react";
import Burger from "./Burger";
import { SectionTitle } from "../../common";
import { TemplateComponentStyled } from "../../common";

const burgers = [
  { name: "Veggie Burger", price: "$15", color: "green" },
  { name: "Chilli Burger", price: "$11", color: "red" },
  { name: "Egg Burger", price: "$11", color: "#F4c430" },
  { name: "Chicken Burger", price: "$11", color: "goldenrod" },
  { name: "Mushroom Burger", price: "$12", color: "tomato" },
  { name: "Cheese Burger", price: "$14", color: "#355e3b" },
  { name: "Steak Burger", price: "$11", color: "yellowgreen" },
  { name: "Noodle Burger", price: "$11", color: "olive" },
];

const burgerList = burgers.map((burger) => <Burger burger={burger} />);

const Burgers = () => {
  return (
    <>
      <SectionTitle>BURGERS</SectionTitle>
      <TemplateComponentStyled>{burgerList}</TemplateComponentStyled>
    </>
  );
};

export default Burgers;
