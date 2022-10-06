import './App.css';
import Contador from './Contador';
import Form from './Form';
import useCounter from './useCounter';

function App() {
  const counterHook = useCounter();
  return (
    <div className="App">
      <h1>Mi contador básico</h1>
      <p>{counterHook.counter}</p>
      <p>Inpar</p>
      <button onClick={counterHook.onSuma}>Suma++</button>
      <button onClick={counterHook.onResta}>Resta--</button>
      
      {/* Componente contador  */}
      <Contador />
      
      <br />
      <Form />


    </div>
  );
}

export default App;