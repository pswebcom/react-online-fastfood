import React from "react";
import {
  TemplateStyled,
  TemplateImageStyled,
  TemplateDescStyled,
} from "../../common";

const Pizza = ({ pizza, setOpenFoodHook }) => {
  return (
    <TemplateStyled
      onClick={() => {
        setOpenFoodHook(pizza);
      }}
    >
      <TemplateImageStyled>
        <i className="fas fa-pizza-slice" style={{ color: pizza.color }}></i>
      </TemplateImageStyled>
      <TemplateDescStyled>
        <p>{pizza.name}</p>
      </TemplateDescStyled>
    </TemplateStyled>
  );
};

export default Pizza;
