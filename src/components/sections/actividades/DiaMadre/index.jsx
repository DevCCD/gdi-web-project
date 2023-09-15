import DualGrdiSection from "@/components/ui/DualGrid";
import { useRouter } from "next/router";

const DiaMadreSection = ({ idioma, transform }) => {
	const router = useRouter();

	return (
		<DualGrdiSection
			{...{ transform }}
			image={`/assets/images${router.pathname}.jpg`}
			toptext={idioma === "es" ? "ACTIVIDAD" : "ACTIVITY"}
			title={idioma === "es" ? "Día de la Madre" : "Mother's Day"}
		>
			{idioma === "es" ? (
				<p>
					Esta actividad es muy importante para nuestra empresa, ya
					que queremos demostrar nuestro reconocimiento y
					agradecimiento a todas las madres trabajadoras. Se celebra
					anualmente en homenaje a todas las madres de nuestra empresa
					y es una oportunidad para demostrarles nuestro
					agradecimiento por su dedicación y amor incondicional.
					<br />
					<br />
					Durante el día, ofrecemos un almuerzo especial y entregamos
					obsequios y reconocimientos a las madres presentes. Es un
					momento para compartir y reforzar los lazos de compañerismo
					en la empresa.
				</p>
			) : (
				<p>
					This activity is very important for our company, as we want
					to demonstrate our recognition and gratitude to all working
					mothers. It is celebrated annually in honor of all the
					mothers of our company and is an opportunity to show them
					our gratitude for their dedication and unconditional love.
					<br />
					<br />
					During the day, we offer a special lunch and give gifts and
					recognition to the mothers present. It is a time to share
					and strengthen the bonds of fellowship in the company.
				</p>
			)}
		</DualGrdiSection>
	);
};

export default DiaMadreSection;
