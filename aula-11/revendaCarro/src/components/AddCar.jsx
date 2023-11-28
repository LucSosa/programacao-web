import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useForm } from 'react-hook-form';

export function AddCar({ isOpen, onClose, onSubmit }) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
        model: '',
        brand: '',
        year: '',
        price: 0,
        photo: '',
      },
  });

  return (
    <Modal open={isOpen} onClose={onClose} center>
      <div className="card">
        <div className="card-header">Inclusão de Novos Carros</div>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <h5 className="card-title">Informe os Detalhes do Carro</h5>
          <div className="mb-3">
            <label htmlFor="model" className="form-label">Modelo</label>
            <input type="text" className="form-control" id="model" required {...register("model")} />
          </div>
          <div className="mb-3">
            <label htmlFor="brand" className="form-label">Marca</label>
            <input className="form-control" id="brand" rows="3" required {...register("brand")} />
          </div>
          <div className="mb-3">
            <label htmlFor="year" className="form-label">Ano</label>
            <input type="date" className="form-control" id="year" required {...register("year")} />
          </div>
          <div className="mb-3">
            <label htmlFor="price" className="form-label">Preço</label>
            <input type="number" className="form-control" id="price" required {...register("price")} />
          </div>
          <div className="mb-3">
            <label htmlFor="photo" className="form-label">Foto</label>
            <input type="url" className="form-control" id="photo" required {...register("photo")} />
          </div>
          <input type="submit" value="Enviar" className='btn btn-primary px-5' />
        </form>
      </div>
    </Modal>
  );
}
