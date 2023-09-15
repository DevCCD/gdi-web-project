const CompetitionIcon = (props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={props.size || 341.333}
			height={props.size || 341.333}
			viewBox='0 0 256 256'
			{...props}
		>
			<path d='M48.5 2.4c-1.3 1.9-1.4 2.9-.6 4.4C49.3 9.5 69.2 21 72.4 21c3.2 0 5.6-4.2 4-6.8C75 12.1 54.1 0 51.8 0c-1 0-2.5 1.1-3.3 2.4zM191.5 6.3c-6 3.5-11.3 7.1-11.9 7.9-1.6 2.6.8 6.8 3.9 6.8 3.3 0 22.3-10.8 24.2-13.8 1.4-2 1.4-2.5-.1-4.7-.9-1.4-2.4-2.5-3.4-2.5s-6.7 2.8-12.7 6.3zM122 11.7c-2.7 1.4-4.7 4-8.7 11.3-2.9 5.2-5.4 9.8-5.5 10.2-.2.4-5.6 1.8-12 3.1-12.6 2.5-15.5 4.1-17.8 9.8-2.2 5.3-.5 9.3 8.1 18.7 7.9 8.6 8 8.7 7.5 13.2-1.9 15.5-1.9 20.9-.2 23.5 2.3 3.5 7.4 6.5 11.2 6.5 1.7 0 7.6-2.2 13.1-4.9l10.1-5 10.4 5c10.9 5.2 14.2 5.8 18.8 3.4 7-3.6 8-7.5 5.8-23.5l-1.1-8.8 8.1-9c8.8-9.8 10.5-13.8 8.2-19.2-2.2-5.4-6-7.6-16.2-9.4-5.1-.9-10.2-1.9-11.3-2.1-1.3-.3-3.8-3.9-7.3-10.5-2.9-5.5-6.4-10.7-7.7-11.6-3.8-2.5-9.5-2.8-13.5-.7zm14 19.7c3.3 6.3 6.8 11.7 7.8 12 .9.3 6 1.2 11.2 2.1 10.5 1.8 14 2.9 14 4.6 0 .6-4.1 5.5-9 11-8.3 9.1-9 10.2-8.5 13.2 2.7 15.8 3 22.6 1 23.3-.8.3-6.2-1.7-12.1-4.5-5.9-2.8-11.4-5.1-12.3-5.1-.9 0-6.7 2.3-12.9 5.2-8.7 4-11.5 4.9-12.4 4-.9-.9-.8-4 .4-13.4 1.8-14.3 2.3-12.9-8.6-24.5-4.2-4.4-7.6-8.6-7.6-9.2 0-1.7 3-2.7 14.3-4.6 5.9-1 11.4-2.3 12.2-2.9.7-.6 3.9-5.9 7-11.9C124.6 23 126.7 20 128 20c1.4 0 3.6 3.2 8 11.4zM43.6 57.9c-8.1 1.3-11.2 2.2-12.2 3.6-1.8 2.4-1.8 2.8.5 5.6l1.9 2.3 12.8-1.7C59.6 65.9 63 64.5 63 61c0-2.4-3.2-5-6.1-4.9-1.3.1-7.3.9-13.3 1.8zM194.7 57.8c-1 1-1.7 2.5-1.7 3.4 0 3.3 3.5 4.7 16.4 6.5l12.8 1.7 1.9-2.3c2.3-2.8 2.3-3.2.5-5.6-1-1.4-4.1-2.3-12.7-3.6-14.5-2.3-15.3-2.3-17.2-.1zM61.6 107.9c-9.6 9.5-10 10.1-9 12.8.7 2 1.7 2.9 3.8 3.1 2.5.3 4.2-.9 12.2-8.9 6-5.9 9.4-10.1 9.4-11.5 0-2.3-2.9-5.4-5-5.4-.7 0-5.8 4.5-11.4 9.9zM179.7 99.8c-3 3.3-1.9 5.5 7.7 15.1 8 8 9.7 9.2 12.2 8.9 2.1-.2 3.1-1.1 3.8-3.1 1-2.7.6-3.3-9-12.8-5.6-5.4-10.8-9.9-11.6-9.9-.8 0-2.2.8-3.1 1.8zM95.8 128.1c-4.5 2.3-7.8 8.2-7.8 13.9v4H59c-27.2 0-29.3.1-33 2-2.6 1.3-4.7 3.4-6 6-1.9 3.8-2 5.8-2 51.4 0 41.8.2 47.6 1.6 49C21 255.8 32.2 256 128 256c95.8 0 107-.2 108.4-1.6 1.4-1.3 1.6-6.3 1.6-39 0-35.6-.1-37.7-2-41.4-1.3-2.6-3.4-4.7-6-6-3.7-1.9-5.8-2-33-2h-29v-14c0-16.6-1.3-20.6-8-24-3.7-1.9-5.8-2-32.2-2-26.2.1-28.6.2-32 2.1zm60.6 9.5c1.4 1.4 1.6 7.7 1.6 55V246H98v-7.3c0-8-.9-9.7-5-9.7s-5 1.7-5 9.7v7.3H28v-43.4c0-38.2.2-43.6 1.6-45 1.3-1.4 5.5-1.6 30-1.6H88v17.3c0 18.5.3 19.7 5 19.7 4.9 0 5-.6 5-28.1 0-22.1.2-26 1.6-27.3 2.3-2.4 54.5-2.4 56.8 0zm70 40c1.4 1.3 1.6 5.9 1.6 35V246h-60v-70h28.4c24.5 0 28.7.2 30 1.6z' />
			<path d='M122.4 148.5c-2.3 1.4-4.4 3.3-4.7 4.4-.6 2.3 1.8 6.1 3.9 6.1 1.1 0 1.4 2.4 1.4 13.3 0 12.8-.1 13.3-2.2 14.2-2.6 1.1-3.6 5.8-1.7 8.1 1.6 2 16.2 2 17.8 0 1.9-2.3.9-7-1.6-8.1-2.3-1-2.3-1.3-2.3-19.2 0-15.2-.3-18.4-1.6-19.7-2.1-2.2-4.2-2-9 .9zM51.5 167.5c-3.9 2-7.5 6.4-7.5 9.2 0 2 3.3 5.3 5.2 5.3.5 0 2.2-1.4 4-3 3.7-3.6 6.1-3.8 8.2-.8 3.4 4.8.8 10.3-7.9 16.9-8.8 6.6-12.9 15.4-8.9 19.3 1.2 1.3 4 1.6 13.4 1.6 12.5 0 15-.8 15-5 0-3.6-2.7-5-9.7-5h-6.6l7-6.8c7.8-7.5 9.8-11.7 9-18.9-1.1-10.4-12.6-17.3-21.2-12.8zM89.6 207.6c-3.1 3-.9 8.4 3.4 8.4 2.4 0 5-2.6 5-5 0-4.3-5.4-6.5-8.4-3.4zM190 187.1c-5.8 2.3-8.8 7.7-5.8 10.7 1.7 1.7 6.3 1.5 7.8-.3s5.1-2 6.8-.3c1.5 1.5 1.6 6.4.2 7.3-1.8 1.1-1 5.7 1.5 8.7 3.2 3.7 3.2 7.2 0 10.3-2.8 2.9-5.4 3.1-9.6.9-2.8-1.4-3.3-1.4-5.5.1-4 2.6-2.9 6.5 2.6 9.3 7.9 4 15.4 2.2 21.3-5 3.8-4.7 4.5-10.4 2.1-16.6-1.2-3-1.7-6.6-1.5-10.2.2-4.4-.2-6.2-2.1-9-4-6-11.4-8.4-17.8-5.9z' />
		</svg>
	);
};

export default CompetitionIcon;
