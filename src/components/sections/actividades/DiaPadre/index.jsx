import DualGrdiSection from "@/components/ui/DualGrid";
import { useRouter } from "next/router";

const DiaPadreSection = ({ idioma, transform }) => {
	const router = useRouter();

	return (
		<DualGrdiSection
			{...{ transform }}
			image={`/assets/images${router.pathname}.jpg`}
			toptext={idioma === "es" ? "ACTIVIDAD" : "ACTIVITY"}
			title={idioma === "es" ? "Día del Padre" : "Father's Day"}
		>
			{idioma === "es" ? (
				<p>
					Esta actividad se celebra cada año en honor a los padres
					trabajadores de nuestra empresa. Es una oportunidad para
					reconocer y agradecer a los padres por su dedicación y
					esfuerzo diario. Durante el día, ofrecemos un almuerzo
					especial y entregamos obsequios y reconocimientos a los
					padres presentes. También organizamos actividades divertidas
					para que los padres pasen un buen rato junto a sus
					compañeros de trabajo.
					<br />
					<br />
					Es una ocasión para fortalecer la relación entre los padres
					y la empresa.
				</p>
			) : (
				<p>
					This activity is celebrated every year in honor of the
					working fathers of our company. It is an opportunity to
					recognize and thank fathers for their dedication and daily
					effort. During the day, we offer a special lunch and give
					gifts and recognition to the fathers present. We also
					organize fun activities for fathers to have a good time with
					their co-workers.
					<br />
					<br />
					It is an occasion to strengthen the relationship between
					fathers and the company.
				</p>
			)}
		</DualGrdiSection>
	);
};

export default DiaPadreSection;
