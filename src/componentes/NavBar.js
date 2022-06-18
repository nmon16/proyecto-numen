import { FaSearch } from "react-icons/fa";

const NavBar = () => {

    return (
        <>
            <nav style={{ width: "95%", borderRadius: "20px" }} className="navbar navbar-expand-sm bg-dark navbar-dark mx-auto">
                <div className="container">

                    <form className="d-flex">
                        <div className="nav-item">
                            <a style={{ fontSize: "20px",}} className="btn btn-dark" href="javascript:void(0)"><FaSearch size={25} /></a>
                        </div>
                        <input style={{ fontSize: "20px"}} className="form-control" type="text" placeholder="Busca tu destino..." />
                    </form>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Campings</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Paquetes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Ofertas</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Excursiones</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Link</a></li>
                                    <li><a className="dropdown-item" href="#">Another link</a></li>
                                    <li><a className="dropdown-item" href="#">A third link</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#">Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )

}

export default NavBar;