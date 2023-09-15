import DoubleArrowIcon from "@/components/icons/interface/DoubleArrowIcon";
import css from "./styles/index.module.scss";
import Image from "next/image";
import ImageDecorator from "@/components/ui/ImageDecorator";
import Button from "@/components/ui/Button";
import ArrowCircleIcon from "@/components/icons/interface/ArrowCircleIcon";
import { useRouter } from "next/router";

const AboutSection = ({ idioma, transform, style }) => {
	const router = useRouter();

	return (
		<section
			className={css.about_section}
			style={{
				position: "relative",
				backgroundImage: "url(/assets/images/bg-pattern-2.png)",
				backgroundRepeat: "no-repeat",
				backgroundPosition: "top center",
				backgroundSize: "cover",
				color: "#fff",
			}}
		>
			<div className='wrapper'>
				<div className={css.dual_grid}>
					<div className={css.parallax_effect}>
						<div className={css.pattern} style={transform} />
					</div>
					<div className={css.dual_grid_item_right}>
						<div className={css.image_container}>
							<ImageDecorator src='/assets/images/about.jpg' />
						</div>
					</div>
					<div className={css.dual_grid_item_left}>
						<div className={css.head_text}>
							<DoubleArrowIcon />
							<h2>
								{idioma === "es"
									? "SOBRE NOSOTROS"
									: "ABOUT US"}
							</h2>
						</div>
						<h1 className={css.title}>
							{idioma === "es"
								? "CAFAE - Poder Judicial"
								: "CAFAE - Judicial Power"}
						</h1>
						<div className={css.bold_text}>
							{idioma === "es"
								? "El Comité de Administración del Fondo de Asistencia y Estímulo de los Trabajadores del Poder Judicial."
								: "The Administration Committee of the Assistance and Incentive Fund for the Workers of the Judicial Power."}
						</div>
						<div className={css.text}>
							{idioma === "es"
								? "Es una institución privada sin fines de lucro, creada el 24 de Octubre de 1975 la cual tiene por finalidad promover el permanente bienestar social, económico y cultural de los Trabajadores del Poder Judicial además de promover actividades recreativas, sociales y culturales, así como contribuir al fortalecimiento y desarrollo del poder judicial, inició sus actividades ante SUNAT el 19 de Agosto de 2003."
								: "Is a private non-profit institution, created on October 24, 1975, whose purpose is to promote the permanent social, economic and cultural well-being of the Workers of the Judicial Power, in addition to promoting recreational, social and cultural activities, as well as contributing to the strengthening and development of the judicial power, began its activities before SUNAT on August 19, 2003."}
						</div>
						<div className={css.author_box}>
							<div className={css.btn}>
								<Button
									className={"w-full justify-center flex"}
									onClick={() =>
										router.push("/nosotros/quienes-somos")
									}
								>
									<div className='flex items-center gap-2'>
										{idioma === "es"
											? "Leer más"
											: "Read more"}
										<ArrowCircleIcon size={20} />
									</div>
								</Button>
							</div>
							{/* <div className={css.box_inner}>
								<div className={css.author_image}>
									<Image
										src='/assets/images/author-1.jpg'
										alt='author'
										className='rounded-full'
										width={76}
										height={76}
									/>
								</div>
								<div className={css.author_info}>
									<div className={css.author_name}>
										John Doe
									</div>
									<div className={css.author_position}>
										CEO & Founder
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
