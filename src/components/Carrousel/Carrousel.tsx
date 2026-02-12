import './Carrousel.css';
import { useState, useEffect, useRef } from 'react';
import fondo1 from '../../assets/fondo1.png';
import fondo2 from '../../assets/fondo2.png';
import fondo3 from '../../assets/fondo3.png';

type Slide = {
    image: string;
    title: string;
    description: string;
    linkText: string;
};

type Direction = "prev" | "next";
const AUTOPLAY_DELAY = 3000;

const Carrousel = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState<number | null>(null);
    const [direction, setDirection] = useState<Direction>("next");

    const slides: Slide[] = [
        {
            image: fondo1,
            title: "Ofertas de verano",
            description: "Conoce nuestras imperdibles ofertas.",
            linkText: "Conocer más",
        },
        {
            image: fondo2,
            title: "Envío gratis en tu primera compra",
            description: "En tu primera compra te llevamos tu pedido gratis",
            linkText: "Quiero pedir",
        },
        {
            image: fondo3,
            title: "Novedades",
            description: "Descubre los últimos ingresos",
            linkText: "Ver nuevos productos",
        }];

    const goNext = () => {
        stopAutoplay();
        setPrevIndex(currentIndex);
        setDirection("next");
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        startAutoplay();
    };

    const goPrev = () => {
        stopAutoplay();
        setPrevIndex(currentIndex);
        setDirection("prev");
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
        startAutoplay();
    };

    const intervalRef = useRef<number | null>(null);
    const startAutoplay = () => {
        stopAutoplay();
        intervalRef.current = window.setInterval(() => {
            goNext();
        },AUTOPLAY_DELAY);
    };

    const stopAutoplay = () => {
        if (intervalRef.current !== null) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    useEffect(() => {
        startAutoplay();
        return ()=> stopAutoplay();
    },[]);



    return (
        <>
            <div className="carrousel-main-container">
                <button id="carrousel-control-prev" type="button" onClick={goPrev}>
                    <span className="visually-hidden"><i className="fa-solid fa-angle-left"></i></span>
                </button>
                <div className="inner-carrousel">

                    {slides.map((slide, index) => {
                        let className = "carrousel-item";

                        if (index === currentIndex) {
                            className += " active";
                        }
                        else if (index === prevIndex) {
                            className += direction === "next" ? " exit-left" : " exit-right";
                        }
                        else {
                            className += direction === "next"
                                ? " enter-from-right"
                                : " enter-from-left";
                        }
                        return (
                            <div
                                key={index}
                                className={className}
                            >
                                <img src={slide.image} alt={slide.title} />

                                <div className="panel-container">
                                    <div className="carrousel-caption">
                                        <h1>{slide.title}</h1>
                                        <p>{slide.description}</p>
                                        <p><a href="#">{slide.linkText}</a></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>

                <button id="carrousel-control-next" type="button" onClick={goNext}>
                    <span className="visually-hidden"><i className="fa-solid fa-angle-right"></i></span>
                </button>
            </div>
        </>
    )
}

export default Carrousel