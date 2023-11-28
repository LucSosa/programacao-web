import { useState } from "react"
import Novidades from "./components/Novidades"
import Titulo from "./components/Titulo"

function App() {
  const [compras, setCompras] = useState([])

  function adicionaFilme(titulo, preco) {
    const compras2 = [...compras]
    compras2.push({titulo, preco})
    setCompras(compras2)
  }

  return (
    <>
      <Titulo compras={compras}/>
      <Novidades adicionaFilme={adicionaFilme}/>
    </>
  )
}

export default App
