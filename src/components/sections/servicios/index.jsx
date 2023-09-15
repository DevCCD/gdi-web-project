import CardService from "@/components/ui/Card/CardService";
import Section from "@/components/ui/Section";
import css from "./styles/index.module.scss";
import {
	PrestamoIcon,
	SubsidiosIcon,
	ApoyoIcon,
	CampoDeportivoIcon,
} from "./icons";

const ServiciosSection = ({ idioma }) => {
	const services = [
		{
			id: 1,
			title: idioma === "es" ? "Préstamos" : "Loans",
			desc:
				idioma === "es"
					? "El CAFAE PJ ofrece préstamos a los trabajadores del Poder Judicial para ayudarles en situaciones económicas difíciles. Ofrecemos préstamos con condiciones favorables y un proceso de solicitud fácil y rápido. Contáctanos para obtener más información."
					: "The CAFAE PJ offers loans to Judicial Power workers to help them in difficult economic situations. We offer loans with favorable conditions and an easy and fast application process. Contact us for more information.",
			icon: <PrestamoIcon />,
			href: "/servicios/prestamos",
		},
		{
			id: 2,
			title: idioma === "es" ? "Subsidios" : "Subsidies",
			desc:
				idioma === "es"
					? "El CAFAE PJ también proporciona subsidios a los trabajadores del Poder Judicial para apoyarlos en situaciones económicas y personales difíciles. Estos subsidios pueden ser utilizados para cubrir gastos como atención médica, gastos funerarios, entre otros."
					: "The CAFAE PJ also provides subsidies to Judicial Power workers to support them in difficult economic and personal situations. These subsidies can be used to cover expenses such as medical care, funeral expenses, among others.",
			icon: <SubsidiosIcon />,
			href: "/servicios/subsidios",
		},
		{
			id: 3,
			title: idioma === "es" ? "Apoyo económico" : "Economic support",
			desc:
				idioma === "es"
					? "Además de los préstamos y los subsidios, el CAFAE PJ ofrece apoyo económico a los trabajadores del Poder Judicial para fomentar su bienestar social, económico y cultural. Este apoyo se puede utilizar para fines recreativos, sociales y culturales."
					: "In addition to loans and subsidies, the CAFAE PJ offers economic support to Judicial Power workers to promote their social, economic and cultural well-being. This support can be used for recreational, social and cultural purposes.",
			icon: <ApoyoIcon />,
			href: "/servicios/apoyo-economico",
		},
		{
			id: 4,
			title: idioma === "es" ? "Campo deportivo" : "Sports field",
			desc:
				idioma === "es"
					? "El CAFAE PJ cuenta con un campo deportivo que está disponible para los trabajadores del Poder Judicial y sus familias. Este campo deportivo está diseñado para fomentar el desarrollo de habilidades artísticas, culturales y deportivas de la familia judicial a través de eventos de recreación."
					: "The CAFAE PJ has a sports field that is available to Judicial Power workers and their families. This sports field is designed to promote the development of artistic, cultural and sports skills of the judicial family through recreational events.",
			icon: <CampoDeportivoIcon />,
			href: "/servicios/campo-deportivo",
		},
	];

	return (
		<Section>
			<Section.Title className='text-center mx-auto text-[#002448]'>
				{idioma === "es" ? "Nuestros Servicios" : "Our Services"}
			</Section.Title>
			<Section.Description>
				{idioma === "es"
					? "Conoce todos nuestros servicios de apoyo y bienestar que brindamos a los trabajadores del Poder Judicial"
					: "Know all our support and welfare services that we provide to the workers of the Judicial Power"}
			</Section.Description>
			<Section.Container>
				<div className={css.servicesgrid}>
					{services.map((service, i) => {
						if (i === 0) {
							return (
								<CardService
									key={i}
									{...service}
									style={{
										borderBottom: "1px solid #b2bcc7",
										borderRight: "1px solid #b2bcc7",
									}}
								/>
							);
						}
						if (i === services.length - 1) {
							return (
								<CardService
									key={i}
									{...service}
									style={{
										borderTop: "1px solid #b2bcc7",
										borderLeft: "1px solid #b2bcc7",
									}}
								/>
							);
						}
						return <CardService key={i} {...service} />;
					})}
				</div>
			</Section.Container>
		</Section>
	);
};

export default ServiciosSection;
