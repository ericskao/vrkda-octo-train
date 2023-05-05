import classnames from 'classnames';
import PauseIcon from '../assets/PauseIcon';
import PlayIcon from '../assets/PlayIcon';

import './Timer.scss';

const Timer = ({
  setActiveIndex,
  setPaused,
  activeIndex,
  images,
  paused,
}: {
  setActiveIndex: (num: number) => void;
  setPaused: (bool: boolean) => void;
  activeIndex: number;
  images: string[];
  paused: boolean;
}) => {
  return (
    <div className="timer">
      <ul className="timer__timer-list">
        {images.map((image, index) => (
          <li key={index}>
            <button
              onClick={() => setActiveIndex(index)}
              className={classnames('timer__timer-item', {
                'timer__timer-item--active': index === activeIndex,
                'timer__timer-item--pending': index !== activeIndex,
              })}
            >
              <div>0{index + 1}</div>
              <div>bar</div>
            </button>
          </li>
        ))}
      </ul>
      <button className="timer__toggle" onClick={() => setPaused(!paused)}>
        {paused ? <PlayIcon className="timer__play" /> : <PauseIcon />}
      </button>
    </div>
  );
};

export default Timer;
