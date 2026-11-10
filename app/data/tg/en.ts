import type { TgCopy } from './types'

export const tgEn: TgCopy = {
  seo: {
    title: 'Integrated Projects Portfolio | Ali Mohamed Khodr',
    description: 'Graduation project in Database Technology at Fatec São José dos Campos: six Integrated Projects with partner companies, from 2022 to 2025.'
  },
  hero: {
    badge: 'Graduation project at Fatec SJC',
    title: 'Integrated Projects Portfolio',
    lead: 'Six semesters, six partner companies and six real problems, from HTML pages to applications with ETL, tests and CI.',
    viewProjects: 'View projects',
    facts: [
      { label: 'Course', value: 'Database Technology (Technologist degree)' },
      { label: 'Institution', value: 'Fatec São José dos Campos, Prof. Jessen Vidal' },
      { label: 'Format', value: 'Integrated Projects Learning Portfolio (API)' },
      { label: 'Advisor', value: 'Prof. Giuliano Bertoti' }
    ]
  },
  about: {
    title: { lead: 'About ', accent: 'me', tail: '.' },
    paragraphs: [
      'I am a full stack developer and studied **Database Technology** at **Fatec São José dos Campos, Prof. Jessen Vidal**. Before college, I earned a technical degree in Systems Development at **ETEC de São José dos Campos**, where I first got into programming and databases.',
      'I started at Fatec in Systems Analysis and Development (ADS), where I took part in the first two Integrated Projects, and then moved to Database Technology, where I did the rest. Each semester brought a partner company, a real problem and a different stack. These projects are where I went from static HTML pages to applications with a front end, a back end, ETL, automated tests and continuous integration.',
      'Professionally, I am a Software Engineer at **Qeevo Group (formerly Quero Educação)**, working with Vue.js and Nuxt on the front end, Ruby, Elixir and Node.js on the back end, PostgreSQL as the main database and AWS services. Before that, at **APTIV** (Jambeiro plant), an automotive multinational, I built ASP.NET Web Forms applications (VB.NET and C#), Windows Forms desktop systems and SQL Server routines.'
    ],
    skillsTitle: 'Key skills'
  },
  timeline: {
    title: { lead: 'Integrated ', accent: 'Projects', tail: '.' },
    intro: 'One project per semester, always with a real client. Open the details of each one to see the problem, the solution, the technologies, my contributions and the skills I developed.'
  },
  closing: {
    title: { lead: 'Final ', accent: 'thoughts', tail: '.' },
    text: 'The six Integrated Projects show a clear progression. I started by building static pages and desktop screens, moved on to relational modeling with MySQL and ended up with complete applications: Nuxt front ends, Java and Go back ends, Oracle and PostgreSQL databases, Data Warehouses, ETL pipelines, automated tests, CI, and security and LGPD requirements. Along the way, I also went from learning the stack to being the person who defines the front-end structure and the standards the team follows.'
  },
  labels: {
    partner: 'Partner company',
    team: 'Team',
    professors: 'Professors',
    moreDetails: 'Show more details',
    lessDetails: 'Show less',
    area: 'Business area',
    problem: 'Problem',
    solution: 'Solution',
    tech: 'Technologies used',
    contributions: 'My contributions',
    hardSkills: 'Hard skills',
    softSkills: 'Soft skills',
    links: 'Links',
    levels: {
      teach: 'Can teach it',
      alone: 'Can do it alone',
      help: 'Can do it with help'
    },
    linkKinds: {
      repo: 'Repository',
      commits: 'My commits',
      commitsFront: 'My commits (front end)',
      commitsBack: 'My commits (back end)'
    }
  },
  projects: {
    dispvag: {
      semester: '1st semester',
      course: 'ADS',
      partnerNote: '(internal)',
      area: 'Fatec São José dos Campos is a public institution of technological higher education, run by Centro Paula Souza. In this project, the program coordination itself acted as the client, aiming to help students and technology professionals find job opportunities.',
      problem: 'Students struggled to find openings that matched their profile, especially in IT. Opportunities were scattered across many platforms with no organization, and there was no way to connect the skills the market asked for with the courses and certifications available.',
      solution: 'A web system that catalogs job openings with an emphasis on IT, split by area (Front-end, Back-end and Others), with requirements, professional area, benefits and information about the hiring company. The site followed the five pages required by Fatec: home, job openings, courses and certifications, metrics and location.',
      tech: [
        { name: 'Python', use: 'language required by Fatec for the project.' },
        { name: 'HTML5 and CSS3', use: 'structure and styling of the site pages.' },
        { name: 'Bootstrap', use: 'framework used to make the layout responsive and consistent.' },
        { name: 'Canva', use: 'prototypes and sprint presentations.' },
        { name: 'Git and GitHub', use: 'version control and project documentation.' },
        { name: 'Discord', use: 'team communication and sprint meetings.' }
      ],
      contributions: 'My first real team project and my first contact with Scrum. As part of the Scrum Team, I built the pages in HTML, CSS and Bootstrap, especially the job listings by area and the job and company detail pages, taking care of responsiveness and visual consistency across pages.',
      contributionItems: [
        { title: 'Requirements and documentation', text: 'I took part in gathering requirements with the client and in the documentation required by the course: wireframes, Design Thinking and Balanced Scorecard.' }
      ],
      commitsNote: 'Commits were made through the team\'s shared account (TechForce-ADS), so there is no individual history in the repository.',
      hardSkills: [
        { name: 'HTML and CSS', level: 'alone' },
        { name: 'Bootstrap', level: 'alone' },
        { name: 'Python', level: 'help' },
        { name: 'Git and GitHub', level: 'help' },
        { name: 'Scrum', level: 'help' }
      ],
      softSkills: [
        { name: 'Teamwork', where: 'My first project with seven members. I learned to split the pages among the team and to agree on a visual standard so the site looked like it was made by one person.' },
        { name: 'Communication', where: 'I joined the client meetings and the end-of-sprint presentations, explaining what had been built and listening to the adjustments requested.' },
        { name: 'Proactivity', where: 'Since Git and Bootstrap were new to most of the team, I studied on my own and helped teammates resolve conflicts and organize the layout.' }
      ]
    },
    trackcash: {
      semester: '2nd semester',
      course: 'ADS',
      area: 'TrackCash is a B2B solution for reconciling sales and payments. The platform brings the data from e-commerces, marketplaces and physical stores into a single dashboard, giving companies a clear, strategic view of their finances.',
      problem: 'TrackCash customers (online and physical retailers) used several sales channels and had to authorize access to the data of each one so that financial reconciliation could be done. Without a dedicated interface, this authorization process was slow, decentralized and error-prone.',
      solution: 'A desktop application where the retailer registers and configures their sales channels and payment methods, entering the credentials (email and password or tokens) that let TrackCash access the data. It includes channel registration, search with filters, configuration by the customer, and editing and deletion restricted to the administrator.',
      tech: [
        { name: 'Java', use: 'language used to build the desktop application (a Fatec requirement).' },
        { name: 'MySQL', use: 'relational DBMS used to store users, administrators and channels.' },
        { name: 'NetBeans', use: 'IDE used, including the GUI Builder to build the screens.' },
        { name: 'Canva', use: 'screen prototyping and presentations.' },
        { name: 'Git and GitHub', use: 'version control and project documentation.' }
      ],
      contributions: 'I was responsible for prototyping and building the application screens, which helped me grow a lot in UX/UI. I also designed the data model and created the MySQL database, my first contact with relational modeling in a real project.',
      contributionItems: [
        { title: 'Application graphical interface', text: 'I built the whole interface with the NetBeans GUI Builder: text fields, combo boxes, buttons, panels and logos, with standardized colors and visual consistency across screens.' },
        { title: 'Show and hide password', text: 'A feature that toggles password visibility so users can check what they are typing.' },
        { title: 'Data model', text: 'A model created before the database, defining the administrator, user and channel entities and the relationships between them.' },
        { title: 'MySQL database', text: 'Creation script for the administrator, channels, administrator channels and users tables, with their primary and foreign keys.' }
      ],
      commitsNote: 'Commits were made through the team\'s shared account (TechForce-ADS), so there is no individual history in the repository.',
      hardSkills: [
        { name: 'Java (Swing and NetBeans)', level: 'alone' },
        { name: 'Database modeling', level: 'alone' },
        { name: 'MySQL', level: 'help' },
        { name: 'UX/UI and prototyping', level: 'alone' },
        { name: 'Scrum', level: 'alone' }
      ],
      softSkills: [
        { name: 'Organization and planning', where: 'I split the screen building by sprint so the full CRUD, including the administrator page, was ready by Sprint 4.' },
        { name: 'Assertive communication', where: 'I agreed with the client on the channel registration and configuration flow before building the screens, avoiding rework.' },
        { name: 'Resilience', where: 'After a sprint\'s feedback, I had to redo the administrator and user tables and adjust the screens that depended on them.' }
      ]
    },
    drconvert: {
      semester: '3rd semester',
      course: 'Database Technology',
      area: 'Dom Rock works in the Information Technology sector with Artificial Intelligence and advanced data analytics solutions. Its platform integrates and processes large volumes of data to generate strategic insights, automate processes and support decisions, with clients in the private and public sectors.',
      problem: 'Dom Rock processes data in a multi-stage pipeline (Landing Zone, Bronze and Silver). For the platform to work, each client\'s data sources have to be configured manually, a task that takes a lot of time and creates a dependency on specialized technicians.',
      solution: 'A web platform for data mapping and conversion where users configure each stage themselves: they upload the .csv file, adjust the detected fields and types, define the identifier field, classify the fields and create "from → to" conversion rules. It has an admin dashboard and generates a .yaml file with the data schema.',
      tech: [
        { name: 'Next.js and React', use: 'framework and library used to build the front end.' },
        { name: 'TypeScript', use: 'static typing on the front end.' },
        { name: 'Tailwind CSS', use: 'utility-first styling of the screens.' },
        { name: 'Java and Spring Boot', use: 'building the REST API on the back end.' },
        { name: 'MySQL', use: 'relational DBMS used to store projects, files, fields and classifications.' },
        { name: 'Figma', use: 'high-fidelity screen prototyping.' }
      ],
      contributions: 'I worked on the Next.js front end, mainly on the project page, where users track and configure the mapping stages. It was my first contact with React and with data pipeline concepts.',
      contributionItems: [
        { title: 'Project page and navigation between stages', text: 'I created the project page (project/page.tsx) with the navigation control between the Landing Zone, Bronze and Silver stages (page-control.tsx) and the cards for the mapped fields (field-card.tsx). I later refactored this page to follow the application\'s new routes and components.' },
        { title: '"File has header" option on upload', text: 'In the upload form (upload-form.tsx), I added the option to say whether the CSV has a header row and started sending that information to the upload service, so the back end correctly identifies the field names.' }
      ],
      hardSkills: [
        { name: 'React and Next.js', level: 'help' },
        { name: 'TypeScript', level: 'help' },
        { name: 'Tailwind CSS', level: 'alone' },
        { name: 'REST API consumption', level: 'alone' },
        { name: 'Data pipeline (Landing Zone, Bronze and Silver)', level: 'help' }
      ],
      softSkills: [
        { name: 'Adaptability', where: 'I joined a new team and a stack I did not know yet (React and Next.js), and had to deliver features already in the first sprint.' },
        { name: 'Teamwork', where: 'I integrated my screens with the routes my teammates were building on the back end, agreeing with them on request and response formats.' },
        { name: 'Continuous learning', where: 'I studied React and data pipeline concepts alongside the sprints to keep up with the team\'s pace.' }
      ]
    },
    geotrack: {
      semester: '4th semester',
      course: 'Database Technology',
      area: 'ITO1 develops solutions and manages IT infrastructure, including technical support (Service Desk and Field Services) and large-scale equipment supply. It also applies IoT, Smart Cities, Industry 4.0, AI and Big Data to support the digital transformation of public and private organizations.',
      problem: 'The company needed to store and query in real time the geolocation data continuously generated by IoT devices, such as wearables, tags and smartphones, used to monitor people and assets. The data volume called for a scalable, reliable and secure system that did not depend on specialized technicians.',
      solution: 'A web tracking system on a map. It shows each device\'s stop points, filters by person, device and period (with shortcuts like "Today" and "Last 3 days"), creates geographic areas to find out who passed through them, draws the routes taken and generates reports, with login and dark mode.',
      tech: [
        { name: 'Vue.js 3 and Vite', use: 'framework and build tool used on the front end.' },
        { name: 'Vuetify', use: 'UI component library used in the screens.' },
        { name: 'Google Maps API', use: 'rendering the map, markers, areas, routes and Street View.' },
        { name: 'Java and Spring Boot', use: 'building the REST API on the back end.' },
        { name: 'Oracle', use: 'database that stores the devices\' geolocations.' },
        { name: 'Docker', use: 'containerization of the application services.' }
      ],
      contributions: 'I joined the iNineBD team this semester and was one of the main front-end developers, from the initial project structure to the map features. I made 26 commits in the front-end repository.',
      contributionItems: [
        { title: 'Project structure and map setup', text: 'I set up the front-end structure with Vue 3, Vite and Vuetify, configured Google Maps (including the google.maps.d.ts typings) and created the layout with a side menu (Sidebar.vue), adapted for smaller screens.' },
        { title: 'User markers and search filters', text: 'I created the marker component with avatars, which plots on the map the data coming from the database. I implemented the filters by user, device and period: the query button is only enabled once all fields are filled in, and the "Clear" button lets the user switch to another user. I also took part in the quick filters and the multiple-user selection, and fixed the map initialization and the stop points.' },
        { title: 'Geographic areas', text: 'I worked on the geographic areas filter, refreshing the list after an area is saved or deleted and syncing the modal when the user switches areas. I added loading states on buttons, an error snackbar and marker cleanup.' },
        { title: 'Routes and Street View', text: 'I created the GeoRoutesFilter component, which fetches and draws on the map the routes a user has traveled, and adjusted the location positioning in Street View.' }
      ],
      hardSkills: [
        { name: 'Vue.js 3', level: 'alone' },
        { name: 'Vuetify', level: 'alone' },
        { name: 'Google Maps API', level: 'alone' },
        { name: 'Geospatial data (points, areas and routes)', level: 'help' },
        { name: 'Git flow with Pull Requests', level: 'alone' }
      ],
      softSkills: [
        { name: 'Adaptability', where: 'I joined a team that had already worked together for three semesters and, right in the first sprint, took over the restructuring of the front end.' },
        { name: 'Proactivity', where: 'I fixed problems in the map initialization and the stop points that were blocking my teammates\' tasks.' },
        { name: 'Collaboration', where: 'I worked with the back-end team to define how the geolocation data from Oracle would reach the map, adjusting queries and filters.' }
      ]
    },
    track: {
      semester: '5th semester',
      course: 'Database Technology',
      area: 'Youtan builds custom digital solutions: systems, web software and hybrid, Android and iOS mobile apps. Its projects aim to improve processes, increase productivity and give clients more autonomy, prioritizing experience and usability.',
      problem: 'Youtan managed its projects in tools such as Taiga and Jira, but had no centralized dashboard with flow indicators, such as average completion time, task volume per period and distribution among team members. In addition, Taiga did not offer different access levels for operators, managers and administrators.',
      solution: 'A platform integrated with Taiga and Jira: a Python ETL feeds a PostgreSQL Data Warehouse, a Go API exposes the indicators and a Nuxt front end presents them in dashboards (cards created, started and completed, average time and rework). Each role (Operator, Manager and Administrator) sees only its own scope.',
      tech: [
        { name: 'Nuxt 3, Vue.js and TypeScript', use: 'front-end development.' },
        { name: 'Nuxt UI and Tailwind CSS', use: 'components and styling of the screens.' },
        { name: 'Pinia', use: 'state management, with persistence of the user session.' },
        { name: 'Chart.js', use: 'building the dashboard charts.' },
        { name: 'Vitest', use: 'unit tests for the front-end components.' },
        { name: 'Go', use: 'building the REST API on the back end.' },
        { name: 'PostgreSQL', use: 'database and Data Warehouse with the indicators.' },
        { name: 'SQLite', use: 'in-memory database used in the back end integration tests.' },
        { name: 'Python', use: 'ETL that extracts data from Taiga and Jira and loads the Data Warehouse.' },
        { name: 'GitHub Actions and SonarQube', use: 'continuous integration with lint, tests and quality analysis.' }
      ],
      contributions: 'I was mainly responsible for the front end, with 81 commits in the repository: I created the project, defined the structure and standards the team followed, and built the dashboards, authentication and user management. On the back end, I wrote the login integration tests.',
      contributionItems: [
        { title: 'Initial setup, quality and CI', text: 'I created the Nuxt 3 project with Nuxt UI, the header and footer with theme switching, and the base components. I set up ESLint and the CI workflow to run lint and tests before the build, and wrote Vitest unit tests for the chart components.' },
        { title: 'Dashboards and metrics', text: 'I built the charts with Chart.js (doughnut, vertical and horizontal bars) and the statistics cards. I created the project, platform (Taiga or Jira) and period filters (v-calendar and date-fns), consuming the back end statistics with skeleton loading and error handling. The dashboard evolved from a project listing screen into a single panel with filters.' },
        { title: 'First access, set password and login', text: 'I implemented the first access flow, with email validation and token delivery, the set password screen and the login. The session is handled by an authentication middleware, a Pinia user store with persisted state and an Axios interceptor that handles 401 responses.' },
        { title: 'User and role management', text: 'I created the users page, accessible only to administrators (admin middleware), with a paginated list and role changes through the useUsers, useRoles and useUpdateRole composables.' },
        { title: 'Back end integration tests (Go)', text: 'I wrote the integration tests for the login controller in Go, using in-memory SQLite to validate the integration between the API and the database without depending on PostgreSQL.' }
      ],
      hardSkills: [
        { name: 'Nuxt 3 and Vue.js', level: 'teach' },
        { name: 'Nuxt UI and Tailwind CSS', level: 'teach' },
        { name: 'Pinia and front-end authentication', level: 'alone' },
        { name: 'Data visualization with Chart.js', level: 'alone' },
        { name: 'Testing with Vitest and integration tests in Go', level: 'alone' },
        { name: 'CI with GitHub Actions', level: 'help' },
        { name: 'Data Warehouse modeling', level: 'help' }
      ],
      softSkills: [
        { name: 'Technical leadership', where: 'As the person responsible for the front end, I defined the folder structure, the base components and the lint standards that the rest of the team went on to follow.' },
        { name: 'Proactivity', where: 'When the client asked for a more direct flow, I proposed and carried out the dashboard refactoring, replacing the project listing screen with a single panel with filters.' },
        { name: 'Organization', where: 'I linked commits to Jira tasks (TRK-94, TRK-135 and others), which made deliveries easier to trace in each sprint.' },
        { name: 'Communication', where: 'I agreed with the back-end team on the contracts for the statistics and user routes before implementing the screens.' }
      ]
    },
    visiondata: {
      semester: '6th semester',
      course: 'Database Technology',
      area: 'Pro4tech specializes in digital transformation. It uses technologies such as artificial intelligence, data analytics, IoT and cloud computing to create tailored strategies that increase efficiency, improve customer experience and drive business growth.',
      problem: 'Pro4tech had a large volume of old, disorganized support tickets. Without structure, the team lost time looking for solutions to problems that had already been solved, and the company could not extract strategic insights from that history.',
      solution: 'It turns tickets into a searchable knowledge base, with vector search for similar tickets, metrics dashboards, Machine Learning forecasts by product or customer and export of AI-generated insights. It complies with LGPD, with anonymization, audit logs, backups, consent control and access roles.',
      tech: [
        { name: 'Nuxt, Vue.js and TypeScript', use: 'front-end development, including Nuxt server routes.' },
        { name: 'nuxt-auth-utils', use: 'session and authentication management, including Microsoft account login.' },
        { name: 'Chart.js', use: 'dashboard charts.' },
        { name: 'Go', use: 'building the REST API on the back end.' },
        { name: 'Elasticsearch', use: 'indexing and vector search of tickets.' },
        { name: 'Oracle', use: 'relational database and Data Warehouse of the project.' },
        { name: 'Python', use: 'ETL and Machine Learning models for the forecasts.' },
        { name: 'Jira', use: 'management of sprints and team tasks.' }
      ],
      contributions: 'I was responsible for authentication and user management on the front end, which support the project\'s security and LGPD requirements.',
      contributionItems: [
        { title: 'Authentication flow', text: 'I configured the nuxt-auth-utils module and implemented login, logout and user session, including the Nuxt server routes (login, logout and user), the useAuth composable and the authenticated and admin middlewares.' },
        { title: 'Microsoft account login', text: 'I implemented login with a Microsoft account: the login/microsoft server route, the button on the login screen and a callback page that gives the user feedback after authentication.' },
        { title: 'User management and profile', text: 'I created the user management page (listing, editing and deletion, with create and delete modals) and the profile page, where users change their password or delete their own account, meeting the right to data erasure provided for in LGPD.' }
      ],
      hardSkills: [
        { name: 'Nuxt (server routes and middlewares)', level: 'teach' },
        { name: 'Authentication and session (nuxt-auth-utils and Microsoft OAuth)', level: 'alone' },
        { name: 'Role-based access control (RBAC)', level: 'alone' },
        { name: 'LGPD applied to systems', level: 'help' },
        { name: 'Elasticsearch', level: 'help' }
      ],
      softSkills: [
        { name: 'Sense of responsibility', where: 'I took on the security and access part, which was critical to meet the LGPD requirements, and made sure the restricted pages were protected by the middlewares.' },
        { name: 'Time management', where: 'I balanced full-time work with the sprint deliveries, concentrating the larger tasks (Microsoft login and user management) in the periods when I had more availability.' },
        { name: 'Communication', where: 'I agreed with the back-end and ML teams on the authentication contracts and access roles so that each screen showed only what the user was allowed to see.' }
      ]
    }
  }
}
