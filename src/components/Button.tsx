import classnames from 'classnames';
import { ReactNode } from 'react';

import './Button.scss';

const Button = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <button className={classnames('button', { [className as string]: !!className })}>
      {children}
    </button>
  );
};

export default Button;
