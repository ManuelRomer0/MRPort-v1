
const TAGS = {
    WEBDEV: {
        name: "Web Development",
        class: "text-[#0f0c11] border-2 border-[#B617E6] hover:bg-[#B617E6] hover:text-[#F4F4F4] hover:scale-105 transition duration-200 dark:text-[#F4F4F4]",
    },
    DESIGN: {
        name: "Visual Design",
        class: "text-[#0f0c11] border-2 border-[#FAAB00] hover:bg-[#B617E6] hover:border-transparent hover:text-[#F4F4F4] hover:scale-105 transition duration-200 dark:text-[#F4F4F4]",
    },
    HTML: {
        name: "HTML",
        class: "text-[#0f0c11] border-2 border-[#2D063A] hover:bg-[#e34f26] hover:border-transparent hover:text-[#F4F4F4] hover:scale-105 transition duration-200 dark:text-[#F4F4F4]"
    },
    CSS: {
        name: "CSS",
        class: "text-[#0f0c11] border-2 border-[#2D063A] hover:bg-[#264de4] hover:border-transparent hover:text-[#F4F4F4] hover:scale-105 transition duration-200 dark:text-[#F4F4F4]"
    },
    JAVASCRIPT: {
        name: "JavaScript",
        class: "border-2 border-[#2D063A] text-[#0f0c11] hover:bg-[#F0DB4F] hover:border-transparent hover:text-[#0f0c11] dark:hover:text-[#0f0c11] hover:scale-105 transition duration-200 dark:text-[#F4F4F4]"
    },
    TYPESCRIPT: {
        name: "TypeScript",
        class: "border-2 border-[#2D063A] text-[#0f0c11] hover:bg-[#3178c6] hover:border-transparent hover:text-[#F4F4F4] hover:scale-105 transition duration-200 dark:text-[#F4F4F4]"
    },
    TAILWINDCSS: {
        name: "TailwindCSS",
        class: "border-2 border-[#2D063A] text-[#0f0c11] hover:bg-[#3B82F6] hover:border-transparent hover:text-[#F4F4F4] hover:scale-105 transition duration-200 dark:text-[#F4F4F4]"
    },
    ASTRO: {
        name: "Astro",
        class: "border-2 border-[#2D063A] text-[#0f0c11] hover:bg-[#0f0c11] hover:border-[#F4F4F4] hover:text-[#F4F4F4] hover:scale-105 transition duration-200 dark:text-[#F4F4F4]"
    },
    NEXT: {
        name: "NEXT.js",
        class: "border-2 border-[#2D063A] text-[#0f0c11] hover:bg-[#030303] hover:border-[#F4F4F4] hover:text-[#F4F4F4] hover:scale-105 transition duration-200 dark:text-[#F4F4F4]"
    },
}

export const LANGUAGES = {
    en: {
        nav: [
            { title: "Home", label: "home", url: "/s#" },
            { title: "Experience", label: "experience", url: "/#experience" },
            { title: "Projects", label: "projects", url: "/#projects" },
            { title: "Contact", label: "contact", url: "/#contact" },
        ],
        hero: {
            title: "Manuel Andrés Romero Moreno",
            badgeAvailable: "Available - Let's talk!",
            badgeLocation: "Barranquilla, COL",
            intro1: "Making stuff on the web.",
            intro2: "I love contributing to the creative and technical",
            introHighlight: "development",
            intro3: "of user interfaces, webs and apps.",
            downloadResume: "Download Resume",
            viewProjects: "View Projects",
            socialLinks: "Social Links",
        },
        sectionTitles: {
            experience: "Experience",
            projects: "Projects",
        },
        form: {
            title: "Ready to build a site that captures your vision?",
            subtitle: "Let's make it true! ✨"
        },
        experience: [
            {
                date: "Oct 2025 - Present",
                title: "Web Designer & Developer",
                company: "Freelance",
                description: "I started working in web design and development projects independently in May 2024. Helping clients and local businesses develop their brand and create design assets using the Adobe Creative Cloud tools, design websites and create design systems and libraries in Figma, and front-end development focused on CSS",
                stack: "HTML | CSS | JavaScript | Angular | NestJs | PostgresSQL"
                // stack: "HTML | CSS | JavaScript | React | Astro | NEXT.js | Figma | AdobeCC" 
            },
        ],
        projects: [
            {
                title: "StreamByte",
                description: "HTML, CSS and JavaScript challenges website. Learn or practice your web development skills according to your level.",
                link: "https://github.com/StreamByte/website",
                image: "/projects/streambyte.webp",
                tags: [TAGS.WEBDEV, TAGS.DESIGN, TAGS.ASTRO, TAGS.CSS, TAGS.JAVASCRIPT],
            },
            {
                title: "malditojefe.chat",
                description: "Chat game using AI. Get a collection of perks while trying to avoid an angry boss.",
                link: "https://malditojefe-chat.vercel.app/",
                image: "/projects/malditojefe.png",
                tags: [TAGS.WEBDEV, TAGS.DESIGN, TAGS.NEXT, TAGS.TAILWINDCSS, TAGS.TYPESCRIPT],
            },
            {
                title: "Yorokobi Sushi",
                description: "Logo and visual design for local sushi shop.",
                link: "https://www.behance.net/gallery/196866463/Yorokobi-Sushi-Logo-Design",
                image: "/projects/yorokobi.webp",
                tags: [TAGS.DESIGN],
            },
            {
                title: "Don Monchis",
                description: "Visual design and web development for a fast food restaurant.",
                link: "https://www.behance.net/gallery/196862755/Don-Monchis-Logo-Design",
                image: "/projects/donmonchis.webp",
                tags: [TAGS.DESIGN],
            },
        ]
    },
    es: {
        nav: [
            { title: "Inicio", label: "inicio", url: "/es#" },
            { title: "Experiencia", label: "experiencia", url: "/es#experience" },
            { title: "Proyectos", label: "proyectos", url: "/es#projects" },
            { title: "Contacto", label: "contacto", url: "/es#contact" },
        ],
        hero: {
            title: "Manuel Andrés Romero Moreno",
            badgeAvailable: "Disponible - ¡Hablemos!",
            badgeLocation: "Barranquilla, COL",
            intro1: "Creando cosas en la web.",
            intro2: "Me apasiona contribuir al",
            introHighlight: "desarrollo",
            intro3: "creativo y técnico de interfaces de usuario, webs y aplicaciones.",
            downloadResume: "Descargar CV",
            viewProjects: "Ver Proyectos",
            socialLinks: "Redes Sociales",
        },
        sectionTitles: {
            experience: "Experiencia",
            projects: "Proyectos",
        },
        form: {
            title: "¿Listo para construir un sitio que capture tu visión?",
            subtitle: "¡Hagámoslo realidad! ✨"
        },
        experience: [
            {
                date: "Oct 2025 - Presente",
                title: "Diseñador Web y Desarrollador",
                company: "Freelance",
                description: "Empecé a trabajar en proyectos de diseño y desarrollo web de forma independiente en mayo de 2024. Ayudando a clientes y negocios locales a desarrollar su marca y crear activos de diseño utilizando las herramientas de Adobe Creative Cloud, diseñar sitios web y crear sistemas de diseño y bibliotecas en Figma, y desarrollo front-end centrado en CSS",
                stack: "HTML | CSS | JavaScript | React | Astro | NEXT.js | Figma | AdobeCC"
            },
        ],
        projects: [
            {
                title: "StreamByte",
                description: "Sitio web de retos HTML, CSS y JavaScript. Aprende o practica tus habilidades de desarrollo web según tu nivel.",
                link: "https://github.com/StreamByte/website",
                image: "/projects/streambyte.webp",
                tags: [TAGS.WEBDEV, TAGS.DESIGN, TAGS.ASTRO, TAGS.CSS, TAGS.JAVASCRIPT],
            },
            {
                title: "malditojefe.chat",
                description: "Juego de chat usando IA. Consigue una colección de ventajas mientras intentas evitar a un jefe enfadado.",
                link: "https://malditojefe-chat.vercel.app/",
                image: "/projects/malditojefe.png",
                tags: [TAGS.WEBDEV, TAGS.DESIGN, TAGS.NEXT, TAGS.TAILWINDCSS, TAGS.TYPESCRIPT],
            },
            {
                title: "Yorokobi Sushi",
                description: "Logotipo y diseño visual para tienda de sushi local.",
                link: "https://www.behance.net/gallery/196866463/Yorokobi-Sushi-Logo-Design",
                image: "/projects/yorokobi.webp",
                tags: [TAGS.DESIGN],
            },
            {
                title: "Don Monchis",
                description: "Diseño visual y desarrollo web para restaurante de comida rápida.",
                link: "https://www.behance.net/gallery/196862755/Don-Monchis-Logo-Design",
                image: "/projects/donmonchis.webp",
                tags: [TAGS.DESIGN],
            },
        ]
    }
}
