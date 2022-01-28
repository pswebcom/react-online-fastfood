import React from "react";
import {
  TemplateStyled,
  TemplateImageStyled,
  TemplateDescStyled,
} from "../../common";

const Drink = ({ drink, setOpenFoodHook }) => {
  return (
    <TemplateStyled
      onClick={() => {
        setOpenFoodHook(drink);
      }}
    >
      <TemplateImageStyled>
        <i className="fab fa-gulp" style={{ color: drink.color }}></i>
      </TemplateImageStyled>
      <TemplateDescStyled>
        <p>{drink.name}</p>
      </TemplateDescStyled>
    </TemplateStyled>
  );
};

export default Drink;
