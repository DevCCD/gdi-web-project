import { idiomaAtom } from "@/atoms/themes";
import MainLayout from "@/components/layouts/MainLayout";
import DiaMadreSection from "@/components/sections/actividades/DiaMadre";
import BannerPage from "@/components/ui/BannerPage";
import { useAtom } from "jotai";
import { useState } from "react";

const DiaDeLaMadrePage = () => {
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
				title={idioma === "es" ? "Dia de la Madre" : "Mother's Day"}
			/>
			<DiaMadreSection {...{ idioma, transform }} />
		</MainLayout>
	);
};

export default DiaDeLaMadrePage;
