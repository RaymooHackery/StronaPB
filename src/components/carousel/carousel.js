import React, { useState, useEffect } from "react";
import "./carousel.scss"

const Carousel = ({images}) => {
    const [activeImage, setActiveImage] = useState(0);
    useEffect(() => {
        setTimeout( 
                () => setActiveImage((prevImage) =>
                    prevImage === images.length - 1 ? 0 : prevImage + 1
                ), 10000
            );
        return () => {}
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
            <button onClick={handlePreviousSlide}>-</button>
            <img src={images[activeImage].path} alt="helo" />
            <button onClick={handleNextSlide}>+</button>
        </div>
    )
};

export default Carousel;