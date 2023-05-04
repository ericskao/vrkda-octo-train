import RightCaret from '../assets/RightCaret';
import Button from './Button';

import './LoremIpsum.scss';

const LoremIpsum = () => {
  return (
    <div className="lorem-ipsum">
      <h2 className="lorem-ipsum__subheader">Lorem ipsum dolor</h2>
      <h1 className="lorem-ipsum__header">Lorem ipsum dolor sit amet, est mollis evertitur ut</h1>
      <p className="lorem-ipsum__content">
        Lorem ipsum dolor sit amet, est mollis evertitur ut, clita utinam quaeque ad sed, an legere
        concludaturque eum. Duo omnis solet dissentiet te, ea sed quis erat reprehendunt, cetero
        consetetur philosophia mel in.
      </p>
      <Button className="lorem-ipsum__learn-more">
        Learn More<span className="arrow">&#8594;</span>
        <RightCaret />
      </Button>
    </div>
  );
};

export default LoremIpsum;
