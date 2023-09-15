import React from "react";

const SwiperPagination = ({ swiper }) => {
	const slides = [];

	for (let i = 0; i < swiper.slides.length; i++) {
		slides.push(
			<div
				key={`pagination-${i}`}
				className={`swiper-pagination-bullet ${
					i === swiper.activeIndex
						? "swiper-pagination-bullet-active"
						: ""
				}`}
				onClick={() => swiper.slideTo(i)}
			/>
		);
	}

	return <div className='swiper-pagination'>{slides}</div>;
};

export default SwiperPagination;
