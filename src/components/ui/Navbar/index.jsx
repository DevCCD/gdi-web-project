import Link from "next/link";
import css from "./styles/styles.module.scss";
import PhoneIconFill from "@/components/icons/interface/PhoneIconFill";
import ButtonSquare from "../ButtonSquare";
import MoonIcon from "@/components/icons/interface/MoonIcon";
import PeruIcon from "@/components/icons/interface/PeruIcon";
import MenuButton from "./MenuButton";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import DoubleArrowIcon from "@/components/icons/interface/DoubleArrowIcon";
import { useAtom } from "jotai";
import { idiomaAtom } from "@/atoms/themes";
import UsaIcon from "@/components/icons/interface/UsaIcon";
import { routerEs, routerEn } from "@/router";
import MenuPhone from "./MenuPhone";
import { activeMenuAtom, menuNavPhoneAtom } from "@/atoms/navbarAtom";
import useMediaQuery from "@/hooks/useMediaQuery";
import UserMenu from "./UserMenu";
import { AnimatePresence, motion } from "framer-motion";
import Portal from "../Portals";
import CloseIcon from "./icons/CloseIcon";
import { InputForm } from "../Input";
import { LoginForm, RegisterForm } from "../Forms";
import UserButton from "./UserButton";
import BrandGDI from "../Brand";

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

const Navbar = ({ theme, setTheme }) => {
	const [activeNav, setActiveNav] = useState(false);
	const [idioma, setIdioma] = useAtom(idiomaAtom);
	const [rutas, setRutas] = useState([]);
	const [menuNavPhone] = useAtom(menuNavPhoneAtom);

	const userMenuRef = useRef(null);
	const [activeMenu, setActiveMenu] = useAtom(activeMenuAtom);

	const [modal, setModal] = useState(false);
	const [typeModal, setTypeModal] = useState(null);

	// not working
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

	const changeBackground = () => {
		window.scrollY > 0 ? setActiveNav(true) : setActiveNav(false);
	};

	const phone = useMediaQuery("(max-width: 850px)");

	useEffect(() => {
		window.addEventListener("scroll", changeBackground);
	}, []);

	useEffect(() => {
		idioma === "es" ? setRutas(routerEs) : setRutas(routerEn);
	}, [idioma]);

	const handleModal = (type) => {
		setModal(true);
		setActiveMenu(false);
		setTypeModal(type);
	};

	return (
		<>
			<div
				className={
					activeNav
						? `${css.navbar_wrapper} ${css.active}`
						: `${css.navbar_wrapper}`
				}
			>
				<div className={css.navbar}>
					<div className={css.left}>
						<Link className={css.logo} href='/'>
							<BrandGDI size={50} />
							<div className={css.logoName}>GDI</div>
						</Link>
						<MenuButton />
					</div>
					<nav className={css.center}>
						<Link className={css.logo} href='/'>
							<BrandGDI size={50} />
							<div className={css.logoName}>GDI</div>
						</Link>
						<ul className={css.navbar_menu}>
							{rutas.map((item) => (
								<li
									className={css.navbar_menu_item}
									key={item.id}
								>
									<Link href={item.path}>{item.name}</Link>
									{item.subMenu && (
										<ul className={css.navbar_submenu}>
											{item.subMenu.map((subitem) => (
												<li
													className={
														css.navbar_submenu_item
													}
													key={subitem.id}
												>
													<Link href={subitem.path}>
														<DoubleArrowIcon
															size={20}
														/>
														{subitem.name}
													</Link>
												</li>
											))}
										</ul>
									)}
								</li>
							))}
							<li className={css.navbar_menu_item}>
								<div className={css.navbar_menu_item_link}>
									Contacto
								</div>
							</li>
						</ul>
					</nav>
					<div className={css.right}>
						<div className={css.preferences}>
							<ButtonSquare
								onClick={() => {
									setIdioma(idioma === "es" ? "en" : "es");
								}}
								title={
									idioma === "es"
										? "Change to English"
										: "Cambiar a Español"
								}
							>
								{idioma === "es" ? (
									<PeruIcon size={22} />
								) : (
									<UsaIcon size={22} />
								)}
							</ButtonSquare>
						</div>
						<UserButton {...{ idioma, handleModal }} />
					</div>
				</div>
			</div>
			{menuNavPhone && phone && <MenuPhone {...{ theme, setTheme }} />}
			<AnimatePresence
				initial={false}
				mode='closed'
				onExitComplete={() => setModal(false)}
			>
				{modal && (
					<Portal target={"modals"}>
						<div className={css.container}>
							<motion.div
								className={css.overlay}
								initial={{ opacity: 0 }}
								animate={{ opacity: 0.45 }}
								exit={{ opacity: 0 }}
								onClick={() => setModal(false)}
							/>
							<motion.div className={css.container_modal}>
								<motion.div
									className={css.modal}
									initial={{ y: 900 }}
									animate={{ y: 0 }}
									exit={{ y: 900 }}
								>
									<div className={css.modal_header}>
										<motion.button
											whileTap={{ scale: 0.9 }}
											onClick={() => setModal(false)}
										>
											<CloseIcon size={26} />
										</motion.button>
										<h3>
											{typeModal === "login"
												? idioma === "es"
													? "Iniciar Sesión"
													: "Login"
												: idioma === "es"
												? "Registrate"
												: "Register"}
										</h3>
									</div>
									<div className={css.modal_body}>
										{typeModal === "login" ? (
											<LoginForm {...{ idioma }} />
										) : (
											<RegisterForm {...{ idioma }} />
										)}
									</div>
									<div className={css.modal_footer}>
										{typeModal === "login" ? (
											<p>
												{idioma === "es"
													? "¿No tienes cuenta? "
													: "Don't have an account? "}
												<span
													onClick={() =>
														setTypeModal("register")
													}
												>
													{idioma === "es"
														? "Registrate"
														: "Register"}
												</span>
											</p>
										) : (
											<p>
												{idioma === "es"
													? "¿Ya tienes cuenta? "
													: "Already have an account? "}
												<span
													onClick={() =>
														setTypeModal("login")
													}
												>
													{idioma === "es"
														? "Iniciar Sesión"
														: "Login"}
												</span>
											</p>
										)}
									</div>
								</motion.div>
							</motion.div>
						</div>
					</Portal>
				)}
			</AnimatePresence>
		</>
	);
};

export default Navbar;
