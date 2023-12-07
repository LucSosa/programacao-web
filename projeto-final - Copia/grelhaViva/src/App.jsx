import { useState } from "react"
import Novidades from "./components/Novidades"
import Titulo from "./components/Titulo"

function App() {
  const [pepido, setPedido] = useState([])

  function adicionaPedido(titulo, preco) {
    const pedido2 = [...pedido]
    pedido2.push({titulo, preco})
    setPedido(pedido2)
  }

  return (
    <>
      <Titulo/>
      {/* <Novidades/> */}
    </>
  )
}

export default App
