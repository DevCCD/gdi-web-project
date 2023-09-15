const DoubleArrowIcon = (props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={props.size || 24}
			height={props.size || 24}
			viewBox='0 96 960 960'
			fill='currentColor'
			{...props}
		>
			<path d='m255 815-42-42 198-198-198-198 42-42 240 240-240 240Zm253 0-42-42 198-198-198-198 42-42 240 240-240 240Z' />
		</svg>
	);
};

export default DoubleArrowIcon;
