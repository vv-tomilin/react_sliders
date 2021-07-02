import React from 'react';

import ImageSlider from './components/ImageSlider';
import SwiperSlider from './components/SwiperSlider';
import { SliderData } from './Data/SliderData';

import './App.css';

function App() {
  return (
    <div className="App">
      <ImageSlider
        slides={SliderData} />
      <SwiperSlider />
    </div>
  );
}

export default App;
