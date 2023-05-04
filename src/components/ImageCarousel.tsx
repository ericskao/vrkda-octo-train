import classnames from 'classnames';
import { useEffect, useState } from 'react';

import './ImageCarousel.scss';

const images = [{}, {}, {}];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [paused, setPaused] = useState<boolean>(false);

  useEffect(() => {
    let id: ReturnType<typeof setTimeout> | null = null;
    if (paused) {
      return;
    } else {
      const next = (activeIndex + 1) % images.length;
      id = setTimeout(() => setActiveIndex(next), 4000);
    }
    // clean up effect
    return () => {
      if (id) {
        clearTimeout(id);
        id = null;
      }
    };
  }, [activeIndex, paused]);

  return (
    <div className="image-carousel">
      <div>3 pics here</div>
      <div className="image-carousel__timer">
        <ul className="image-carousel__timer-list">
          {images.map((image, index) => (
            <li
              className={classnames('image-carousel__timer-item', {
                'image-carousel__timer-item--active': index === activeIndex,
                'image-carousel__timer-item--pending': index !== activeIndex,
              })}
              key={index}
            >
              <div>0{index + 1}</div>
              <div>bar</div>
            </li>
          ))}
        </ul>

        <button className="image-carousel__pause" onClick={() => setPaused(!paused)}>
          {paused ? 'unpause' : 'pause'}
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
