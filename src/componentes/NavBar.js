
const NavBar = () => {

    return (
        <>
            <nav className="color3 navbar navbar-expand-lg ">
                <div className="container text-light">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="true" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse show" id="navbarSupportedContent" >
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#paquetes">Paquetes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#excursiones">Excursiones</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#suscripcion">Suscripción</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#contacto">Contacto</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <label class="visually-hidden" for="buscador"></label>
                            <input className="form-control me-2" type="search" placeholder="Buscá tu destino..." id="buscador" aria-label="Search" />
                            <button className="btn btn-outline-light" type="submit">Buscar</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )

}

export default NavBar;