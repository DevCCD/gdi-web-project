import { activeMenuAtom } from "@/atoms/navbarAtom";
import { AnimatePresence, motion } from "framer-motion";
import { useAtom } from "jotai";
import { useEffect, useRef, useState } from "react";
import css from "./styles/userButton.module.scss";

const MenuIcon = (props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={props.size || 16}
			height={props.size || 16}
			fill='currentColor'
			viewBox='0 0 16 16'
			{...props}
		>
			<path
				fillRule='evenodd'
				d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
			/>
		</svg>
	);
};

const UserIcon = (props) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			aria-hidden='true'
			style={{
				position: "absolute",
				display: "flex",
				height: "100%",
				width: "100%",
				fill: "currentcolor",
			}}
			viewBox='0 0 32 32'
			{...props}
		>
			<path d='M16 .7C7.563.7.7 7.563.7 16S7.563 31.3 16 31.3 31.3 24.437 31.3 16 24.437.7 16 .7zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4A6.507 6.507 0 0 1 9.5 14c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1-3.019 5.491 12.42 12.42 0 0 1 6.452 4.4C23.605 26.816 20.021 28.7 16 28.7z' />
		</svg>
	);
};

const UserButton = ({ idioma, handleModal }) => {
	const [activeMenu, setActiveMenu] = useAtom(activeMenuAtom);
	const userMenuRef = useRef(null);

	const handleClickOutside = (e) => {
		if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
			setActiveMenu(false);
		}
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className={css.access}>
			<button
				className={
					activeMenu ? `${css.userBtn} ${css.active}` : css.userBtn
				}
				onClick={() => setActiveMenu(!activeMenu)}
			>
				<div className={css.menu}>
					<MenuIcon size={20} />
				</div>
				<div className={css.user}>
					<UserIcon size={20} />
				</div>
			</button>
			<AnimatePresence
				initial={false}
				mode='closed'
				onExitComplete={() => setActiveMenu(false)}
			>
				{activeMenu && (
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 20 }}
						className={css.userMenu}
						ref={userMenuRef}
					>
						<ul>
							<li>
								<button
									className={css.userMenu_item}
									onClick={() => handleModal("register")}
								>
									{idioma === "es"
										? "Registrate"
										: "Register"}
								</button>
							</li>
							<li>
								<button
									className={css.userMenu_item}
									onClick={() => handleModal("login")}
								>
									{idioma === "es"
										? "Iniciar Sesión"
										: "Login"}
								</button>
							</li>
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default UserButton;
