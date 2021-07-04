import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { } from 'swiper';

import { SliderData } from '../../Data/SliderData';

import 'swiper/swiper.scss';
import 'swiper/swiper-bundle.css';
import './swiper-style.css';

function SwiperSlider() {

	const slides = [];

	console.log(`${SliderData[0].image}`);

	for (let i = 0; i < 5; i++) {
		slides.push(
			<SwiperSlide
				className='swipe-item'
				key={`slide-${i}`}
				tag='li' >
				<img
					src={`${SliderData[i].image}`}
					alt='' width='800' height='600' />
			</SwiperSlide>
		);
	};

	return (
		<div>
			<Swiper
				id='main'
				tag='section'
				wrapperTag='ul'>
				{slides}
			</Swiper>
		</div>
	)
}

export default SwiperSlider;
