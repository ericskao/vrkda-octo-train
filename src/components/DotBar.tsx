import { useEffect, useState } from 'react';

import './DotBar.scss';

const DotBar = ({
  isActiveIndex,
  paused,
  timerRef,
}: {
  isActiveIndex: boolean;
  paused: boolean;
  timerRef: any;
}) => {
  const [percentageFilled, setPercentageFilled] = useState<number>(0);

  useEffect(() => {
    let interval: number;
    if (isActiveIndex) {
      // timer is running, setInterval and setPercentage
      interval = window.setInterval(() => {
        const percentFilled = 1 - timerRef.current.getRemainingTime() / 4000;
        console.log('percent', percentFilled);
        setPercentageFilled(percentFilled);
      }, 200);

      if (paused) {
        // no longer need setInterval to run
        clearInterval(interval);
      }

      // clearInterval on unmount
      return () => clearInterval(interval);
    }
  }, [isActiveIndex, paused, timerRef]);

  if (!isActiveIndex) {
    return <div className="dot" />;
  }
  const height = Math.max(4, percentageFilled * 20);
  return <div style={{ height: percentageFilled === 0 ? '4px' : height + 'px' }} className="dot" />;
};

export default DotBar;
