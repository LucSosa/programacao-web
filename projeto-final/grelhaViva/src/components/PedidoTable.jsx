// src/components/PedidoTable.jsx
import React from 'react';

const PedidoTable = ({ listaPedidos, showPedido }) => {
  return (
    <div className="col-span-4 overflow-x-auto pt-20">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 hidden md:table-cell">
              Nome
            </th>
            <th scope="col" className="px-6 py-3 hidden md:table-cell">
              E-mail
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Pedido
            </th>
            <th scope="col" className="px-6 py-3">
              Ações
            </th>
          </tr>
        </thead>
        <tbody>
          {listaPedidos.map((dado, i) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 "
              key={dado.id}
            >
              <th
                scope="row"
                className="hidden md:table-cell px-6 py-4 font-medium  whitespace-nowrap dark:text-white"
              >
                {dado.nome}
              </th>
              <td className="hidden md:table-cell px-6 py-4">{dado.email}</td>
              <td
                className={`px-6 py-4 text-white rounded-md   ${getStatusColorClass(
                  dado.status
                )}`}
              >
                {dado.status}
              </td>
              <td className="px-6 py-4">{dado.pedido}</td>
              <td className="px-6 py-4 inline-flex space-x-4">
                <a className="cursor-pointer" onClick={() => showPedido(i)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </a>
                {/* Adicione outras ações aqui */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PedidoTable;
