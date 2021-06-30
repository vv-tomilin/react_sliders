import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import { SliderData } from '../Data/SliderData';

function ImageSlider() {

	const [currentSlide, setCurrentSlide] = useState(0);
	//const length = slides.length;

	const prevSlide = () => {
		console.log('prev_slide');
	};

	const nextSlide = () => {
		console.log('next_slide');
	};

	return (
		<section className='slider'>
			<FaArrowAltCircleLeft
				className='left-arrow'
				onClick={prevSlide} />
			{
				SliderData.map((slide, index) => {
					return (
						<img
							src={slide.image}
							alt='' width='200' height='150'
							key={index} />
					)
				})
			}
			<FaArrowAltCircleRight
				className='right-arrow'
				onClick={nextSlide} />
		</section>
	)
}

export default ImageSlider;
