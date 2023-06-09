import ImageCarousel from './components/ImageCarousel';
import LoremIpsum from './components/LoremIpsum';

import './App.scss';

function App() {
  return (
    <div className="app">
      <div className="app__background">
        <div className="circle" />
      </div>
      <LoremIpsum />
      <ImageCarousel />
    </div>
  );
}

export default App;
