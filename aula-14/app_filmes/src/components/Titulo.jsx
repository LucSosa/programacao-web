export function Titulo() {
    return (
        <nav className="navbar bg-warning">
            <div className="container">
                <a className="navbar-brand text-white" href="#">
                    <img src="/logo.png" alt="Logo" width="30" height="24" className="me-3 d-inline-block align-text-top" />
                    AvenidaVideo: Plataforma de filmes online
                </a>

                <button className="btn btn-primary position-relative">
                    Ver Carrinho <i className="bi bi-cart-check"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        99+
                        <span className="visually-hidden">unread messages</span>
                    </span>

                </button>
            </div>
        </nav>
    )
}
