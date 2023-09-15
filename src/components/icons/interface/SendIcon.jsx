const SendIcon = (props) => {
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
				d='M2.01 21 23 12 2.01 3 2 10l15 2-15 2z'
			/>
		</svg>
	);
};

export default SendIcon;
