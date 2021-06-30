import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';

import { SliderData } from '../Data/SliderData';

function ImageSlider({ slides }) {

	const [currentSlide, setCurrentSlide] = useState(0);
	const length = slides.length;

	if (!Array.isArray(slides) || slides.length <= 0) {
		return null;
	};

	const prevSlide = () => {
		console.log('prev_slide');
		setCurrentSlide(currentSlide === 0 ? length - 1 : currentSlide - 1);
	};

	const nextSlide = () => {
		console.log('next_slide');
		setCurrentSlide(currentSlide === length - 1 ? 0 : currentSlide + 1);
	};

	console.log(currentSlide);

	return (
		<section className='slider'>
			<FaArrowAltCircleLeft
				className='left-arrow'
				onClick={prevSlide} />
			<FaArrowAltCircleRight
				className='right-arrow'
				onClick={nextSlide} />
			{
				SliderData.map((slide, index) => {
					return (
						<div
							className={index === currentSlide ? 'slide-active' : 'slide'}
							key={index} >
							{index === currentSlide && (
								<img
									src={slide.image}
									alt=''
									className='image' />
							)}
						</div>
					)
				})
			}
		</section>
	)
}

export default ImageSlider;
