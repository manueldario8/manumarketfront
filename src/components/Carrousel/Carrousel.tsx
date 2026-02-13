import './Carrousel.css';
import { useState, useEffect, useRef } from 'react';
import fondo1 from '../../assets/fondo1.png';
import fondo2 from '../../assets/fondo2.png';
import fondo3 from '../../assets/fondo3.png';

type Slide = {
    image: string;
    title: string;
    description: string;
    link: string;
};

const Carrousel = () => {

    const slides: Slide[] = [
        {
            image: fondo1,
            title: "Ofertas de verano",
            description: "Conoce nuestras imperdibles ofertas.",
            link: "#",
        },
        {
            image: fondo2,
            title: "Envío gratis en tu primera compra",
            description: "En tu primera compra te llevamos tu pedido gratis",
            link: "#",
        },
        {
            image: fondo3,
            title: "Novedades",
            description: "Descubre los últimos ingresos",
            link: "#",
        }
    ];

    const extendedSlides = [
        slides[slides.length - 1],
        ...slides,
        slides[0],
    ];

    const [index, setIndex] = useState(1);
    const [isAnimating, setIsAnimating] = useState(true);

    const goNext = () => {
        setIsAnimating(true);
        setIndex(i => i + 1);
    };

    const goPrev = () => {
        setIsAnimating(true);
        setIndex(i => i - 1);
    };

    const handleTransitionEnd = () => {
        if (index === extendedSlides.length - 1) {
            setIsAnimating(false);
            setIndex(1);
        }

        if (index === 0) {
            setIsAnimating(false);
            setIndex(extendedSlides.length - 2);
        }
    };

    const autoplayRef = useRef<number | null>(null);

    const startAutoplay = () => {
        stopAutoplay();
        autoplayRef.current = window.setInterval(() => {
            setIsAnimating(true);
            setIndex(i => i + 1);
        }, 3000);
    };

    const stopAutoplay = () => {
        if (autoplayRef.current !== null) {
            clearInterval(autoplayRef.current);
            autoplayRef.current = null;
        }
    };

    useEffect(() => {
        startAutoplay();
        return () => stopAutoplay();
    }, []);

    useEffect(() => {
        const handleVisibilityChange = () => {
            if (document.hidden) {
                stopAutoplay();
            } else {
                startAutoplay();
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []);

    useEffect(() => {
        if (index < 0 || index > extendedSlides.length - 1) {
            setIsAnimating(false);
            setIndex(1);
        }
    }, [index]);


    return (
        <div className="carrousel-main-container">

            <button id="carrousel-control-prev" type="button" onClick={() => {
                stopAutoplay();
                goPrev();
                startAutoplay();
            }}>
                <i className="fa-solid fa-angle-left"></i>
            </button>

            <div className="viewport">
                <div
                    className="track"
                    style={{
                        transform: `translateX(-${index * 100}%)`,
                        transition: isAnimating
                            ? 'transform 600ms ease-in-out'
                            : 'none'
                    }}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {extendedSlides.map((slide, i) => (
                        <a href={slide.link} className="slide" key={i}
  >
                            <img src={slide.image} alt={slide.title} />
                            {/*<div className="panel-container">
                                <div className="carrousel-caption">
                                    <h1>{slide.title}</h1>
                                    <p>{slide.description}</p>
                                    <p>
                                        <a href="#">{slide.linkText}</a>
                                    </p>
                                </div>
                            </div>*/}
                        </a>
                    ))}
                </div>
            </div>

            <button id="carrousel-control-next" type="button" onClick={() => {
                stopAutoplay();
                goNext();
                startAutoplay()
            }}>
                <i className="fa-solid fa-angle-right"></i>
            </button>

        </div>
    );
};

export default Carrousel;
