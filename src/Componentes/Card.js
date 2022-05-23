import React from 'react'
import './card.css'
import { Button } from 'react-bootstrap'

function Card({ tittle, imageSource, text }) {
    return (
        <div className='card'>
            <div className='overflow'>
                <img src={imageSource} alt='' className='card-img-top' />
            </div>
            <div className='card-Body'></div>
            <h4 className='card-title'>{tittle}</h4>
            <p className='card-text text-secondary'>{text}</p>
            <a href='#!' className='btn btn-outline-secondary border-0'>
                Mas Info
            </a>
            <Button variant="primary">Reservar</Button>{' '}
        </div >
    )
}

export default Card
