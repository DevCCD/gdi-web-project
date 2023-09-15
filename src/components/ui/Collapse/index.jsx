import css from "./styles/styles.module.scss";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Collapse = (props) => {
	const { isCollapse } = props;

	const [open, setOpen] = useState(isCollapse || false);

	const handleToggle = () => {
		setOpen(!open);
	};

	return (
		<div
			className={
				props.className
					? `${css.collapse} ${props.className}`
					: css.collapse
			}
			style={props.style}
			{...props}
		>
			<button
				className={
					open
						? `${css.collapseButton} ${css.open}`
						: `${css.collapseButton}`
				}
				onClick={handleToggle}
			>
				<span className={css.title_text}>
					{props.title || "Collapse Title"}
				</span>
				<div className={css.collapseIcon}>
					<motion.div
						className={css.trigger}
						initial={{ rotate: 0 }}
						animate={{ rotate: open ? 180 : 0 }}
					>
						<div className={css.bar}></div>
						<motion.div
							className={css.bar2}
							initial={{ rotate: 90 }}
							animate={{ rotate: open ? 0 : 90 }}
							transition={{ duration: 0.25 }}
						></motion.div>
					</motion.div>
				</div>
			</button>
			<AnimatePresence>
				{open && (
					<motion.div
						className={css.wrapper}
						initial={{ height: 0 }}
						animate={{ height: "auto" }}
						exit={{ height: 0 }}
					>
						<div className={css.collapseContent}>
							{props.children || <p>Content</p>}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Collapse;
