import React from "react";
import {
  TemplateStyled,
  TemplateImageStyled,
  TemplateDescStyled,
  Button,
} from "../../common";

const Burger = ({ burger }) => {
  return (
    <TemplateStyled>
      <TemplateImageStyled>
        <i class="fas fa-hamburger" style={{ color: burger.color }}></i>
      </TemplateImageStyled>
      <TemplateDescStyled>
        <p>{burger.name}</p>
        <p>{burger.price}</p>
      </TemplateDescStyled>
      <Button>Buy</Button>
    </TemplateStyled>
  );
};

export default Burger;
