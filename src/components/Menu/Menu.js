import React from "react";

import {
  TemplateMenuStyled,
  TemplateMenuComponentStyled,
  MenuHeading,
} from "../common";

const Menu = () => {
  return (
    <>
      <TemplateMenuStyled>
        <TemplateMenuComponentStyled>
          <MenuHeading>Burger</MenuHeading>
        </TemplateMenuComponentStyled>
        <TemplateMenuComponentStyled>
          <MenuHeading>Pizza</MenuHeading>
        </TemplateMenuComponentStyled>
        <TemplateMenuComponentStyled>
          <MenuHeading>Drink</MenuHeading>
        </TemplateMenuComponentStyled>
      </TemplateMenuStyled>
    </>
  );
};

export default Menu;
