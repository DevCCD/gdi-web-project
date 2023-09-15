import DualGrdiSection from "@/components/ui/DualGrid";
import { useRouter } from "next/router";

const ReconocimientoSection = ({ idioma, transform }) => {
	const router = useRouter();

	return (
		<DualGrdiSection
			{...{ transform }}
			image={`/assets/images${router.pathname}.jpg`}
			toptext={idioma === "es" ? "ACTIVIDAD" : "ACTIVITY"}
			title={
				idioma === "es"
					? "Reconocimiento por 40 Años"
					: "Recognition for 40 Years"
			}
		>
			{idioma === "es" ? (
				<p>
					Esta actividad es muy especial, ya que reconocemos a los
					trabajadores que han dedicado 40 años de su vida a nuestra
					empresa. Durante la ceremonia de reconocimiento, honramos su
					lealtad y compromiso con la empresa a través de un discurso
					y un obsequio especial. También les entregamos un regalo
					personalizado como muestra de nuestro reconocimiento y
					gratitud por su dedicación y esfuerzo.
					<br />
					<br />
					Es una oportunidad para demostrar nuestro agradecimiento y
					gratitud a estos trabajadores ejemplares.
				</p>
			) : (
				<p>
					This activity is very special, as we recognize workers who
					have dedicated 40 years of their lives to our company.
					During the recognition ceremony, we honor their loyalty and
					commitment to the company through a speech and a special
					gift. We also give them a personalized gift as a token of
					our recognition and gratitude for their dedication and
					effort.
					<br />
					<br />
					It is an opportunity to show our appreciation and gratitude
					to these exemplary workers.
				</p>
			)}
		</DualGrdiSection>
	);
};

export default ReconocimientoSection;
