export type Lang = "es" | "en";

const es = {
  // Layout
  "layout.skip": "Saltar al contenido principal",
  "layout.description":
    "Portfolio de Luis Palacios - Desarrollador Full-Stack especializado en soluciones digitales",
  "layout.keywords":
    "portfolio, proyectos, desarrollo web, full-stack, JavaScript, React, Astro, Tailwind CSS, Node.js",
  "layout.og_locale": "es_ES",

  // Header
  "header.home": "Inicio",
  "header.skills": "Habilidades",
  "header.projects": "Proyectos",
  "header.education": "Formación",
  "header.menu": "Abrir menú de navegación",
  "header.nav_aria": "Navegación principal",

  // Social Sidebar
  "sidebar.follow": "SÍGUEME",
  "sidebar.github_label": "GitHub",
  "sidebar.linkedin_label": "LinkedIn",
  "sidebar.email_label": "Email",
  "sidebar.github_aria": "Perfil de GitHub",
  "sidebar.linkedin_aria": "Perfil de LinkedIn",
  "sidebar.email_aria": "Enviar correo electrónico",
  "sidebar.aria": "Enlaces a redes sociales",
  "sidebar.lang_es": "ES",
  "sidebar.lang_en": "EN",
  "sidebar.lang_aria_es": "Cambiar idioma a español",
  "sidebar.lang_aria_en": "Switch to English",

  // Hero
  "hero.section_aria": "Sección principal de presentación",
  "hero.badge": "Ingeniero de Software",
  "hero.title1": "Desarrollador",
  "hero.title2": "Full-Stack",
  "hero.description":
    "Desarrollador full-stack especializado en la creación de soluciones digitales a medida. Aunque estoy en las primeras etapas de mi carrera como desarrollador, creo tener una base sólida para crear productos funcionales, escalables y visualmente coherentes.",
  "hero.cta": "Descargar CV",
  "hero.cta_aria": "Descargar currículum vitae en formato PDF",

  // Skills
  "skills.heading": "{} Habilidades",
  "skills.aria_list": "Lista de habilidades técnicas",
  "skills.aria_card": "Tarjeta de habilidades:",
  "skills.aria_techs": "Tecnologías",

  // Projects
  "projects.heading": "Proyectos Destacados",
  "projects.view_all": "Ver todos los proyectos",
  "projects.view_all_aria": "Ver todos los proyectos en GitHub",
  "projects.aria_list": "Lista de proyectos",
  "projects.aria_categories": "Categorías del proyecto",
  "projects.aria_techs": "Tecnologías utilizadas",
  "projects.see_demo": "Ver Demo",
  "projects.code": "Código",
  "projects.see_demo_aria": "Ver demostración del proyecto",
  "projects.code_aria": "Ver código fuente del proyecto en GitHub",
  "projects.0.title": "E-commerce onlygirlsccs",
  "projects.0.subtitle": "App web",
  "projects.0.category": "Gestión de productos",
  "projects.0.description":
    "Trabajo como repartidor para una tienda online en Caracas, Venezuela. También ayudé a crear un pequeño sistema para que nuestros clientes puedan ver nuestro catálogo. Esto nos permite dejar de depender de WhatsApp y ofrecer otras opciones.",
  "projects.0.status": "Activo",
  "projects.1.title": "AstroTurismo",
  "projects.1.subtitle": "Landing Page",
  "projects.1.category": "Turismo",
  "projects.1.description":
    "Sitio web de Turismo para la agencia ficticia AstroTurismo, especializada en llevar viajeros a los cielos más oscuros del planeta (Bortle clase 1 y 2) para observar auroras boreales, lluvias de meteoros, eclipses totales y la Vía Láctea.",
  "projects.1.status": "Activo",
  "projects.2.title": "MecaApp",
  "projects.2.subtitle": "App web",
  "projects.2.category": "Servicios automotrices",
  "projects.2.description":
    "Aplicación diseñada para mecánicos, que ofrece diversos planes para facilitar la contratación de servicios. Permite a los clientes explorar y contratar servicios de mantenimiento y reparación vehicular de forma sencilla.",
  "projects.2.status": "En desarrollo",

  // Education
  "education.heading": "# Formación Académica",
  "education.aria_timeline": "Línea de tiempo de formación académica",
  "education.0.title": "Programador Full Stack",
  "education.0.school": "Social Oplesk",
  "education.0.period": "2024 Agosto - 2025 Marzo",
  "education.0.description":
    "Recientemente completé una especialización en SocialOplesk para actualizar mis bases técnicas, lo que me permitió dar el salto al aprendizaje de manera autodidacta. Soy un desarrollador forjado en la constancia, apoyándome en referentes de la industria (como Midudev y MoureDev) para dominar las tecnologías actuales a través de la práctica intensiva y el desarrollo de proyectos propios.",
  "education.1.title": "Desarrollador Web Full Stack, Programador",
  "education.1.school": "4Geeks Academy Venezuela",
  "education.1.period": "2017 Noviembre - 2018 Marzo",
  "education.1.description":
    "Mi trayectoria en el desarrollo de software comenzó en 2017 con una formación Full Stack en 4Geeks Academy. Este programa fue el catalizador de mi carrera, proporcionándome una base sólida en lógica de programación y permitiéndome desarrollar mi primer proyecto integral. Tras una pausa necesaria para atender asuntos personales.",

  // GitHub Calendar
  "github.heading": "Contribuciones en el último año",
  "github.total": "total",
  "github.less": "Menos",
  "github.more": "Más",
  "github.error": "No se pudieron cargar los datos del calendario de GitHub.",
};

const en: Record<keyof typeof es, string> = {
  // Layout
  "layout.skip": "Skip to main content",
  "layout.description":
    "Portfolio of Luis Palacios - Full-Stack Developer specialized in digital solutions",
  "layout.keywords":
    "portfolio, projects, web development, full-stack, JavaScript, React, Astro, Tailwind CSS, Node.js",
  "layout.og_locale": "en_US",

  // Header
  "header.home": "Home",
  "header.skills": "Skills",
  "header.projects": "Projects",
  "header.education": "Education",
  "header.menu": "Open navigation menu",
  "header.nav_aria": "Main navigation",

  // Social Sidebar
  "sidebar.follow": "FOLLOW",
  "sidebar.github_label": "GitHub",
  "sidebar.linkedin_label": "LinkedIn",
  "sidebar.email_label": "Email",
  "sidebar.github_aria": "GitHub Profile",
  "sidebar.linkedin_aria": "LinkedIn Profile",
  "sidebar.email_aria": "Send email",
  "sidebar.aria": "Social media links",
  "sidebar.lang_es": "ES",
  "sidebar.lang_en": "EN",
  "sidebar.lang_aria_es": "Switch to Spanish",
  "sidebar.lang_aria_en": "Cambiar idioma a inglés",

  // Hero
  "hero.section_aria": "Main presentation section",
  "hero.badge": "Software Engineer",
  "hero.title1": "Full-Stack",
  "hero.title2": "Developer",
  "hero.description":
    "Full-stack developer specialized in creating custom digital solutions. Although I'm in the early stages of my development career, I believe I have a solid foundation to create functional, scalable, and visually coherent products.",
  "hero.cta": "Download CV",
  "hero.cta_aria": "Download curriculum vitae in PDF format",

  // Skills
  "skills.heading": "{} Skills",
  "skills.aria_list": "List of technical skills",
  "skills.aria_card": "Skills card:",
  "skills.aria_techs": "Technologies",

  // Projects
  "projects.heading": "Featured Projects",
  "projects.view_all": "View all projects",
  "projects.view_all_aria": "View all projects on GitHub",
  "projects.aria_list": "List of projects",
  "projects.aria_categories": "Project categories",
  "projects.aria_techs": "Technologies used",
  "projects.see_demo": "See Demo",
  "projects.code": "Code",
  "projects.see_demo_aria": "See demo of the project",
  "projects.code_aria": "View source code on GitHub",
  "projects.0.title": "E-commerce onlygirlsccs",
  "projects.0.subtitle": "Web app",
  "projects.0.category": "Product management",
  "projects.0.description":
    "I work as a delivery driver for an online store in Caracas, Venezuela. I also helped build a small system so our customers can browse our catalog. This allows us to stop relying on WhatsApp and offer other options.",
  "projects.0.status": "Active",
  "projects.1.title": "AstroTurismo",
  "projects.1.subtitle": "Landing Page",
  "projects.1.category": "Tourism",
  "projects.1.description":
    "Tourism website for the fictional agency AstroTurismo, which specializes in taking travelers to the darkest skies on the planet (Bortle Class 1 and 2) to observe the Northern Lights, meteor showers, total eclipses, and the Milky Way.",
  "projects.1.status": "Active",
  "projects.2.title": "MecaApp",
  "projects.2.subtitle": "Web app",
  "projects.2.category": "Automotive services",
  "projects.2.description":
    "Application designed for mechanics, offering various plans to facilitate service hiring. Allows clients to explore and hire vehicle maintenance and repair services in a simple way.",
  "projects.2.status": "In development",

  // Education
  "education.heading": "# Academic Education",
  "education.aria_timeline": "Academic education timeline",
  "education.0.title": "Full Stack Programmer",
  "education.0.school": "Social Oplesk",
  "education.0.period": "2024 August - 2025 March",
  "education.0.description":
    "Recently completed a specialization at SocialOplesk to update my technical foundations, which allowed me to make the leap to self-taught learning. I am a developer forged in perseverance, relying on industry references (such as Midudev and MoureDev) to master current technologies through intensive practice and developing my own projects.",
  "education.1.title": "Full Stack Web Developer, Programmer",
  "education.1.school": "4Geeks Academy Venezuela",
  "education.1.period": "2017 November - 2018 March",
  "education.1.description":
    "My journey in software development began in 2017 with Full Stack training at 4Geeks Academy. This program was the catalyst for my career, providing me with a solid foundation in programming logic and allowing me to develop my first comprehensive project. After a necessary break to attend to personal matters.",

  // GitHub Calendar
  "github.heading": "Contributions in the last year",
  "github.total": "total",
  "github.less": "Less",
  "github.more": "More",
  "github.error": "Could not load GitHub calendar data.",
};

export const translations: Record<Lang, Record<keyof typeof es, string>> = {
  es,
  en,
};
