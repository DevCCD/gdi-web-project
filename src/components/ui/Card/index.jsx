import css from "./styles/styles.module.scss";
import CircleArrowIcon from "@/components/icons/interface/CircleArrowIcon";
import Image from "next/image";

const Card = ({ src, title, text, textBtn, post_date }) => {
	return (
		<div className={css.card}>
			<div className={css.card_image}>
				<Image
					src={src || "/images/services/1.jpg"}
					alt={title.toLowerCase()}
					width={900}
					height={470}
					draggable={false}
				/>
			</div>
			<div className={css.card_content}>
				{post_date && <div className={css.post_time}>{post_date}</div>}
				<h3 className={css.card_title}>
					{title || "Lorem ipsum dolor sit amet"}
				</h3>
				<p className={css.card_text}>{text}</p>
				<button className={css.btn}>
					{textBtn || "Read More"}
					<CircleArrowIcon size={26} />
				</button>
			</div>
		</div>
	);
};

export default Card;
