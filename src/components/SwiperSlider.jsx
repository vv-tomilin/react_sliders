import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';

import { SliderData } from '../Data/SliderData';

import './swiper-style.css';

function SwiperSlider() {

	const slides = [];

	console.log(`${SliderData[0].image}`);

	for (let i = 0; i < 5; i++) {
		slides.push(
			<SwiperSlide
				key={`slide-${i}`}
				tag='li' >
				<img
					src={`${SliderData[i].image}`}
					style={{ listStyle: 'none' }}
					alt='' width='200' height='150' />
			</SwiperSlide>
		);
	};

	return (
		<div>
			<Swiper
				id='main'
				tag='section'
				wrapperTag='ul'
				navigation
				pagination >
				{slides}
			</Swiper>
		</div>
	)
}

export default SwiperSlider;
