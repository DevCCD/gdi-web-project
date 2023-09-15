const router = [
    {
        id: 1,
        name: "Home",
        path: "/",
    },
    {
        id: 2,
        name: "About Us",
        path: "/nosotros/quienes-somos",
        subMenu: [
            {
                id: 1,
                name: "Who we are",
                path: "/nosotros/quienes-somos",
            },
            {
                id: 2,
                name: "Objectives",
                path: "/nosotros/objetivos",
            },
            {
                id: 3,
                name: "Administration Committee",
                path: "/nosotros/comite-de-administracion",
            },
            {
                id: 4,
                name: "Sub CAFAE",
                path: "/nosotros/subcafae",
            }
        ]
    },
    {
        id: 3,
        name: "Services",
        path: "/servicios",
        subMenu: [
            {
                id: 1,
                name: "Loans",
                path: "/servicios/prestamos",
            },
            {
                id: 2,
                name: "Subsidies",
                path: "/servicios/subsidios",
            },
            {
                id: 3,
                name: "Economic Support",
                path: "/servicios/apoyo-economico",
            },
            {
                id: 4,
                name: "Sports Field",
                path: "/servicios/campo-deportivo",
            }
        ]
    },
    {
        id: 4,
        name: "Activities",
        path: "/actividades",
        subMenu: [
            {
                id: 1,
                name: "Mother's Day",
                path: "/actividades/dia-de-la-madre",
            },
            {
                id: 2,
                name: "Father's Day",
                path: "/actividades/dia-del-padre",
            },
            {
                id: 3,
                name: "Recognition for 40 years",
                path: "/actividades/reconocimiento-por-40-anos",
            },
            {
                id: 4,
                name: "Christmas Event",
                path: "/actividades/evento-navideno",
            },
            {
                id: 5,
                name: "National Games",
                path: "/actividades/juegos-nacionales",
            },
            {
                id: 6,
                name: "Dances",
                path: "/actividades/danzas",
            }
        ]
    },
    {
        id: 5,
        name: "Gallery",
        path: "/galeria",
        subMenu: [
            {
                id: 1,
                name: "Image Gallery",
                path: "/galeria/galeria-de-imagenes",
            },
            {
                id: 2,
                name: "Video Gallery",
                path: "/galeria/galeria-de-videos",
            }
        ]
    }
];

export default router;