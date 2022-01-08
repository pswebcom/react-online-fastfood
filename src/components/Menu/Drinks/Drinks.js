import React from "react";
import Drink from "./Drink";
import { SectionTitle, TemplateComponentStyled } from "../../common";

const drinks = [
  { name: "Coke", price: "$3.75", color: "#C71514" },
  { name: "Diet Coke", price: "$3.50", color: "#ADB2B6" },
  { name: "Pepsi", price: "$3.75", color: "#056DB4" },
  { name: "Diet Pepsi", price: "$3.50", color: "#837D79" },
  { name: "Sprite", price: "$3", color: "#036B26" },
];

const drinkList = drinks.map((drink) => <Drink drink={drink} />);

const Drinks = () => {
  return (
    <>
      <SectionTitle>DRINKS</SectionTitle>
      <TemplateComponentStyled>{drinkList}</TemplateComponentStyled>
    </>
  );
};

export default Drinks;
