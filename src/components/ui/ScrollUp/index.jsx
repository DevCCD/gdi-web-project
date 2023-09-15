import styles from "./styles/scrollUp.module.scss";
import { ChevronDownIcon } from "@/components/icons/interface/icons";
import { motion, useScroll, useSpring } from "framer-motion";

const ScrollUp = ({ onClick }) => {
	const { scrollYProgress } = useScroll();
	const scrollY = useSpring(scrollYProgress, {
		stiffness: 200,
		damping: 40,
		restDelta: 0.005,
	});
	return (
		<>
			<motion.div
				onTap={onClick}
				className={styles.scrollUp}
				whileTap={{ scale: 0.9 }}
			>
				<svg
					className={styles.scrollBg}
					width='100'
					height='100'
					viewBox='0 0 100 100'
				>
					<circle
						cx='50'
						cy='50'
						r='30'
						pathLength='1'
						className={styles.scrollContainer}
					/>
					<motion.circle
						cx='50'
						cy='50'
						r='30'
						pathLength='1'
						className={styles.scrollIndicator}
						style={{ pathLength: scrollY }}
					/>
				</svg>
				<div className={styles.icon}>
					<ChevronDownIcon
						fill={"currentColor"}
						strokeWidth={3}
						style={{ transform: "rotate(180deg)" }}
					/>
				</div>
			</motion.div>
		</>
	);
};

export default ScrollUp;
