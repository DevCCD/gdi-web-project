import { Swiper, SwiperSlide } from "swiper/react";
import css from "./styles/styles.module.scss";

import "swiper/css";
import DoubleArrowIcon from "@/components/icons/interface/DoubleArrowIcon";
import Button from "../Button";
import PlayIcon from "@/components/icons/interface/PlayIcon";
import ArrowCircleIcon from "@/components/icons/interface/ArrowCircleIcon";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { activeMenuAtom } from "@/atoms/navbarAtom";

const Header = ({ idioma, transform }) => {
	const [swiper, setSwiper] = useState(null);
	const [activeIndex, setActiveIndex] = useState(0);

	const [activeMenu, setActiveMenu] = useAtom(activeMenuAtom);

	useEffect(() => {
		if (swiper) {
			swiper.on("slideChange", () => {
				setActiveIndex(swiper.activeIndex);
			});
		}
	}, [swiper]);

	return (
		<header
			className='relative'
			onClick={() => {
				if (activeMenu) {
					setActiveMenu(false);
				}
			}}
		>
			<div className={css.parallax_effect}>
				<div
					className={`${css.pattern} ${css.pattern_one}`}
					style={transform}
				/>
				<div
					className={`${css.pattern} ${css.pattern_two}`}
					style={transform}
				/>
				<div
					className={`${css.pattern} ${css.pattern_third}`}
					style={transform}
				/>
				<div className={`${css.pattern} ${css.pattern_four}`} />
				<div className={`${css.pattern} ${css.pattern_five}`} />
			</div>
			<div className={css.header_wrapper}>
				<div className={css.swiper_dots}>
					<div className={css.dots_wrapper}>
						{swiper &&
							swiper.slides?.map((_, index) => (
								<button
									key={index}
									className={
										swiper?.activeIndex === index
											? `${css.swiper_dot} ${css.active}`
											: `${css.swiper_dot}`
									}
									onClick={() => swiper.slideTo(index)}
								>
									<div className={css.orb} />
								</button>
							))}
					</div>
				</div>

				<Swiper
					className={css.swiper}
					onSwiper={(swiper) => setSwiper(swiper)}
				>
					{Array(5)
						.fill()
						.map((_, index) => (
							<SwiperSlide className={css.slide} key={index}>
								<div className={css.slide_content}>
									<div className={css.dual_grid}>
										<div
											className={css.dual_grid_item_right}
										>
											<div className={css.head_text}>
												<DoubleArrowIcon />
												<h2>
													{idioma === "es"
														? "Noticias y Eventos"
														: "News and Events"}
												</h2>
											</div>
											<h1 className={css.title}>
												{idioma === "es"
													? "Rifa CAFAE 2023 Gana un Auto y Dinero en Efectivo"
													: "CAFAE Raffle 2023: Win a Car and Cash"}

												{/* {idioma === "es"
													? "Comité de Administración del Fondo de Asistencia y Estímulo de los Trabajadores del Poder Judicial"
													: "Administration Committee of the Assistance and Incentive Fund for Workers of the Judicial Power"} */}
											</h1>
											<p className='mb-10 mt-2 leading-7'>
												Lorem Ipsum is simply dummy text
												of the printing and typesetting
												industry.Lorem Ipsum has been
												the industrys standard dummy
											</p>
											<div className={css.btns_box}>
												<Button>
													<div className='flex items-center gap-2'>
														Leer más
														<ArrowCircleIcon
															size={20}
														/>
													</div>
												</Button>
												<motion.button
													className='relative w-14 h-14 rounded text-center border border-[rgb(66,152,239)] text-[rgb(66,152,239)] hover:text-white hover:bg-[rgb(66,152,239)] transition-colors ease-linear duration-150 flex justify-center items-center'
													whileTap={{ scale: 0.94 }}
												>
													<PlayIcon size={32} />
												</motion.button>
											</div>
										</div>
										<div
											className={css.dual_grid_item_left}
										>
											<div
												className={`${css.pattern} ${css.pattern_six}`}
											></div>
											<Image
												src='/assets/images/header/header1.jpeg'
												alt='hero'
												width={890}
												height={890}
											/>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
				</Swiper>
			</div>
		</header>
	);
};

export default Header;
