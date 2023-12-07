import { useEffect, useState } from 'react'
import { pedidos } from './assets/dados.js'
import Header from './components/Header.jsx'
import Sider from './components/Sider.jsx'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import 'flowbite'

export default function App() {
    const [dados, setDados] = useState([])
    const [open, setOpen] = useState(false)

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [selectedPedido, setSelectedPedido] = useState(null);
    const [selectedMenu, setSelectedMenu] = useState(); // Defina o valor inicial com a opção padrão

    const [isDarkMode, setIsDarkMode] = useState(false);

    // Função para alternar entre os modos claro e escuro
    const toggleDarkMode = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const handleMenuSelection = (menu) => {
        setSelectedMenu(menu);
    };

    useEffect(() => {
        setDados(pedidos);
    }, []);

    function showPedido(i) {
        setSelectedPedido(dados[i]);
        console.log(dados[i]);
    };

    function closePedidoModal() {
        setSelectedPedido(null);
    };

    function toggleMobileMenu() {
        setIsMobileMenuOpen((prevState) => !prevState);
    }

    function getStatusColorClass(status) {
        switch (status) {
            case 'Aprovado':
                return 'bg-green-700 dark:bg-green-700';
            case 'Pendente':
                return 'bg-yellow-200 dark:bg-yellow-700';
            case 'Reprovado':
                return 'bg-red-700 dark:bg-red-700';
            default:
                return '';
        }
    }


    const listaPedidos = dados.map((dado, i) => (
        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 "
            key={dado.id}>
            <th scope="row" className=" hidden md:table-cell px-6 py-4 font-medium  whitespace-nowrap dark:text-white">
                {dado.nome}
            </th>
            <td className=" hidden md:table-cell px-6 py-4">
                {dado.email}
            </td>
            <td className={`px-6 py-4 text-white rounded-md   ${getStatusColorClass(dado.status)}`}>
                {dado.status}
            </td>
            <td className="px-6 py-4">
                {dado.pedido}
            </td>
            <td className="px-6 py-4 inline-flex space-x-4">
                <a className='cursor-pointer'
                    onClick={() => showPedido(i)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                </a>
                <a className='cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                    </svg>
                </a>
                <a className='cursor-pointer'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                        <path d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                </a>

            </td>
        </tr>

    ))

    const detalhesPedido = dados.map((dado, i) => (
        <h1>dados[i].descricao</h1>
    ))

    useEffect(() => {
        setDados(pedidos)
    }, [])

    return (
        <>
            <div className={` ${isDarkMode ? 'dark' : ''}`}>
                <div className="grid xl:grid-cols-5 h-screen">
                    <Header toggleMobileMenu={toggleMobileMenu} />
                    <div className="flex">
                        <aside id="logo-sidebar"
                            className="col-span-1 fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform 
                            -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0
                            dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-red-900">
                                <ul className="space-y-2 font-medium">
                                    <li>
                                        <a
                                            href="#"
                                            className={`flex items-center p-2 text-gray-900 dark:text-white hover:bg-red-200 dark:hover:bg-red-400 group hover:scale-110 
                                                ${selectedMenu === "realTime" ? 'selected' : ''
                                                }`}
                                            onClick={() => handleMenuSelection('realTime')}
                                        >
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                                <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
                                            </svg>
                                            <span className="flex-1 ms-3 whitespace-nowrap">Real Time</span>
                                        </a>

                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 dark:text-white hover:bg-red-200 dark:hover:bg-red-200 group hover:scale-110">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
                                                <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                                            </svg>
                                            <span className="flex-1 ms-3 whitespace-nowrap ">Solicitações</span>

                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 dark:text-white hover:bg-red-200 dark:hover:bg-red-400 group hover:scale-110">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 19">
                                                <path d="M7.324 9.917A2.479 2.479 0 0 1 7.99 7.7l.71-.71a2.484 2.484 0 0 1 2.222-.688 4.538 4.538 0 1 0-3.6 3.615h.002ZM7.99 18.3a2.5 2.5 0 0 1-.6-2.564A2.5 2.5 0 0 1 6 13.5v-1c.005-.544.19-1.072.526-1.5H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h7.687l-.697-.7ZM19.5 12h-1.12a4.441 4.441 0 0 0-.579-1.387l.8-.795a.5.5 0 0 0 0-.707l-.707-.707a.5.5 0 0 0-.707 0l-.795.8A4.443 4.443 0 0 0 15 8.62V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.12c-.492.113-.96.309-1.387.579l-.795-.795a.5.5 0 0 0-.707 0l-.707.707a.5.5 0 0 0 0 .707l.8.8c-.272.424-.47.891-.584 1.382H8.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1.12c.113.492.309.96.579 1.387l-.795.795a.5.5 0 0 0 0 .707l.707.707a.5.5 0 0 0 .707 0l.8-.8c.424.272.892.47 1.382.584v1.12a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1.12c.492-.113.96-.309 1.387-.579l.795.8a.5.5 0 0 0 .707 0l.707-.707a.5.5 0 0 0 0-.707l-.8-.795c.273-.427.47-.898.584-1.392h1.12a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5ZM14 15.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
                                            </svg>
                                            <span className="flex-1 ms-3 whitespace-nowrap ">Pagamentos</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="flex items-center p-2 text-gray-900 dark:text-white hover:bg-red-200 dark:hover:bg-red-400 group hover:scale-110">
                                            <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 14 18">
                                                <path d="M7 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm2 1H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                            </svg>
                                            <span className="flex-1 ms-3 whitespace-nowrap ">Avaliações</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </aside>
                    </div>

                    <div className="col-span-4 overflow-x-auto pt-20">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3  hidden md:table-cell">
                                        Nome
                                    </th>
                                    <th scope="col" className="px-6 py-3  hidden md:table-cell">
                                        E-mail
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Status
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Pedido
                                    </th>
                                    <th scope="col" className="px-6 py-3">

                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaPedidos}
                            </tbody>
                        </table>
                    </div>



                </div>
            </div >
            {selectedPedido && (
                <Modal open={true} onClose={closePedidoModal} center>
                    <>
                        <div className="bg-white p-8 rounded-lg shadow-md">
                            <p className="text-gray-700">ID do Pedido: {selectedPedido.id}</p>
                            <h2 className='text-sm font-bold'>Pedido: {selectedPedido.pedido}</h2>
                            <h1 className="text-2xl font-bold">Descrição da receita: {selectedPedido.descricao}</h1>
                        </div>
                    </>
                </Modal>
            )}

        </>
    )
}