import Section from "@/components/ui/Section";
import css from "./styles/styles.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";
import Skeleton from "@/components/ui/Skeleton";

const GaleriaSection = ({ idioma, transform }) => {
	const router = useRouter();

	const items = [
		{
			id: 1,
			src: "/assets/images/galeria/photos.jpg",
			alt: "galeria de fotos",
			href: "/galeria/galeria-de-imagenes",
			title: idioma === "es" ? "Galeria de imágenes" : "Image gallery",
		},
		{
			id: 2,
			src: "/assets/images/galeria/videos.jpg",
			alt: "galeria de videos",
			href: "/galeria/galeria-de-videos",
			title: idioma === "es" ? "Galeria de videos" : "Video gallery",
		},
	];

	return (
		<>
			<Section
				style={{
					overflow: "initial",
				}}
			>
				<Section.Title className='text-center mx-auto text-[#002448]'>
					{idioma === "es"
						? "Bienvenidos a nuestra galeria"
						: "Welcome to our gallery"}
				</Section.Title>
				<Section.Description style={{ maxWidth: "800px" }}>
					{idioma === "es"
						? "En nuestras galerías podrás ver las fotos y videos de los eventos realizados. Síguenos en las redes sociales para ver todos los álbumes, videos y compartirlos."
						: "In our galleries you can see the photos and videos of the events held. Follow us on social networks to see all the albums, videos and share them."}
				</Section.Description>
				<Section.Container>
					<div className={css.galeria_grid}>
						{items.map((item) => (
							<div
								className={css.wrapper_grid_item}
								key={item.id}
							>
								<div
									className={css.galeria_item}
									onClick={
										item.href
											? () => router.push(item.href)
											: null
									}
									title={
										idioma === "es"
											? `Ir a ${item.title}`
											: `Go to ${item.title}`
									}
								>
									<div className={css.bg_layer}>
										{idioma === "es"
											? `Ver ${item.title}`
											: `See ${item.title}`}
									</div>
									{item.src && (
										<Image
											src={item.src}
											alt='galeria'
											fill
											draggable={false}
											sizes='500px 500px'
										/>
									)}
								</div>
							</div>
						))}
					</div>
				</Section.Container>
			</Section>
		</>
	);
};

export default GaleriaSection;
