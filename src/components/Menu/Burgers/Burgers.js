import React from "react";
import Burger from "./Burger";
import {
  SectionTitle,
  TemplateComponentStyled,
  WrapStyledColumn,
} from "../../common";

const burgers = [
  {
    id: "b1",
    name: "Chilli Burger",
    price: "$11.12",
    color: "red",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "b2",
    name: "Veggie Burger",
    price: "$15.30",
    color: "green",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "b3",
    name: "Egg Burger",
    price: "$11.30",
    color: "#F4c430",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "b4",
    name: "Chicken Burger",
    price: "$12.30",
    color: "goldenrod",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "b5",
    name: "Mushroom Burger",
    price: "$12.10",
    color: "tomato",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "b6",
    name: "Cheese Burger",
    price: "$14.30",
    color: "#355e3b",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "b7",
    name: "Steak Burger",
    price: "$10.20",
    color: "yellowgreen",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    id: "b8",
    name: "Noodle Burger",
    price: "$11.00",
    color: "olive",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
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
