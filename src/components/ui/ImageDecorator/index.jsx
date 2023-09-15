import css from "./styles/styles.module.scss";
import Image from "next/image";
import Tilty from "react-tilty";

const ImageDecorator = ({ src, width, height, alt, ...rest }) => {
	return (
		<div className={css.image}>
			<span className={css.triangle_one} />
			<span className={css.triangle_two} />
			<Tilty
				reverse
				className={css.tilt}
				glareMaxOpacity={0.1}
				scale={1.01}
				glare
				perspective={900}
				max={15}
				maxGlare={0.55}
			>
				<Image
					src={src || "/assets/images/faq.jpg"}
					alt={alt || "nombre de imagen"}
					width={width || 990}
					height={height || 990}
					{...rest}
				/>
			</Tilty>
		</div>
	);
};

export default ImageDecorator;
