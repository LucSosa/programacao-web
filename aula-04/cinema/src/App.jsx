export function App() {

  return (
    <div className="container-fluid flex-column">
      <header className="row mb-4">
        <div className='bg-danger text-white d-flex justify-content-center align-items-center'>
          <img src="./vite.svg" alt="Logo"
            className="my-2 me-3"
            width={50}
          />
          <div>
            <h1>Cinema Avenida</h1>
          </div>
        </div>
      </header>

      <div className="card text-center w-25 ">
        <div className="card-header">
          Escolha o filme:
        </div>
        <div className="card-body">
          <h5 className="card-title"><img src="../public/filme.jpg" alt="" /></h5>
          <div className="input-group mb-3">
            <select className="form-select" id="inputGroupSelect02">
              <option value="1">Oppeheimer - R$ 12,00</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="input-group mb-3">
            <p className="btn btn-outline-secondary" type="button">N° Ingresso</p>
            <select className="form-select" id="inputGroupSelect03" aria-label="Example select with button addon">
              <option value="1">01</option>
              <option value="2">02</option>
              <option value="3">03</option>
            </select>
          </div>
        </div>
        <div className="card-footer text-muted">
          Total R$:
        </div>
      </div>
    </div>
  )
}