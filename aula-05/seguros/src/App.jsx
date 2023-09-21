import { useForm } from "react-hook-form"
import { useState } from "react"


function App() {
  let [price, setPrice] = useState(0)
  let [fees, setFees] = useState(0)
  const { register, handleSubmit, watch } = useForm({})

  function returnYear() {
    const year = new Date().getFullYear()
    return year
  }

  function calcPrice(data) {
    let usageYear = returnYear() - +data.year
    let x = 0

    if (usageYear <= 5) {
      x = +data.rating * 0.03
    } else {
      x = +data.rating * 0.05
    }

    if (watch("renovation")) {
      x = x * 0.9
    } 
    setPrice(x.toLocaleString("pt-br", { minimumFractionDigits: 2 }))
    setFees(x / 12)
  }
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="fiesta.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            Bootstrap
          </a>
        </div>
      </nav>
      <div className="card text-center mt-3 w-75 mx-auto">
        <div className="card-header">
          <img src="fiesta.png" alt="Seguro" width={200} />
          <h4>Seguradora de Veículos Avenida</h4>
        </div>
        <form onSubmit={handleSubmit(calcPrice)} >
          <div className="card-body">
            <div className="row">
              <div className="row">
                <div className="col">
                  <input type="text" className="form-control"
                    placeholder="Modelo do Veículo" />
                </div>
                <div className="col">
                  <input type="number" className="form-control"
                    placeholder="Ano" {...register("year")} />
                </div>
              </div>
              <div className="row mt-2 text-center">
                <div className="col">
                  <input type="number" className="form-control"
                    placeholder="R$ Avaliação (Fipe)" {...register("rating")} />
                </div>
                <div className="col text-center">
                  <input type="checkbox" className="form-check-input me-2" id="exampleCheck1" {...register("renovation")}/>
                  <label className="form-check-label" >É Renovação</label>
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-3">
            <button type="submit" className="btn btn-primary me-3" >Calcular</button>
            <button type="button" className="btn btn-danger">Limpar</button>
          </div>
          <div className="card-footer text-primary fw-bold">
            R$ Seguro: {price}   Em 12x de R$: {fees}
          </div>
        </form>
      </div>
    </>
  )
}

export default App
