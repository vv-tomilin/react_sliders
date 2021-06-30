import React from 'react';

import ImageSlider from './components/ImageSlider';
import { SliderData } from './Data/SliderData';

import './App.css';

function App() {
  return (
    <div className="App">
      <ImageSlider
        slides={SliderData} />
    </div>
  );
}

export default App;
