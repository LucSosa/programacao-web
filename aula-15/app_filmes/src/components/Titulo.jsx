import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState } from 'react'

function Titulo(props) {
  const [open, setOpen] = useState(false)
  const [total, setTotal] = useState(0);

  function verCarrinho() {
    setOpen(true)

    const novoTotal = props.compras.reduce((acc, compra) => acc + compra.preco, 0);
    setTotal(novoTotal);
  }

  const listaCompras = props.compras.map(compra => (
    <tr key={compra.preco}>
      <td>{compra.titulo}</td>
      <td>{compra.preco.toLocaleString("pt-br", {minimumFractionDigits: 2})}</td>
    </tr>
  ))

  return (
    <>
      <nav className="navbar bg-warning">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img src="./logo.png" alt="Logo" width="30" height="24"
              className="d-inline-block align-text-top me-3" />
            AvenidaVídeo: Plataforma de Filmes Online
          </a>
          <button className="btn btn-primary position-relative" onClick={verCarrinho}>
            Ver Carrinho <i className="bi bi-cart-check"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {props.compras.length}
              <span className="visually-hidden">Filmes Adicionados</span>
            </span>
          </button>
        </div>
      </nav>
      <Modal open={open} onClose={() => setOpen(false)} center>
        <h3 className="mt-4">Lista dos Filmes Adicionados ao Carrinho</h3>
        { props.compras.length > 0 ? (
          <table className="table table-danger table-hover mt-3">
          <thead>
            <tr>
              <th>Título do Filme</th>
              <th>Preço R$</th>
            </tr>
          </thead>
          <tbody>
            {listaCompras}
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