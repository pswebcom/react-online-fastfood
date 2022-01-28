import { useState } from "react";

export const useOpenFoodHook = () => {
  const [openFoodHook, setOpenFoodHook] = useState();

  return { openFoodHook, setOpenFoodHook };
};
