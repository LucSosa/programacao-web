import { useState } from 'react';
import './App.css'

function App() {
  const [mesa, setMesa] = useState(10)
  let ocupacao = 10

  function ocupaMesa() {
    if (mesa > 0) {
      setMesa(mesa - 1);
      ocupacao--;
    }
  }
  function desocupaMesa() {
    if (ocupacao < 10) {
      setMesa(mesa + 1);
      ocupacao++;
    }
  }

  return (
    <>
      <h1>Restaurante do Sosa</h1>
      <hr />
      <button onClick={ocupaMesa}>Ocupar Mesa</button>
      <button onClick={desocupaMesa}>Liberar Mesa</button>
      <h2>Número de mesas: {mesa}</h2>
    </>
  )
}

export default App
