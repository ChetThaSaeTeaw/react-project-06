import React from 'react';
import './CarouselComponent.css';
import carouselPic01 from '../../Image/carousel01.jpg';
import Carousel from 'react-bootstrap/Carousel'
import 'bootstrap/dist/css/bootstrap.min.css'; 

function CarouselComponent () {
    return (
        <div className="carousel_container">
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block h-50"
                    src={carouselPic01}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block h-50"
                    src={carouselPic01}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block h-50"
                    src={carouselPic01}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default CarouselComponent;
