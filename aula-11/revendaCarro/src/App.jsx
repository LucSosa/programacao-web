import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useForm } from 'react-hook-form'
import { useEffect, useState } from 'react';

export function App() {
  const { register, handleSubmit, setFocus, reset } = useForm({})

  const [openFirstModal, setOpenFirstModal] = useState(false);
  const [openSecondModal, setOpenSecondModal] = useState(false);

  const [cars, setCars] = useState([])
  const [averagePriceCars, setAveragePriceCars] = useState(0)
  const [highestPriceCar, setHighestPriceCar] = useState(0);

  const [filterPriceMin, setFilterPriceMin] = useState('');
  const [filterPriceMax, setFilterPriceMax] = useState('');
  const [isFilterActive, setIsFilterActive] = useState(false);


  function writeData(data) {
    const { model, brand, year, price, photo } = data

    const yearValue = new Date(year).getFullYear()
    const priceInReais = new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2,
    }).format(price);

    const updatedCars = [
      ...cars,
      {
        model,
        brand,
        yearValue,
        priceInReais,
        photo,
        price
      }
    ]

    setCars(updatedCars)
    localStorage.setItem('cars', JSON.stringify(updatedCars))

    const prices = updatedCars.map(car => parseFloat(car.price));
    const totalPrices = prices.reduce((total, newPrice) => total + newPrice, 0);
    const averagePrice = totalPrices / prices.length;

    setAveragePriceCars(averagePrice)
    localStorage.setItem('averagePrice', JSON.stringify(averagePrice))

    const highestPriceCar = Math.max(...updatedCars.map(car => car.price));
    setHighestPriceCar(highestPriceCar);
    localStorage.setItem('highestPrice', JSON.stringify(highestPriceCar))


    setFocus('model')
    reset({
      model: '',
      brand: '',
      year: '',
      price: 0,
      photo: ''
    })
  }

  const filteredCars = isFilterActive
    ? cars.filter((car) => {
      const carPrice = parseFloat(car.price);
      return carPrice >= parseFloat(filterPriceMin) && carPrice <= parseFloat(filterPriceMax);
    })
    : cars;

  const carsToDisplay = filteredCars.map((car) => (
    <tr key={car.price}>
      <td>{car.model}</td>
      <td>{car.brand}</td>
      <td>{car.yearValue}</td>
      <td>{car.priceInReais}</td>
      <td>
        <img src={car.photo} width={150} height={100} />
      </td>
    </tr>
  ));


  const handleFilterPriceMinChange = (e) => {
    setFilterPriceMin(e.target.value);
  };

  const handleFilterPriceMaxChange = (e) => {
    setFilterPriceMax(e.target.value);
  };

  const applyFilter = () => {
    setIsFilterActive(true);
  };

  const clearFilter = () => {
    setIsFilterActive(false);
    setFilterPriceMin('');
    setFilterPriceMax('');
  };


  useEffect(() => {
    if (localStorage.getItem('cars')) {
      const updatedCars = JSON.parse(localStorage.getItem('cars'))
      setCars(updatedCars)
    }

    if (localStorage.getItem('highestPrice')) {
      const updatedhighestPriceCar = JSON.parse(localStorage.getItem('highestPrice'))
      setHighestPriceCar(updatedhighestPriceCar)
    }

    if (localStorage.getItem('averagePrice')) {
      const updatedAveragePrices = JSON.parse(localStorage.getItem('averagePrice'))
      setAveragePriceCars(updatedAveragePrices)
    }
  }, [])

  return (
    <div className="container-fluid">
      <nav className="navbar bg-secondary">
  <div className="container-fluid d-flex justify-content-between align-items-center">
    <a className="navbar-brand text-white fw-bold" href="#">
      <img src="./logo.png" alt="Logo" width="48" height="40" className="d-inline-block align-text-top me-2" />
      Revenda Car: Gestão Revenda de Carros
    </a>
    <div className="d-flex align-items-center">
      <input
        type="number"
        className="form-control me-2"
        placeholder="Preço Mínimo"
        value={filterPriceMin}
        onChange={handleFilterPriceMinChange}
      />
      <input
        type="number"
        className="form-control me-2"
        placeholder="Preço Máximo"
        value={filterPriceMax}
        onChange={handleFilterPriceMaxChange}
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
          <span>Listagem de Carros Disponíveis</span>
          <button type="button" className="btn btn-success px-5"
            onClick={() => setOpenFirstModal(true)}>Adicionar</button>
            <input type="button" value="Estatisticas" className='btn btn-primary px-5'
            onClick={() => setOpenSecondModal(true)} />
        </h2>
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Modelo</th>
              <th>Marca</th>
              <th>Ano</th>
              <th>Preço</th>
              <th>Foto</th>
            </tr>
          </thead>
          <tbody>
            {carsToDisplay}
          </tbody>
        </table>
      </div>
      <Modal open={openFirstModal} onClose={() => setOpenFirstModal(false)} center>
        <div className="card">
          <div className="card-header">
            Inclusão de Novos Carros
          </div>
          <form onSubmit={handleSubmit(writeData)} className="card-body">
            <h5 className="card-title">Informe os Detalhes do Carro</h5>
            <div className="mb-3">
              <label htmlFor="model" className="form-label">Modelo</label>
              <input type="text" className="form-control"
                id="model" required {...register("model")} />
            </div>
            <div className="mb-3">
              <label htmlFor="brand" className="form-label">Marca</label>
              <input className="form-control"
                id="brand" rows="3" required {...register("brand")} />
            </div>
            <div className="mb-3">
              <label htmlFor="year" className="form-label">Ano</label>
              <input type="date" className="form-control"
                id="year" required {...register("year")} />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="form-label">Preço</label>
              <input type="number" className="form-control"
                id="price" required {...register("price")} />
            </div>
            <div className="mb-3">
              <label htmlFor="photo" className="form-label">Foto</label>
              <input type="url" className="form-control"
                id="photo" required {...register("photo")} />
            </div>

            <input type="submit" value="Enviar" className='btn btn-primary px-5' />
          </form>
        </div>
      </Modal>
      <Modal open={openSecondModal} onClose={() => setOpenSecondModal(false)} center>
        <h3>Estatísticas dos Veículos</h3>
        <p>Número de veículos cadastrados: {cars.length}</p>
        <p>Preço médio dos veículos: R$ {averagePriceCars}</p>
        <p>Veículo de maior valor: {highestPriceCar}</p>
      </Modal>
    </div>
  )
}