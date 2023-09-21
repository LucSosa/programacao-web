import _ from "lodash"

export function App() {
  const numbers =  ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero']
  const numbersShuffle = _.shuffle(numbers)


  return (
    <>
      <nav className="navbar bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            <img src="logo.png" alt="Logo" width="60" height="48" className="d-inline-block align-text-center" />
            Jogo da memória: Teste
          </a>
        </div>
      </nav>
      <div className="card text-center mt-3 w-75 mx-auto">
        <div className="card-header">
          <div className="row">
            <div className="col">
              <input type="text" className="form-control"
                placeholder="Nome do Apostador" />
            </div>
            <div className="col">
              <input type="text" className="form-control"
                placeholder="Valor R$" />
            </div>
            <div className="col">
              <button type="submit" className="btn btn-danger" >Responder</button>
            </div>
          </div>
        </div>
        <form className="mt-2">
          <div className="card-body">
            <div className="col">
              <div className="row mt-3">
                <div className="col border border-dark m-2">
                  <img src={`${numbersShuffle[0]}.png`} alt="" width={75} height={150} />
                </div>
                <div className="col border border-dark m-2">
                  <img src="two.png" alt="" width={75} height={150} />
                </div>
                <div className="col border border-dark m-2">
                  <img src="three.png" alt="" width={75} height={150} />
                </div>
                <div className="col border border-dark m-2">
                  <img src="four.png" alt="" width={75} height={150} />
                </div>
                <div className="col border border-dark m-2">
                  <img src="five.png" alt="" width={75} height={150} />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col border border-dark m-2">
                  <img src="x.png" alt="" width={75} height={150} />
                </div>
                <div className="col border border-dark m-2">
                  <img src="two.png" alt="" width={75} height={150} />
                </div>
                <div className="col border border-dark m-2">
                  <img src="three.png" alt="" width={75} height={150} />
                </div>
                <div className="col border border-dark m-2">
                  <img src="four.png" alt="" width={75} height={150} />
                </div>
                <div className="col border border-dark m-2">
                  <img src="four.png" alt="" width={75} height={150} />
                </div>
              </div>
            </div>
          </div>


          <div className="card-footer text-primary fw-bold p-3"></div>
        </form>
      </div>
    </>
  )
}