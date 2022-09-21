import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/img/1amanecer.jpg'
import image2 from '../assets/img/2mañana.jpg'
import image3 from '../assets/img/3taza.jpg'
import image4 from '../assets/img/4arroyo.jpg'
import image5 from '../assets/img/5kayak.jpg'
import image6 from '../assets/img/6lago.jpg'
import image7 from '../assets/img/7atardecer.jpg'
import image8 from '../assets/img/8personas.jpg'
import image9 from '../assets/img/9fogata.jpg'
import image10 from '../assets/img/10banner_camping.jpg'
import { Button } from 'react-bootstrap';


function Carrousel() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    const carouselStyle = {padding:"2px 40px 40px 40px"}
    // const carouseItemlStyle = {width:"1480px", height:"480px"}

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} className="mx-auto" style={carouselStyle}>
            <Carousel.Item>
                <img 
                    className=" d-block mx-auto"
                    src= {image1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <Button>Mas Info+</Button>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img  
                    className="d-block mx-auto"
                    src= {image2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img  
                    className="d-block mx-auto"
                    src= {image3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
                <img  
                    className="d-block mx-auto"
                    src= {image4}
                    alt="Fourth slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img  
                    className="d-block mx-auto"
                    src=  {image5}
                    alt="Fifth slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img  
                    className="d-block mx-auto"
                    src= {image6}
                    alt="Sixth slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img  
                    className="d-block mx-auto"
                    src= {image7}
                    alt="Seventh slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img  
                    className="d-block mx-auto"
                    src= {image8}
                    alt="Eighth slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img  
                    className="d-block mx-auto"
                    src= {image9}
                    alt="Ninth slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img  
                    className="d-block mx-auto"
                    src= {image10}
                    alt="Tenth slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    );
}

export default Carrousel