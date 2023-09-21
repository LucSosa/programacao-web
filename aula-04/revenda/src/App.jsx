import { useForm } from "react-hook-form"

export function App() {
  const { register, watch } = useForm({
    defaultValues: {
      modelo: "fiesta",
    }    
  })

  function calculaPreco(){
    let preco

    const FIESTA = 72900
    const KA = 65000
    const ECO = 84500

    if (watch("modelo") == "fiesta") {
      preco = FIESTA
    } else if(watch("modelo") == "ka") {
      preco = KA
    } else {
      preco = ECO
    }

    if(watch("alarme")) preco += 1200.50 
    if(watch("vidros")) preco += 2000.88

    return preco.toLocaleString("pt-br", {minimumFractionDigits: 2})
  }

  return (
    <div className="container-fluid">

      <header className="row">
        <div className='bg-primary text-white d-flex'>
          <img src="./ford.png" alt="Logo"
            className="my-2 me-3"
            width={200}
          />
          <div>
            <h1>Revenda Avenida</h1>
            <h2>Veículos em Promoção</h2>
          </div>
        </div>
      </header>

      <main className='row'>
        <div className="col-sm-3">
          <h4 className='text-primary mt-4'>Modelos em Promoção</h4>
          <div className="form-check text-primary">
            <input className="form-check-input" type="radio" id="fiesta" {...register("modelo")} value={"fiesta"} />
            <label className="form-check-label" htmlFor="fiesta">
              Fiesta
            </label>
          </div>
          <div className="form-check text-primary">
            <input className="form-check-input" type="radio" id="ka" {...register("modelo")} value={"ka"} />
            <label className="form-check-label" htmlFor="ka">
              Ka
            </label>
          </div>
          <div className="form-check text-primary">
            <input className="form-check-input" type="radio" id="eco" {...register("modelo")} value={"eco"} />
            <label className="form-check-label" htmlFor="eco">
              Eco Sport
            </label>
          </div>
        </div>
        <div className="col-sm-6">
          <img src={watch("modelo")+".png"} alt="Carro" className='img-fluid' />
        </div>
        <div className="col-sm-3">
          <h4 className='text-primary mt-4'>Selecione os Opcionais:</h4>
          <div className="form-check text-primary">
            <input className="form-check-input" type="checkbox" id="alarme" {...register("alarme")}/>
            <label className="form-check-label" htmlFor="alarme">
              Alarme
            </label>
          </div>
          <div className="form-check text-primary">
            <input className="form-check-input" type="checkbox" id="vidros" {...register("vidros")}/>
            <label className="form-check-label" htmlFor="vidros">
              Vidros Elétricos
            </label>
          </div>
        </div>
      </main>

      <footer className="row bg-danger text-white">
        <div className="col-sm-6">
          <h3 className='my-3'>Preço do Veículo R$: {calculaPreco()}</h3>
        </div>
        <div className="col-sm-6">
          <h3 className='float-end my-3'>
            <i>* Consulte Opções de Financiamento</i>
          </h3>
        </div>
      </footer>
    </div>
  )
}