import css from "./styles.module.scss";
import { motion } from "framer-motion";

const ButtonSquare = ({ children, ...rest }) => {
	return (
		<motion.button
			className={css.square}
			{...rest}
			whileTap={{ scale: 0.9 }}
		>
			{children}
		</motion.button>
	);
};

export default ButtonSquare;
