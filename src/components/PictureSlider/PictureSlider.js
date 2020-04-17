import React from 'react';
import image4 from './parapente.png';
import image5 from './lechuza.png';
import image6 from './pile.png';
import { Carousel } from 'react-bootstrap';
import SliderCard from '../SliderCard/SliderCard';
import classes from "./PictureSlider.css";

class PictureSlider extends React.Component {
    render() {
        return (
            <Carousel indicators={false} className={classes.carousel}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image4}
                        alt="First slide"
                        height="500"
                    />
                    <Carousel.Caption className={classes.carouselCaption} >
                        <SliderCard title="Nuestro Municipio"
                            p="Sopó es un municipio ubicado a 39 km de Bogotá, fundado en el año 1653 por Fray Francisco Chacón." />
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image5}
                        alt="Second slide"
                        height="500"
                    />
                    <Carousel.Caption className={classes.carouselCaption}>
                        <SliderCard title="Conoce" 
                        p="En nuestro sitio web encontrarás imágenes, noticias de interés, información de eventos y de interés en general." />
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={image6}
                        alt="Third slide"
                        height="500"
                    />
                    <Carousel.Caption className={classes.carouselCaption}>
                        <SliderCard title="Turismo" 
                        p="Un pequeño municipio con grandes maravillas naturales e históricas que resulta ideal para quienes buscan un descanso del ajetreo de la ciudad y respirar aire puro." />
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        );
    }
};

export default PictureSlider;