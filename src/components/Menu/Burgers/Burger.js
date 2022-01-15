import React from "react";
import {
  TemplateStyled,
  TemplateImageStyled,
  TemplateDescStyled,
} from "../../common";

const Burger = ({ burger, setOpenFood }) => {
  return (
    <TemplateStyled
      onClick={() => {
        setOpenFood(burger);
      }}
    >
      <TemplateImageStyled>
        <i className="fas fa-hamburger" style={{ color: burger.color }}></i>
      </TemplateImageStyled>
      <TemplateDescStyled>
        <p>{burger.name}</p>
      </TemplateDescStyled>
    </TemplateStyled>
  );
};

export default Burger;
