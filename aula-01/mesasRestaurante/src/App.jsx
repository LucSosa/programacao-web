import { useState } from 'react'
import './App.css'

function App() {
  const [mesa, setMesa] = useState(10)

  function ocupaMesa() {
    if (mesa > 0) {
      setMesa(mesa - 1)
    }
  }
  function desocupaMesa() {
    if (mesa < 10) {
      setMesa(mesa + 1)
    }
  }

  return (
    <div className="container">
      <div className="white-container">
        <h1>Restaurante do Sosa</h1>
        <hr />
        <div className="button-container">
          <button onClick={ocupaMesa}>Ocupar Mesa</button>
          <button onClick={desocupaMesa}>Liberar Mesa</button>
        </div>
        <h2>Número de mesas: {mesa}</h2>
      </div>
    </div>
  )
}

export default App
