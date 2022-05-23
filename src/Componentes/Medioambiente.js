import React from 'react'
import './Medioambiente.css'
import {ListGroup} from 'react-bootstrap'



function Medioambiente() {
    return (
        <div className='Medio-Body'>
            <ListGroup>
                <ListGroup.Item>Viajes y campamentos en «superficies durables</ListGroup.Item>
                <ListGroup.Item>Elimina los desechos correctamente</ListGroup.Item>
                <ListGroup.Item>Deja lo que encuentres</ListGroup.Item>
                <ListGroup.Item>Minimiza los impactos de la hoguera</ListGroup.Item>
                <ListGroup.Item>Respeta la vida silvestre</ListGroup.Item>
                <ListGroup.Item>No dejes rastro cuando acampes</ListGroup.Item>
            </ListGroup>

        </div>
    )   
}

export default Medioambiente
