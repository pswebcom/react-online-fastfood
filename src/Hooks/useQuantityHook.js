import { useState } from "react";

export const useQuantityHook = (defaultQuantity) => {
  const [quantityHook, setQuantityHook] = useState(defaultQuantity || 1);

  const onChange = (e) => {
    if (!+e.target.value >= 1) {
      setQuantityHook(1);
      return;
    }
    setQuantityHook(e.target.value);
  };

  return {
    quantityHook,
    setQuantityHook,
    onChange,
  };
};
