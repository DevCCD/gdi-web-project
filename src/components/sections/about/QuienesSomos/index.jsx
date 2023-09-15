import DoubleArrowIcon from "@/components/icons/interface/DoubleArrowIcon";
import ImageDecorator from "@/components/ui/ImageDecorator";
import Section from "@/components/ui/Section";
import Image from "next/image";
import css from "./styles/styles.module.scss";

const QuienesSomosSection = ({ idioma, transform }) => {
	return (
		<Section
			style={{
				color: "#000",
			}}
		>
			<div>
				<div className={css.dual_grid}>
					<div className={css.parallax_effect}>
						<div className={css.pattern} style={transform} />
					</div>
					<div className={css.dual_grid_item_right}>
						<div className={css.image_container}>
							<ImageDecorator src='/assets/images/about.jpg' />
						</div>
					</div>
					<div className={css.dual_grid_item_left}>
						<div className={css.head_text}>
							<DoubleArrowIcon />
							<h2>
								{idioma === "es" ? "QUIENES SOMOS" : "ABOUT US"}
							</h2>
						</div>
						<h1 className={css.title}>
							{idioma === "es"
								? "CAFAE - Poder Judicial"
								: "CAFAE - Judicial Power"}
						</h1>
						<div className={css.bold_text}>
							{idioma === "es"
								? "El Comité de Administración del Fondo de Asistencia y Estímulo de los Trabajadores del Poder Judicial."
								: "The Administration Committee of the Assistance and Incentive Fund for the Workers of the Judicial Power."}
						</div>
						<div className={css.text}>
							<p>
								{idioma === "es"
									? "Es una institución privada sin fines de lucro, creada el 24 de Octubre de 1975 la cual tiene por finalidad promover el permanente bienestar social, económico y cultural de los Trabajadores del Poder Judicial además de promover actividades recreativas, sociales y culturales, así como contribuir al fortalecimiento y desarrollo del poder judicial, inició sus actividades ante SUNAT el 19 de Agosto de 2003."
									: "Is a private non-profit institution, created on October 24, 1975, whose purpose is to promote the permanent social, economic and cultural well-being of the Workers of the Judicial Power, in addition to promoting recreational, social and cultural activities, as well as contributing to the strengthening and development of the judicial power, began its activities before SUNAT on August 19, 2003."}
								<br />
								<br />
								{idioma === "es"
									? "El CAFAE- PJ, tiene la facultad de adoptar decisiones autónomas sobre el destino y modo de inversión de los fondos puestos bajo su administración, de acuerdo a sus fines y objetivos, siempre que sea aprobado por el Comité de Administración."
									: "The CAFAE-PJ has the power to make autonomous decisions about the destination and mode of investment of the funds placed under its administration, according to its purposes and objectives, as long as it is approved by the Administration Committee."}
								<br />
								{idioma === "es"
									? "Su domicilio legal y desarrolla sus actividades en su local institucional ubicado en: Húsares de Junín N.º 623, del Distrito de Jesús María, Departamento Lima."
									: "Its legal domicile and develops its activities in its institutional headquarters located at: Húsares de Junín N.º 623, of the District of Jesús María, Department of Lima."}
							</p>
						</div>
					</div>
				</div>
			</div>
			<div>
				<div className={css.text}>
					<p className='mt-6 mb-8 pb-8 border-b-2 border-dashed border-[#4298ef]'>
						{idioma === "es"
							? "Es una organización que administra los fondos de los descuentos de tardanzas y faltas de los trabajadores, otras fuentes y las transferencias, los que están reguladas por el D.U. N° 088-2001, que otorgan incentivos a los trabajadores jurisdiccionales y administrativos del Poder Judicial bajo el régimen laboral del Decreto Legislativo N.º 276 y su reglamento, así como los trabajadores a plazo indeterminado, sujetos al régimen laboral de la actividad privada, cuyo Texto Único Ordenado ha sido aprobado por el Decreto Supremo N° 003-97-TR."
							: "It is an organization that administers the funds of the discounts for lateness and absences of the workers, other sources and transfers, which are regulated by D.U. N ° 088-2001, which grant incentives to the jurisdictional and administrative workers of the Judicial Power under the labor regime of Legislative Decree No. 276 and its regulations, as well as workers with an indefinite term, subject to the labor regime of the private activity, whose Single Text Ordered has been approved by Supreme Decree No. 003-97-TR."}
						<br />
						<br />
						{idioma === "es"
							? "Tiene por finalidad promover el permanente bienestar social, económico y cultural de los trabajadores del Poder Judicial, además de promover actividades recreativas, sociales y culturales, así como contribuir al fortalecimiento y desarrollo del Poder Judicial."
							: "Its purpose is to promote the permanent social, economic and cultural well-being of the workers of the Judicial Power, in addition to promoting recreational, social and cultural activities, as well as contributing to the strengthening and development of the Judicial Power."}
						<br />
						{idioma === "es"
							? "El CAFAE PJ, mediante una estrategia de trabajo en equipo, un directorio ágil y una eficiente participación de nuestros colaboradores, ha logrado crecer, mantener y mejorar su oferta de servicios mediante una efectiva administración del fondo."
							: "The CAFAE PJ, through a teamwork strategy, an agile board and an efficient participation of our collaborators, has managed to grow, maintain and improve its service offer through an effective administration of the fund."}
						<br />
						{idioma === "es"
							? "El CAFAE PJ renueva su compromiso de trabajo y esfuerzo para seguir siendo su mejor opción."
							: "The CAFAE PJ renews its commitment to work and effort to continue being your best option."}
					</p>
				</div>
			</div>
		</Section>
	);
};

export default QuienesSomosSection;
