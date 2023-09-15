import Collapse from "@/components/ui/Collapse";
import css from "./styles/styles.module.scss";
import Section from "@/components/ui/Section";
import Image from "next/image";
import ImageDecorator from "@/components/ui/ImageDecorator";

const FAQSection = ({ idioma }) => {
	return (
		<Section
			style={{
				backgroundColor: "#f4f9fe",
			}}
		>
			{/* <Section.TopText
				className='justify-center'
				style={{ color: "var(--color-primary)" }}
			>
				{idioma === "es" ? "PREGUNTAS FRECUENTES" : "FAQ"}
			</Section.TopText> */}
			<Section.Title className='text-center mx-auto max-w-[800px] text-[var(--color-primary)]'>
				{idioma === "es" ? "Preguntas Frecuentes" : "FAQ"}
			</Section.Title>
			<Section.Container>
				<div className={css.grid}>
					<div className={css.row}>
						<div className={css.collapses}>
							<Collapse title='1.  Compare Personalized Quotes?dwdw'>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industrys standard dummy text ever since the
								1500s, when an unknown printer took a galley
							</Collapse>
							<Collapse title='2. Compare Personalized Quotes?'>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industrys standard dummy text ever since the
								1500s, when an unknown printer took a galley
							</Collapse>
							<Collapse title='3. Compare Personalized Quotes?'>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industrys standard dummy text ever since the
								1500s, when an unknown printer took a galley
							</Collapse>
							<Collapse title='4. C Compare Personalized Quotes?'>
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industrys standard dummy text ever since the
								1500s, when an unknown printer took a galley
							</Collapse>
						</div>
					</div>
					<div className={css.row}>
						<ImageDecorator
							src='/assets/images/faq.jpg'
							alt='feedback_image_1'
							width={990}
							height={990}
						/>
					</div>
				</div>
			</Section.Container>
		</Section>
	);
};

export default FAQSection;
