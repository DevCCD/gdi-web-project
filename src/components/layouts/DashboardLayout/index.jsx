import css from "./styles/styles.module.scss";

const Sidebar = () => {
	return <div className={css.sidebar}>sidebar</div>;
};

const Header = () => {
	return <div className={css.header}>navbar</div>;
};

const DashboardLayout = ({ children }) => {
	return (
		<div className={css.dashboard}>
			<Sidebar />
			<main>
				<Header />
				<div className='content'>{children}</div>
			</main>
		</div>
	);
};

export default DashboardLayout;
