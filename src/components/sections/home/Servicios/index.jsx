import css from "./styles/styles.module.scss";
import Section from "@/components/ui/Section";
import { Swiper, SwiperSlide } from "swiper/react";
import { useState, useEffect } from "react";
import Image from "next/image";
import CircleArrowIcon from "@/components/icons/interface/CircleArrowIcon";
import { Pagination } from "swiper";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import ArrowCircleIcon from "@/components/icons/interface/ArrowCircleIcon";

const ServiciosSection = ({ idioma, transform }) => {
	const [swiper, setSwiper] = useState(null);
	const [activeIndex, setActiveIndex] = useState(0);
	const router = useRouter();

	useEffect(() => {
		if (swiper) {
			console.log(swiper);
			swiper.on("slideChange", () => {
				setActiveIndex(swiper.activeIndex);
			});
		}
	}, [swiper]);

	const services = [
		{
			id: 1,
			title: idioma === "es" ? "Préstamos" : "Loans",
			image: "/assets/images/services/prestamos.jpg",
			text: "El Comité de Administración del Fondo de Asistencia y Estímulo de los Trabajadores del Poder Judicial (CAFAE-PJ), a fin de brindar asistencia económica a los trabajadores judiciales, ofrece préstamos para la atención de gastos y otros, hasta por la suma de",
			url: "servicios/prestamos",
		},
		{
			id: 2,
			title: idioma === "es" ? "Subsidios" : "Subsidies",
			image: "/assets/images/services/subsidios.jpg",
			text: "CAFAE-PJ ofrece subsidios a sus trabajadores para apoyarlos en situaciones de emergencia o para cubrir gastos inesperados. Los subsidios pueden ser otorgados en casos de salud, fallecimiento de un familiar directo, accidentes, entre otros. Además, el CAFAE-PJ también otorga subsidios para el mejoramiento de vivienda y educación.",
			url: "servicios/subsidios",
		},
		{
			id: 3,
			title: idioma === "es" ? "Apoyo Económico" : "Economic Support",
			image: "/assets/images/services/apoyo_economico.jpg",
			text: "CAFAE-PJ brinda apoyo económico a sus trabajadores para impulsar su crecimiento personal y profesional. Este apoyo puede ser en forma de becas para estudios de pregrado y posgrado, financiamiento para proyectos de investigación y desarrollo, entre otros.",
			url: "servicios/apoyo-economico",
		},
		{
			id: 4,
			title: idioma === "es" ? "Campo Deportivo" : "Sports Field",
			image: "/assets/images/services/campo_deportivo.jpg",
			text: "CAFAE-PJ cuenta con un campo deportivo en sus instalaciones que está disponible para uso exclusivo de sus trabajadores y sus familiares. Este espacio cuenta con canchas de fútbol, vóley, básquet, entre otros deportes. El campo deportivo es una herramienta clave para fomentar la actividad física y la recreación entre los trabajadores del Poder Judicial y sus familias.",
			url: "servicios/campo-deportivo",
		},
	];

	return (
		<Section>
			<Section.TopText className='justify-center text-[rgb(66,152,239)]'>
				{idioma === "es" ? "NUESTROS SERVICIOS" : "OUR SERVICES"}
			</Section.TopText>
			<Section.Title className='text-center mx-auto max-w-[800px] text-[#002448]'>
				{idioma === "es"
					? "Conoce todos nuestros servicios de apoyo y bienestar"
					: "Know all our support and welfare services"}
			</Section.Title>
			<div className={css.swiper_container}>
				<div className={css.swiper_wrapper}>
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
					</div>
					<Swiper
						slidesPerView={1}
						breakpoints={{
							600: {
								slidesPerView: 2,
							},
							820: {
								slidesPerView: 3,
							},
						}}
						pagination={{
							clickable: true,
						}}
						modules={[Pagination]}
						spaceBetween={30}
						className={css.swiper}
						onSwiper={(swiper) => setSwiper(swiper)}
					>
						{services.map((service) => (
							<SwiperSlide key={service.id} className={css.slide}>
								<div className={css.slide_wrapper}>
									<div className={css.card}>
										<Link
											href={service.url}
											className={css.card_image}
										>
											<Image
												src={service.image}
												alt={service.title.toLowerCase()}
												width={900}
												height={470}
											/>
										</Link>
										<div className={css.card_content}>
											<Link href={service.url}>
												<h3 className={css.card_title}>
													{service.title}
												</h3>
											</Link>
											<p className={css.card_text}>
												{service.text}
											</p>
											<button
												className={css.btn}
												onClick={() => {
													router.push(service.url);
												}}
											>
												{idioma === "es"
													? "Ver más"
													: "Read more"}
												<CircleArrowIcon size={26} />
											</button>
										</div>
									</div>
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
				<div className='flex justify-center mt-8'>
					<motion.button
						className={`relative leading-7 text-base text-[rgb(66,152,239)] rounded px-6 py-3.5 capitalize w-fit font-bold cursor-pointer hover:bg-[rgba(71,163,255,0.25)] border-[rgb(66,152,239)] border-2 transition-colors`}
						whileTap={{ scale: 0.94 }}
						onClick={() => router.push("/servicios")}
					>
						<div className='flex items-center gap-2'>
							{idioma === "es"
								? "Ver todos los servicios"
								: "See all services"}
							<ArrowCircleIcon size={20} />
						</div>
					</motion.button>
				</div>
				{/* <div className={css.swiper_dots}>
					<div className={css.dots_wrapper}>
						{swiper &&
							swiper?.slides?.map((_, index) => (
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
				</div> */}
			</div>
		</Section>
	);
};

export default ServiciosSection;
