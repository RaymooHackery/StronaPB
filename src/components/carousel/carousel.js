import React, { useState, useEffect, useRef, useCallback } from "react";
import "./carousel.scss";

const Carousel = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timeoutRef = useRef();
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };
  const transitionStyle =
    isTransitioning === true ? "slides__img--transitioning" : "";

  const getPreviousImageIndex = useCallback(
    () => (activeImage === 0 ? images.length - 1 : activeImage - 1),
    [activeImage, images]
  );

  const handleNextSlide = useCallback(() => {
    if (activeImage + 1 >= images.length) {
      setActiveImage(0);
    } else setActiveImage(activeImage + 1);
  }, [activeImage, images]);
  const handlePreviousSlide = useCallback(() => {
    setActiveImage(getPreviousImageIndex());
  }, [getPreviousImageIndex]);

  useEffect(() => {
    setIsTransitioning(true);
    setTimeout(() => setIsTransitioning(false), 1000);
  }, [activeImage]);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(handleNextSlide, 10000);
    return () => {
      resetTimeout();
    };
  }, [activeImage, handleNextSlide]);

  return (
    <div className="slides">
      <div className="slide">
        <img
          src={images[activeImage].path}
          alt="helo"
          className={`slides__img slides__img--active  ${transitionStyle}`}
        />
        <img
          src={images[getPreviousImageIndex()].path}
          alt="helo"
          className="slides__img slides__img--previous"
        />
        <div className="slides__text">
          <h1>Remont nie musi boleć!</h1>
          Remont - słowo, w który zawiera się ekscytacja, zniecierpliwienie,
          nerwowość i radość jednocześnie. Najczęściej nasze doświadczenia
          sprowadzają się do negatywnej oceny tego czasu w naszym życiu. Ale to
          już przeszłość! My uwolnimy Cię od traumy i nadamy mu nowego
          znaczenia. Sprawimy, że Twoje wizje nie tylko staną się realne, ale
          przez proces ich tworzenia przejdziesz bez łez i złorzeczenia.
        </div>
      </div>
      <button onClick={handlePreviousSlide} className="button--left">
        ❮
      </button>
      <button onClick={handleNextSlide} className="button--right">
        ❯
      </button>
    </div>
  );
};

export default Carousel;
