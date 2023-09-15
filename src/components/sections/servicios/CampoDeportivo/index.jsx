import DualGrdiSection from "@/components/ui/DualGrid";

const CampoDeportivoSection = ({ idioma, transform }) => {
	return (
		<DualGrdiSection
			{...{ transform }}
			image={"/assets/images/services/campo_deportivo.jpg"}
			toptext={idioma === "es" ? "SERVICIO DE" : "SERVICE OF"}
			title={idioma === "es" ? "Campo Deportivo" : "Sports Field"}
		>
			{idioma === "es" ? (
				<p>
					CAFAE-PJ cuenta con un campo deportivo en sus instalaciones
					que está disponible para uso exclusivo de sus trabajadores y
					sus familiares. Este espacio cuenta con canchas de fútbol,
					vóley, básquet, entre otros deportes. El campo deportivo es
					una herramienta clave para fomentar la actividad física y la
					recreación entre los trabajadores del Poder Judicial y sus
					familias.
				</p>
			) : (
				<p>
					CAFAE-PJ has a sports field on its premises that is
					available for the exclusive use of its workers and their
					families. This space has soccer, volleyball, basketball
					courts, among other sports. The sports field is a key tool
					to promote physical activity and recreation among the
					workers of the Judicial Branch and their families.
				</p>
			)}
		</DualGrdiSection>
	);
};

export default CampoDeportivoSection;
