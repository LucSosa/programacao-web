import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState } from 'react'

function Titulo(props) {
  const [open, setOpen] = useState(false)
  const [total, setTotal] = useState(0);

  function verPedido() {
    setOpen(true)

    const novoTotal = props.pedidos.reduce((acc, pedido) => acc + pedido.preco, 0);
    setTotal(novoTotal);
  }

  const listapedidos = props.pedidos.map(pedido => (
    <tr key={pedido.preco}>
      <td>{pedido.titulo}</td>
      <td>{pedido.preco.toLocaleString("pt-br", {minimumFractionDigits: 2})}</td>
    </tr>
  ))

  return (
    <>
      <nav className="navbar bg-danger">
        <div className="container">
          <a className="navbar-brand text-white " href="#">
            GrelhaViva
          </a>
          <button className="btn btn-primary position-relative" onClick={verPedido}>
            Ver Pedido <i className="bi bi-cart-check"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">
              {props.pedidos.length}
              <span className="visually-hidden">Pedidos Adicionados</span>
            </span>
          </button>
        </div>
      </nav>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <h3 className="mt-4">Lista dos Pedidos Adicionados ao Carrinho</h3>
        { props.pedidos.length > 0 ? (
          <table className="table table-danger table-hover mt-3">
          <thead>
            <tr>
              <th>Nome do Pedido</th>
              <th>Preço R$</th>
            </tr>
          </thead>
          <tbody>
            {listapedidos}
            <tr>
              <td>Total: </td>
              <td>{total.toLocaleString("pt-br", {minimumFractionDigits: 2})}</td>
            </tr>
          </tbody>
        </table> ) : (
          <p className="text-danger">O carrinho está vazio!</p>
        )}
      </Modal>
    </>
  )
}

export default Titulo