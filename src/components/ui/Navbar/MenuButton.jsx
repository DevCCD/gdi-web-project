import { menuNavPhoneAtom } from "@/atoms/navbarAtom";
import styles from "./styles/menuButton.module.scss";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";

const MenuButton = () => {
	const [isOpen, setIsOpen] = useAtom(menuNavPhoneAtom);

	return (
		<motion.button
			className={isOpen ? `${styles.menu} ${styles.open}` : styles.menu}
			onTap={() => setIsOpen(!isOpen)}
			whileTap={{ scale: 0.85 }}
		>
			<AnimatePresence>
				{!isOpen && (
					<motion.div
						className={styles.line}
						initial={{
							translateY: -6,
							opacity: 0,
							translateX: -15,
						}}
						animate={{
							translateY: -6,
							translateX: 0,
							opacity: 1,
						}}
						exit={{ translateX: -15, opacity: 0 }}
						transition={{ duration: 0.25, type: "spring" }}
					/>
				)}
			</AnimatePresence>
			<motion.div className={styles.centerLines}>
				<motion.div
					className={styles.centerLine}
					animate={{ rotate: isOpen ? 45 : 0 }}
				/>
				<motion.div
					className={styles.centerLine}
					animate={{ rotate: isOpen ? -45 : 0 }}
				/>
			</motion.div>
			<AnimatePresence>
				{!isOpen && (
					<motion.div
						className={styles.line}
						initial={{
							translateY: 6,
							opacity: 0,
							translateX: 15,
						}}
						animate={{
							translateY: 6,
							translateX: 0,
							opacity: 1,
						}}
						exit={{ translateX: 15, opacity: 0 }}
						transition={{ duration: 0.25, type: "spring" }}
					/>
				)}
			</AnimatePresence>
		</motion.button>
	);
};

export default MenuButton;
