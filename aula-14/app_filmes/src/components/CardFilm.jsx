import Swal from 'sweetalert2';

function Sinopse(titulo, sinopse){
  Swal.fire({
    title: titulo,
    text: sinopse,
    icon: 'success',
    confirmButtonText: 'Cool'
  })
}

function CardFilme(props) {
  const {foto, titulo, genero, preco, duracao} = props.filme
    return (
      <div className="col-sm-4 mb-3 mb-sm-0">
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={foto} className="img-fluid rounded-start"
                alt="Capa do Filme" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">{genero}</p>
                <p className="card-text">Alugue por apenas R$:
                  {preco.toLocaleString("pt-br", { minimumFractionDigits: 2 })}
                </p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Duração: {duracao} min</small>
                </p>
                <button className="btn btn-sm btn-danger" onClick={() =>Sinopse(props.filme.titulo, props.filme.sinopse)}>
                  Ver Sinopse <i className="bi bi-film"></i>
                </button>
                <button className="btn btn-sm btn-primary float-end">
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