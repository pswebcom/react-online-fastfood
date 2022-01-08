import React from "react";
import {
  TemplateStyled,
  TemplateImageStyled,
  TemplateDescStyled,
  Button,
} from "../../common";

const Drink = ({ drink }) => {
  return (
    <TemplateStyled>
      <TemplateImageStyled>
        <i class="fab fa-gulp" style={{ color: drink.color }}></i>
      </TemplateImageStyled>
      <TemplateDescStyled>
        <p>{drink.name}</p>
        <p>{drink.price}</p>
      </TemplateDescStyled>
      <Button>Buy</Button>
    </TemplateStyled>
  );
};

export default Drink;
