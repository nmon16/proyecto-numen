import React from 'react'
import Card from './Card'

import image1 from '../ASES/f9.jpg'
import image2 from '../ASES/rafting.jpg'
import image3 from '../ASES/aconcagua.jpg'


const cards = [
    {
        id: 1,
        tittle: 'Viñedos',
        image: image1,
        text: 'Por su ubicacion geografica, la provincia de mendoza tiene buenas condiciones para la produccion de vino',
    },
    {
        id: 2,
        tittle: 'Rafting',
        image: image2,
        text : 'Argentina Rafting Expeditions es su destino para todos sus deportes de aventura en Mendoza.',

    },
    {
        id: 3,
        tittle: 'Aconcagua',
        image: image3,
        text: 'El Aconcagua es una montaña ubicada en el departamento Las Heras, en la provincia de Mendoza, en el oeste de la República Argentina.',

    },

]

function Cards() {

    return (

        <div className="container d-flex justify-content-center align-items-center h-100">
           
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-4" key={card.id}>
                            <Card tittle={card.tittle} imageSource={card.image} text={card.text}/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Cards
