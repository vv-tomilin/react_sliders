import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { } from 'swiper';

import { SliderData } from '../Data/SliderData';

import './swiper-style.css';
import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';

function SwiperSlider() {

	const slides = [];

	console.log(`${SliderData[0].image}`);

	for (let i = 0; i < 5; i++) {
		slides.push(
			<SwiperSlide
				className='swiper-item'
				key={`slide-${i}`}
				tag='li' >
				<img
					src={`${SliderData[i].image}`}
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
