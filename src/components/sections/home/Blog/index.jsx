import Card from "@/components/ui/Card";
import Section from "@/components/ui/Section";
import css from "./styles/styles.module.scss";

const BlogSection = ({ idioma }) => {
	return (
		<Section>
			<Section.TopText
				className='justify-center'
				style={{ color: "var(--color-primary)" }}
			>
				{idioma === "es" ? "NUESTRO BLOG" : "OUR BLOG"}
			</Section.TopText>
			<Section.Title className='text-center mx-auto max-w-[800px] text-[#002448]'>
				{idioma === "es" ? "Últimas noticias" : "Latest News"}
			</Section.Title>
			<Section.Container>
				<div className={css.grid_cards}>
					{Array(3)
						.fill()
						.map((_, i) => (
							<Card
								key={i + 1}
								src={"/assets/images/news-1.jpg"}
								title={
									"How to apply on carsore for car insurance ?"
								}
								textBtn={"Read More"}
							/>
						))}
				</div>
			</Section.Container>
		</Section>
	);
};

export default BlogSection;
