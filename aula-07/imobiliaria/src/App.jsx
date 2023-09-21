import { useState } from "react"
import { useForm } from "react-hook-form"

function App() {
  const { register, handleSubmit } = useForm({})
  const [price, setPrice] = useState(0)
  const [message, setMessage] = useState("")
  
  function calcPrice(data) {
    const { optionOne, optionTwo, optionThree, input} = data

    console.log(optionTwo);
    
    if(optionOne) setPrice(250000)

    if(optionTwo) setPrice(345000)

    if(optionThree) setPrice(420000)

    const newPrice = ((price - input) / 60).toLocaleString("pt-br", { minimumFractionDigits: 2 })
    setPrice(newPrice)

    setMessage(`Entrada de R$:${input} + 60 parcelas de R$: ${newPrice} `)
  }
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="fiesta.png" alt="Logo" width="30" height="24" className="d-inline-block align-text-top" />
            Construtora Avenida
          </a>
        </div>
      </nav>
      <div className="card text-center mt-3 w-75 mx-auto">
        <div className="card-header">
          <img src="fiesta.png" alt="Seguro" width={200} />
          <h4>Construtora Avenida</h4>
        </div>
        <form onSubmit={handleSubmit(calcPrice)} >
          <div className="card-body">
            <div className="row">
              <div className="row">
                <div className="col">
                  <input type="radio" className="form-control"
                     {...register("optionOne")} />
                </div>
                <div className="col">
                  <input type="radio" className="form-control"
                     {...register("optionTwo")} />
                </div>
                <div className="col">
                  <input type="radio" className="form-control"
                     {...register("optionThree")} />
                </div>
              </div>
            </div>
          </div>
          <div className="col mb-3">
          <div className="col">
                  <input type="text" className="form-control"
                    placeholder="Valor da Entrada" {...register('input')}/>
                </div>
            <button type="submit" className="btn btn-primary me-3" >Calcular</button>
          </div>
          <div className="card-footer text-primary fw-bold">
            {message}
          </div>
        </form>
      </div>
    </>

  )
}

export default App
