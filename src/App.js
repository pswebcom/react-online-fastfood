import React, { useState } from "react";
import Burgers from "./components/Menu/Burgers/Burgers";
import Pizzas from "./components/Menu/Pizzas/Pizzas";
import Drinks from "./components/Menu/Drinks/Drinks";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";
import FoodModal from "./components/FoodModal/FoodModal";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WrapStyledRow, GlobalStyle } from "./components/common";

const App = () => {
  const [openFood, setOpenFood] = useState();

  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        {/*got openfood from div click & in FoodModal setOpenFood is for closing */}
        <FoodModal FoodInfo={openFood} setOpenFood={setOpenFood} />
        <WrapStyledRow>
          <Routes>
            <Route exact="true" path="/" element={<Menu />} />
            <Route
              exact="true"
              path="/burger"
              element={<Burgers setOpenFood={setOpenFood} />}
            />
            <Route
              exact="true"
              path="/drink"
              element={<Drinks setOpenFood={setOpenFood} />}
            />
            <Route
              exact="true"
              path="/pizza"
              element={<Pizzas setOpenFood={setOpenFood} />}
            />
          </Routes>
          <Cart />
        </WrapStyledRow>
      </Router>
    </>
  );
};
// Morningside: 416-289-5000, ext 8025
// • Progress: 416-289-5000, ext 2627
export default App;
