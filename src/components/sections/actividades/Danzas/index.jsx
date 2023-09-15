import DualGrdiSection from "@/components/ui/DualGrid";
import { useRouter } from "next/router";

const DanzasSection = ({ idioma, transform }) => {
	const router = useRouter();

	return (
		<DualGrdiSection
			{...{ transform }}
			image={`/assets/images${router.pathname}.jpg`}
			toptext={idioma === "es" ? "ACTIVIDAD" : "ACTIVITY"}
			title={idioma === "es" ? "Danzas" : "Dances"}
		>
			{idioma === "es" ? (
				<p>
					La danza es una forma de expresión artística que también
					fomentamos en nuestra empresa. Ofrecemos clases de danza a
					los trabajadores interesados en aprender y mejorar sus
					habilidades en este arte. Además, organizamos presentaciones
					de danza durante eventos especiales, como el Día de la Madre
					y el Día del Padre, donde los trabajadores pueden demostrar
					sus habilidades y creatividad.
					<br />
					<br />
					La danza es una actividad que fomenta la creatividad, el
					trabajo en equipo y la autoexpresión, valores que promovemos
					en nuestra empresa.
				</p>
			) : (
				<p>
					Dance is a form of artistic expression that we also promote
					in our company. We offer dance classes to workers interested
					in learning and improving their skills in this art. In
					addition, we organize dance performances during special
					events, such as Mothers Day and Fathers Day, where workers
					can demonstrate their skills and creativity.
					<br />
					<br />
					Dance is an activity that encourages creativity, teamwork
					and self-expression, values that we promote in our company.
				</p>
			)}
		</DualGrdiSection>
	);
};

export default DanzasSection;
