import type { Language } from "@/lib/language-context"

const profileBase = {
  name: "Marcos Goudinho",
  email: "marcos.goudinho@outlook.com",
  socials: {
    github: "https://github.com/marcosgoudinho",
    linkedin: "https://www.linkedin.com/in/marcosgoudinho/",
    instagram: "https://www.instagram.com/marcos.goudinho?igsh=Mmh0azJxeXF6YmVl&utm_source=qr",
    whatsapp: "https://wa.me/5548998401212",
  },
  activityPhotos: [
    { src: "/activity-1.jpeg", alt: "Presenting at tech conference", caption: { en: "Speaking at React Summit 2024", pt: "Palestra no React Summit 2024" } },
    { src: "/activity-2.jpeg", alt: "Team at tech event", caption: { en: "Networking at Web Dev Conference", pt: "Networking na Web Dev Conference" } },
    { src: "/activity-3.jpeg", alt: "Workshop teaching session", caption: { en: "Teaching at JavaScript Meetup", pt: "Ensinando no JavaScript Meetup" } },
    { src: "/activity-4.jpeg", alt: "Professional photo at event", caption: { en: "Tech Conference Networking", pt: "Networking em Conferência de Tecnologia" } },
    { src: "/activity-5.jpeg", alt: "Team collaboration", caption: { en: "Team Building Activity", pt: "Atividade de Team Building" } },
    { src: "/activity-6.jpeg", alt: "Award recognition", caption: { en: "Developer Excellence Award", pt: "Prêmio de Excelência em Desenvolvimento" } },
  ],
}

const translations = {
  en: {
    profile: {
      title: "Fullstack Developer | LLMs, RAG & AI Agents",
      tagline: "I work at the intersection of software engineering and AI: building agents, connecting models to real systems and tools, and turning AI into useful product features.",
      location: "Criciuma, SC",
    },
    navItems: [
      { id: "about", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "awards", label: "Awards" },
      { id: "education", label: "Courses" },
    ],
    terminalLabel: "Terminal",
    ui: {
      viewMore: "View more",
      viewLess: "View less",
      sourceCode: "Source code",
      stars: "GitHub stars",
      allRepositories: "All repositories on GitHub",
      momentsTitle: "Moments & Milestones",
      galleryHint: "Use the arrow keys to navigate - press Escape to close",
      noPortfolioRepos: "No repository is tagged with the \"portfolio\" topic on GitHub yet.",
      viewCertificate: "View Certificate",
      verifyCredential: "Verify credential",
      closeCertificate: "Close certificate",
      clickOutsideToClose: "Click outside to close or press Escape",
      contactTitle: "Let's build something together",
      contactText:
        "I'm always open to discussing new projects, opportunities, or just talking shop. Drop me a line and I'll get back to you.",
      getInTouch: "Get in touch",
      designedBy: (name: string) =>
        `Designed and built by ${name}. Built with Next.js and Tailwind CSS, deployed on Vercel.`,
    },
    about: [
      "I'm a Fullstack Developer and a Software Engineering student. I currently work on the development and evolution of an ERP, building web and mobile applications, backends, APIs, automation and integrations between systems.",
      "I also work on applying AI to the ERP, developing agents and solutions with LLMs, RAG, tool calling, LangGraph and vector databases. My main interest lies exactly at the intersection between software engineering and AI: building agents, connecting models to real systems and tools, and turning AI into useful features for products.",
      "Beyond my professional work, I'm also building my own mobile application for psychology clinics, combining technology and product thinking to simplify daily operations for mental health professionals.",
      "My goal is to build an international career working remotely with teams that value software quality, innovation, and continuous learning. I believe great products are created by combining solid engineering, curiosity, and a constant focus on solving real problems in the simplest and most effective way.",
    ],
    experiences: [
      {
        period: "2025/2 - Present",
        role: "Junior Full-Stack Developer",
        company: "Agrosys",
        url: "https://www.agrosys.com.br/",
        description: [
          "Development and evolution of ERP systems, including new features, bug fixing, process automation and application architecture evolution.",
          "Web and mobile application development, working on the frontend with JavaScript, TypeScript, Angular, jQuery, HTML and CSS, and on the backend with Progress OpenEdge (ABL), PHP and Python.",
          "Development and maintenance of mobile applications with AngularJS and Cordova, including publishing, updating and maintenance on the app stores.",
          "Development of Artificial Intelligence solutions applied to the ERP, focused on LLMs, RAG and agentic systems, using LangGraph, tool calling, FastMCP, vector databases such as Weaviate and language model APIs.",
          "Definition and evolution of agentic system architectures, working on the orchestration between specialized agents, tools, language models and internal systems.",
          "Development of a VS Code extension to document and spread internal development standards, allowing AI tools such as GitHub Copilot to use that knowledge as context during development.",
          "Development of a chatbot integrated into the ERP, using LLMs, tool calling and integration with internal tools and services for customer service and support.",
          "Participation in the technical evaluation of candidates, reviewing code quality, architecture, implementation and development best practices.",
        ],
        stack: ["Progress ABL", "JavaScript", "TypeScript", "Angular", "AngularJS", "jQuery", "PHP", "Python", "Cordova", "LangGraph", "RAG", "Weaviate", "FastMCP"],
      },
      {
        period: "2025/1",
        role: "Full Stack Developer Intern",
        company: "Agrosys",
        url: "https://www.agrosys.com.br/",
        description: [
          "During my internship at Agrosys, I had the opportunity to learn and work with technologies such as jQuery, Progress OpenEdge, Angular and Apache Cordova.",
          "I took part in the development and maintenance of systems, fixing bugs, implementing new features and handling the team's demands.",
          "This experience allowed me to develop my technical skills, learn in practice how software development works in a professional environment, and grow in problem solving and teamwork.",
        ],
        stack: ["jQuery", "Progress OpenEdge", "Angular", "Apache Cordova", "HTML5", "CSS", "JavaScript"],
      },
    ],
    skills: [
      { category: "Frontend", items: ["TypeScript", "JavaScript", "Angular", "AngularJS", "jQuery", "HTML5", "CSS"] },
      { category: "Backend", items: ["Java", "Python", "PHP", "Progress OpenEdge (ABL)", "SQL"] },
      { category: "AI & LLM", items: ["LLMs", "RAG", "LangGraph", "LangChain", "AI Agents", "Tool Calling"] },
      { category: "Mobile, Infra & Tools", items: ["Apache Cordova", "Docker", "Kubernetes", "Linux", "Git"] },
    ],
    projects: [
      {
        title: "Marketplace System",
        description:
          "A real-time analytics dashboard for product teams, with custom event tracking, funnel analysis, and shareable reports. Handles millions of events per day.",
        images: ["/project-analytics.png", "/project-commerce.png", "/project-cadence.png"],
        tags: ["Angular", "TypeScript", "Node.js", "Express.js", "JWT", "Multer", "PostgreSQL", "Docker Compose", "GitHub Actions"],
        url: "https://example.com",
        repo: "https://github.com/marcosgoudinho/marketplace-system",
      },
      {
        title: "My Page",
        description:
          "A personal portfolio website built with Next.js, showcasing my projects, experience, and skills. It features a responsive design, smooth animations, and optimized performance.",
        images: ["/project-analytics.png", "/project-commerce.png", "/project-cadence.png"],
        tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel", "GitHub Actions"],
        url: "https://www.marcosgoudinho.dev.br/",
        repo: "https://github.com/marcosgoudinho/my-page.git",
      },
    ],
    awards: [
      {
        date: "2026-07-01",
        title: "Innovation of the Month Award",
        issuer: "Agrosys",
        description:
          "Recognized for the development of Agrosys' corporate chatbot, made available to clients as the first step of customer support. The solution uses RAG (Retrieval-Augmented Generation) to answer questions based on the company's knowledge base, helping to solve problems before a support ticket is opened.",
      },
    ],
    education: [
      {
        startDate: "2023-02-01",
        endDate: "2026-12-31",
        degree: "Bachelor's Degree in Software Engineering",
        school: "SATC - Criciuma, SC",
        description:
          "Currently in the eighth and final semester, graduating in December 2026. The program covers software architecture, algorithms, databases, web and mobile development, and software engineering practices.",
      },
      {
        startDate: "2026-08-03",
        endDate: "2026-08-03",
        degree: "Docker for Developers (with Docker Swarm and Kubernetes)",
        school: "Udemy - Matheus Battisti (Hora de Codar)",
        description:
          "13.5-hour course covering containers, images, volumes, networks and Docker Compose, through to orchestration with Docker Swarm and Kubernetes.",
        certificate: "/certificates/docker.png",
        credentialUrl: "https://www.udemy.com/certificate/UC-bff059c8-db22-43fb-9631-b4433cc47c0a/",
      },
      {
        startDate: "2024-07-01",
        endDate: "2026-07-04",
        degree: "Fluency in English",
        school: "Rockfeller Language Center",
        description: "Focused on achieving fluency in English through intensive courses and immersive language experiences.",
        certificate: "/certificates/rockfeller-english.png",
      },
      {
        startDate: "2023-09-29",
        endDate: "2024-04-19",
        degree: "Innovation Analyst",
        school: "SATC - Charitable Association of the Coal Industry of Santa Catarina",
        description: "Focused on developing skills in innovation analysis through practical projects and coursework.",
        certificate: "/certificates/innovation-analyst.png",
      },
    ],
  },
  pt: {
    profile: {
      title: "Desenvolvedor Fullstack | LLMs, RAG & Agentes de IA",
      tagline: "Atuo na interseção entre engenharia de software e IA: criar agentes, conectar modelos a sistemas e ferramentas reais e transformar IA em funcionalidades úteis para produtos.",
      location: "Criciúma, SC",
    },
    navItems: [
      { id: "about", label: "Sobre" },
      { id: "experience", label: "Experiência" },
      { id: "skills", label: "Habilidades" },
      { id: "projects", label: "Projetos" },
      { id: "awards", label: "Reconhecimentos" },
      { id: "education", label: "Cursos" },
    ],
    terminalLabel: "Terminal",
    ui: {
      viewMore: "Ver mais",
      viewLess: "Ver menos",
      sourceCode: "Código fonte",
      stars: "Estrelas no GitHub",
      allRepositories: "Todos os repositórios no GitHub",
      momentsTitle: "Momentos & Conquistas",
      galleryHint: "Use as setas para navegar - pressione Escape para fechar",
      noPortfolioRepos: "Nenhum repositório está marcado com a topic \"portfolio\" no GitHub ainda.",
      viewCertificate: "Ver Certificado",
      verifyCredential: "Verificar credencial",
      closeCertificate: "Fechar certificado",
      clickOutsideToClose: "Clique fora para fechar ou pressione Esc",
      contactTitle: "Vamos construir algo juntos",
      contactText:
        "Estou sempre aberto a discutir novos projetos, oportunidades ou apenas trocar ideias. Me mande uma mensagem e eu retorno o mais rápido possível.",
      getInTouch: "Entre em contato",
      designedBy: (name: string) =>
        `Projetado e desenvolvido por ${name}. Construído com Next.js e Tailwind CSS, hospedado na Vercel.`,
    },
    about: [
      "Sou Desenvolvedor Fullstack e estudante de Engenharia de Software. Atualmente, atuo no desenvolvimento e evolução de um ERP, trabalhando com aplicações web e mobile, backend, APIs, automação e integração entre sistemas.",
      "Também trabalho na aplicação de IA ao ERP, desenvolvendo agentes e soluções com LLMs, RAG, tool calling, LangGraph e bancos vetoriais. Meu maior interesse está justamente na interseção entre engenharia de software e IA: criar agentes, conectar modelos a sistemas e ferramentas reais e transformar IA em funcionalidades úteis para produtos.",
      "Além do meu trabalho profissional, também estou construindo meu próprio aplicativo mobile para clínicas de psicologia, combinando tecnologia e visão de produto para simplificar as operações diárias de profissionais da saúde mental.",
      "Meu objetivo é construir uma carreira internacional trabalhando remotamente com times que valorizam qualidade de software, inovação e aprendizado contínuo. Acredito que grandes produtos são criados combinando engenharia sólida, curiosidade e foco constante em resolver problemas reais da forma mais simples e eficaz possível.",
    ],
    experiences: [
      {
        period: "2025/2 - Atual",
        role: "Desenvolvedor Full-Stack Júnior",
        company: "Agrosys",
        url: "https://www.agrosys.com.br/",
        description: [
          "Desenvolvimento e evolução de sistemas ERP, incluindo implementação de novas funcionalidades, correção de bugs, automação de processos e evolução da arquitetura das aplicações.",
          "Desenvolvimento de aplicações web e mobile, atuando no frontend com JavaScript, TypeScript, Angular, jQuery, HTML e CSS, e no backend com Progress OpenEdge (ABL), PHP e Python.",
          "Desenvolvimento e manutenção de aplicações mobile com AngularJS e Cordova, incluindo processos de publicação, atualização e manutenção nas lojas de aplicativos.",
          "Desenvolvimento de soluções de Inteligência Artificial aplicadas ao ERP, com foco em LLMs, RAG e sistemas agentic, utilizando LangGraph, tool calling, FastMCP, bancos vetoriais como Weaviate e APIs de modelos de linguagem.",
          "Definição e evolução de arquiteturas de sistemas agentic, trabalhando na orquestração entre agentes especializados, ferramentas, modelos de linguagem e sistemas internos.",
          "Desenvolvimento de extensão para VS Code voltada à documentação e disseminação dos padrões internos de desenvolvimento, permitindo que ferramentas de IA, como GitHub Copilot, utilizem esse conhecimento como contexto durante o desenvolvimento.",
          "Desenvolvimento de chatbot integrado ao ERP, utilizando LLMs, tool calling e integração com ferramentas e serviços internos para atendimento e suporte a clientes.",
          "Participação na avaliação técnica de candidatos, analisando qualidade de código, arquitetura, implementação e boas práticas de desenvolvimento.",
        ],
        stack: ["Progress ABL", "JavaScript", "TypeScript", "Angular", "AngularJS", "jQuery", "PHP", "Python", "Cordova", "LangGraph", "RAG", "Weaviate", "FastMCP"],
      },
      {
        period: "2025/1",
        role: "Estagiário Full Stack Developer",
        company: "Agrosys",
        url: "https://www.agrosys.com.br/",
        description: [
          "Durante meu estágio na Agrosys, tive a oportunidade de aprender e trabalhar com tecnologias como jQuery, Progress OpenEdge, Angular e Apache Cordova.",
          "Participei do desenvolvimento e da manutenção de sistemas, realizando correções de bugs, implementando novas funcionalidades e atendendo às demandas da equipe.",
          "Essa experiência me permitiu desenvolver minhas habilidades técnicas, aprender na prática como funciona o desenvolvimento de software em um ambiente profissional e evoluir na resolução de problemas e no trabalho em equipe.",
        ],
        stack: ["jQuery", "Progress OpenEdge", "Angular", "Apache Cordova", "HTML5", "CSS", "JavaScript"],
      },
    ],
    skills: [
      { category: "Frontend", items: ["TypeScript", "JavaScript", "Angular", "AngularJS", "jQuery", "HTML5", "CSS"] },
      { category: "Backend", items: ["Java", "Python", "PHP", "Progress OpenEdge (ABL)", "SQL"] },
      { category: "IA & LLM", items: ["LLMs", "RAG", "LangGraph", "LangChain", "Agentes de IA", "Tool Calling"] },
      { category: "Mobile, Infra & Ferramentas", items: ["Apache Cordova", "Docker", "Kubernetes", "Linux", "Git"] },
    ],
    projects: [
      {
        title: "Marketplace System",
        description:
          "Um dashboard de analytics em tempo real para times de produto, com rastreamento de eventos personalizado, análise de funil e relatórios compartilháveis. Processa milhões de eventos por dia.",
        images: ["/project-analytics.png", "/project-commerce.png", "/project-cadence.png"],
        tags: ["Angular", "TypeScript", "Node.js", "Express.js", "JWT", "Multer", "PostgreSQL", "Docker Compose", "GitHub Actions"],
        url: "https://example.com",
        repo: "https://github.com/marcosgoudinho/marketplace-system",
      },
      {
        title: "My Page",
        description:
          "Um site de portfólio pessoal construído com Next.js, apresentando meus projetos, experiência e habilidades. Possui design responsivo, animações suaves e performance otimizada.",
        images: ["/project-analytics.png", "/project-commerce.png", "/project-cadence.png"],
        tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel", "GitHub Actions"],
        url: "https://www.marcosgoudinho.dev.br/",
        repo: "https://github.com/marcosgoudinho/my-page.git",
      },
    ],
    awards: [
      {
        date: "2026-07-01",
        title: "Selo de Inovação do Mês",
        issuer: "Agrosys",
        description:
          "Reconhecimento de Inovação do Mês pelo desenvolvimento do chatbot corporativo da Agrosys, disponibilizado aos clientes como primeira etapa do atendimento. A solução utiliza a técnica RAG (Retrieval-Augmented Generation) para responder dúvidas com base na base de conhecimento da empresa, auxiliando na resolução de problemas antes da abertura de chamados.",
      },
    ],
    education: [
      {
        startDate: "2023-02-01",
        endDate: "2026-12-31",
        degree: "Bacharelado em Engenharia de Software",
        school: "SATC - Criciúma, SC",
        description:
          "Atualmente na oitava e última fase, com conclusão prevista para dezembro de 2026. O curso abrange arquitetura de software, algoritmos, bancos de dados, desenvolvimento web e mobile e práticas de engenharia de software.",
      },
      {
        startDate: "2026-08-03",
        endDate: "2026-08-03",
        degree: "Docker para Desenvolvedores (com Docker Swarm e Kubernetes)",
        school: "Udemy - Matheus Battisti (Hora de Codar)",
        description:
          "Curso de 13,5 horas abordando containers, imagens, volumes, redes e Docker Compose, até a orquestração com Docker Swarm e Kubernetes.",
        certificate: "/certificates/docker.png",
        credentialUrl: "https://www.udemy.com/certificate/UC-bff059c8-db22-43fb-9631-b4433cc47c0a/",
      },
      {
        startDate: "2024-07-01",
        endDate: "2026-07-04",
        degree: "Fluência em Inglês",
        school: "Rockfeller Language Center",
        description: "Focado em alcançar fluência em inglês através de cursos intensivos e experiências imersivas no idioma.",
        certificate: "/certificates/rockfeller-english.png",
      },
      {
        startDate: "2023-09-29",
        endDate: "2024-04-19",
        degree: "Analista de Inovação",
        school: "SATC - Associação Beneficente da Indústria Carbonífera de Santa Catarina",
        description: "Focado no desenvolvimento de habilidades em análise de inovação através de projetos práticos e disciplinas.",
        certificate: "/certificates/innovation-analyst.png",
      },
    ],
  },
} as const

export function getPortfolioData(language: Language) {
  const t = translations[language]
  return {
    profile: {
      ...profileBase,
      title: t.profile.title,
      tagline: t.profile.tagline,
      location: t.profile.location,
      activityPhotos: profileBase.activityPhotos.map((photo) => ({
        src: photo.src,
        alt: photo.alt,
        caption: photo.caption[language],
      })),
    },
    navItems: t.navItems,
    terminalLabel: t.terminalLabel,
    sectionTitles: {
      ...Object.fromEntries(t.navItems.map((item) => [item.id, item.label])),
      terminal: t.terminalLabel,
    } as Record<string, string>,
    ui: t.ui,
    about: t.about,
    experiences: t.experiences,
    skills: t.skills,
    projects: t.projects,
    awards: t.awards,
    education: t.education,
  }
}

export type PortfolioData = ReturnType<typeof getPortfolioData>
