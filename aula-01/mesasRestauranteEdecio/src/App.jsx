import { useState } from "react"

function App() {
  const [mesas, setMesas] = useState(10)
  const [aviso, setAviso] = useState('No momento, há mesas disponíveis')

  function ocuparMesa() {
    if (mesas == 0) {
      alert("Não há mesas disponíveis")
      return
    } else if (mesas == 1) {
      setAviso("Por favor, aguarde... Todas as mesas ocupadas")
    }

    setMesas(mesas - 1)
  }

  function desocuparMesa() {
    if (mesas == 10) {
      alert("Todas as mesas já estão disponíveis")
      return
    } else if (mesas == 0) {
      setAviso("No momento, há mesas disponíveis")
    }

    setMesas(mesas + 1)
  }

  return (
    <div className="container">

      <h2>Restaurante Avenida: Controle de Mesas</h2>
      <img src="mesas-restaurante.jpg" alt="Restaurante" width={600} />

      <div className="row mt-4">
        <div className="col-sm-4"><h3>N° Mesas Disponíveis: {mesas}</h3></div>
        <div className="col-sm-8"><h3>Mesas Ocupadas: {mesas}</h3></div>
      </div>

      <button className="btn btn-primary btn-lg mt-3 me-3" onClick={ocuparMesa}>Ocupar Mesa</button>
      <button className="btn btn-danger btn-lg mt-3 me-3" onClick={desocuparMesa}>Liberar Mesa</button>

      <h3 className="text-success mt-3 ">{aviso}</h3>
    </div>

  )
}

export default App
