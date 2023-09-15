import DualGrdiSection from "@/components/ui/DualGrid";

const EconomicoSection = ({ idioma, transform }) => {
	return (
		<DualGrdiSection
			{...{ transform }}
			image={"/assets/images/services/apoyo_economico.jpg"}
			toptext={idioma === "es" ? "SERVICIO DE" : "SERVICE OF"}
			title={idioma === "es" ? "Apoyo Económico" : "Economic Support"}
		>
			{idioma === "es" ? (
				<p>
					CAFAE-PJ brinda apoyo económico a sus trabajadores para
					impulsar su crecimiento personal y profesional. Este apoyo
					puede ser en forma de becas para estudios de pregrado y
					posgrado, financiamiento para proyectos de investigación y
					desarrollo, entre otros.
				</p>
			) : (
				<p>
					CAFAE-PJ provides economic support to its workers to boost
					their personal and professional growth. This support can be
					in the form of scholarships for undergraduate and
					postgraduate studies, financing for research and development
					projects, among others.
				</p>
			)}
		</DualGrdiSection>
	);
};

export default EconomicoSection;
