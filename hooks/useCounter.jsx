import { useMemo, useState } from "react";

export const useCounter = () => {
  const [count, setCount] = useState(1);
  const [change, setChange] = useState(true);

  const handleClick = () => {
    setCount((count) => count + 1);
  };

  const doubleCount = useMemo(() => {
    return count * 2;
  }, [count]);

  const handleChange = () => {
    change = !change;
    setChange(change);
  };

  return { count, doubleCount, change, handleClick, handleChange };
};
