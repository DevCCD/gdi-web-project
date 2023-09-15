import Link from "next/link";
import css from "./styles/cardService.module.scss";
import DoubleArrowIcon from "@/components/icons/interface/DoubleArrowIcon";

const CardService = ({ icon, title, desc, ...rest }) => {
	return (
		<Link
			className={css.wrapper}
			href={"/servicios"}
			{...rest}
			draggable={false}
			title={`Click para ir a la página de ${title}`}
		>
			<div className={css.cardService}>
				<div className={css.bglayer} />
				<div className={css.content}>
					<div className={css.icon}>{icon}</div>
					<h4 className={css.title}>{title || "titulo"}</h4>
					<p className={css.desc}>
						{desc ||
							"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."}
					</p>
				</div>
				<div className={css.arrow}>
					<DoubleArrowIcon />
				</div>
			</div>
		</Link>
	);
};

export default CardService;
