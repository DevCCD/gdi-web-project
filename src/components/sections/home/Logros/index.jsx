import ImageDecorator from "@/components/ui/ImageDecorator";
import css from "./styles/styles.module.scss";
import Section from "@/components/ui/Section";

const LogrosSection = ({ idioma }) => {
	const cards = [
		{
			id: 1,
			title: "Best Company",
			description: "Lorem Ipsum is simply dummy text of the printing.",
		},
		{
			id: 2,
			title: "Growing Business",
			description: "Lorem Ipsum is simply dummy text of the printing.",
		},
		{
			id: 3,
			title: "Great Support",
			description: "Lorem Ipsum is simply dummy text of the printing.",
		},
		{
			id: 4,
			title: "Excellent Service",
			description: "Lorem Ipsum is simply dummy text of the printing.",
		},
	];

	return (
		<Section style={{ backgroundColor: "#002245" }}>
			<Section.TopText
				style={{
					color: "white",
					justifyContent: "center",
				}}
			>
				{idioma === "es" ? "nuestros logros" : "our achievements"}
			</Section.TopText>
			<Section.Title className='text-center mx-auto max-w-[800px] text-white'>
				{idioma === "es"
					? "Premios y reconocimientos"
					: "Awards and recognitions"}
			</Section.Title>
			<Section.Container>
				<div className={css.grid}>
					<div className={css.row_left}>
						<div className={css.grid_cards}>
							{cards.map((card) => (
								<div key={card.id} className={css.card}>
									<div className={css.color_layer} />
									<div className={css.content}>
										<div className={css.icon}>A</div>
										<h3 className={css.title}>
											{card.title}
										</h3>
										<p className={css.description}>
											{card.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className={css.row_right}>
						<div className={css.wrapper_image}>
							<ImageDecorator
								src='/assets/images/feedback/testimonial.jpg'
								alt='feedback_image_1'
								width={990}
								height={990}
							/>
						</div>
					</div>
				</div>
			</Section.Container>
		</Section>
	);
};

export default LogrosSection;
