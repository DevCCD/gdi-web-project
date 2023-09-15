import { idiomaAtom } from "@/atoms/themes";
import MainLayout from "@/components/layouts/MainLayout";
import ObjetivosSection from "@/components/sections/about/Objetivos";
import GaleriaImagenesSection from "@/components/sections/galeria/Imagenes";
import BannerPage from "@/components/ui/BannerPage";
import Section from "@/components/ui/Section";
import { useAtom } from "jotai";
import { useState } from "react";

const GaleriaDeImagenesPage = () => {
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
				title={
					idioma === "es"
						? "Galeria de imagenes"
						: "Gallery of images"
				}
			/>
			<GaleriaImagenesSection />
		</MainLayout>
	);
};

export default GaleriaDeImagenesPage;
