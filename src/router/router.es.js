const router = [
    {
        id: 1,
        name: "Inicio",
        path: "/",
    },
    {
        id: 2,
        name: "Nosotros",
        path: "/nosotros/quienes-somos",
        subMenu: [
            {
                id: 1,
                name: "Quiénes Somos",
                path: "/nosotros/quienes-somos",
            },
            {
                id: 2,
                name: "Objetivos",
                path: "/nosotros/objetivos",
            },
            {
                id: 3,
                name: "Comite de Administración",
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
        name: "Servicios",
        path: "/servicios",
        subMenu: [
            {
                id: 1,
                name: "Préstamos",
                path: "/servicios/prestamos",
            },
            {
                id: 2,
                name: "Subsidios",
                path: "/servicios/subsidios",
            },
            {
                id: 3,
                name: "Apoyo Económico",
                path: "/servicios/apoyo-economico",
            },
            {
                id: 4,
                name: "Campo Deportivo",
                path: "/servicios/campo-deportivo",
            }
        ]
    },
    {
        id: 4,
        name: "Actividades",
        path: "/actividades",
        subMenu: [
            {
                id: 1,
                name: "Día de la Madre",
                path: "/actividades/dia-de-la-madre",
            },
            {
                id: 2,
                name: "Día del Padre",
                path: "/actividades/dia-del-padre",
            },
            {
                id: 3,
                name: "Reconocimiento por 40 años",
                path: "/actividades/reconocimiento-por-40-anos",
            },
            {
                id: 4,
                name: "Evento Navideño",
                path: "/actividades/evento-navideno",
            },
            {
                id: 5,
                name: "Juegos Nacionales",
                path: "/actividades/juegos-nacionales",
            },
            {
                id: 6,
                name: "Danzas",
                path: "/actividades/danzas",
            }
        ]
    },
    {
        id: 5,
        name: "Galería",
        path: "/galeria",
        subMenu: [
            {
                id: 1,
                name: "Galeria de Imágenes",
                path: "/galeria/galeria-de-imagenes",
            },
            {
                id: 2,
                name: "Galeria de Videos",
                path: "/galeria/galeria-de-videos",
            }
        ]
    }
];

export default router;