const BrandGDI = (props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={props.size || 80}
			height={props.size || 80}
			viewBox='0 0 300 300'
			fill='currentColor'
			{...props}
		>
			<path d='m149.996-.004 38 38-38 38-38-38zM262.003 111.995l38 38-149.999 149.999-38-38z' />
			<path d='m206.5 56.507 93.5 93.5-38 38-93.5-93.5z' />
			<path d='m206.5 56.497 38 38-92.496 92.497-38-38zM38.001 112 188 261.997l-38 38L0 149.999z' />
			<path d='m91.003 58.994 38 38-90.998 90.997-38-38z' />
		</svg>
	);
};

export default BrandGDI;
