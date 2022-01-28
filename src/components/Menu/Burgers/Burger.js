import React from "react";
import {
  TemplateStyled,
  TemplateImageStyled,
  TemplateDescStyled,
} from "../../common";

const Burger = ({ burger, setOpenFoodHook }) => {
  return (
    <TemplateStyled
      onClick={() => {
        setOpenFoodHook(burger);
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
