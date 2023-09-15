import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import geojson from "./data/peru.geojson";
import css from "./styles/map.module.scss";
import { useEffect, useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import useMediaQuery from "@/hooks/useMediaQuery";
import { useAtom } from "jotai";
import { departAtom } from "@/atoms/mapAtom";
import { centroid } from "@turf/turf";

const CustomTooltip = ({ name, PDTE, Adm, direccion, anexo, telefono }) => {
	return (
		<div className={css.tooltip}>
			<h2>{name}</h2>
			<div className={css.info}>
				<h3>
					<span>Pdte:</span> {PDTE}
				</h3>
				{Adm && (
					<h3>
						<span>Adm:</span> {Adm}
					</h3>
				)}
				{direccion && (
					<p>
						<span>Dirección:</span> {direccion}
					</p>
				)}
				{anexo && telefono && (
					<p>
						<span>Anexo:</span> {anexo} | <span>Telf:</span>{" "}
						{telefono}
					</p>
				)}
			</div>
		</div>
	);
};

const PeruMap = ({ idioma }) => {
	const [selectedFeature, setSelectedFeature] = useState(null);
	const [selectedDepartment, setSelectedDepartment] = useAtom(departAtom);
	const [zoom, setZoom] = useState(6);
	const isPhone = useMediaQuery("(max-width: 640px)");
	const mapRef = useRef(null);

	const center = [-9.19, -75.0152];

	const peruBounds = [
		[-18.347, -81.409],
		[0.2, -68.677],
	];

	const maxBoundsMasna = [
		[peruBounds[0][0] - 2, peruBounds[0][1] - 2],
		[peruBounds[1][0] + 2, peruBounds[1][1] + 2],
	];

	useEffect(() => {
		if (isPhone) {
			console.log("isPhone");
			setZoom(5);
		} else {
			console.log("isDesktop");
			setZoom(6);
		}
	}, [isPhone]);

	const style = (feature) => {
		const isSelected = feature === selectedFeature;
		const isDepartmentSelected =
			feature?.properties?.NOMBDEP === selectedDepartment;

		if (isDepartmentSelected) {
			return {
				weight: 3.2,
				opacity: 1,
				fillOpacity: 0.7,
			};
		}
		return {
			weight: 2,
			opacity: 1,
			fillOpacity: isSelected ? 0.45 : 0,
		};
	};

	// funcion para centrar y hacer zoom en el mapa en funcion del departamento en el estado
	const centerMap = () => {
		if (mapRef.current && selectedDepartment) {
			if (selectedDepartment === "Peru") {
				mapRef.current.flyToBounds(peruBounds);
				return;
			}
			const departmentFeature = geojson.features.find(
				(feature) => feature.properties.NOMBDEP === selectedDepartment
			);
			if (departmentFeature) {
				const center = centroid(departmentFeature);
				mapRef.current.flyTo(center.geometry.coordinates.reverse(), 8);
			}
		}
	};

	useEffect(() => {
		centerMap();
	}, [selectedDepartment]);

	const onEachFeature = (feature, layer) => {
		if (feature?.properties && feature?.properties.NOMBDEP) {
			const { NOMBDEP, NOMBPROV, PDTE, Adm, direccion, anexo, telefono } =
				feature.properties || {};

			const tooltipContent = ReactDOMServer.renderToStaticMarkup(
				<CustomTooltip
					name={NOMBDEP || NOMBPROV}
					{...{ PDTE }}
					{...{ Adm }}
					{...{ direccion }}
					{...{ anexo }}
					{...{ telefono }}
				/>
			);

			layer.bindTooltip(tooltipContent, {
				sticky: true,
				className: css.tooltipContainer,
			});
			layer.on({
				mouseover: () => {
					setSelectedFeature(feature);
				},
				mouseout: () => {
					setSelectedFeature(null);
				},
				click: () => {
					setSelectedFeature(feature);
				},
			});
		}
	};

	useEffect(() => {
		if (mapRef.current) {
			if (mapRef.current) {
				mapRef.current.flyTo(center, zoom);
			}
		}
	}, [zoom]);

	return (
		<>
			<MapContainer
				center={center}
				zoom={zoom}
				scrollWheelZoom={false}
				style={{
					height: "100%",
					width: "100%",
					zIndex: 1,
					position: "absolute",
					top: 0,
					left: 0,
				}}
				doubleClickZoom={false}
				maxZoom={12}
				minZoom={4}
				maxBounds={maxBoundsMasna}
				ref={mapRef}
			>
				<TileLayer
					url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
					attribution={
						idioma === "es"
							? '&copy; <a href="/">CAFAE</a>'
							: "&copy; CAFAE"
					}
				/>
				<GeoJSON
					data={geojson}
					style={style}
					onEachFeature={onEachFeature}
					className={css.geojson}
				/>
			</MapContainer>
		</>
	);
};

export default PeruMap;
