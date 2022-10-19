import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import useAxios from '../hooks/useAxios';

function Carrousel() {
    const [index, setIndex] = useState(0);
    const { data, isLoading, error } = useAxios('http://localhost:8000/carousel')
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const carouselStyle = { padding: "2px 40px 40px 40px" }
    return (
        <>
            <Carousel activeIndex={index} onSelect={handleSelect} className="mx-auto" style={carouselStyle}>
                {isLoading ? <div>Cargando petición...</div> :
                    error.isError ? <div>Hubo un error: {error.message}</div> :
                            data.length === 0 ? null :
                                data.img.map((image, index) =>
                                    <Carousel.Item key={index}>
                                        <img  className=" d-block mx-auto" src={require(`../assets/img/${image.name}`)} alt="First slide"/>
                                    </Carousel.Item>)}
            </Carousel>
        </>
    );
}

export default Carrousel