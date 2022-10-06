import React from "react";
import useCounter from './useCounter'

function Contador() {
  const counterHook = useCounter();
  
  return (
    <div>
      <h1>Mi contador dentro de un componente</h1>
      <p>{counterHook.counter}</p>
      <button onClick={counterHook.onSuma}>Sumar++</button>
      <button onClick={counterHook.onResta}>Restar--</button>
      <button onClick={counterHook.onReset}>Reset!!</button>
    </div>
  )
}

export default Contador;
