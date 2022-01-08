import React from "react";
import {
  TemplateStyled,
  TemplateImageStyled,
  TemplateDescStyled,
  Button,
} from "../../common";

const Pizza = ({ pizza }) => {
  return (
    <TemplateStyled>
      <TemplateImageStyled>
        <i class="fas fa-pizza-slice" style={{ color: pizza.color }}></i>
      </TemplateImageStyled>
      <TemplateDescStyled>
        <p>{pizza.name}</p>
        <p>{pizza.price}</p>
      </TemplateDescStyled>
      <Button>Buy</Button>
    </TemplateStyled>
  );
};

export default Pizza;
