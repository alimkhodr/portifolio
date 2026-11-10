import type { TgCopy } from './types'

export const tgEs: TgCopy = {
  seo: {
    title: 'Portafolio de Proyectos Integradores | Ali Mohamed Khodr',
    description: 'Trabajo de Graduación en Base de Datos en la Fatec São José dos Campos: seis Proyectos Integradores con empresas socias, de 2022 a 2025.'
  },
  hero: {
    badge: 'Trabajo de Graduación en la Fatec SJC',
    title: 'Portafolio de Proyectos Integradores',
    lead: 'Seis semestres, seis empresas socias y seis problemas reales, de páginas en HTML a aplicaciones con ETL, pruebas y CI.',
    viewProjects: 'Ver proyectos',
    facts: [
      { label: 'Carrera', value: 'Tecnología en Base de Datos' },
      { label: 'Institución', value: 'Fatec São José dos Campos, Prof. Jessen Vidal' },
      { label: 'Modalidad', value: 'Portafolio de Aprendizaje de Proyectos Integradores (API)' },
      { label: 'Orientador', value: 'Prof. Giuliano Bertoti' }
    ]
  },
  about: {
    title: { lead: 'Sobre ', accent: 'mí', tail: '.' },
    paragraphs: [
      'Soy desarrollador full stack y cursé **Base de Datos** en la **Fatec São José dos Campos, Prof. Jessen Vidal**. Antes de la universidad, me formé como Técnico en Desarrollo de Sistemas en la **ETEC de São José dos Campos**, donde tuve mi primer contacto con la programación y con las bases de datos.',
      'Comencé la Fatec en Análisis y Desarrollo de Sistemas (ADS), donde participé en los dos primeros Proyectos Integradores, y luego pasé a Base de Datos, donde realicé los demás. Cada semestre trajo una empresa socia, un problema real y un stack distinto. En esos proyectos pasé de páginas estáticas en HTML a aplicaciones con frontend, backend, ETL, pruebas automatizadas e integración continua.',
      'Profesionalmente, soy Ingeniero de Software en **Qeevo Group (antes Quero Educação)**, con Vue.js y Nuxt en el frontend, Ruby, Elixir y Node.js en el backend, PostgreSQL como base de datos principal y servicios de AWS. Antes, en **APTIV** (unidad de Jambeiro), multinacional del sector automotriz, desarrollé aplicaciones en ASP.NET Web Forms (VB.NET y C#), sistemas de escritorio en Windows Forms y rutinas en SQL Server.'
    ],
    skillsTitle: 'Principales conocimientos'
  },
  timeline: {
    title: { lead: 'Proyectos ', accent: 'Integradores', tail: '.' },
    intro: 'Un proyecto por semestre, siempre con un cliente real. Abre los detalles de cada uno para ver el problema, la solución, las tecnologías, mis contribuciones y las habilidades desarrolladas.'
  },
  closing: {
    title: { lead: 'Consideraciones ', accent: 'finales', tail: '.' },
    text: 'Los seis Proyectos Integradores muestran una evolución clara. Empecé construyendo páginas estáticas y pantallas de escritorio, pasé por el modelado relacional con MySQL y llegué a aplicaciones completas, con frontend en Nuxt, backends en Java y Go, bases de datos Oracle y PostgreSQL, Data Warehouses, pipelines de ETL, pruebas automatizadas, CI y requisitos de seguridad y LGPD. En ese camino, también dejé de ser quien aprende el stack para ser quien define la estructura del frontend y los estándares que sigue el equipo.'
  },
  labels: {
    partner: 'Empresa socia',
    team: 'Equipo',
    professors: 'Profesores',
    moreDetails: 'Ver más detalles',
    lessDetails: 'Ver menos',
    area: 'Área de actuación',
    problem: 'Problema',
    solution: 'Solución',
    tech: 'Tecnologías utilizadas',
    contributions: 'Mis contribuciones',
    hardSkills: 'Hard skills',
    softSkills: 'Soft skills',
    links: 'Enlaces',
    levels: {
      teach: 'Sé enseñarlo',
      alone: 'Sé hacerlo solo',
      help: 'Sé hacerlo con ayuda'
    },
    linkKinds: {
      repo: 'Repositorio',
      commits: 'Mis commits',
      commitsFront: 'Mis commits (front)',
      commitsBack: 'Mis commits (back)'
    }
  },
  projects: {
    dispvag: {
      semester: '1.er semestre',
      course: 'ADS',
      partnerNote: '(interno)',
      area: 'La Fatec São José dos Campos es una institución pública de educación superior tecnológica, mantenida por el Centro Paula Souza. En este proyecto, la propia coordinación actuó como cliente, con el objetivo de apoyar a estudiantes y profesionales de tecnología en la búsqueda de oportunidades.',
      problem: 'Los estudiantes tenían dificultad para encontrar vacantes adecuadas a su perfil, principalmente en el área de TI. Las oportunidades estaban dispersas en varias plataformas, sin organización, y no había forma de relacionar las competencias que pide el mercado con los cursos y certificaciones disponibles.',
      solution: 'Sistema web que cataloga vacantes de empleo con énfasis en TI, separadas por área (Front-end, Back-end y Otros), con requisitos, área profesional, beneficios e información de la empresa contratante. El sitio siguió las cinco páginas exigidas por la Fatec: página principal, vacantes de empleo, cursos y certificaciones, métricas y ubicación.',
      tech: [
        { name: 'Python', use: 'lenguaje exigido por la Fatec para el desarrollo del proyecto.' },
        { name: 'HTML5 y CSS3', use: 'estructura y estilos de las páginas del sitio.' },
        { name: 'Bootstrap', use: 'framework usado para que el diseño fuera responsivo y estandarizado.' },
        { name: 'Canva', use: 'creación de los prototipos y de las presentaciones de los sprints.' },
        { name: 'Git y GitHub', use: 'control de versiones y documentación del proyecto.' },
        { name: 'Discord', use: 'comunicación del equipo y reuniones de sprint.' }
      ],
      contributions: 'Primer proyecto real en equipo y primer contacto con Scrum. Como parte del Scrum Team, desarrollé las páginas en HTML, CSS y Bootstrap, en especial los listados de vacantes por área y las páginas de detalle de la vacante y de la empresa, cuidando la responsividad y el estándar visual entre las páginas.',
      contributionItems: [
        { title: 'Requisitos y documentación', text: 'Participé en el levantamiento de requisitos con el cliente y en la documentación exigida en la asignatura: wireframes, Design Thinking y Balanced Scorecard.' }
      ],
      commitsNote: 'Los commits se hicieron desde la cuenta compartida del equipo (TechForce-ADS), por eso no hay historial individual en el repositorio.',
      hardSkills: [
        { name: 'HTML y CSS', level: 'alone' },
        { name: 'Bootstrap', level: 'alone' },
        { name: 'Python', level: 'help' },
        { name: 'Git y GitHub', level: 'help' },
        { name: 'Scrum', level: 'help' }
      ],
      softSkills: [
        { name: 'Trabajo en equipo', where: 'Primer proyecto con siete integrantes. Aprendí a repartir las páginas entre los miembros y a acordar un estándar visual para que el sitio pareciera hecho por una sola persona.' },
        { name: 'Comunicación', where: 'Participé en las reuniones con el cliente y en las presentaciones de fin de sprint, explicando lo que se había desarrollado y escuchando los ajustes pedidos.' },
        { name: 'Proactividad', where: 'Como Git y Bootstrap eran nuevos para la mayor parte del equipo, estudié por mi cuenta y ayudé a mis compañeros a resolver conflictos y a organizar el diseño.' }
      ]
    },
    trackcash: {
      semester: '2.º semestre',
      course: 'ADS',
      area: 'TrackCash es una solución B2B de conciliación de ventas y pagos. La plataforma reúne en un solo panel los datos de e-commerces, marketplaces y tiendas físicas, dando a las empresas una visión clara y estratégica de sus finanzas.',
      problem: 'Los clientes de TrackCash (comerciantes online y físicos) usaban varios canales de venta y necesitaban autorizar el acceso a los datos de cada uno para que se hiciera la conciliación financiera. Sin una interfaz dedicada, ese proceso de autorización era lento, descentralizado y propenso a errores.',
      solution: 'Aplicación de escritorio en la que el comerciante registra y configura sus canales de venta y medios de pago, informando las credenciales (correo y contraseña o tokens) que permiten a TrackCash acceder a los datos. Incluye registro de canales, búsqueda con filtros, configuración por parte del cliente, y edición y eliminación restringidas al administrador.',
      tech: [
        { name: 'Java', use: 'lenguaje usado en el desarrollo de la aplicación de escritorio (requisito de la Fatec).' },
        { name: 'MySQL', use: 'SGBD relacional usado para almacenar usuarios, administradores y canales.' },
        { name: 'NetBeans', use: 'IDE utilizado, incluido el GUI Builder para construir las pantallas.' },
        { name: 'Canva', use: 'prototipado de las pantallas y creación de las presentaciones.' },
        { name: 'Git y GitHub', use: 'control de versiones y documentación del proyecto.' }
      ],
      contributions: 'Fui responsable del prototipado y la construcción de las pantallas de la aplicación, lo que me hizo avanzar mucho en UX/UI. También elaboré el modelo de datos y creé la base MySQL, mi primer contacto con el modelado relacional en un proyecto real.',
      contributionItems: [
        { title: 'Interfaz gráfica de la aplicación', text: 'Construí toda la interfaz con el GUI Builder de NetBeans: campos de texto, combos, botones, paneles y logos, con colores estandarizados y coherencia visual entre las pantallas.' },
        { title: 'Mostrar y ocultar contraseña', text: 'Funcionalidad que alterna la visibilidad de la contraseña para que el usuario revise lo que está escribiendo.' },
        { title: 'Modelo de datos', text: 'Modelo creado antes de la base de datos, que define las entidades de administrador, usuario y canales y las relaciones entre ellas.' },
        { title: 'Base de datos MySQL', text: 'Script de creación de las tablas de administrador, canales, canales del administrador y usuarios, con sus claves primarias y foráneas.' }
      ],
      commitsNote: 'Los commits se hicieron desde la cuenta compartida del equipo (TechForce-ADS), por eso no hay historial individual en el repositorio.',
      hardSkills: [
        { name: 'Java (Swing y NetBeans)', level: 'alone' },
        { name: 'Modelado de bases de datos', level: 'alone' },
        { name: 'MySQL', level: 'help' },
        { name: 'UX/UI y prototipado', level: 'alone' },
        { name: 'Scrum', level: 'alone' }
      ],
      softSkills: [
        { name: 'Organización y planificación', where: 'Dividí la construcción de las pantallas por sprint para que el CRUD completo, con la página de administrador, estuviera listo en el Sprint 4.' },
        { name: 'Comunicación asertiva', where: 'Acordé con el cliente el flujo de registro y configuración de los canales antes de construir las pantallas, evitando retrabajo.' },
        { name: 'Resiliencia', where: 'Tras el feedback de un sprint, tuve que rehacer las tablas de administrador y usuario y ajustar las pantallas que dependían de ellas.' }
      ]
    },
    drconvert: {
      semester: '3.er semestre',
      course: 'Base de Datos',
      area: 'Dom Rock actúa en el sector de Tecnología de la Información con soluciones de Inteligencia Artificial y análisis avanzado de datos. Su plataforma integra y procesa grandes volúmenes de datos para generar insights estratégicos, automatizar procesos y apoyar decisiones, con clientes del sector privado y público.',
      problem: 'Dom Rock procesa datos en una pipeline de varias etapas (Landing Zone, Bronze y Silver). Para que la plataforma funcione, las fuentes de datos de cada cliente deben configurarse manualmente, una tarea que consume mucho tiempo y genera dependencia de técnicos especializados.',
      solution: 'Plataforma web de mapeo y conversión de datos en la que el propio usuario configura cada etapa: sube el archivo .csv, ajusta los campos y tipos detectados, define el campo identificador, clasifica los campos y crea reglas de conversión "de → a". Tiene un dashboard administrativo y genera un .yaml con el esquema de los datos.',
      tech: [
        { name: 'Next.js y React', use: 'framework y biblioteca usados en el desarrollo del frontend.' },
        { name: 'TypeScript', use: 'tipado estático en el frontend.' },
        { name: 'Tailwind CSS', use: 'estilos utilitarios de las pantallas.' },
        { name: 'Java y Spring Boot', use: 'desarrollo de la API REST en el backend.' },
        { name: 'MySQL', use: 'SGBD relacional usado para almacenar proyectos, archivos, campos y clasificaciones.' },
        { name: 'Figma', use: 'prototipado de las pantallas en alta fidelidad.' }
      ],
      contributions: 'Trabajé en el frontend en Next.js, principalmente en la página del proyecto, donde el usuario sigue y configura las etapas del mapeo. Fue mi primer contacto con React y con los conceptos de pipeline de datos.',
      contributionItems: [
        { title: 'Página del proyecto y navegación entre etapas', text: 'Creé la página del proyecto (project/page.tsx) con el control de navegación entre las etapas Landing Zone, Bronze y Silver (page-control.tsx) y las tarjetas de los campos mapeados (field-card.tsx). Después refactoricé esa página para acompañar las nuevas rutas y componentes de la aplicación.' },
        { title: 'Opción "el archivo tiene encabezado" en la carga', text: 'En el formulario de carga (upload-form.tsx), agregué la opción de indicar si el CSV tiene fila de encabezado y pasé a enviar esa información al servicio de carga, para que el backend identifique correctamente los nombres de los campos.' }
      ],
      hardSkills: [
        { name: 'React y Next.js', level: 'help' },
        { name: 'TypeScript', level: 'help' },
        { name: 'Tailwind CSS', level: 'alone' },
        { name: 'Consumo de API REST', level: 'alone' },
        { name: 'Pipeline de datos (Landing Zone, Bronze y Silver)', level: 'help' }
      ],
      softSkills: [
        { name: 'Adaptabilidad', where: 'Entré a un equipo nuevo y a un stack que aún no conocía (React y Next.js), y tuve que entregar funcionalidades desde el primer sprint.' },
        { name: 'Trabajo en equipo', where: 'Integré mis pantallas con las rutas que mis compañeros creaban en el backend, acordando con ellos los formatos de solicitud y respuesta.' },
        { name: 'Aprendizaje continuo', where: 'Estudié React y los conceptos de pipeline de datos en paralelo a los sprints para seguir el ritmo del equipo.' }
      ]
    },
    geotrack: {
      semester: '4.º semestre',
      course: 'Base de Datos',
      area: 'ITO1 desarrolla soluciones y gestiona infraestructura de TI, incluido el soporte técnico (Service Desk y Field Services) y el suministro de equipos a gran escala. También aplica IoT, Smart Cities, Industria 4.0, IA y Big Data para apoyar la transformación digital de organizaciones públicas y privadas.',
      problem: 'La empresa necesitaba almacenar y consultar en tiempo real los datos de geolocalización que generan continuamente dispositivos IoT, como wearables, tags y smartphones, usados en el monitoreo de personas y activos. El volumen de datos exigía un sistema escalable, confiable y seguro, que no dependiera de técnicos especializados.',
      solution: 'Sistema web de rastreo en mapa. Muestra los puntos de parada de cada dispositivo, filtra por persona, dispositivo y período (con atajos como "Hoy" y "Últimos 3 días"), crea áreas geográficas para saber quién pasó por ellas, traza las rutas recorridas y genera reportes, con inicio de sesión y modo oscuro.',
      tech: [
        { name: 'Vue.js 3 y Vite', use: 'framework y herramienta de build usados en el frontend.' },
        { name: 'Vuetify', use: 'biblioteca de componentes de UI usada en las pantallas.' },
        { name: 'Google Maps API', use: 'renderizado del mapa, marcadores, áreas, rutas y Street View.' },
        { name: 'Java y Spring Boot', use: 'desarrollo de la API REST en el backend.' },
        { name: 'Oracle', use: 'base de datos que almacena las geolocalizaciones de los dispositivos.' },
        { name: 'Docker', use: 'contenerización de los servicios de la aplicación.' }
      ],
      contributions: 'Entré al equipo iNineBD en este semestre y fui uno de los principales desarrolladores del frontend, desde la estructura inicial del proyecto hasta las funcionalidades del mapa. Fueron 26 commits en el repositorio del frontend.',
      contributionItems: [
        { title: 'Estructura del proyecto y configuración del mapa', text: 'Armé la estructura del frontend con Vue 3, Vite y Vuetify, configuré Google Maps (incluidos los tipos google.maps.d.ts) y creé el diseño con menú lateral (Sidebar.vue), adaptado a pantallas más pequeñas.' },
        { title: 'Marcadores de usuarios y filtros de búsqueda', text: 'Creé el componente de marcadores con avatar, que dibuja en el mapa los datos que vienen de la base de datos. Implementé los filtros por usuario, dispositivo y período: el botón de consulta solo se habilita con todos los campos completos, y el botón "Limpiar" permite cambiar de usuario. También participé en los filtros rápidos y en la selección de múltiples usuarios, y corregí la inicialización del mapa y los puntos de parada.' },
        { title: 'Áreas geográficas', text: 'Trabajé en el filtro de áreas geográficas, actualizando el listado después de guardar o eliminar un área y sincronizando el modal cuando el usuario cambia de área. Agregué loading en los botones, snackbar de error y la limpieza de los marcadores.' },
        { title: 'Rutas y Street View', text: 'Creé el componente GeoRoutesFilter, que busca y traza en el mapa las rutas recorridas por un usuario, y ajusté el posicionamiento de la ubicación en Street View.' }
      ],
      hardSkills: [
        { name: 'Vue.js 3', level: 'alone' },
        { name: 'Vuetify', level: 'alone' },
        { name: 'Google Maps API', level: 'alone' },
        { name: 'Datos geoespaciales (puntos, áreas y rutas)', level: 'help' },
        { name: 'Git flow con Pull Requests', level: 'alone' }
      ],
      softSkills: [
        { name: 'Adaptabilidad', where: 'Entré a un equipo que ya llevaba tres semestres trabajando junto y, desde el primer sprint, asumí la reestructuración del frontend.' },
        { name: 'Proactividad', where: 'Corregí problemas en la inicialización del mapa y en los puntos de parada que estaban bloqueando las tareas de otros compañeros.' },
        { name: 'Colaboración', where: 'Trabajé junto al equipo de backend para definir cómo llegarían al mapa los datos de geolocalización de Oracle, ajustando consultas y filtros.' }
      ]
    },
    track: {
      semester: '5.º semestre',
      course: 'Base de Datos',
      area: 'Youtan desarrolla soluciones digitales a medida: sistemas, software web y aplicaciones móviles híbridas, Android e iOS. Sus proyectos buscan mejorar procesos, aumentar la productividad y dar más autonomía a los clientes, priorizando la experiencia y la usabilidad.',
      problem: 'Youtan gestionaba sus proyectos en herramientas como Taiga y Jira, pero no tenía un panel centralizado con indicadores de flujo, como tiempo promedio de finalización, volumen de tareas por período y distribución entre colaboradores. Además, Taiga no ofrecía distintos niveles de acceso para operadores, gerentes y administradores.',
      solution: 'Plataforma integrada con Taiga y Jira: un ETL en Python alimenta un Data Warehouse en PostgreSQL, una API en Go expone los indicadores y un frontend en Nuxt los presenta en dashboards (tarjetas creadas, iniciadas y concluidas, tiempo promedio y retrabajo). Cada perfil (Operador, Gerente y Administrador) ve solo su alcance.',
      tech: [
        { name: 'Nuxt 3, Vue.js y TypeScript', use: 'desarrollo del frontend.' },
        { name: 'Nuxt UI y Tailwind CSS', use: 'componentes y estilos de las pantallas.' },
        { name: 'Pinia', use: 'gestión de estado, con persistencia de la sesión del usuario.' },
        { name: 'Chart.js', use: 'construcción de los gráficos de los dashboards.' },
        { name: 'Vitest', use: 'pruebas unitarias de los componentes del frontend.' },
        { name: 'Go', use: 'desarrollo de la API REST en el backend.' },
        { name: 'PostgreSQL', use: 'base de datos y Data Warehouse con los indicadores.' },
        { name: 'SQLite', use: 'base en memoria usada en las pruebas de integración del backend.' },
        { name: 'Python', use: 'ETL que extrae los datos de Taiga y Jira y carga el Data Warehouse.' },
        { name: 'GitHub Actions y SonarQube', use: 'integración continua con lint, pruebas y análisis de calidad.' }
      ],
      contributions: 'Fui el principal responsable del frontend, con 81 commits en el repositorio: creé el proyecto, definí la estructura y los estándares que siguió el equipo y desarrollé los dashboards, la autenticación y la gestión de usuarios. En el backend, escribí las pruebas de integración del login.',
      contributionItems: [
        { title: 'Configuración inicial, calidad y CI', text: 'Creé el proyecto en Nuxt 3 con Nuxt UI, el header y el footer con alternancia de tema y los componentes base. Configuré ESLint y el workflow de CI para ejecutar lint y pruebas antes del build, y escribí pruebas unitarias con Vitest para los componentes de gráficos.' },
        { title: 'Dashboards y métricas', text: 'Desarrollé los gráficos con Chart.js (dona, barras verticales y horizontales) y las tarjetas de estadísticas. Creé los filtros de proyecto, de plataforma (Taiga o Jira) y de período (v-calendar y date-fns), consumiendo las estadísticas del backend con skeleton loading y manejo de errores. El dashboard evolucionó de una pantalla de listado de proyectos a un panel único con filtros.' },
        { title: 'Primer acceso, definir contraseña e inicio de sesión', text: 'Implementé el flujo de primer acceso, con validación del correo y envío de token, la pantalla para definir la contraseña y el inicio de sesión. La sesión se controla con un middleware de autenticación, un store del usuario en Pinia con estado persistido y un interceptor de Axios que maneja las respuestas 401.' },
        { title: 'Gestión de usuarios y perfiles', text: 'Creé la página de usuarios, accesible solo para administradores (middleware admin), con listado paginado y cambio de perfil mediante los composables useUsers, useRoles y useUpdateRole.' },
        { title: 'Pruebas de integración en el backend (Go)', text: 'Escribí las pruebas de integración del controller de login en Go, usando SQLite en memoria para validar la integración entre la API y la base de datos sin depender de PostgreSQL.' }
      ],
      hardSkills: [
        { name: 'Nuxt 3 y Vue.js', level: 'teach' },
        { name: 'Nuxt UI y Tailwind CSS', level: 'teach' },
        { name: 'Pinia y autenticación en el frontend', level: 'alone' },
        { name: 'Visualización de datos con Chart.js', level: 'alone' },
        { name: 'Pruebas con Vitest y pruebas de integración en Go', level: 'alone' },
        { name: 'CI con GitHub Actions', level: 'help' },
        { name: 'Modelado de Data Warehouse', level: 'help' }
      ],
      softSkills: [
        { name: 'Liderazgo técnico', where: 'Como responsable del frontend, definí la estructura de carpetas, los componentes base y los estándares de lint que el resto del equipo pasó a seguir.' },
        { name: 'Proactividad', where: 'Cuando el cliente pidió un flujo más directo, propuse e hice la refactorización del dashboard, cambiando la pantalla de listado de proyectos por un panel único con filtros.' },
        { name: 'Organización', where: 'Vinculé los commits a las tareas de Jira (TRK-94, TRK-135 y otras), lo que facilitó la trazabilidad de las entregas en cada sprint.' },
        { name: 'Comunicación', where: 'Acordé con el equipo de backend los contratos de las rutas de estadísticas y de usuarios antes de implementar las pantallas.' }
      ]
    },
    visiondata: {
      semester: '6.º semestre',
      course: 'Base de Datos',
      area: 'Pro4tech está especializada en transformación digital. Usa tecnologías como inteligencia artificial, análisis de datos, IoT y computación en la nube para crear estrategias personalizadas que aumentan la eficiencia, mejoran la experiencia del cliente e impulsan el crecimiento de los negocios.',
      problem: 'Pro4tech tenía un gran volumen de tickets de soporte antiguos y desorganizados. Sin estructura, el equipo perdía tiempo buscando soluciones a problemas ya resueltos, y la empresa no lograba extraer insights estratégicos de ese historial.',
      solution: 'Transforma los tickets en una base de conocimiento consultable, con búsqueda vectorial de tickets similares, dashboards de métricas, predicciones por producto o cliente con Machine Learning y exportación de insights generados por IA. Cumple con la LGPD, con anonimización, logs de auditoría, respaldos, control de consentimiento y perfiles de acceso.',
      tech: [
        { name: 'Nuxt, Vue.js y TypeScript', use: 'desarrollo del frontend, incluidas las rutas de servidor de Nuxt.' },
        { name: 'nuxt-auth-utils', use: 'gestión de sesión y autenticación, incluido el inicio de sesión con cuenta Microsoft.' },
        { name: 'Chart.js', use: 'gráficos de los dashboards.' },
        { name: 'Go', use: 'desarrollo de la API REST en el backend.' },
        { name: 'Elasticsearch', use: 'indexación y búsqueda vectorial de los tickets.' },
        { name: 'Oracle', use: 'base de datos relacional y Data Warehouse del proyecto.' },
        { name: 'Python', use: 'ETL y modelos de Machine Learning para las predicciones.' },
        { name: 'Jira', use: 'gestión de los sprints y de las tareas del equipo.' }
      ],
      contributions: 'Fui responsable de la autenticación y de la gestión de usuarios en el frontend, que sustentan los requisitos de seguridad y de LGPD del proyecto.',
      contributionItems: [
        { title: 'Flujo de autenticación', text: 'Configuré el módulo nuxt-auth-utils e implementé inicio de sesión, cierre de sesión y sesión del usuario, incluidas las rutas de servidor de Nuxt (login, logout y user), el composable useAuth y los middlewares authenticated y admin.' },
        { title: 'Inicio de sesión con cuenta Microsoft', text: 'Implementé el inicio de sesión con cuenta Microsoft: la ruta de servidor login/microsoft, el botón en la pantalla de login y una página de retorno que da feedback al usuario después de la autenticación.' },
        { title: 'Gestión de usuarios y perfil', text: 'Creé la página de gestión de usuarios (listado, edición y eliminación, con modales de creación y eliminación) y la página de perfil, donde el usuario cambia la contraseña o elimina su propia cuenta, cumpliendo el derecho de eliminación de datos previsto en la LGPD.' }
      ],
      hardSkills: [
        { name: 'Nuxt (rutas de servidor y middlewares)', level: 'teach' },
        { name: 'Autenticación y sesión (nuxt-auth-utils y OAuth Microsoft)', level: 'alone' },
        { name: 'Control de acceso por perfil (RBAC)', level: 'alone' },
        { name: 'LGPD aplicada a sistemas', level: 'help' },
        { name: 'Elasticsearch', level: 'help' }
      ],
      softSkills: [
        { name: 'Sentido de responsabilidad', where: 'Asumí la parte de seguridad y acceso, que era crítica para cumplir los requisitos de LGPD, y me aseguré de que las páginas restringidas quedaran protegidas por los middlewares.' },
        { name: 'Gestión del tiempo', where: 'Concilié el trabajo de tiempo completo con las entregas de los sprints, concentrando las tareas más grandes (login Microsoft y gestión de usuarios) en los períodos con más disponibilidad.' },
        { name: 'Comunicación', where: 'Acordé con los equipos de backend y de ML los contratos de autenticación y los perfiles de acceso para que cada pantalla mostrara solo lo que el usuario podía ver.' }
      ]
    }
  }
}
