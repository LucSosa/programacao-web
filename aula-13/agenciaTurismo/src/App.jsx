import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

export function App() {
  const { register, handleSubmit, watch, reset, setFocus } = useForm()

  const [open, setOpen] = useState(false)
  const [travels, setTravels] = useState([])
  const [filterPriceMax, setFilterPriceMax] = useState('')
  const [isFilterActive, setIsFilterActive] = useState(false)

  function applyFilter() {
    setIsFilterActive(true);
  };

  function clearFilter() {
    setIsFilterActive(false);
    setFilterPriceMax('');
  };

  function handleWriteData(data) {
    const {destine, date, duration, price, attractions, photo} = data
    const updatedTravels = [...travels]

    updatedTravels.push({
      destine,
      date,
      duration,
      price,
      attractions,
      photo
    })

    setTravels(updatedTravels)
    localStorage.setItem("viagens", JSON.stringify(updatedTravels))
  }

  function handleChangePrice(data) {
    Swal.fire({
      title: 'Atrações preço da sua viagem!',
      text: `${travels[data].destine}`,
      icon: 'warning',
      input: 'number',
      inputValue: travels[data].price,
      confirmButtonText: 'Alterar Preço',
    }).then(change => {
      Swal.fire(`Novo Preço é ${change.value}`)

      if (change.isConfirmed) {
        const updatedTravels = [...travels];
        updatedTravels[data].price = change.value;
        setTravels(updatedTravels);

        localStorage.setItem("viagens", JSON.stringify(updatedTravels));
      }
    })
  }

  function excluiPizza(indice) {
    const destine = pizzas[indice].destine
    if (confirm(`Confirma a exclusão da ${destine}?`)) {
      const updatedTravels = [...pizzas]
      updatedTravels.splice(indice, 1)
      setTravels(updatedTravels)

      localStorage.setItem("travels", JSON.stringify(updatedTravels))
    }
  }

  function showAttractions(data) {
    Swal.fire({
      title: 'Atrações da sua viagem!',
      text: `${travels[data].attractions}`,
      icon: 'info',
      confirmButtonText: 'Cool'
    })
  }

  const filteredCars = isFilterActive
    ? travels.filter((travel) => {
      const travelPrice = parseFloat(travel.price);
      return travelPrice <= parseFloat(filterPriceMax);
    })
    : travels;


  const listaPizzas = filteredCars.map((travel, i) => (
    <tr key={travel.duration}>
      <td>{travel.destine}</td>
      <td>{travel.date}</td>
      <td>{travel.duration}</td>
      <td>{travel.price}</td>
      <td>
        <img src={travel.photo}
          width={150} height={100} /></td>
      <td>
        <i className="bi bi-bag-plus fs-4" title='Alterar Preço'
          style={{ cursor: 'pointer' }} onClick={() => handleChangePrice(i)}>
        </i>
        <i className="bi bi-search fs-4 text-info ms-3" title='Ver Detalhes'
          style={{ cursor: 'pointer' }} onClick={() => showAttractions(i)}>
        </i>
        <i className="bi bi-trash3 fs-4 text-danger ms-3" title='Excluir Pizza'
          style={{ cursor: 'pointer' }} onClick={() => excluiPizza(i)}>
        </i>
      </td>
    </tr>
  ))

  useEffect(() => {
    if (localStorage.getItem("viagens")) {
      const updatedTravels = JSON.parse(localStorage.getItem("viagens"))
      setTravels(updatedTravels)
    }
  }, [])

  return (
    <div className="container-fluid">
      <nav className="navbar bg-warning">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="#">
            <img src="./logo.png" alt="Logo" width="48" height="40"
              className="d-inline-block align-text-top me-2" />
            App Viagens: Controle de viagens
          </a>
          <div className='d-flex align items-center'>
            <input
              type="number"
              className="form-control me-2"
              placeholder="Preço Máximo"
              value={filterPriceMax}
              onChange={(e) => setFilterPriceMax(e.target.value)}
            />
            <button className="btn btn-primary me-2 px-5" onClick={applyFilter}>
              Filtrar
            </button>
            <button type='button' className="btn btn-success me-2 w-100" onClick={clearFilter}>
              Ver Todos
            </button>
          </div>
        </div>
      </nav>

      <div className="container mt-2">
        <h2 className="d-flex justify-content-between">
          <span>Listagem das Viagens Disponíveis</span>
          <button className="btn btn-warning px-3 text-white"
            onClick={() => setOpen(true)}>
            Adicionar
          </button>
        </h2>

        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Destino</th>
              <th>Data</th>
              <th>Duração</th>
              <th>Preço</th>
              <th>Foto</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {listaPizzas}
          </tbody>
        </table>
      </div>

      <Modal open={open} onClose={() => setOpen(false)} center>
        <div className="card">
          <div className="card-header">
            Inclusão de Viagem
          </div>
          <form className="card-body" onSubmit={handleSubmit(handleWriteData)}>
            <h5 className="card-title">Informe os Detalhes da sua viagem</h5>
            <div className="mb-3">
              <label htmlFor="destine" className="form-label">Destino:</label>
              <input type="text" className="form-control"
                id="destine" required {...register("destine")} />
            </div>
            <div className="mb-3">
              <label htmlFor="date" className="form-label">Data:</label>
              <input type='date' className="form-control" id="date"
                rows="3" required {...register("date")} />
            </div>
            <div className="mb-3">
              <label htmlFor="duration" className="form-label">Duração:</label>
              <input type='number' className="form-control" id="duration"
                rows="3" required {...register("duration")} />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Preço:</label>
              <input type='number' className="form-control" id="price"
                rows="3" required {...register("price")} />
            </div>
            <div className="mb-3">
              <label htmlFor="attractions" className="form-label">Atrações:</label>
              <textarea className="form-control" id="attractions"
                rows="3" required {...register("attractions")} />
            </div>
            <div className="mb-3">
              <label htmlFor="photo" className="form-label">URL da Foto:</label>
              <input type="url" className="form-control"
                id="photo" required {...register("photo")} />
            </div>
            <input type="submit" value="Enviar"
              className="btn btn-primary px-5" />
          </form>
          {
            watch('photo') &&
            <img src={watch('photo')} alt="Foto da viagem"
              className="rounded mx-auto d-block"
              width={240} height={200} />
          }
        </div>
      </Modal>

    </div>
  )
}