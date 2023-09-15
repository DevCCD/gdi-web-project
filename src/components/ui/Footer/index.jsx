import EmailIcon from "@/components/icons/interface/EmailIcon";
import css from "./styles/styles.module.scss";
import SendIcon from "@/components/icons/interface/SendIcon";
import { motion } from "framer-motion";
import {
	contactAddress,
	contactAddressUrl,
	contactEmail,
	contactNumber,
	facebookUrl,
	youtubeUrl,
} from "@/data";
import PhoneIconFill from "@/components/icons/interface/PhoneIconFill";
import LocationIcon from "@/components/icons/interface/LocationIcon";
import { FacebookIcon } from "@/components/icons/socials";
import YoutubeIcon from "@/components/icons/socials/YoutubeIcon";
import Link from "next/link";
import DoubleArrowIcon from "@/components/icons/interface/DoubleArrowIcon";
import ArrowCircleIcon from "@/components/icons/interface/ArrowCircleIcon";
import Image from "next/image";
import { routerEs, routerEn } from "@/router";
import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { idiomaAtom } from "@/atoms/themes";
import { useRouter } from "next/router";
import BrandGDI from "../Brand";

const Footer = () => {
	const [idioma] = useAtom(idiomaAtom);
	const [rutas, setRutas] = useState([]);
	const year = new Date().getFullYear();

	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Acepte enviar Email con NodeJS");
	};

	const router = useRouter();

	const data_info = [
		{
			id: 1,
			icon: <PhoneIconFill size={20} />,
			title: idioma === "es" ? "Llámanos" : "Call Us",
			info: contactNumber,
			url: `tel:${contactNumber}`,
		},
		{
			id: 2,
			icon: <EmailIcon size={24} />,
			title: idioma === "es" ? "Soporte Online" : "Online Support",
			info: contactEmail,
			url: `mailto:${contactEmail}`,
		},
		{
			id: 3,
			icon: <LocationIcon size={26} />,
			title: idioma === "es" ? "Ubicación" : "Location",
			info: contactAddress,
			url: contactAddressUrl,
		},
	];
	const socials = [
		{
			id: 1,
			icon: <FacebookIcon />,
			name: "Facebook",
			link: facebookUrl,
		},
		{
			id: 2,
			icon: <YoutubeIcon />,
			name: "Youtube",
			link: youtubeUrl,
		},
	];

	useEffect(() => {
		idioma === "es" ? setRutas(routerEs) : setRutas(routerEn);
	}, [idioma]);

	return (
		<>
			<section className={css.section_citas}>
				<div className={css.wrapper}>
					<div className={css.citas_box}>
						<h3>
							{idioma === "es"
								? "Conoce más sobre nuestros servicios"
								: "Know more about our services!"}
						</h3>
						<form className={css.form} onSubmit={handleSubmit}>
							<div className={css.input_wrapper}>
								<div className={css.input_group}>
									<span>
										<EmailIcon size={20} />
									</span>
									<input
										required
										type='email'
										placeholder={
											idioma === "es"
												? "Ingrese su Email"
												: "Enter your Email"
										}
										className={css.input}
									/>
								</div>
								<motion.button
									className={css.btn_submit}
									type='submit'
									whileTap={{ scale: 0.95 }}
								>
									<span>
										{idioma === "es"
											? "Enviar Email"
											: "Send Email"}
									</span>
									<SendIcon size={20} />
								</motion.button>
							</div>
						</form>
					</div>
				</div>
			</section>
			<footer className={css.footer}>
				<div className={css.wrapper}>
					<div className={css.info_box}>
						{data_info.map((item) => (
							<div className={css.info_item} key={item.id}>
								<div className={css.icon}>{item.icon}</div>
								<div className={css.info}>
									<p>{item.title}</p>
									<Link
										href={item.url}
										className={css.link}
										target={
											item.url === contactAddressUrl
												? "_blank"
												: "_self"
										}
									>
										<h4 className='relative'>
											{item.info}
										</h4>
										{/* <span className='text-xs text-[#4298ef]'>
											{idioma === "es"
												? "Click para ir"
												: "Click to go"}
										</span> */}
									</Link>
								</div>
							</div>
						))}
					</div>
					<div className={css.footer_main}>
						<div className={css.brand}>
							<div className='mb-3'>
								<Link className={css.logo} href='/'>
									<BrandGDI size={50} />
									<div className={css.logoName}>GDI</div>
								</Link>
							</div>
							<p className={css.description}>
								{idioma === "es"
									? "Comité de Administración del Fondo de Asistencia y Estímulo de los Trabajadores del Poder Judicial."
									: "Administration Committee of the Assistance and Incentive Fund for Workers of the Judicial Branch."}
							</p>
							<div className={css.socials}>
								{socials.map((item) => (
									<Link
										href={item.link}
										key={item.id}
										className={css.social_btn}
										title={item.name}
										target='_blank'
									>
										{item.icon}
									</Link>
								))}
							</div>
						</div>
						<div className={css.nav_links}>
							<div className=''>
								<h4 className={css.subtitle}>
									{idioma === "es"
										? "Enlaces Rápidos"
										: "Quick Links"}
								</h4>
								<ul className={css.nav_links_list}>
									{rutas.map((item) => (
										<li key={item.id}>
											<Link href={item.path}>
												<DoubleArrowIcon size={20} />
												{idioma === "es"
													? `Ir a ${item.name}`
													: `Go to ${item.name}`}
											</Link>
										</li>
									))}
								</ul>
							</div>
						</div>
						<div className={css.contact}>
							<div className=''>
								<h4 className={css.subtitle}>
									{idioma === "es" ? "Contacto" : "Contact"}
								</h4>
								<form
									onSubmit={handleSubmit}
									className={css.contact_form}
								>
									<div className={css.input_group}>
										<input
											required
											type='text'
											placeholder={
												idioma === "es"
													? "Nombre y Apellidos *"
													: "Name and Last Name *"
											}
										/>
									</div>
									<div className={css.input_group}>
										<input
											required
											type='email'
											placeholder={
												idioma === "es"
													? "Correo Electrónico *"
													: "Email *"
											}
										/>
									</div>
									<div className={css.input_group}>
										<input
											required
											type='text'
											placeholder={
												idioma === "es"
													? "Teléfono"
													: "Phone"
											}
										/>
									</div>
									<div className={css.input_group}>
										<textarea
											placeholder={
												idioma === "es"
													? "Mensaje *"
													: "Message *"
											}
										/>
									</div>
									<div className={css.input_group}>
										<motion.button
											className={css.contact_form_btn}
											type='submit'
											whileTap={{ scale: 0.95 }}
										>
											{idioma === "es"
												? "Enviar Mensaje"
												: "Send Message"}
											<ArrowCircleIcon size={20} />
										</motion.button>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className={css.footer_bottom}>
						<div className='text-center md:text-start'>
							{idioma === "es" ? (
								<>
									© {year}. Todos los derechos reservados por{" "}
									<b>CAFAE - Poder Judicial</b>
								</>
							) : (
								<>
									© {year}. All rights reserved by{" "}
									<b>CAFAE - Poder Judicial</b>
								</>
							)}
						</div>
						<div className={css.bottom_right}></div>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
