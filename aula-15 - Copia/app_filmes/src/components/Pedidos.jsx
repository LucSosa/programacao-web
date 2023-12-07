import { useState, useEffect } from "react"
import { dados } from "../../public/dados"
import CardPedido from "./CardPedido"

function Pedidos(props) {
  const [filmes, setFilmes] = useState([])

  useEffect(() => {
    setFilmes(dados)
  }, [])

  const listaPedidos = filmes.map(pedido => (
    <CardPedido
      key={pedido.id}
      pedido={pedido}
      adicionaPedido={props.adicionaPedido}
    />
  ))

  return (
    <div className="container mt-3">
      <h3>Cardápio:</h3>
      <div className="row">
        {listaPedidos}
      </div>
    </div>
  )
}

export default Pedidos