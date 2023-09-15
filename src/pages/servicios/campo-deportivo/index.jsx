import { idiomaAtom } from "@/atoms/themes";
import MainLayout from "@/components/layouts/MainLayout";
import ObjetivosSection from "@/components/sections/about/Objetivos";
import CampoDeportivoSection from "@/components/sections/servicios/CampoDeportivo";
import BannerPage from "@/components/ui/BannerPage";
import Section from "@/components/ui/Section";
import { useAtom } from "jotai";
import { useState } from "react";

const CampoDeportivo = () => {
	const [idioma] = useAtom(idiomaAtom);

	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e) => {
		setMousePosition({ x: -e.clientX, y: -e.clientY });
	};

	const transform = {
		transform: `translate(${mousePosition.x / 20}px, ${
			mousePosition.y / 20
		}px)`,
	};
	return (
		<MainLayout onMouseMove={handleMouseMove}>
			<BannerPage
				{...{ idioma }}
				title={idioma === "es" ? "Campo Deportivo" : "Sports Field"}
			/>
			<CampoDeportivoSection {...{ idioma }} {...{ transform }} />
		</MainLayout>
	);
};

export default CampoDeportivo;
