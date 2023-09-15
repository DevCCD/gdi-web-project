import DualGrdiSection from "@/components/ui/DualGrid";

const SubsidiosSection = ({ idioma, transform }) => {
	return (
		<DualGrdiSection
			{...{ transform }}
			image={"/assets/images/services/subsidios.jpg"}
			toptext={idioma === "es" ? "SERVICIO DE" : "SERVICE OF"}
			title={idioma === "es" ? "Subsidios" : "Subsidies"}
		>
			{idioma === "es" ? (
				<p>
					CAFAE-PJ ofrece subsidios a sus trabajadores para apoyarlos
					en situaciones de emergencia o para cubrir gastos
					inesperados. Los subsidios pueden ser otorgados en casos de
					salud, fallecimiento de un familiar directo, accidentes,
					entre otros. Además, el CAFAE-PJ también otorga subsidios
					para el mejoramiento de vivienda y educación.
				</p>
			) : (
				<p>
					CAFAE-PJ offers subsidies to its workers to support them in
					emergency situations or to cover unexpected expenses.
					Subsidies can be granted in cases of health, death of a
					direct relative, accidents, among others. In addition, the
					CAFAE-PJ also grants subsidies for housing and education
					improvement.
				</p>
			)}
		</DualGrdiSection>
	);
};

export default SubsidiosSection;
