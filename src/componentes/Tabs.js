import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Button, Col, Container, Row } from "react-bootstrap";
import useAxios from "../hooks/useAxios";

const Tabs = () => {

    const [tabIndex, setTabIndex] = useState(0)
    const { data, isLoading, error } = useAxios('http://localhost:8000/tab_data')

    return (
        <>
            <div className="pb-5">
                <h2 className="text-center p-3" id="excursiones">Excursiones</h2>
                <div className="container containerStyle">
                    {isLoading ? <div>Cargando petición...</div> :
                        error.isError ? <div>Hubo un error: {error.message}</div> :
                            data.length === 0 ? null :
                                <div>
                                    <ul className='nav nav-tabs d-flex justify-content-between text-center'>
                                        {data.tours.map((tab, index) =>
                                            <li key={index} className={`nav-item ${tabIndex === tab.id ? 'active' : null}`} onClick={() => [setTabIndex(tab.id)]}>
                                                <a id={tab.id} className="nav-link text-black" href={`# ${tab.id}`}>
                                                    {tab.tour}
                                                </a>
                                            </li>)}
                                    </ul>
                                    {data.tours.map((tab, index) =>
                                        <Container fluid key={index} hidden={tabIndex !== tab.id}>
                                            <Row className="p-4">
                                                <Col xl className="d-block w-100 p-2">
                                                    <iframe src={tab.video} className="d-block w-100 h-100" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                                </Col>
                                                <Col xl className="d-block w-100 p-2">
                                                    <img src={require(`../assets/img/Tabs/${tab.image}`)} className="d-block w-100" alt="tab_img" />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <h4 className="p-1 text-start"> Destino: {tab.destination}</h4>
                                                <p className="p-1 text-start"> {tab.description} </p>
                                                <span className="p-1 text-start"> Detalles: {tab.details} </span>
                                            </Row>
                                            <Button className="color4 text-light">+Info</Button>
                                        </Container>)}
                                </div>
                    }
                </div>
            </div>
        </>
    );
}

export default Tabs;