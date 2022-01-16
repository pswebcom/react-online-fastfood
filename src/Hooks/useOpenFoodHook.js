import { useState } from "react";

export const useOpenFoodHook = () => {
  const [openFood, setOpenFood] = useState();

  return { openFood, setOpenFood };
};
