import classnames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import TimerClass from '../utils/timer';
import Timer from './Timer';

// assets
import imageOne from '../assets/1.png';
import imageTwo from '../assets/2.png';
import imageThree from '../assets/3.png';

// styles
import './ImageCarousel.scss';

const images = [imageOne, imageTwo, imageThree];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);

  const timerRef: any = useRef(null);

  useEffect(() => {
    const ref = timerRef;
    // clear timeout on unmount
    return () => {
      if (ref?.current) {
        ref.current.clear();
      }
    };
  }, []);

  useEffect(() => {
    const next = (activeIndex + 1) % images.length;
    timerRef.current = new TimerClass(() => {
      setActiveIndex(next);
    }, 4000);
  }, [activeIndex]);

  useEffect(() => {
    if (paused) {
      timerRef.current.pause();
    } else {
      timerRef.current.resume();
    }
  }, [paused]);

  return (
    <div className="image-carousel">
      <div className="image-carousel__images">
        {images.map((image, index) => {
          const isActive = index === activeIndex;
          const isNext = activeIndex + 1 === index || (activeIndex === 2 && index === 0);
          const isThird =
            (index === 0 && activeIndex === 1) ||
            (index === 2 && activeIndex === 0) ||
            (index === 1 && activeIndex === 2);
          return (
            <img
              style={{ zIndex: isActive ? 10 : images.length - index }}
              className={classnames('image-carousel__image', {
                'image-carousel__image--active': isActive,
                'image-carousel__image--next': isNext,
                'image-carousel__image--third': isThird,
              })}
              key={index}
              src={image}
              alt={image}
            />
          );
        })}
      </div>
      <Timer
        setActiveIndex={setActiveIndex}
        setPaused={setPaused}
        images={images}
        paused={paused}
        activeIndex={activeIndex}
        timerRef={timerRef}
      />
    </div>
  );
};

export default ImageCarousel;
