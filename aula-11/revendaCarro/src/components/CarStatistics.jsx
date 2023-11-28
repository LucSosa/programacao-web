import React from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';

export function CarStatistics({ cars, isOpen, onClose }) {
    const numberOfCars = cars.length;

    if (numberOfCars === 0) {
        return <div className='d-flex justify-content-center'>
            Nenhum veículo cadastrado ainda.</div>;
    }

    // eslint-disable-next-line
    const totalPrice = cars.reduce((total, car) => total + parseFloat(car.price), 0); // Converter para número
    const averagePrice = totalPrice / numberOfCars;

    // eslint-disable-next-line
    const maxPriceCar = cars.reduce((maxCar, car) => {
        return parseFloat(car.price) > parseFloat(maxCar.price) ? car : maxCar; // Converter para número
    }, cars[0]);

    console.log(cars);

    return (
        <Modal open={isOpen} onClose={onClose} center>
            <h3>Estatísticas dos Veículos</h3>
            <p>Número de veículos cadastrados: {numberOfCars}</p>
            <p>Preço médio dos veículos: R$ {averagePrice.toFixed(2)}</p>
            <p>Veículo de maior valor: {maxPriceCar.model} - R$ {parseFloat(maxPriceCar.price).toFixed(2)}</p>
        </Modal>
    );
}
