import type { TgCopy } from './types'

export const tgPt: TgCopy = {
  seo: {
    title: 'Portfólio de Projetos Integradores | Ali Mohamed Khodr',
    description: 'Trabalho de Graduação em Banco de Dados na Fatec São José dos Campos: seis Projetos Integradores com empresas parceiras, de 2022 a 2025.'
  },
  hero: {
    badge: 'Trabalho de Graduação na Fatec SJC',
    title: 'Portfólio de Projetos Integradores',
    lead: 'Seis semestres, seis empresas parceiras e seis problemas reais, de páginas em HTML a aplicações com ETL, testes e CI.',
    viewProjects: 'Ver projetos',
    facts: [
      { label: 'Curso', value: 'Tecnólogo em Banco de Dados' },
      { label: 'Instituição', value: 'Fatec São José dos Campos, Prof. Jessen Vidal' },
      { label: 'Modalidade', value: 'Portfólio de Aprendizagem de Projetos Integradores (API)' },
      { label: 'Orientador', value: 'Prof. Giuliano Bertoti' }
    ]
  },
  about: {
    title: { lead: 'Sobre ', accent: 'mim', tail: '.' },
    paragraphs: [
      'Sou desenvolvedor full stack e cursei **Banco de Dados** na **Fatec São José dos Campos, Prof. Jessen Vidal**. Antes da faculdade, me formei Técnico em Desenvolvimento de Sistemas na **ETEC de São José dos Campos**, onde tive meu primeiro contato com programação e com banco de dados.',
      'Comecei a Fatec em Análise e Desenvolvimento de Sistemas (ADS), onde participei dos dois primeiros Projetos Integradores, e depois segui para Banco de Dados, onde realizei os demais. Cada semestre trouxe uma empresa parceira, um problema real e uma stack diferente. Foi nesses projetos que passei de páginas estáticas em HTML para aplicações com frontend, backend, ETL, testes automatizados e integração contínua.',
      'Profissionalmente, sou Engenheiro de Software na **Qeevo Group (ex-Quero Educação)**, com Vue.js e Nuxt no frontend, Ruby, Elixir e Node.js no backend, PostgreSQL como banco principal e serviços da AWS. Antes, na **APTIV** (unidade de Jambeiro), multinacional do setor automotivo, desenvolvi aplicações em ASP.NET Web Forms (VB.NET e C#), sistemas desktop em Windows Forms e rotinas em SQL Server.'
    ],
    skillsTitle: 'Principais conhecimentos'
  },
  timeline: {
    title: { lead: 'Projetos ', accent: 'Integradores', tail: '.' },
    intro: 'Um projeto por semestre, sempre com um cliente real. Abra os detalhes de cada um para ver o problema, a solução, as tecnologias, as minhas contribuições e as skills desenvolvidas.'
  },
  closing: {
    title: { lead: 'Considerações ', accent: 'finais', tail: '.' },
    text: 'Os seis Projetos Integradores mostram uma evolução clara. Comecei construindo páginas estáticas e telas desktop, passei pela modelagem relacional com MySQL e cheguei a aplicações completas, com frontend em Nuxt, backends em Java e Go, bancos Oracle e PostgreSQL, Data Warehouses, pipelines de ETL, testes automatizados, CI e requisitos de segurança e LGPD. Ao longo desse caminho, também deixei de ser quem está aprendendo a stack para ser quem define a estrutura do frontend e os padrões seguidos pela equipe.'
  },
  labels: {
    partner: 'Empresa parceira',
    team: 'Equipe',
    professors: 'Professores',
    moreDetails: 'Ver mais detalhes',
    lessDetails: 'Ver menos',
    area: 'Área de atuação',
    problem: 'Problema',
    solution: 'Solução',
    tech: 'Tecnologias utilizadas',
    contributions: 'Minhas contribuições',
    hardSkills: 'Hard skills',
    softSkills: 'Soft skills',
    links: 'Links',
    levels: {
      teach: 'Sei ensinar',
      alone: 'Sei fazer sozinho',
      help: 'Sei fazer com ajuda'
    },
    linkKinds: {
      repo: 'Repositório',
      commits: 'Meus commits',
      commitsFront: 'Meus commits (front)',
      commitsBack: 'Meus commits (back)'
    }
  },
  projects: {
    dispvag: {
      semester: '1º semestre',
      course: 'ADS',
      partnerNote: '(interno)',
      area: 'A Fatec São José dos Campos é uma instituição pública de ensino superior tecnológico, mantida pelo Centro Paula Souza. Neste projeto, a própria coordenação atuou como cliente, com foco em apoiar alunos e profissionais da área de tecnologia na busca por oportunidades.',
      problem: 'Os alunos tinham dificuldade para encontrar vagas adequadas ao seu perfil, principalmente na área de TI. As oportunidades estavam espalhadas por várias plataformas, sem organização, e não havia uma forma de relacionar as competências pedidas pelo mercado com os cursos e certificações disponíveis.',
      solution: 'Sistema web que cataloga vagas de emprego com ênfase em TI, separadas por área (Front-end, Back-end e Outros), com requisitos, área profissional, benefícios e informações da empresa contratante. O site seguiu as cinco páginas exigidas pela Fatec: página principal, vagas de emprego, cursos e certificações, métricas e localização.',
      tech: [
        { name: 'Python', use: 'linguagem exigida pela Fatec para o desenvolvimento do projeto.' },
        { name: 'HTML5 e CSS3', use: 'estruturação e estilização das páginas do site.' },
        { name: 'Bootstrap', use: 'framework utilizado para deixar o layout responsivo e padronizado.' },
        { name: 'Canva', use: 'criação dos protótipos e das apresentações das sprints.' },
        { name: 'Git e GitHub', use: 'versionamento e documentação do projeto.' },
        { name: 'Discord', use: 'comunicação da equipe e reuniões de sprint.' }
      ],
      contributions: 'Primeiro projeto real em equipe e primeiro contato com o Scrum. Como parte do Scrum Team, desenvolvi as páginas em HTML, CSS e Bootstrap, em especial as listagens de vagas por área e as páginas de detalhes da vaga e da empresa, cuidando da responsividade e do padrão visual entre as páginas.',
      contributionItems: [
        { title: 'Requisitos e documentação', text: 'Participei do levantamento de requisitos com o cliente e da documentação exigida na disciplina: wireframes, Design Thinking e Balanced Scorecard.' }
      ],
      commitsNote: 'Os commits foram feitos pela conta compartilhada da equipe (TechForce-ADS), por isso não há histórico individual no repositório.',
      hardSkills: [
        { name: 'HTML e CSS', level: 'alone' },
        { name: 'Bootstrap', level: 'alone' },
        { name: 'Python', level: 'help' },
        { name: 'Git e GitHub', level: 'help' },
        { name: 'Scrum', level: 'help' }
      ],
      softSkills: [
        { name: 'Trabalho em equipe', where: 'Primeiro projeto com sete integrantes. Aprendi a dividir as páginas entre os membros e a combinar um padrão visual para que o site parecesse feito por uma só pessoa.' },
        { name: 'Comunicação', where: 'Participei das reuniões com o cliente e das apresentações de fim de sprint, explicando o que tinha sido desenvolvido e ouvindo os ajustes pedidos.' },
        { name: 'Proatividade', where: 'Como Git e Bootstrap eram novidade para a maior parte da equipe, estudei por conta própria e ajudei os colegas a resolverem conflitos e a organizar o layout.' }
      ]
    },
    trackcash: {
      semester: '2º semestre',
      course: 'ADS',
      area: 'A TrackCash é uma solução B2B de conciliação de vendas e pagamentos. A plataforma reúne em um único painel os dados de e-commerces, marketplaces e lojas físicas, dando às empresas uma visão clara e estratégica das suas finanças.',
      problem: 'Os clientes da TrackCash (lojistas online e físicos) usavam vários canais de venda e precisavam autorizar o acesso aos dados de cada um deles para que a conciliação financeira fosse feita. Sem uma interface dedicada, esse processo de autorização era lento, descentralizado e sujeito a erros.',
      solution: 'Aplicação desktop em que o lojista cadastra e configura seus canais de venda e meios de pagamento, informando as credenciais (e-mail e senha ou tokens) que permitem à TrackCash acessar os dados. Tem cadastro de canais, pesquisa com filtros, configuração pelo cliente e edição e exclusão restritas ao administrador.',
      tech: [
        { name: 'Java', use: 'linguagem utilizada no desenvolvimento da aplicação desktop (requisito da Fatec).' },
        { name: 'MySQL', use: 'SGBD relacional utilizado para armazenar usuários, administradores e canais.' },
        { name: 'NetBeans', use: 'IDE utilizada, incluindo o GUI Builder para a construção das telas.' },
        { name: 'Canva', use: 'prototipação das telas e criação das apresentações.' },
        { name: 'Git e GitHub', use: 'versionamento e documentação do projeto.' }
      ],
      contributions: 'Fiquei responsável pela prototipação e construção das telas da aplicação, o que me fez avançar bastante em UX/UI. Também elaborei o modelo de dados e criei o banco MySQL, meu primeiro contato com modelagem relacional em um projeto real.',
      contributionItems: [
        { title: 'Interface gráfica da aplicação', text: 'Construí toda a interface com o GUI Builder do NetBeans: campos de texto, combos, botões, painéis e logos, com cores padronizadas e coerência visual entre as telas.' },
        { title: 'Exibir e ocultar senha', text: 'Funcionalidade que alterna a visibilidade da senha para o usuário conferir o que está digitando.' },
        { title: 'Modelo de dados', text: 'Modelo criado antes do banco, definindo as entidades de administrador, usuário e canais e os relacionamentos entre elas.' },
        { title: 'Banco de dados MySQL', text: 'Script de criação das tabelas de administrador, canais, canais do administrador e usuários, com as chaves primárias e estrangeiras.' }
      ],
      commitsNote: 'Os commits foram feitos pela conta compartilhada da equipe (TechForce-ADS), por isso não há histórico individual no repositório.',
      hardSkills: [
        { name: 'Java (Swing e NetBeans)', level: 'alone' },
        { name: 'Modelagem de banco de dados', level: 'alone' },
        { name: 'MySQL', level: 'help' },
        { name: 'UX/UI e prototipação', level: 'alone' },
        { name: 'Scrum', level: 'alone' }
      ],
      softSkills: [
        { name: 'Organização e planejamento', where: 'Dividi a construção das telas por sprint para que o CRUD completo, com a página de administrador, ficasse pronto até a Sprint 4.' },
        { name: 'Comunicação assertiva', where: 'Alinhei com o cliente o fluxo de cadastro e configuração dos canais antes de construir as telas, evitando retrabalho.' },
        { name: 'Resiliência', where: 'Após o feedback de uma sprint, precisei refazer as tabelas de administrador e usuário e ajustar as telas que dependiam delas.' }
      ]
    },
    drconvert: {
      semester: '3º semestre',
      course: 'Banco de Dados',
      area: 'A Dom Rock atua no setor de Tecnologia da Informação com soluções de Inteligência Artificial e análise avançada de dados. Sua plataforma integra e processa grandes volumes de dados para gerar insights estratégicos, automatizar processos e apoiar decisões, com clientes do setor privado e público.',
      problem: 'A Dom Rock processa dados em uma pipeline de vários estágios (Landing Zone, Bronze e Silver). Para a plataforma funcionar, as fontes de dados de cada cliente precisam ser configuradas manualmente, tarefa que consome muito tempo e cria dependência de técnicos especializados.',
      solution: 'Plataforma web de mapeamento e conversão de dados em que o próprio usuário configura cada estágio: envia o arquivo .csv, ajusta os campos e tipos detectados, define o campo identificador, classifica os campos e cria regras de conversão "de → para". Tem dashboard administrativo e gera um .yaml com o esquema dos dados.',
      tech: [
        { name: 'Next.js e React', use: 'framework e biblioteca utilizados no desenvolvimento do frontend.' },
        { name: 'TypeScript', use: 'tipagem estática no frontend.' },
        { name: 'Tailwind CSS', use: 'estilização utilitária das telas.' },
        { name: 'Java e Spring Boot', use: 'desenvolvimento da API REST no backend.' },
        { name: 'MySQL', use: 'SGBD relacional utilizado para armazenar projetos, arquivos, campos e classificações.' },
        { name: 'Figma', use: 'prototipação das telas em alta fidelidade.' }
      ],
      contributions: 'Atuei no frontend em Next.js, principalmente na página do projeto, onde o usuário acompanha e configura os estágios do mapeamento. Foi meu primeiro contato com React e com os conceitos de pipeline de dados.',
      contributionItems: [
        { title: 'Página do projeto e navegação entre estágios', text: 'Criei a página do projeto (project/page.tsx) com o controle de navegação entre os estágios Landing Zone, Bronze e Silver (page-control.tsx) e os cards dos campos mapeados (field-card.tsx). Depois refatorei essa página para acompanhar as novas rotas e componentes da aplicação.' },
        { title: 'Opção "arquivo possui cabeçalho" no upload', text: 'No formulário de upload (upload-form.tsx), adicionei a opção de informar se o CSV tem linha de cabeçalho e passei a enviar essa informação ao serviço de upload, para que o backend identifique corretamente os nomes dos campos.' }
      ],
      hardSkills: [
        { name: 'React e Next.js', level: 'help' },
        { name: 'TypeScript', level: 'help' },
        { name: 'Tailwind CSS', level: 'alone' },
        { name: 'Consumo de API REST', level: 'alone' },
        { name: 'Pipeline de dados (Landing Zone, Bronze e Silver)', level: 'help' }
      ],
      softSkills: [
        { name: 'Adaptabilidade', where: 'Entrei em uma equipe nova e em uma stack que eu ainda não conhecia (React e Next.js), e precisei entregar funcionalidades já na primeira sprint.' },
        { name: 'Trabalho em equipe', where: 'Integrei minhas telas às rotas que os colegas criavam no backend, combinando com eles os formatos de requisição e resposta.' },
        { name: 'Aprendizado contínuo', where: 'Estudei React e os conceitos de pipeline de dados em paralelo às sprints para acompanhar o ritmo da equipe.' }
      ]
    },
    geotrack: {
      semester: '4º semestre',
      course: 'Banco de Dados',
      area: 'A ITO1 desenvolve soluções e gerencia infraestrutura de TI, incluindo suporte técnico (Service Desk e Field Services) e fornecimento de equipamentos em larga escala. Também aplica IoT, Smart Cities, Indústria 4.0, IA e Big Data para apoiar a transformação digital de organizações públicas e privadas.',
      problem: 'A empresa precisava armazenar e consultar em tempo real os dados de geolocalização gerados continuamente por dispositivos IoT, como wearables, tags e smartphones, usados no monitoramento de pessoas e ativos. O volume de dados exigia um sistema escalável, confiável e seguro, que não dependesse de técnicos especializados.',
      solution: 'Sistema web de rastreamento em mapa. Mostra os pontos de parada de cada dispositivo, filtra por pessoa, dispositivo e período (com atalhos como "Hoje" e "Últimos 3 dias"), cria áreas geográficas para descobrir quem passou por elas, traça as rotas percorridas e gera relatórios, com login e modo escuro.',
      tech: [
        { name: 'Vue.js 3 e Vite', use: 'framework e ferramenta de build utilizados no frontend.' },
        { name: 'Vuetify', use: 'biblioteca de componentes de UI utilizada nas telas.' },
        { name: 'Google Maps API', use: 'renderização do mapa, marcadores, áreas, rotas e Street View.' },
        { name: 'Java e Spring Boot', use: 'desenvolvimento da API REST no backend.' },
        { name: 'Oracle', use: 'banco de dados que armazena as geolocalizações dos dispositivos.' },
        { name: 'Docker', use: 'conteinerização dos serviços da aplicação.' }
      ],
      contributions: 'Entrei na equipe iNineBD neste semestre e fui um dos principais desenvolvedores do frontend, da estrutura inicial do projeto até as funcionalidades do mapa. Foram 26 commits no repositório do frontend.',
      contributionItems: [
        { title: 'Estrutura do projeto e configuração do mapa', text: 'Montei a estrutura do frontend com Vue 3, Vite e Vuetify, configurei o Google Maps (incluindo as tipagens google.maps.d.ts) e criei o layout com menu lateral (Sidebar.vue), adaptado para telas menores.' },
        { title: 'Marcadores de usuários e filtros de busca', text: 'Criei o componente de marcadores com avatar, que plota no mapa os dados vindos do banco. Implementei os filtros por usuário, dispositivo e período: o botão de consulta só é habilitado com todos os campos preenchidos, e o botão "Limpar" permite trocar de usuário. Também participei dos filtros rápidos e da seleção de múltiplos usuários, e corrigi a inicialização do mapa e os pontos de parada.' },
        { title: 'Áreas geográficas', text: 'Trabalhei no filtro de áreas geográficas, atualizando a listagem após salvar ou excluir uma área e sincronizando o modal quando o usuário troca de área. Adicionei loading nos botões, snackbar de erro e a limpeza dos marcadores.' },
        { title: 'Rotas e Street View', text: 'Criei o componente GeoRoutesFilter, que busca e traça no mapa as rotas percorridas por um usuário, e ajustei o posicionamento da localização no Street View.' }
      ],
      hardSkills: [
        { name: 'Vue.js 3', level: 'alone' },
        { name: 'Vuetify', level: 'alone' },
        { name: 'Google Maps API', level: 'alone' },
        { name: 'Dados geoespaciais (pontos, áreas e rotas)', level: 'help' },
        { name: 'Git flow com Pull Requests', level: 'alone' }
      ],
      softSkills: [
        { name: 'Adaptabilidade', where: 'Entrei em uma equipe que já trabalhava junta havia três semestres e, logo na primeira sprint, assumi a reestruturação do frontend.' },
        { name: 'Proatividade', where: 'Corrigi problemas na inicialização do mapa e nos pontos de parada que estavam travando as tarefas de outros colegas.' },
        { name: 'Colaboração', where: 'Trabalhei junto do time de backend para definir como os dados de geolocalização do Oracle chegariam ao mapa, ajustando consultas e filtros.' }
      ]
    },
    track: {
      semester: '5º semestre',
      course: 'Banco de Dados',
      area: 'A Youtan desenvolve soluções digitais sob medida: sistemas, softwares web e aplicativos mobile híbridos, Android e iOS. Seus projetos buscam melhorar processos, aumentar a produtividade e dar mais autonomia aos clientes, priorizando experiência e usabilidade.',
      problem: 'A Youtan gerenciava seus projetos em ferramentas como Taiga e Jira, mas não tinha um painel centralizado com indicadores de fluxo, como tempo médio de conclusão, volume de tarefas por período e distribuição entre colaboradores. Além disso, o Taiga não oferecia níveis de acesso diferentes para operadores, gerentes e administradores.',
      solution: 'Plataforma integrada ao Taiga e ao Jira: um ETL em Python alimenta um Data Warehouse em PostgreSQL, uma API em Go expõe os indicadores e um frontend em Nuxt os apresenta em dashboards (cards criados, iniciados e concluídos, tempo médio e retrabalho). Cada perfil (Operador, Gerente e Administrador) vê só o seu escopo.',
      tech: [
        { name: 'Nuxt 3, Vue.js e TypeScript', use: 'desenvolvimento do frontend.' },
        { name: 'Nuxt UI e Tailwind CSS', use: 'componentes e estilização das telas.' },
        { name: 'Pinia', use: 'gerenciamento de estado, com persistência da sessão do usuário.' },
        { name: 'Chart.js', use: 'construção dos gráficos dos dashboards.' },
        { name: 'Vitest', use: 'testes unitários dos componentes do frontend.' },
        { name: 'Go', use: 'desenvolvimento da API REST no backend.' },
        { name: 'PostgreSQL', use: 'banco de dados e Data Warehouse com os indicadores.' },
        { name: 'SQLite', use: 'banco em memória usado nos testes de integração do backend.' },
        { name: 'Python', use: 'ETL que extrai os dados do Taiga e do Jira e carrega o Data Warehouse.' },
        { name: 'GitHub Actions e SonarQube', use: 'integração contínua com lint, testes e análise de qualidade.' }
      ],
      contributions: 'Fui o principal responsável pelo frontend, com 81 commits no repositório: criei o projeto, defini a estrutura e os padrões seguidos pela equipe e desenvolvi os dashboards, a autenticação e a gestão de usuários. No backend, escrevi os testes de integração do login.',
      contributionItems: [
        { title: 'Setup inicial, qualidade e CI', text: 'Criei o projeto em Nuxt 3 com Nuxt UI, o header e o footer com alternância de tema e os componentes base. Configurei o ESLint e o workflow de CI para rodar lint e testes antes do build, e escrevi testes unitários com Vitest para os componentes de gráficos.' },
        { title: 'Dashboards e métricas', text: 'Desenvolvi os gráficos com Chart.js (rosca, barras verticais e horizontais) e os cards de estatística. Criei os filtros de projeto, de plataforma (Taiga ou Jira) e de período (v-calendar e date-fns), consumindo as estatísticas do backend com skeleton loading e tratamento de erro. O dashboard evoluiu de uma tela de listagem de projetos para um painel único com filtros.' },
        { title: 'Primeiro acesso, definir senha e login', text: 'Implementei o fluxo de primeiro acesso, com validação do e-mail e envio de token, a tela de definir senha e o login. A sessão é controlada por middleware de autenticação, por uma store do usuário em Pinia com estado persistido e por um interceptor do Axios que trata respostas 401.' },
        { title: 'Gestão de usuários e perfis', text: 'Criei a página de usuários, acessível apenas a administradores (middleware admin), com listagem paginada e alteração de perfil por meio dos composables useUsers, useRoles e useUpdateRole.' },
        { title: 'Testes de integração no backend (Go)', text: 'Escrevi os testes de integração do controller de login em Go, usando SQLite em memória para validar a integração entre a API e o banco sem depender do PostgreSQL.' }
      ],
      hardSkills: [
        { name: 'Nuxt 3 e Vue.js', level: 'teach' },
        { name: 'Nuxt UI e Tailwind CSS', level: 'teach' },
        { name: 'Pinia e autenticação no frontend', level: 'alone' },
        { name: 'Visualização de dados com Chart.js', level: 'alone' },
        { name: 'Testes com Vitest e testes de integração em Go', level: 'alone' },
        { name: 'CI com GitHub Actions', level: 'help' },
        { name: 'Modelagem de Data Warehouse', level: 'help' }
      ],
      softSkills: [
        { name: 'Liderança técnica', where: 'Como responsável pelo frontend, defini a estrutura de pastas, os componentes base e os padrões de lint que o restante da equipe passou a seguir.' },
        { name: 'Proatividade', where: 'Quando o cliente pediu um fluxo mais direto, propus e fiz a refatoração do dashboard, trocando a tela de listagem de projetos por um painel único com filtros.' },
        { name: 'Organização', where: 'Vinculei os commits às tarefas do Jira (TRK-94, TRK-135 e outras), o que facilitou a rastreabilidade das entregas em cada sprint.' },
        { name: 'Comunicação', where: 'Alinhei com o time de backend os contratos das rotas de estatísticas e de usuários antes de implementar as telas.' }
      ]
    },
    visiondata: {
      semester: '6º semestre',
      course: 'Banco de Dados',
      area: 'A Pro4tech é especializada em transformação digital. Usa tecnologias como inteligência artificial, análise de dados, IoT e computação em nuvem para criar estratégias personalizadas que aumentam a eficiência, melhoram a experiência do cliente e impulsionam o crescimento dos negócios.',
      problem: 'A Pro4tech tinha um grande volume de chamados de suporte antigos e desorganizados. Sem estrutura, a equipe perdia tempo procurando soluções para problemas já resolvidos, e a empresa não conseguia extrair insights estratégicos desse histórico.',
      solution: 'Transforma os chamados em uma base de conhecimento pesquisável, com busca vetorizada de chamados semelhantes, dashboards de métricas, previsões por produto ou cliente com Machine Learning e exportação de insights gerados por IA. Segue a LGPD, com anonimização, logs de auditoria, backups, controle de consentimento e perfis de acesso.',
      tech: [
        { name: 'Nuxt, Vue.js e TypeScript', use: 'desenvolvimento do frontend, incluindo as rotas de servidor do Nuxt.' },
        { name: 'nuxt-auth-utils', use: 'gerenciamento de sessão e autenticação, incluindo o login com conta Microsoft.' },
        { name: 'Chart.js', use: 'gráficos dos dashboards.' },
        { name: 'Go', use: 'desenvolvimento da API REST no backend.' },
        { name: 'Elasticsearch', use: 'indexação e busca vetorizada dos chamados.' },
        { name: 'Oracle', use: 'banco relacional e Data Warehouse do projeto.' },
        { name: 'Python', use: 'ETL e modelos de Machine Learning para as previsões.' },
        { name: 'Jira', use: 'gestão das sprints e das tarefas da equipe.' }
      ],
      contributions: 'Fiquei responsável pela autenticação e pela gestão de usuários no frontend, que sustentam os requisitos de segurança e de LGPD do projeto.',
      contributionItems: [
        { title: 'Fluxo de autenticação', text: 'Configurei o módulo nuxt-auth-utils e implementei login, logout e sessão do usuário, incluindo as rotas de servidor do Nuxt (login, logout e user), o composable useAuth e os middlewares authenticated e admin.' },
        { title: 'Login com conta Microsoft', text: 'Implementei o login com conta Microsoft: a rota de servidor login/microsoft, o botão na tela de login e uma página de retorno que dá feedback ao usuário depois da autenticação.' },
        { title: 'Gestão de usuários e perfil', text: 'Criei a página de gestão de usuários (listagem, edição e exclusão, com modais de criação e exclusão) e a página de perfil, onde o usuário altera a senha ou exclui a própria conta, atendendo ao direito de eliminação de dados previsto na LGPD.' }
      ],
      hardSkills: [
        { name: 'Nuxt (rotas de servidor e middlewares)', level: 'teach' },
        { name: 'Autenticação e sessão (nuxt-auth-utils e OAuth Microsoft)', level: 'alone' },
        { name: 'Controle de acesso por perfil (RBAC)', level: 'alone' },
        { name: 'LGPD aplicada a sistemas', level: 'help' },
        { name: 'Elasticsearch', level: 'help' }
      ],
      softSkills: [
        { name: 'Senso de responsabilidade', where: 'Assumi a parte de segurança e acesso, que era crítica para cumprir os requisitos de LGPD, e garanti que as páginas restritas ficassem protegidas pelos middlewares.' },
        { name: 'Gestão de tempo', where: 'Conciliei o trabalho em tempo integral com as entregas das sprints, concentrando as tarefas maiores (login Microsoft e gestão de usuários) nos períodos com mais disponibilidade.' },
        { name: 'Comunicação', where: 'Alinhei com os times de backend e de ML os contratos de autenticação e os perfis de acesso para que cada tela mostrasse só o que o usuário podia ver.' }
      ]
    }
  }
}
