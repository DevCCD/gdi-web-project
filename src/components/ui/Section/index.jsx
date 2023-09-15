import DoubleArrowIcon from "@/components/icons/interface/DoubleArrowIcon";
import css from "./styles/styles.module.scss";

const Section = (props) => {
	return (
		<section className='section' {...props}>
			<div className={css.wrapper}>{props.children}</div>
		</section>
	);
};

const TopText = (props) => {
	return (
		<div
			{...props}
			style={{
				display: "flex",
				alignItems: "center",
				fontWeight: "bold",
				fontSize: "18px",
				lineHeight: "2",
				marginBottom: "1rem",
				letterSpacing: "1px",
				textTransform: "uppercase",
				...props.style,
			}}
		>
			<DoubleArrowIcon />
			<h2>{props.children}</h2>
		</div>
	);
};

const Title = ({ className, children, style, ...rest }) => {
	return (
		<h2
			className={`${css.title} ${className}`}
			style={{
				...style,
			}}
			{...rest}
		>
			{children}
		</h2>
	);
};

const Description = ({ className, children, style, ...rest }) => {
	return (
		<p
			className={`${css.description} ${className}`}
			style={{
				...style,
			}}
			{...rest}
		>
			{children}
		</p>
	);
};

const Container = ({ className, children, style, ...rest }) => {
	return (
		<div
			className={`${css.container} ${className}`}
			style={{
				...style,
			}}
			{...rest}
		>
			{children}
		</div>
	);
};

Section.TopText = TopText;
Section.Title = Title;
Section.Description = Description;
Section.Container = Container;

export default Section;
