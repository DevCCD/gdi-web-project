import { idiomaAtom } from "@/atoms/themes";
import MainLayout from "@/components/layouts/MainLayout";
import PrestamosSection from "@/components/sections/servicios/Prestamos";
import BannerPage from "@/components/ui/BannerPage";
import { useAtom } from "jotai";
import { useState } from "react";

const PrestamosPage = () => {
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
				title={idioma === "es" ? "Prestamos" : "Loans"}
			/>
			<PrestamosSection {...{ idioma }} {...{ transform }} />
		</MainLayout>
	);
};

export default PrestamosPage;
