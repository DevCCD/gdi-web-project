const MoonIcon = (props) => {
	return (
		<svg
			width={props.size}
			height={props.size}
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			{...props}
		>
			<path
				d='M21.529 15.93c-.16-.27-.61-.69-1.73-.49-.62.11-1.25.16-1.88.13a8.41 8.41 0 0 1-5.91-2.82c-1.3-1.45-2.1-3.34-2.11-5.38 0-1.14.22-2.24.67-3.28.44-1.01.13-1.54-.09-1.76-.23-.23-.77-.55-1.83-.11-4.09 1.72-6.62 5.82-6.32 10.21.3 4.13 3.2 7.66 7.04 8.99a10 10 0 0 0 2.89.55c.16.01.32.02.48.02 3.35 0 6.49-1.58 8.47-4.27.67-.93.49-1.52.32-1.79Z'
				fill='currentColor'
			/>
		</svg>
	);
};

MoonIcon.defaultProps = {
	size: 26,
};

export default MoonIcon;
