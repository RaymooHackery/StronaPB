import React, { useState, useEffect, useRef } from "react";
import "./carousel.scss"

const Carousel = ({images}) => {
    const [activeImage, setActiveImage] = useState(0);
    const timeoutRef = useRef();
    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current)
        }
    };

    useEffect(() => {
        resetTimeout()
        timeoutRef.current = setTimeout( 
                () => setActiveImage((prevImage) =>
                    prevImage === images.length - 1 ? 0 : prevImage + 1
                ), 10000
            );
        return () => {
            resetTimeout()
        }
    }, [activeImage]);

    const handleNextSlide = () => {
        if (activeImage + 1 >= images.length) {
            setActiveImage(0)
        } else 
        setActiveImage(activeImage + 1);
    };
    const handlePreviousSlide = () => {
        if (activeImage === 0) {
            setActiveImage(images.length - 1)
        } else 
        setActiveImage(activeImage - 1);
    };

    return (
        <div className="slides">
            <div  className="slide">
            

            <img src={images[activeImage].path} alt="helo"/>
            <div className="slides__text">
                <h1>Remont nie musi boleć!</h1>
                Remont - słowo, w który zawiera się ekscytacja, zniecierpliwienie, nerwowość i radość jednocześnie. Najczęściej nasze doświadczenia sprowadzają się do negatywnej oceny tego czasu w naszym życiu.
                Ale to już przeszłość! My uwolnimy Cię od traumy 
                i nadamy mu nowego znaczenia. Sprawimy, że Twoje wizje nie tylko staną się realne, ale przez proces ich tworzenia przejdziesz bez łez i złorzeczenia.
            </div>
                     
            </div>
            <button onClick={handlePreviousSlide}>-</button>
            <button onClick={handleNextSlide}>+</button>   
        </div>
    )
};

export default Carousel;