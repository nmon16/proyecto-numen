import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Button, Col, Container, Row } from "react-bootstrap";
import useAxios from "../hooks/useAxios";

const Tabs = () => {

    const [tabIndex, setTabIndex] = useState(0)
    const containerStyle = { padding: '20px', border: 'outset', backgroundColor: "#FFEBDC" }
    const titleStyle = { textAlign: 'center', padding: '20px', }
    const navStyle = { textAlign: 'center' }
    const navItemStyle = { color: '#341C09' }
    const rowStyle = { padding: '30px' }
    const contentStyle = { padding: '10px', textAlign: 'justify' }
    const { data, isLoading, error } = useAxios('http://localhost:8000/tab_data')

    return (
        <>
            <div style={{ paddingBottom: "20px" }}>
                <h2 style={titleStyle}>Excursiones</h2>
                <div style={containerStyle} className="container">
                    {isLoading ? <div>Cargando petición...</div> :
                        error.isError ? <div>Hubo un error: {error.message}</div> :
                            data.length === 0 ? null :
                                <div>
                                    <ul style={navStyle} className='nav nav-tabs d-flex justify-content-between'>
                                        {data.tours.map((tab, index) =>
                                            <li key={index} className={`nav-item ${tabIndex === tab.id ? 'active' : null}`}           onClick={() => [setTabIndex(tab.id)]}>
                                                <a id={tab.id} style={navItemStyle} className="nav-link" href={`# ${tab.id}`}>
                                                    {tab.tour}
                                                </a>
                                            </li>)}
                                    </ul>
                                    {data.tours.map((tab, index) =>
                                        <Container fluid key={index} hidden={tabIndex !== tab.id}>
                                            <Row style={rowStyle}>
                                                <Col xl className="d-block w-100 p-2">
                                                    <iframe src={tab.video} className="d-block w-100 h-100" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                                                </Col>
                                                <Col xl className="d-block w-100 p-2">
                                                    <img src={require(`../assets/img/${tab.image}`)} className="d-block w-100" alt="img" />
                                                </Col>
                                            </Row>
                                            <Row>
                                                <h4 style={contentStyle}> Destino: {tab.destination}</h4>
                                                <p style={contentStyle}> {tab.description} </p>
                                                <span style={contentStyle}> Detalles: {tab.details} </span>
                                            </Row>
                                            <Button style={{backgroundColor:"#236AB9", color:"black"}}>+Info</Button>
                                        </Container>)}
                                </div>
                    }
                </div>
            </div>
        </>
    );
}

export default Tabs;