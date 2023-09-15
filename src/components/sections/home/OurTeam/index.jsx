import Section from "@/components/ui/Section";
import css from "./styles/styles.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { useState, useEffect } from "react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { people } from "@/data";
import { motion } from "framer-motion";
import ArrowCircleIcon from "@/components/icons/interface/ArrowCircleIcon";
import { useRouter } from "next/router";

const OurTeamSection = ({ idioma }) => {
	const [mounted, setMounted] = useState(false);
	const router = useRouter();

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<Section>
			<Section.TopText
				className='justify-center'
				style={{ color: "var(--color-primary)" }}
			>
				{idioma === "es" ? "Nuestro equipo" : "Our team"}
			</Section.TopText>
			<Section.Title className='text-center mx-auto max-w-[800px] text-[#002448]'>
				{idioma === "es"
					? "Comite de Administación"
					: "Comite de Administacion"}
			</Section.Title>
			<div className={css.swiper_container}>
				<div className={css.swiper_wrapper}>
					<Swiper
						className='team_swiper'
						centeredSlides={true}
						pagination={{
							clickable: true,
						}}
						modules={[Pagination]}
						loop={true}
						slidesPerView={1}
						breakpoints={{
							600: {
								slidesPerView: 2,
							},
							1020: {
								slidesPerView: 3,
							},
						}}
						spaceBetween={30}
					>
						{people?.map((people) => {
							const segnmbre =
								people.seg_nombre.slice(0, 1) + ".";

							const nombreCompleto = `${people.nombre} ${
								people.seg_nombre ? segnmbre : ""
							} ${people.apellidos}`;
							return (
								<SwiperSlide
									key={people.id}
									className='team_swiper_slide'
								>
									<div className='team_swiper_slide_wrapper'>
										<span className='triangle_one' />
										<span className='triangle_two' />
										<div className='card'>
											<div className={css.card_image}>
												<Image
													src={people.image}
													alt={people.nombre.toLowerCase()}
													width={900}
													height={470}
												/>
											</div>
											<div className='card_content'>
												<div className='card_content_wrapper'>
													<h3
														className={
															css.card_title
														}
													>
														{nombreCompleto}
													</h3>
													<p
														className={
															css.card_text
														}
													>
														{people.cargo}
													</p>
												</div>
											</div>
										</div>
									</div>
								</SwiperSlide>
							);
						})}
					</Swiper>
					<div className='flex justify-center mt-10'>
						<motion.button
							className={`relative leading-7 text-base text-[rgb(66,152,239)] rounded px-6 py-3.5 capitalize w-fit font-bold cursor-pointer hover:bg-[rgba(71,163,255,0.25)] border-[rgb(66,152,239)] border-2 transition-colors`}
							whileTap={{ scale: 0.94 }}
							onClick={() =>
								router.push(
									"/nosotros/comite-de-administracion"
								)
							}
						>
							<div className='flex items-center gap-2'>
								{idioma === "es"
									? "Ver todos el comite"
									: "See all the committee"}
								<ArrowCircleIcon size={20} />
							</div>
						</motion.button>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default OurTeamSection;
