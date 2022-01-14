import React from "react";
import {
  TemplateStyled,
  TemplateImageStyled,
  TemplateDescStyled,
  Button,
} from "../../common";

const Burger = ({ burger, setOpenFood }) => {
  return (
    <TemplateStyled>
      <TemplateImageStyled>
        <i class="fas fa-hamburger" style={{ color: burger.color }}></i>
      </TemplateImageStyled>
      <TemplateDescStyled>
        <p>{burger.name}</p>
        <p>{burger.price}</p>
      </TemplateDescStyled>
      <Button
        onClick={() => {
          setOpenFood(burger);
        }}
      >
        Buy
      </Button>
    </TemplateStyled>
  );
};

export default Burger;
