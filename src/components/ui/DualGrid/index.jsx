import DoubleArrowIcon from "@/components/icons/interface/DoubleArrowIcon";
import ImageDecorator from "@/components/ui/ImageDecorator";
import Section from "@/components/ui/Section";
import css from "./styles/styles.module.scss";

const DualGrdiSection = ({
	transform,
	toptext,
	title,
	subtitle,
	children,
	image,
}) => {
	return (
		<Section style={{ color: "#000" }}>
			<div>
				<div className={css.dual_grid}>
					<div className={css.parallax_effect}>
						<div className={css.pattern} style={transform} />
					</div>
					<div className={css.dual_grid_item_right}>
						<div className={css.image_container}>
							<ImageDecorator
								src={image || "/assets/images/about.jpg"}
							/>
						</div>
					</div>
					<div className={css.dual_grid_item_left}>
						<div className={css.head_text}>
							<DoubleArrowIcon />
							<h2>{toptext || "QUIENES SOMOS"}</h2>
						</div>
						<h1 className={css.title}>
							{title || "CAFAE - Poder Judicial"}
						</h1>
						<div className={css.bold_text}>{subtitle}</div>
						{children}
					</div>
				</div>
			</div>
		</Section>
	);
};

export default DualGrdiSection;
