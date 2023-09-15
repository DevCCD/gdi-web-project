import DualGrdiSection from "@/components/ui/DualGrid";
import { useRouter } from "next/router";

const JuegosNacionalesSection = ({ idioma, transform }) => {
	const router = useRouter();

	return (
		<DualGrdiSection
			{...{ transform }}
			image={`/assets/images${router.pathname}.jpg`}
			toptext={idioma === "es" ? "ACTIVIDAD" : "ACTIVITY"}
			title={idioma === "es" ? "Juegos Nacionales" : "National Games"}
		>
			{idioma === "es" ? (
				<p>
					Este evento es una competencia deportiva entre empresas,
					donde los trabajadores tienen la oportunidad de mostrar su
					talento y habilidad en diferentes disciplinas deportivas. Es
					una oportunidad para promover la actividad física y la salud
					entre los trabajadores, además de fomentar el trabajo en
					equipo y el espíritu competitivo. Los trabajadores que
					participan en los Juegos Nacionales también tienen la
					oportunidad de conocer a sus compañeros de trabajo de otras
					sucursales de la empresa.
				</p>
			) : (
				<p>
					This event is a sports competition between companies, where
					workers have the opportunity to show their talent and
					ability in different sports disciplines. It is an
					opportunity to promote physical activity and health among
					workers, in addition to promoting teamwork and a competitive
					spirit. Workers who participate in the National Games also
					have the opportunity to meet their co-workers from other
					branches of the company.
				</p>
			)}
		</DualGrdiSection>
	);
};

export default JuegosNacionalesSection;
