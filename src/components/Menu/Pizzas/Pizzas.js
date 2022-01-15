import React from "react";
import Pizza from "./Pizza";
import {
  SectionTitle,
  TemplateComponentStyled,
  WrapStyledColumn,
} from "../../common";

const pizzas = [
  {
    id: "p1",
    name: "Veggie Pizza",
    price: "$15",
    color: "green",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "p2",
    name: "Chilli Pizza",
    price: "$11",
    color: "red",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "p3",
    name: "Egg Pizza",
    price: "$11",
    color: "#F4c430",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "p4",
    name: "Chicken Pizza",
    price: "$11",
    color: "goldenrod",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "p5",
    name: "Mushroom Pizza",
    price: "$12",
    color: "tomato",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "p6",
    name: "Cheese Pizza",
    price: "$14",
    color: "#355e3b",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "p7",
    name: "Steak Pizza",
    price: "$11",
    color: "yellowgreen",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "p8",
    name: "Noodle Pizza",
    price: "$11",
    color: "olive",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
];

// const pizzaList = pizzas.map((pizza) => <Pizza pizza={pizza} {...props} />);

const Pizzas = (props) => {
  return (
    <WrapStyledColumn>
      <SectionTitle>PIZZA</SectionTitle>
      {/* <TemplateComponentStyled>{pizzaList}</TemplateComponentStyled> */}
      <TemplateComponentStyled>
        {pizzas.map((pizza) => (
          <Pizza key={pizza.id} pizza={pizza} {...props} />
        ))}
      </TemplateComponentStyled>
    </WrapStyledColumn>
  );
};

export default Pizzas;
