import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
} from "react";
import "./carousel.scss";

const Carousel = ({ images }) => {
  const [activeImage, setActiveImage] = useState(0);
  const timeoutRef = useRef();
  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

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
    resetTimeout();
    timeoutRef.current = setTimeout(handleNextSlide, 10000);
    return () => {
      resetTimeout();
    };
  }, [activeImage, handleNextSlide]);
  const imageComponents = useMemo(
    () =>
      images.map((image, index) => {
        const isActive = index === activeImage;
        const className = `slides__img ${
          isActive ? "slides__img--active" : "slides__img--inactive"
        }`;
        return (
          <img
            src={image.path}
            alt="helo"
            className={className}
            key={image.order}
          />
        );
      }),
    [activeImage, images]
  );

  return (
    <div className="slides">
      <div className="slide">
        {imageComponents}
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
