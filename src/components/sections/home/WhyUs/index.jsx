import css from "./styles/style.module.scss";

import Section from "@/components/ui/Section";
import Image from "next/image";
import CountUp, { useCountUp } from "react-countup";
import Tilty from "react-tilty";

const WhyUsSection = ({ idioma }) => {
	const info = [
		{
			id: 1,
			data: 100,
			signal: "%",
			label: "Customer Satisfaction",
		},
		{
			id: 2,
			data: 200,
			signal: "+",
			label: "Monthly Active Users",
		},
		{
			id: 3,
			data: 100,
			signal: "+",
			label: "New Customer pew Week",
		},
	];

	const list = [
		{
			id: 1,
			number: 1,
			title:
				idioma === "es"
					? "Amplia gama de servicios"
					: "Wide range of services",
			text:
				idioma === "es"
					? "Ofrecemos una amplia variedad de servicios que promueven el bienestar social, económico y cultural de los trabajadores del Poder Judicial, así como el fortalecimiento y desarrollo de la institución."
					: "We offer a wide variety of services that promote the social, economic and cultural well-being of Judicial Branch workers, as well as the strengthening and development of the institution.",
		},
		{
			id: 2,
			number: 2,
			title:
				idioma === "es"
					? "Autonomía en la gestión de fondos"
					: "Autonomy in the management of funds",
			text:
				idioma === "es"
					? "Contamos con la facultad de tomar decisiones autónomas sobre el destino y modo de inversión de los fondos, siempre que sea aprobado por el Comité de Administración, lo que nos permite ofrecer soluciones personalizadas y adaptadas a las necesidades de nuestros clientes."
					: "We have the faculty to make autonomous decisions about the destination and mode of investment of the funds, as long as it is approved by the Administration Committee, which allows us to offer personalized solutions adapted to the needs of our clients.",
		},
		{
			id: 3,
			number: 3,
			title:
				idioma === "es"
					? "Compromiso con la calidad"
					: "Commitment to quality",
			text:
				idioma === "es"
					? "Nos comprometemos a brindar un servicio de calidad, satisfaciendo las necesidades personales y profesionales de nuestros usuarios para mejorar su calidad de vida. Aspiramos a ser la institución modelo de asistencia y estímulo para los trabajadores del Poder Judicial."
					: "We are committed to providing a quality service, satisfying the personal and professional needs of our users to improve their quality of life. We aspire to be the model institution for assistance and encouragement for Judicial Branch workers.",
		},
	];

	return (
		<Section
			style={{
				backgroundColor: "rgb(0, 34, 69)",
				color: "white",
			}}
		>
			<Section.TopText className='justify-center'>
				{idioma === "es" ? "¿POR QUÉ NOSOTROS?" : "WHY US"}
			</Section.TopText>
			<Section.Title className='text-center mx-auto max-w-[800px]'>
				{idioma === "es" ? "¿Por qué elegirnos?" : "Why Choose Us"}
			</Section.Title>
			<div className={css.container}>
				<div className={css.row}>
					<div className={css.card}>
						<span className={css.triangle_one} />
						<span className={css.triangle_two} />
						<Tilty
							reverse
							className={css.tilt}
							glareMaxOpacity={0.1}
							scale={1.01}
							glare
							perspective={900}
							max={15}
							maxGlare={0.55}
						>
							<div>
								<Image
									src='/assets/images/whyus/choose.jpg'
									alt='why-us-1'
									width={990}
									height={990}
								/>
								<div className={css.card_body}>
									{info.map((item) => (
										<div
											key={item.id}
											className={css.card_body_item}
										>
											<h3>
												<CountUp
													start={0}
													className='relative font-bold text-2xl leading-[26px]'
													end={item.data}
													duration={5}
													suffix={item.signal}
													enableScrollSpy
													scrollSpyDelay={200}
												/>
											</h3>
											<p className='text-sm'>
												{item.label}
											</p>
										</div>
									))}
								</div>
							</div>
						</Tilty>
					</div>
				</div>
				<div className={css.row}>
					<div>
						<ul className={css.list_container}>
							{list.map((item, index) => (
								<li key={item.id} className={css.list}>
									<div className={css.list_number}>
										{index !== list.length - 1 && (
											<div className={css.line} />
										)}
										<span>
											<div className='absolute rounded-full w-[60px] h-[60px] z-[-2] bg-[#4298EF] opacity-20'></div>
											<div className='absolute rounded-full w-[50px] h-[50px] z-[-2] bg-[#4298EF] opacity-60'></div>
											<div className='absolute rounded-full w-10 h-10 z-[-1] bg-[#4298EF]'></div>
											{item.number}
										</span>
									</div>
									<div className={css.list_info}>
										<h3 className='font-bold text-xl text-white mb-[10px]'>
											{item.title}
										</h3>
										<p className='text-sm leading-6'>
											{item.text}
										</p>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</Section>
	);
};

export default WhyUsSection;
