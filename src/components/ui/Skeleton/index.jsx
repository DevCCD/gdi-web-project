import css from "./styles/styles.module.scss";

const Skeleton = ({ width, height, borderRadius, className, style }) => (
	<div
		className={`${css.skeleton} ${className}`}
		style={{
			width,
			height,
			borderRadius,
			...style,
		}}
	/>
);

Skeleton.defaultProps = {
	width: "100%",
	height: "12px",
	borderRadius: "1rem",
	className: "",
};

// const Skeleton = (props) => {
// 	const { numLines } = props; // numLines es el número de líneas del skeleton
// 	const lines = [];

// 	for (let i = 0; i < numLines; i++) {
// 		lines.push(<div key={i} className={css.skeleton_line}></div>);
// 	}

// 	return <div className={css.skeleton}>{lines}</div>;
// };

export default Skeleton;
