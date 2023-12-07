import { useEffect, useState } from "react"
import Pedidos from "./components/Pedidos"
import Titulo from "./components/Titulo"

function App() {
  const [pedidos, setPedidos] = useState([])

  function adicionaPedido(titulo, preco) {
    const compras2 = [...pedidos]
    compras2.push({titulo, preco})
    setPedidos(compras2)

    localStorage.setItem("compras", JSON.stringify(compras2))
  }

  useEffect(() => { 
    if (localStorage.getItem("compras")) {
      const compras2 = JSON.parse(localStorage.getItem("compras"))
      setPedidos(compras2)
    }
  }, [])

  return (
    <>
      <Titulo pedidos={pedidos}/>
      <Pedidos adicionaPedido={adicionaPedido}/>
    </>
  )
}

export default App
