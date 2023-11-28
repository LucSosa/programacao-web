import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

function App() {
  const { register, handleSubmit, reset, setFocus } = useForm({})
  const [compras, setCompras] = useState([])
  const [total, setTotal] = useState(0)

  function adicionaProduto(data) {
    const { produto, preco } = data
    const compras2 = [
      ...compras
    ]

    compras2.push({ produto: produto, preco: Number(preco) })
    setCompras(compras2)

    setFocus("produto")
    reset({ produto: "", preco: "" })

    console.log(compras2.reduce((acc, compra) => acc + Number(compra.preco), 0));
    let total2 = total + Number(preco)
    setTotal(total2)

    localStorage.setItem("compras", JSON.stringify(compras2))
    localStorage.setItem("total", total2)
  }

  function limparDados() {
    Swal.fire({
      title: 'Espere Ai!',
      text: 'Você realmente deseja apagar os dados?',
      icon: 'error',
      confirmButtonText: 'Limpar Dados',
    }).then((result) => {
      if(result.isConfirmed) {
        console.log('Entrei');
        reset()
        localStorage.clear()
        window.location.reload(false)
      }
    })

      
  }

  const listaCompras = compras.map(compra => (
    <h4 className="d-flex justify-content-between" key={compra.produto}>
      <span>{compra.produto}</span>
      <span>{compra.preco.toLocaleString("pt-br", { minimumFractionDigits: 2 })}</span>
    </h4>
  ))

  useEffect(() => {
    setFocus("produto")

    if (localStorage.getItem("compras")) {
      const total2 = Number(localStorage.getItem("total"))
      setTotal(total2)
      const compras2 = JSON.parse(localStorage.getItem("compras"))
      setCompras(compras2)
    }
  }, [])

  return (
    <div className="container-fluid">
      <nav className="navbar bg-info">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="./logo.png" alt="Logo"
              width="50" height="40" className="d-inline-block me-3" />
            App Controle de Compras
          </a>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <img src="./super.jpg" alt="Super" className="img-fluid mt-3" />
          </div>
          <div className="col-sm-8">
            <form className="row mt-3" onSubmit={handleSubmit(adicionaProduto)}>
              <div className="col-md-6">
                <input type="text" placeholder="Produto"
                  className="form-control form-control-lg" {...register("produto")} required />
              </div>
              <div className="col-md-2">
                <input type="number" step="0.01" min="0.0" placeholder="Preço R$"
                  className="form-control form-control-lg" {...register("preco")} required />
              </div>
              <div className="col-md-2 d-grid">
                <input type="submit" value="Adicionar" className="btn btn-primary btn-lg" />
              </div>
              <div className="col-md-2 d-grid">
                <input type="button" value="Limpar" className="btn btn-danger btn-lg" 
                onClick={limparDados}/>
              </div>
            </form>
            <div className="card text-center mt-3 w-100 mx-auto">
              <div className="card-header">
                <h3 className="text-start">Lista dos Produtos Adicionados</h3>
              </div>
              <div className="card-body text-primary">
                {listaCompras}
              </div>
              <div className="card-footer">
                <h4 className="d-flex justify-content-between">
                  <span>Total Previsto</span>
                  <span>R$: {total.toLocaleString("pt-br", { minimumFractionDigits: 2 })}</span>
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
