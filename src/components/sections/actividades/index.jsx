import CardService from "@/components/ui/Card/CardService";
import Section from "@/components/ui/Section";
import css from "./styles/styles.module.scss";
import {
	ApoyoIcon,
	CampoDeportivoIcon,
	PrestamoIcon,
	SubsidiosIcon,
} from "../servicios/icons";
import MadreIcon from "./icons/MadreIcon";
import PadreIcon from "./icons/PadreIcon";
import Celebration40Icon from "./icons/Celebration40Icon";
import ChristmasIcon from "./icons/ChristmasIcon";
import CompetitionIcon from "./icons/CompetitionIcon";
import DanceIcon from "./icons/DanceIcon";

const ActividadesSection = ({ idioma }) => {
	const activities = [
		{
			id: 1,
			title: idioma === "es" ? "Día de la Madre" : "Mother's Day",
			desc:
				idioma === "es"
					? "El Día de la Madre es una fecha especial para honrar a las madres y celebrar su importancia en la familia y en la sociedad. En esta actividad, la empresa organiza una serie de eventos para que los empleados puedan celebrar junto a sus madres."
					: "Mother's Day is a special date to honor mothers and celebrate their importance in the family and in society. In this activity, the company organizes a series of events so that employees can celebrate with their mothers.",
			icon: <MadreIcon />,
			href: "actividades/dia-de-la-madre",
			image: "/images/assets/actividades/dia-de-la-madre.jpg",
		},
		{
			id: 2,
			title: idioma === "es" ? "Día del Padre" : "Father's Day",
			desc:
				idioma === "es"
					? "El Día del Padre es una celebración en honor a los padres y a la paternidad. En esta actividad, la empresa organiza eventos para que los empleados puedan honrar a sus padres y agradecerles por su apoyo y amor incondicional."
					: "Father's Day is a celebration in honor of fathers and fatherhood. In this activity, the company organizes events so that employees can honor their fathers and thank them for their support and unconditional love.",
			icon: <PadreIcon />,
			href: "actividades/dia-del-padre",
			image: "/images/assets/actividades/dia-del-padre.jpg",
		},
		{
			id: 3,
			title:
				idioma === "es"
					? "Reconocimiento por 40 años"
					: "40 years recognition",
			desc:
				idioma === "es"
					? "El Reconocimiento por 40 años es un evento especial para honrar a los empleados que han dedicado cuatro décadas de su vida al servicio de la empresa. En esta actividad, se les brinda un reconocimiento especial a estos empleados y se les agradece por su lealtad y compromiso."
					: "The 40 years recognition is a special event to honor employees who have dedicated four decades of their lives to the service of the company. In this activity, these employees are given special recognition and thanked for their loyalty and commitment.",
			icon: <Celebration40Icon />,
			href: "actividades/reconocimiento-por-40-anos",
			image: "/images/assets/actividades/reconocimiento-por-40-anos.jpg",
		},
		{
			id: 4,
			title: idioma === "es" ? "Evento Navideño" : "Christmas Event",
			desc:
				idioma === "es"
					? "El Evento Navideño es una celebración en honor a la Navidad, una fecha muy importante en la cultura occidental. En esta actividad, la empresa organiza una serie de eventos para que los empleados puedan disfrutar del espíritu navideño, compartir con sus compañeros de trabajo y celebrar el final del año."
					: "The Christmas Event is a celebration in honor of Christmas, a very important date in Western culture. In this activity, the company organizes a series of events so that employees can enjoy the Christmas spirit, share with their co-workers and celebrate the end of the year.",
			icon: <ChristmasIcon />,
			href: "actividades/evento-navideno",
			image: "/images/assets/actividades/evento-navideno.jpg",
		},
		{
			id: 5,
			title: idioma === "es" ? "Juegos Nacionales" : "National Games",
			desc:
				idioma === "es"
					? "Los Juegos Nacionales son una competencia deportiva en la que participan empresas de todo el país. En esta actividad, los empleados tienen la oportunidad de demostrar sus habilidades deportivas y trabajar en equipo en un ambiente divertido y saludable."
					: "The National Games are a sports competition in which companies from all over the country participate. In this activity, employees have the opportunity to demonstrate their sports skills and work as a team in a fun and healthy environment.",
			icon: <CompetitionIcon />,
			href: "actividades/juegos-nacionales",
			image: "/images/assets/actividades/juegos-nacionales.jpg",
		},
		{
			id: 6,
			title: idioma === "es" ? "Danzas" : "Dances",
			desc:
				idioma === "es"
					? "La actividad de Danzas es una oportunidad para que los empleados puedan expresar su creatividad y su pasión por el baile. En esta actividad, se organizan clases de baile y coreografías para que los empleados puedan aprender y mostrar sus habilidades en presentaciones especiales."
					: "The Dance activity is an opportunity for employees to express their creativity and passion for dance. In this activity, dance classes and choreographies are organized so that employees can learn and show their skills in special presentations.",
			icon: <DanceIcon />,
			href: "actividades/danzas",
			image: "/images/assets/actividades/danzas.jpg",
		},
	];
	return (
		<Section>
			<Section.Title className='text-center mx-auto text-[#002448]'>
				{idioma === "es"
					? "Conoce Nuestras Actividades"
					: "Know Our Activities"}
			</Section.Title>
			<Section.Description>
				{idioma === "es"
					? "Celebremos juntos nuestras actividades y eventos"
					: "Let's celebrate our activities and events together"}
			</Section.Description>
			<Section.Container>
				<div className={css.actividadgrid}>
					{activities.map((actividad, i) => {
						if (i === 0) {
							return (
								<CardService
									key={i}
									{...actividad}
									style={{
										borderBottom: "1px solid #b2bcc7",
										borderRight: "1px solid #b2bcc7",
									}}
								/>
							);
						}
						if (i === 1) {
							return (
								<CardService
									key={i}
									{...actividad}
									style={{
										borderBottom: "1px solid #b2bcc7",
										borderRight: "1px solid #b2bcc7",
									}}
								/>
							);
						}
						if (i === 2) {
							return (
								<CardService
									key={i}
									{...actividad}
									style={{
										borderBottom: "1px solid #b2bcc7",
									}}
								/>
							);
						}
						if (i === 3) {
							return (
								<CardService
									key={i}
									{...actividad}
									style={{
										borderRight: "1px solid #b2bcc7",
									}}
								/>
							);
						}
						if (i === 4) {
							return (
								<CardService
									key={i}
									{...actividad}
									style={{
										borderRight: "1px solid #b2bcc7",
									}}
								/>
							);
						}

						return <CardService key={i} {...actividad} />;
					})}
				</div>
			</Section.Container>
		</Section>
	);
};

export default ActividadesSection;
