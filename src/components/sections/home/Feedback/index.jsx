import Section from "@/components/ui/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import css from "./styles/styles.module.scss";
import Image from "next/image";
import ImageDecorator from "@/components/ui/ImageDecorator";

const FeedBackSection = ({ idioma }) => {
	return (
		<Section>
			<div className={css.grid}>
				<div className={css.row_left}>
					<div className={css.wrapper_image}>
						<ImageDecorator
							src='/assets/images/feedback/testimonial.jpg'
							alt='feedback_image_1'
							width={990}
							height={990}
						/>
					</div>
				</div>
				<div className={css.row_right}>
					<Section.TopText style={{ color: "var(--color-primary)" }}>
						{idioma === "es" ? "TESTIMONIOS" : "TESTIMONIALS"}
					</Section.TopText>
					<Section.Title className='max-w-[500px] text-[#002448]'>
						{idioma === "es"
							? "¿Qué dicen los clientes sobre nosotros?"
							: "What do customers say about us?"}
					</Section.Title>
					<div className={css.swiper_wrapper}>
						<Swiper
							pagination={{
								clickable: true,
							}}
							modules={[Pagination]}
							slidesPerView={1}
							loop={true}
							className={css.swiper}
							spaceBetween={36}
						>
							{Array(4)
								.fill()
								.map((_, i) => (
									<SwiperSlide key={i} className={css.slide}>
										<div className={css.quote}>
											<Image
												src='/assets/images/icons/quote-icon.png'
												alt='quote'
												width={98}
												height={73}
											/>
										</div>
										<div className={css.text}>
											Lorem Ipsum is simply dummy text of
											the printing and typesetting
											industry. Lorem Ipsum has been the
											industrys standard dummy text ever
											since the 1500s, when an unknown
											printer took a galley of type and
											scrambled it to make a type
											specimen.
										</div>
										<div className={css.author}>
											<div className={css.image}></div>
											<div className={css.name}>
												<h4>John Doe</h4>
												<p>CEO, Company</p>
											</div>
										</div>
									</SwiperSlide>
								))}
						</Swiper>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default FeedBackSection;
