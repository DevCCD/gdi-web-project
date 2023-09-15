import css from "./styles/select.module.scss";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { scroller } from "react-scroll";

const OptionList = ({
	geojson,
	idioma,
	selectedDepartment,
	setSelectedDepartment,
	refactName,
	setIsOpen,
}) => {
	// ref para detectar el scroll del contenedor
	const scrollRef = useRef(null);
	// estado para detectar si el contenedor esta en scroll
	const [isScroll, setIsScroll] = useState(false);
	// efecto para detectar el scroll del contenedor
	const [search, setSearch] = useState("");

	const [filteredData, setFilteredData] = useState(geojson.features);

	const [isEmty, setIsEmty] = useState(false);

	useLayoutEffect(() => {
		const handleScroll = () => {
			// si el scroll es mayor a 0, entonces esta en scroll
			if (scrollRef.current.scrollTop > 0) {
				// setear el estado tru
				setIsScroll(true);
			} else {
				// setear el estado false
				setIsScroll(false);
			}
		};
		scrollRef.current.addEventListener("scroll", handleScroll);
		return () => {
			scrollRef.current.removeEventListener("scroll", () => {});
		};
	}, [scrollRef]);

	const handleButtonClick = (NOMBDEP) => {
		setSelectedDepartment(NOMBDEP);
		setIsOpen(false);
	};

	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		const filter = geojson.features.filter((feature) => {
			const { NOMBDEP } = feature.properties;
			const name = refactName(NOMBDEP);
			return name.toLowerCase().includes(search.toLowerCase());
		});
		setFilteredData(filter);
		if (filter.length === 0) {
			setIsEmty(true);
			console.log("vacio");
		} else {
			setIsEmty(false);
			console.log("no vacio");
		}
	}, [search]);

	return (
		<div className={css.optionlist} ref={scrollRef} id='optionlist'>
			<div
				className={
					isScroll ? `${css.header} ${css.active}` : css.header
				}
			>
				<div className={css.search_group}>
					<input
						type='text'
						className={css.search}
						placeholder={idioma === "es" ? "Buscar" : "Search"}
						value={search}
						onChange={handleSearch}
					/>
				</div>
			</div>
			<div className={css.body}>
				{search.length === 0 && (
					<button
						type='button'
						className={
							selectedDepartment === "Peru"
								? `${css.option} ${css.active}`
								: css.option
						}
						onClick={() => {
							setSelectedDepartment("Peru");
							setIsOpen(false);
						}}
					>
						<div>
							<div className={css.subname}>
								{idioma === "es" ? "Por Defecto" : "Default"}
							</div>
							<div className={css.name}>
								{idioma === "es" ? "Ninguno" : "None"}
							</div>
						</div>
					</button>
				)}
				{filteredData.map((feature) => {
					const { NOMBDEP } = feature.properties;
					const name = refactName(NOMBDEP);
					const isDepartSelected = selectedDepartment === NOMBDEP;
					return (
						<button
							type='button'
							key={NOMBDEP}
							className={
								isDepartSelected
									? `${css.option} ${css.active}`
									: css.option
							}
							onClick={() => handleButtonClick(NOMBDEP)}
						>
							<div>
								<div className={css.subname}>
									{idioma === "es"
										? "Distrito Judicial"
										: "Judicial District"}
								</div>
								<div className={css.name}>{name}</div>
							</div>
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default OptionList;
