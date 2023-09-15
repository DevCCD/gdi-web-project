import Section from "@/components/ui/Section";
import css from "./styles/styles.module.scss";
import { people } from "@/data";
import Image from "next/image";

const ComiteAdministracionSection = ({ idioma }) => {
	return (
		<Section>
			<Section.Title className='text-center mx-auto text-[#002448]'>
				{idioma === "es"
					? "Conozca nuestro comité de administración"
					: "Meet our administration committee"}
			</Section.Title>
			<Section.Description>
				{idioma === "es"
					? "Conoce a las personas detrás de CAFAE Poder Judicial"
					: "Meet the people behind CAFAE Poder Judicial"}
			</Section.Description>
			<Section.Container>
				<div className={css.grid_team}>
					{people?.map((people) => {
						const segnmbre = people.seg_nombre.slice(0, 1) + ".";

						const nombreCompleto = `${people.nombre} ${
							people.seg_nombre ? segnmbre : ""
						} ${people.apellidos}`;

						return (
							<div className={css.card_container} key={people.id}>
								<div className={css.card_wrapper}>
									<span className={css.triangle_one} />
									<span className={css.triangle_two} />
									<div className={css.card}>
										<div className={css.card_image}>
											<Image
												className={css.card_image_img}
												src={people.image}
												alt={people.nombre.toLowerCase()}
												width={900}
												height={470}
											/>
										</div>
										<div className={css.card_content}>
											<div
												className={
													css.card_content_wrapper
												}
											>
												<h3 className={css.card_title}>
													{nombreCompleto}
												</h3>
												<p className={css.card_text}>
													{people.cargo}
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</Section.Container>
		</Section>
	);
};

export default ComiteAdministracionSection;
