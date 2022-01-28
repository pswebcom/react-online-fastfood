import React from "react";
import Burgers from "./components/Menu/Burgers/Burgers";
import Pizzas from "./components/Menu/Pizzas/Pizzas";
import Drinks from "./components/Menu/Drinks/Drinks";
import Navbar from "./components/Navbar/Navbar";
import Menu from "./components/Menu/Menu";
import Cart from "./components/Cart/Cart";
import { FoodModal } from "./components/FoodModal/FoodModal";
import QuantityInput from "./components/FoodModal/QuantityInput";

import { useOpenFoodHook } from "./Hooks/useOpenFoodHook";
import { useOrdersHook } from "./Hooks/useOrdersHook";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WrapStyledRow, GlobalStyle } from "./components/common";

const App = () => {
  const openFoodHook = useOpenFoodHook();
  const ordersHook = useOrdersHook();

  return (
    <>
      <GlobalStyle />
      <Router>
        <Navbar />
        {/*got openfood from div click & in FoodModal setOpenFood is for closing */}
        {/* <FoodModal FoodInfo={openFood} setOpenFood={setOpenFood} /> */}
        <FoodModal {...openFoodHook} {...ordersHook} />

        <WrapStyledRow>
          <Routes>
            <Route exact="true" path="/" element={<Menu />} />
            <Route
              exact="true"
              path="/burger"
              // element={<Burgers setOpenFood={setOpenFood} />}
              element={<Burgers {...openFoodHook} />}
            />
            <Route
              exact="true"
              path="/drink"
              // element={<Drinks setOpenFood={setOpenFood} />}
              element={<Drinks {...openFoodHook} />}
            />
            <Route
              exact="true"
              path="/pizza"
              // element={<Pizzas setOpenFood={setOpenFood} />}
              element={<Pizzas {...openFoodHook} />}
            />
          </Routes>
          <Cart {...ordersHook} />
        </WrapStyledRow>
      </Router>
    </>
  );
};

export default App;
