// Custom hook
import { useState } from "react";

const useCounter = () => {
  const [counter, setCounter] = useState(0);

  const onSuma = () => {
    setCounter(counter + 1);
  }

  const onResta = () => {
    setCounter(counter - 1)
  };

  const onReset = () => {
    setCounter(0);
  }

  return {
    counter: counter,
    onSuma: onSuma,
    onResta: onResta,
    onReset: onReset,
  }

};

export default useCounter;
