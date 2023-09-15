import PeruMap from "@/components/ui/Map";
import Leyenda from "@/components/ui/Map/Leyenda";
import Section from "@/components/ui/Section";
import css from "./styles/styles.module.scss";

const SubCafaeSection = ({ idioma }) => {
	return (
		<Section
			style={{
				// no overflow
				overflow: "initial",
			}}
		>
			<Section.Title className='text-center mx-auto text-[#002448]'>
				{idioma === "es"
					? "Distritos Judiciales"
					: "Judicial Districts"}
			</Section.Title>
			<Section.Container>
				<div className={css.gridMap}>
					<div className={css.leyendaContainer}>
						<Leyenda {...{ idioma }} />
					</div>
					<div className={css.mapContainer}>
						<PeruMap {...{ idioma }} />
					</div>
				</div>
			</Section.Container>
		</Section>
	);
};

export default SubCafaeSection;
