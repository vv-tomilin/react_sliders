import React from 'react';

import ImageSlider from './components/ImageSlider';
import SwiperSlider from './components/SwiperSlider/SwiperSlider';
import { SliderData } from './Data/SliderData';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>ImageSlider</h1>
      <ImageSlider
        slides={SliderData} />

      <h1>SwiperSlider</h1>
      <SwiperSlider />
    </div>
  );
}

export default App;
