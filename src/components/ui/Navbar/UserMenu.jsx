import { useEffect, useRef, useState } from "react";
import css from "./styles/styles.module.scss";

const UserMenu = ({ idioma }) => {
	// al dar click fuera del userMenu se cierra el userMenu
	const [activeUserMenu, setActiveUserMenu] = useState(false);
	const userMenuRef = useRef(null);
	useEffect(() => {
		const checkIfClickedOutside = (e) => {
			if (
				activeUserMenu &&
				userMenuRef.current &&
				!userMenuRef.current.contains(e.target)
			) {
				setActiveUserMenu(false);
			}
		};
		document.addEventListener("mousedown", checkIfClickedOutside);
		return () => {
			document.removeEventListener("mousedown", checkIfClickedOutside);
		};
	}, [activeUserMenu]);
	// al dar click fuera del userMenu se cierra el userMenu

	return (
		<div className={css.userMenu}>
			<div className={css.userMenu_item}>
				{idioma === "es" ? "Registrate" : "Register"}
			</div>
			<div className={css.userMenu_item}>
				{idioma === "es" ? "Iniciar Sesión" : "Login"}
			</div>
		</div>
	);
};

export default UserMenu;
