import { useState, useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { ToursContext } from "../contexts/ToursContext";
import { Col, Container, Row } from "react-bootstrap";

const Tabs = () => {

    const [index, setIndex] = useState(0)
    const tours = useContext(ToursContext);
    


    const containerStyle = { padding: '20px', border: 'outset' }
    const titleStyle = { textAlign: 'center', padding: '20px', }
    const navStyle = { textAlign: 'center'}
    const navItemStyle = { color: '#341C09' }
    const rowStyle = {padding: '30px'}
    const contentStyle = {padding: '10px', textAlign: 'justify' }

    return (
        <>
            <h2 style={titleStyle}>Excursiones</h2>

            <div style={containerStyle} className="container">

                <ul style={navStyle} className='nav nav-tabs d-flex justify-content-between'>
                    <li className={`nav-item ${index === 0 ? 'active' : null}`} onClick={() =>  [setIndex(0)] }>
                        <a id="0" style={navItemStyle} className="nav-link" href="#0">El Calafate</a>
                    </li>
                    <li className={`nav-item ${index === 1 ? 'active' : null}`} onClick={() =>  [setIndex(1)] }>
                        <a id="1" style={navItemStyle} className="nav-link" href="#1">Puerto Iguazú</a>
                    </li>
                    <li className={`nav-item ${index === 2 ? 'active' : null}`} onClick={() =>  [setIndex(2)] }>
                        <a id="2" style={navItemStyle} className="nav-link" href="#2">Faro del Fin del Mundo</a>
                    </li>
                    <li className={`nav-item ${index === 3 ? 'active' : null}`} onClick={() =>  [setIndex(3)] }>
                        <a id="3" style={navItemStyle} className="nav-link" href="#3">Puerto Piramides</a>
                    </li>
                    <li className={`nav-item ${index === 4 ? 'active' : null}`} onClick={() =>  [setIndex(4)] }>
                        <a id="4" style={navItemStyle} className="nav-link" href="#4">Malargüe</a>
                    </li>
                    <li className={`nav-item ${index === 5 ? 'active' : null}`} onClick={() =>  [setIndex(5)] }>
                        <a id="5" style={navItemStyle} className="nav-link" href="#5">Cafayate</a>
                    </li>
                    <li className={`nav-item ${index === 6 ? 'active' : null}`} onClick={() =>  [setIndex(6)] }>
                        <a id="6" style={navItemStyle} className="nav-link" href="#6">Machu Pichu</a>
                    </li>
                </ul>

                <div>

                    {tours.map(tour =>
                        <Container fluid key={tour.id} hidden={index !== tour.id}>

                            <Row style={rowStyle}>
                                <Col xl>{tour.video}</Col>
                                <Col xl>{tour.image}</Col>
                            </Row>


                            <Row>
                                <h4 style={contentStyle}> Destino: {tour.destination}</h4>
                                <p style={contentStyle}> {tour.description} </p>
                                <span style={contentStyle}> Detalles: {tour.details} </span>
                            </Row>

                        </Container>)}
                </div>
            </div>
        </>
    );

}

export default Tabs;