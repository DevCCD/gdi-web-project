const CircleArrowIcon = (props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={props.size || 24}
			height={props.size || 24}
			viewBox='0 0 24 24'
			{...props}
		>
			<path fill='none' d='M0 0h24v24H0z' />
			<path
				fill={props.color || "currentColor"}
				d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 13.5L7.5 11l1.42-1.41L12 12.67l3.08-3.08L16.5 11 12 15.5z'
			/>
		</svg>
	);
};

export default CircleArrowIcon;
