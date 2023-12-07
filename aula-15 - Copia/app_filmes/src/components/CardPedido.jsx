import Swal from "sweetalert2"

function mostraDescricao(props){
  Swal.fire({
    title: props.nomePrato,
    text: props.descricao,
    icon: 'success'
  })
}

function CardPedido(props) {
  return (
    <div className="col-sm-4 mb-3 mb-sm-0">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4 mx-auto">
            <img src={props.pedido.foto} className="img-fluid rounded-start"
              alt="Capa do Filme" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.pedido.nomePrato}</h5>
              <p className="card-text">{props.pedido.categoria}</p>
              <p className="card-text">Preço R$:
                {props.pedido.preco.toLocaleString("pt-br", { minimumFractionDigits: 2 })}
              </p>
              <button className="btn btn-sm btn-danger" onClick={() => mostraDescricao(props.pedido)}>
                Ver Pedido
              </button>
              <button className="btn btn-sm btn-primary float-end"
                onClick={() => props.adicionaPedido(props.pedido.nomePrato, props.pedido.preco)}
              >
                Pedir
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  )
}

export default CardPedido