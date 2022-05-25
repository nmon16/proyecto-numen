import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Tabs = () => {

    const [index, setIndex] = useState(0)

    const containerStyle = { padding: '20px',border: 'outset' }
    const titleStyle = { textAlign: 'center',padding: '30px' }
    const navStyle = { textAlign: 'center' }
    const navItemStyle = {color: '#341C09'}
    const dataContainerStyle = {padding: '10px' }
    const contentContainerStyle = { display: 'flex', flexWrap: 'wrap', flexDirection: 'row', padding: '30px'}
    const contentDataStyle = { padding: '20px' }

    const content = [
        {id: 0, destination: 'Santa Cruz' , description: '', details: 'Menores: A partir de 3 años cumplidos a 11 años cumplidos abonan tarifa “niños”.'},
        {id: 1, destination: 'Misiones', description: '', details: ''},
        {id: 2, destination: 'Usuhaia', description: '', details: ''},
        {id: 3, destination: 'Chubut', description: '', details: ''},
        {id: 4, destination: 'Mendoza', description: '', details: ''},
        {id: 5, destination: 'Salta', description: '', details: ''},
        {id: 6, destination: 'Perú', description: '', details: ''}
    ]

    return (
        <>

            <h2 style={titleStyle}>Excursiones</h2>

            <div style={containerStyle} className="container">

                <ul style={navStyle} className='nav nav-tabs d-flex justify-content-between'>
                    <li  className={`nav-item ${index === 0 ? 'active' : null}`} onClick={() => { setIndex(0) }}>
                        <a id="0"  style={navItemStyle} className="nav-link" href="#0">El Calafate</a>
                    </li>
                    <li className={`nav-item ${index === 1 ? 'active' : null}`} onClick={() => { setIndex(1) }}>
                        <a id="1" style={navItemStyle} className="nav-link" href="#1">Puerto Iguazú</a>
                    </li>
                    <li className={`nav-item ${index === 2 ? 'active' : null}`} onClick={() => { setIndex(2) }}>
                        <a id="2" style={navItemStyle} className="nav-link" href="#2">Faro del Fin del Mundo</a>
                    </li>
                    <li className={`nav-item ${index === 3 ? 'active' : null}`} onClick={() => { setIndex(3) }}>
                        <a id="3" style={navItemStyle} className="nav-link" href="#3">Puerto Piramides</a>
                    </li>
                    <li className={`nav-item ${index === 4 ? 'active' : null}`} onClick={() => { setIndex(4) }}>
                        <a id="4" style={navItemStyle} className="nav-link" href="#4">Malargüe</a>
                    </li>
                    <li className={`nav-item ${index === 5 ? 'active' : null}`} onClick={() => { setIndex(5) }}>
                        <a id="5" style={navItemStyle} className="nav-link" href="#5">Cafayate</a>
                    </li>
                    <li className={`nav-item ${index === 6 ? 'active' : null}`} onClick={() => { setIndex(6) }}>
                        <a id="6" style={navItemStyle} className="nav-link" href="#6">Machu Pichu</a>
                    </li>
                </ul>


                <div style={dataContainerStyle}>
                    <div style={contentContainerStyle} hidden={index !== 0}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/MVTq5l5w9E4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div>
                            <h3 style={contentDataStyle}>Destino:</h3>
                            <p style={contentDataStyle}>Descripcion:</p>
                            <span style={contentDataStyle}>Detalles:</span>
                        </div>
                    </div>
                    <div style={contentContainerStyle} hidden={index !== 1}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/je668DqhHVY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div>
                            <h3 style={contentDataStyle}>Destino:</h3>
                            <p style={contentDataStyle}>Descripcion:</p>
                            <span style={contentDataStyle}>Detalles:</span>
                        </div>
                    </div>
                    <div style={contentContainerStyle} hidden={index !== 2}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/3TpSoR189Wo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div>
                            <h3 style={contentDataStyle}>Destino:</h3>
                            <p style={contentDataStyle}>Descripcion:</p>
                            <span style={contentDataStyle}>Detalles:</span>
                        </div>
                    </div>
                    <div style={contentContainerStyle} hidden={index !== 3}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/SXR_mToJ-Vc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div>
                            <h3 style={contentDataStyle}>Destino:</h3>
                            <p style={contentDataStyle}>Descripcion:</p>
                            <span style={contentDataStyle}>Detalles:</span>
                        </div>
                    </div>
                    <div style={contentContainerStyle} hidden={index !== 4}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/FP5As-kSW6M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div>
                            <h3 style={contentDataStyle}>Destino:</h3>
                            <p style={contentDataStyle}>Descripcion:</p>
                            <span style={contentDataStyle}>Detalles:</span>
                        </div>
                    </div>
                    <div style={contentContainerStyle} hidden={index !== 5}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Il9Pc99HI_g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div>
                            <h3 style={contentDataStyle}>Destino:</h3>
                            <p style={contentDataStyle}>Descripcion:</p>
                            <span style={contentDataStyle}>Detalles:</span>
                        </div>
                    </div>
                    <div style={contentContainerStyle} hidden={index !== 6}>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/lNIEZ61PyG0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div>
                            <h3 style={contentDataStyle}>Destino:</h3>
                            <p style={contentDataStyle}>Descripcion:</p>
                            <span style={contentDataStyle}>Detalles:</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Tabs;