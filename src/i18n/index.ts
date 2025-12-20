
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
    ANGULAR: {
        name: "Angular",
        class: "border-2 border-[#2D063A] text-[#0f0c11] hover:bg-[#dd0031] hover:border-transparent hover:text-[#F4F4F4] hover:scale-105 transition duration-200 dark:text-[#F4F4F4]"
    },
    NESTJS: {
        name: "NestJS",
        class: "border-2 border-[#2D063A] text-[#0f0c11] hover:bg-[#e0234e] hover:border-transparent hover:text-[#F4F4F4] hover:scale-105 transition duration-200 dark:text-[#F4F4F4]"
    },
    PRISMA: {
        name: "Prisma",
        class: "border-2 border-[#2D063A] text-[#0f0c11] hover:bg-[#2d3748] hover:border-transparent hover:text-[#F4F4F4] hover:scale-105 transition duration-200 dark:text-[#F4F4F4]"
    },
    POSTGRESQL: {
        name: "PostgreSQL",
        class: "border-2 border-[#2D063A] text-[#0f0c11] hover:bg-[#336791] hover:border-transparent hover:text-[#F4F4F4] hover:scale-105 transition duration-200 dark:text-[#F4F4F4]"
    },
    GITHUB: {
        name: "GitHub",
        class: "border-2 border-[#2D063A] text-[#0f0c11] hover:bg-[#181717] hover:border-transparent hover:text-[#F4F4F4] hover:scale-105 transition duration-200 dark:text-[#F4F4F4]"
    },
}

export const LANGUAGES = {
    en: {
        nav: [
            { title: "Home", label: "home", url: "#" },
            { title: "Experience", label: "experience", url: "#experience" },
            { title: "Projects", label: "projects", url: "#projects" },
            { title: "Contact", label: "contact", url: "#contact" },
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
                description: "Since April 2025, I have been working independently in web design and development, collaborating with clients and local businesses to create and strengthen their digital presence. I develop websites and applications using technologies such as Angular and Tailwind CSS on the frontend, and Node.js with NestJS and PostgreSQL on the backend.",
                stack: "HTML | CSS | JavaScript | Angular | NestJs | PostgreSQL | Prisma | GitHub",
                // stack: "HTML | CSS | JavaScript | React | Astro | NEXT.js | Figma | AdobeCC" 
            },
        ],
        projects: [
            {
                title: "MrStore",
                description: "HTML, CSS and JavaScript challenges website. Learn or practice your web development skills according to your level.",
                link: "https://github.com/ManuelRomer0/Mrstore-Front",
                image: "/MRPort-v1/projects/mrstore.webp",
                tags: [TAGS.WEBDEV, TAGS.DESIGN, TAGS.ANGULAR, TAGS.CSS, TAGS.JAVASCRIPT],
            },
        ]
    },
    es: {
        nav: [
            { title: "Inicio", label: "inicio", url: "#" },
            { title: "Experiencia", label: "experiencia", url: "#experience" },
            { title: "Proyectos", label: "proyectos", url: "#projects" },
            { title: "Contacto", label: "contacto", url: "#contact" },
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
                description: "Desde abril de 2025, he estado trabajando de forma independiente en diseño y desarrollo web, colaborando con clientes y negocios locales para crear y fortalecer su presencia digital. Desarrollo sitios web y aplicaciones utilizando tecnologías como Angular y Tailwind CSS en el frontend, y Node.js con NestJS y PostgreSQL en el backend.",
                stack: "HTML | CSS | JavaScript | Angular | NestJs | PostgreSQL | Prisma | GitHub",
            },
        ],
        projects: [
            {
                title: "MrStore",
                description: "Sitio web de retos HTML, CSS y JavaScript. Aprende o practica tus habilidades de desarrollo web según tu nivel.",
                link: "https://github.com/ManuelRomer0/Mrstore-Front",
                image: "/MRPort-v1/projects/mrstore.webp",
                tags: [TAGS.WEBDEV, TAGS.DESIGN, TAGS.ANGULAR, TAGS.CSS, TAGS.JAVASCRIPT],
            },
        ]
    }
}
