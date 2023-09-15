import { idiomaAtom } from "@/atoms/themes";
import MainLayout from "@/components/layouts/MainLayout";
import AboutSection from "@/components/sections/home/About";
import BlogSection from "@/components/sections/home/Blog";
import FAQSection from "@/components/sections/home/Faq";
import FeedBackSection from "@/components/sections/home/Feedback";
import LogrosSection from "@/components/sections/home/Logros";
import OurTeamSection from "@/components/sections/home/OurTeam";
import ServiciosSection from "@/components/sections/home/Servicios";
import WhyUsSection from "@/components/sections/home/WhyUs";
import Header from "@/components/ui/Header";
import { useAtom } from "jotai";
import { useState } from "react";

const HomePage = () => {
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
			<Header {...{ idioma, transform }} />
			<AboutSection {...{ idioma, transform }} />
			<ServiciosSection {...{ idioma, transform }} />
			<WhyUsSection {...{ idioma, transform }} />
			<OurTeamSection {...{ idioma, transform }} />
			<FAQSection {...{ idioma, transform }} />
			{/* <FeedBackSection {...{ idioma, transform }} /> */}
			{/* <LogrosSection {...{ idioma }} /> */}
			<BlogSection {...{ idioma }} />
		</MainLayout>
	);
};

export default HomePage;
