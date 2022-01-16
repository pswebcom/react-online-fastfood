import { useState } from "react";

export const useOrdersHook = () => {
  const [orders, setOrders] = useState([]);

  return { orders, setOrders };
};
