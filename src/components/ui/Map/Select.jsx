import * as geojson from "./data/peru.geojson";
import { AnimatePresence, motion } from "framer-motion";
import css from "./styles/select.module.scss";
import CaretDown from "@/components/icons/interface/CaretDown";
import { useEffect, useRef, useState } from "react";
import { useAtom } from "jotai";
import { departAtom } from "@/atoms/mapAtom";
import OptionList from "./OptionList";

const Select = ({ idioma }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [selectedDepartment, setSelectedDepartment] = useAtom(departAtom);
	const optionsRef = useRef(null);

	const refactName = (text) => {
		const namereFact = text
			.replace("D.J. ", "")
			.toLowerCase()
			.replace(/\b\w/g, (c) => c.toUpperCase());
		return namereFact;
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (
				optionsRef.current &&
				!optionsRef.current.contains(event.target)
			) {
				setIsOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [optionsRef]);

	const handleOpen = () => {
		if (isOpen) {
			setIsOpen(false);
		} else {
			setIsOpen(true);
		}
	};

	return (
		<>
			<div className={css.wrapper}>
				<button className={css.select} onClick={handleOpen}>
					<CaretDown
						size={16}
						style={{
							transform: isOpen
								? "rotate(180deg)"
								: "rotate(0deg)",
						}}
					/>
					<div>
						<div className={css.subname}>
							{idioma === "es"
								? "Distrito Judicial"
								: "Judicial District"}
						</div>
						<div className={css.name}>
							{selectedDepartment === "Peru"
								? "Seleccionar"
								: refactName(selectedDepartment) ||
								  "Seleccionar"}
						</div>
					</div>
				</button>
				<AnimatePresence
					initial={false}
					mode='closed'
					onExitComplete={() => setIsOpen(false)}
				>
					{isOpen && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 20 }}
							className={css.options}
							ref={optionsRef}
						>
							<OptionList
								geojson={geojson}
								idioma={idioma}
								{...{ selectedDepartment }}
								{...{ setSelectedDepartment }}
								refactName={refactName}
								setIsOpen={setIsOpen}
							/>

							<div className='px-[22px] flex justify-end py-1'>
								<span className='text-[10px] text-gray-400'>
									by Almeyda
								</span>
							</div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</>
	);
};

export default Select;
