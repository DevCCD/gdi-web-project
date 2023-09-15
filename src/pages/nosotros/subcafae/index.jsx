import { idiomaAtom } from "@/atoms/themes";
import MainLayout from "@/components/layouts/MainLayout";
import ObjetivosSection from "@/components/sections/about/Objetivos";
import SubCafaeSection from "@/components/sections/about/SubCafae";
import BannerPage from "@/components/ui/BannerPage";
import { useAtom } from "jotai";
import { useState } from "react";

const SubCAFAE = () => {
	const [idioma] = useAtom(idiomaAtom);

	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = (e) => {
		setMousePosition({ x: -e.clientX, y: -e.clientY });
		//
	};

	const transform = {
		transform: `translate(${mousePosition.x / 20}px, ${
			mousePosition.y / 20
		}px)`,
	};
	return (
		<MainLayout onMouseMove={handleMouseMove}>
			<BannerPage {...{ idioma }} title={"Sub CAFAE"} />
			<SubCafaeSection {...{ idioma }} />
		</MainLayout>
	);
};

export default SubCAFAE;
