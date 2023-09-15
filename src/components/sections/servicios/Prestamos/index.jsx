import DualGrdiSection from "@/components/ui/DualGrid";

const PrestamosSection = ({ idioma, transform }) => {
	return (
		<DualGrdiSection
			{...{ transform }}
			image={"/assets/images/services/prestamos.jpg"}
			toptext={idioma === "es" ? "SERVICIO DE" : "SERVICE OF"}
			title={idioma === "es" ? "Préstamos" : "Loans"}
		>
			{idioma === "es" ? (
				<p>
					El CAFAE PJ ofrece préstamos a los trabajadores del Poder
					Judicial para ayudarles en situaciones económicas difíciles.
					Estos préstamos se encuentran regulados por el D.U. N°
					088-2001 y están destinados a los trabajadores
					jurisdiccionales y administrativos del Poder Judicial bajo
					el régimen laboral del Decreto Legislativo N.º 276 y su
					reglamento, así como los trabajadores a plazo indeterminado,
					sujetos al régimen laboral de la actividad privada.
				</p>
			) : (
				<p>
					The CAFAE PJ offers loans to workers of the Judicial Power
					to help them in difficult economic situations. These loans
					are regulated by D.U. N° 088-2001 and are intended for
					jurisdictional and administrative workers of the Judicial
					Power under the labor regime of Legislative Decree N.º 276
					and its regulations, as well as workers with an indefinite
					term, subject to the labor regime of private activity.
				</p>
			)}
		</DualGrdiSection>
	);
};

export default PrestamosSection;
