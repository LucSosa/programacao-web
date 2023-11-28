import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'

export function App() {
  const { register, handleSubmit, setFocus, reset } = useForm({})

  const [open, setOpen] = useState(false);
  const [pizzas, setPizzas] = useState([]);

  function onOpenModal() {
    setOpen(true)
  }

  function onCloseModal() {
    setOpen(false)
  }

  function gravaDados(data) {

    const pizzas2 = [...pizzas]
    pizzas2.push({ 
      nome: data.nome, 
      ingredientes: data.ingredientes, 
      url: data.url 
    })

    setPizzas(pizzas2)
    setFocus("nome")
    reset({ 
      nome: "", 
      ingredientes: "", 
      url: "" 
    })

    localStorage.setItem("pizzas", JSON.stringify(pizzas2))
  }

  const listaPizzas = pizzas.map(pizza => (
    <tr key={pizza.nome}>
      <td>{pizza.nome}</td>
      <td>{pizza.ingredientes}</td>
      <td>
        <img src={pizza.url} alt={`Foto da pizza ${pizza.nome}`} width={150} height={100} />
      </td>
    </tr>
  ));  

  useEffect(() => {
    if (localStorage.getItem("pizzas")) {
      const pizzas2 = JSON.parse(localStorage.getItem("pizzas"))
      setPizzas(pizzas2)
    }
  }, [])

  return (
    <div className="container-fluid">
      <nav className="navbar bg-danger">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            <img src="./logo.png" alt="Logo" width="48" height="40"
              className="d-inline-block align-text-top me-2" />
            App Pizzaria: Controle do Cardápio de Pizzas
          </a>
        </div>
      </nav>
      <div className="container mt-2">
        <h2 className="d-flex justify-content-between">
          <span>Listagem das Pizzas Disponíveis</span>
          <button type="button" className="btn btn-danger px-3" onClick={onOpenModal}>Adicionar</button>
        </h2>
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Nome da Pizza</th>
              <th>Ingredientes</th>
              <th>Foto</th>
            </tr>
          </thead>
          <tbody>
            {listaPizzas}
          </tbody>
        </table>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className="card">
          <div className="card-header">
            Inclusão de Pizzas no Cardápio
          </div>
          <form onSubmit={handleSubmit(gravaDados)} className="card-body">
            <h5 className="card-title">Informe os Detalher da Pizza</h5>
            <div className="mb-3">
              <label htmlFor="nome" className="form-label">Nome da Pizza</label>
              <input type="text" className="form-control"
                id="nome" required {...register("nome")} />
            </div>
            <div className="mb-3">
              <label htmlFor="ingredientes" className="form-label">Ingredientes</label>
              <textarea className="form-control"
                id="ingredientes" rows="3" required {...register("ingredientes")}></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="url" className="form-label">Url da Foto</label>
              <input type="url" className="form-control"
                id="url" required {...register("url")} />
            </div>

            <input type="submit" value="Enviar" className='btn btn-primary px-5' />
          </form>
        </div>
      </Modal>
    </div>
  )
}
