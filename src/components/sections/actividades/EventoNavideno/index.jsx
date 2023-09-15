import DualGrdiSection from "@/components/ui/DualGrid";
import { useRouter } from "next/router";

const EventoNavidenoSection = ({ idioma, transform }) => {
	const router = useRouter();

	return (
		<DualGrdiSection
			{...{ transform }}
			image={`/assets/images${router.pathname}.jpg`}
			toptext={idioma === "es" ? "ACTIVIDAD" : "ACTIVITY"}
			title={idioma === "es" ? "Evento Navideño" : "Christmas Event"}
		>
			{idioma === "es" ? (
				<p>
					Para celebrar la época navideña, preparamos un evento
					especial para nuestros empleados y sus familias. Ofrecemos
					una cena navideña, música en vivo, juegos, actividades para
					niños y un intercambio de regalos.
					<br />
					<br />
					Es una noche llena de diversión y alegría donde compartimos
					en familia y demostramos nuestro aprecio por todo el trabajo
					realizado durante el año.
				</p>
			) : (
				<p>
					To celebrate the Christmas season, we prepare a special
					event for our employees and their families. We offer a
					Christmas dinner, live music, games, activities for children
					and a gift exchange.
					<br />
					<br />
					It is a night full of fun and joy where we share with our
					family and show our appreciation for all the work done
					during the year.
				</p>
			)}
		</DualGrdiSection>
	);
};

export default EventoNavidenoSection;
