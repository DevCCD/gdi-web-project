import css from "./styles/leyenda.module.scss";
import Select from "./Select";

const Leyenda = ({ idioma }) => {
	return (
		<div className={css.leyenda}>
			<h2>{idioma === "es" ? "Leyenda - Filtro" : "Legend - Filter"}</h2>
			{/* <h1>
				{idioma === "es"
					? "Distritos Judiciales"
					: "Judicial Districts"}
			</h1> */}
			<div className={css.leyendaContainer}>
				<div className={css.gridleyendas}>
					<div className={css.leyendaItem}>
						<div
							className={css.leyendaColor}
							style={{ backgroundColor: "#4298ef" }}
						/>
						<p>
							{idioma === "es"
								? "Limite de Distritos Judiciales"
								: "Judicial Districts Limit"}
						</p>
					</div>
					<div className={css.leyendaItem}>
						<div
							className={css.leyendaColor}
							style={{ backgroundColor: "#F7A289" }}
						/>
						<p>
							{idioma === "es"
								? "Carreteras Principales"
								: "Main Roads"}
						</p>
					</div>
					<div className={css.leyendaItem}>
						<div className={css.leyendDiv}>
							<div className={css.circle}></div>
						</div>
						<p>
							{idioma === "es"
								? "Capital de Distrito"
								: "District Capital"}
						</p>
					</div>
					<div className={css.leyendaItem}>
						<div className={css.leyendDiv}>
							<div className={css.circle}>
								<div className={css.subcircle}></div>
							</div>
						</div>
						<p>
							{idioma === "es"
								? "Capital de la República del Perú"
								: "Capital of the Republic of Peru"}
						</p>
					</div>
				</div>
				<div className={css.filter}>
					<Select {...{ idioma }} />
				</div>
			</div>
		</div>
	);
};

export default Leyenda;
