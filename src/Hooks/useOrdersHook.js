import { useState } from "react";

export const useOrdersHook = () => {
  const [ordersHook, setOrdersHook] = useState([]);

  return { ordersHook, setOrdersHook };
};
