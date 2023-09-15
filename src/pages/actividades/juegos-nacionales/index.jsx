import { idiomaAtom } from "@/atoms/themes";
import MainLayout from "@/components/layouts/MainLayout";
import JuegosNacionalesSection from "@/components/sections/actividades/JuegosNacionales";
import BannerPage from "@/components/ui/BannerPage";
import { useAtom } from "jotai";
import { useState } from "react";

const JuegosNacionalesPage = () => {
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
				title={idioma === "es" ? "Juegos Nacionales" : "National Games"}
			/>
			<JuegosNacionalesSection {...{ idioma, transform }} />
		</MainLayout>
	);
};

export default JuegosNacionalesPage;
