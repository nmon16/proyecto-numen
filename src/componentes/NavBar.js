import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const NavBar = () => {

    const [isActive, setIsActive] = useState(false);

    const eventHandler = (e) => { 
        e.preventDefault(); 
        setIsActive(!isActive)
    }

    const inputStyleInactive = {
        width: "0px",
        transition: "width  1s",
        opacity: "0",
    }

    const inputStylesActive = {
        width: "250px",
        transition: "width  1s",
        opacity: "1"
    }


    return (
        <>
            <nav style={{ width: "95%", borderRadius: "20px" }} className="navbar navbar-expand-sm bg-dark navbar-dark mx-auto">
                <div className="container">

                    <form>
                        <div className="d-flex">
                            <button onClick={eventHandler} className="btn btn-dark" href="#home"><FaSearch size={20} /></button>
                            <input style={isActive ? inputStylesActive : inputStyleInactive} className="form-control" placeholder="Busca tu destino..." ></input>
                        </div>
                    </form>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Campings</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Paquetes</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Ofertas</a>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Excursiones</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#home">Link</a></li>
                                    <li><a className="dropdown-item" href="#home">Another link</a></li>
                                    <li><a className="dropdown-item" href="#home">A third link</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link" href="#home">Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </nav>

        </>
    )

}

export default NavBar;