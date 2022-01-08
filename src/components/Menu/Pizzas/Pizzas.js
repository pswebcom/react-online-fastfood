import React from "react";
import Pizza from "./Pizza";
import { SectionTitle, TemplateComponentStyled } from "../../common";

const pizzas = [
  { name: "Veggie Pizza", price: "$15", color: "green" },
  { name: "Chilli Pizza", price: "$11", color: "red" },
  { name: "Egg Pizza", price: "$11", color: "#F4c430" },
  { name: "Chicken Pizza", price: "$11", color: "goldenrod" },
  { name: "Mushroom Pizza", price: "$12", color: "tomato" },
  { name: "Cheese Pizza", price: "$14", color: "#355e3b" },
  { name: "Steak Pizza", price: "$11", color: "yellowgreen" },
  { name: "Noodle Pizza", price: "$11", color: "olive" },
];

const pizzaList = pizzas.map((pizza) => <Pizza pizza={pizza} />);

const Pizzas = () => {
  return (
    <>
      <SectionTitle>PIZZA</SectionTitle>
      <TemplateComponentStyled>{pizzaList}</TemplateComponentStyled>
    </>
  );
};

export default Pizzas;
