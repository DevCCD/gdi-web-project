import { motion } from "framer-motion";
import Portal from "../Portals";
import css from "./styles/menuPhone.module.scss";
import { routerEn, routerEs } from "@/router";
import { useState, useEffect } from "react";
import { useAtom } from "jotai";
import { idiomaAtom } from "@/atoms/themes";
import Link from "next/link";
import { menuNavPhoneAtom } from "@/atoms/navbarAtom";
import { ChevronDownIcon } from "@/components/icons/interface/icons";
import PeruIcon from "@/components/icons/interface/PeruIcon";
import UsaIcon from "@/components/icons/interface/UsaIcon";
import MoonIcon from "@/components/icons/interface/MoonIcon";
import SunIcon from "@/components/icons/interface/SunIcon";

const MenuPhone = ({ theme, setTheme }) => {
	const [rutas, setRutas] = useState([]);
	const [idioma, setIdioma] = useAtom(idiomaAtom);
	const [menuNavPhone, setMenuNavPhone] = useAtom(menuNavPhoneAtom);

	useEffect(() => {
		idioma === "es" ? setRutas(routerEs) : setRutas(routerEn);
	}, [idioma]);

	const MenuComponent = ({ title, children }) => {
		return (
			<div className={css.menu_component}>
				<div className={css.menu_component_title}>
					<h2>{title}</h2>
				</div>
				<div className={css.menu_component_list}>
					<ul>{children}</ul>
				</div>
			</div>
		);
	};

	return (
		<Portal target='modals'>
			<div className={css.container}>
				<motion.div
					className={css.overlay}
					initial={{ opacity: 0 }}
					animate={{ opacity: 1, transition: { duration: 0.12 } }}
					exit={{ opacity: 0, transition: { duration: 0.12 } }}
					onClick={() => setMenuNavPhone(false)}
				/>
				<motion.div
					className={css.menu_container}
					initial={{
						y: "100px",
						scale: 0.25,
						opacity: 0,
					}}
					animate={{ y: 0, scale: 1, opacity: 1 }}
					transition={{
						type: "spring",
						duration: 0.35,
						ease: "easeInOut",
					}}
				>
					<div className={css.menu}>
						<MenuComponent
							title={
								idioma === "es" ? "Navegación" : "Navigation"
							}
						>
							{rutas.map((item, index) => {
								return (
									<motion.li
										className={css.item_list}
										key={index}
										whileTap={{
											backgroundColor: "#f5f5f5",
										}}
									>
										<Link
											className={css.link}
											href={item.path}
											onClick={() => {
												setMenuNavPhone(false);
											}}
										>
											{item.name}
											<ChevronDownIcon
												className={css.chevron}
												fill={"currentColor"}
												size={30}
											/>
										</Link>
									</motion.li>
								);
							})}
						</MenuComponent>
						<MenuComponent
							title={
								idioma === "es" ? "Preferencias" : "Preferences"
							}
						>
							<motion.li
								className={css.item_list}
								whileTap={{
									backgroundColor:
										"rgba(245, 245, 245, 0.75)",
								}}
							>
								<button
									className={css.link}
									style={{
										borderBottom: "1px solid #e5e7eb",
									}}
									onClick={() => {
										setIdioma(
											idioma === "es" ? "en" : "es"
										);
									}}
								>
									{idioma === "es" ? "Idioma" : "Language"}
									<div className='flex items-center gap-2.5'>
										<span className='text-sm opacity-60'>
											{idioma === "es"
												? "Español Perú"
												: "English US"}
										</span>
										{idioma === "es" ? (
											<PeruIcon
												size={20}
												style={{
													marginRight: "0.5rem",
												}}
											/>
										) : (
											<UsaIcon
												size={20}
												style={{
													marginRight: "0.5rem",
												}}
											/>
										)}
									</div>
								</button>
							</motion.li>
							{/* <motion.li
								className={css.item_list}
								whileTap={{
									backgroundColor: "#f5f5f5",
								}}
							>
								<button
									className={css.link}
									onClick={() => {
										theme === "dark"
											? setTheme("light")
											: setTheme("dark");
									}}
								>
									{idioma === "es" ? "Tema UI" : "UI Theme"}
									<div className='flex items-center gap-2.5'>
										<span className='text-sm opacity-60'>
											{theme.slice(0, 1).toUpperCase() +
												theme.slice(1)}
										</span>
										{theme === "dark" ? (
											<MoonIcon
												style={{
													marginRight: "0.5rem",
												}}
												size={20}
											/>
										) : (
											<SunIcon
												style={{
													marginRight: "0.5rem",
												}}
												size={20}
											/>
										)}
									</div>
								</button>
							</motion.li> */}
						</MenuComponent>
					</div>
				</motion.div>
			</div>
		</Portal>
	);
};

export default MenuPhone;
