import Swal from "sweetalert2"

function mostraSinopse(props){
  Swal.fire({
    title: props.title,
    text: props.sinopse,
    icon: 'question'
  })
}

function CardFilme(props) {
  return (
    <div className="col-sm-4 mb-3 mb-sm-0">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={props.filme.foto} className="img-fluid rounded-start"
              alt="Capa do Filme" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.filme.titulo}</h5>
              <p className="card-text">{props.filme.genero}</p>
              <p className="card-text">Alugue por apenas R$:
                {props.filme.preco.toLocaleString("pt-br", { minimumFractionDigits: 2 })}
              </p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Duração: {props.filme.duracao} min</small>
              </p>
              <button className="btn btn-sm btn-danger" onClick={() => mostraSinopse(props.filme)}>
                Ver Sinopse <i className="bi bi-film"></i>
              </button>
              <button className="btn btn-sm btn-primary float-end"
                onClick={() => props.adicionaFilme(props.filme.titulo, props.filme.preco)}
              >
                Alugar <i className="bi bi-coin"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardFilme