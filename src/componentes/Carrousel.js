import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import useAxios from '../hooks/useAxios';

function Carrousel() {
    const [index, setIndex] = useState(0);
    const { data, isLoading, error } = useAxios('http://localhost:8000/carousel')
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect} className="mx-auto" >
                {isLoading ? <div>Cargando petición...</div> :
                    error.isError ? <div>Hubo un error: {error.message}</div> :
                            data.length === 0 ? null :
                                data.img.map((image, index) =>
                                    <Carousel.Item key={index}>
                                        <img  className="d-block w-100" src={require(`../assets/img/${image.name}`)} alt="slide"/>
                                    </Carousel.Item>)}
            </Carousel>
        </>
    );
}

export default Carrousel