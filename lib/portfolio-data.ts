import type { Language } from "@/lib/language-context"

const profileBase = {
  name: "Marcos Goudinho",
  email: "marcos.goudinho@outlook.com",
  socials: {
    github: "https://github.com/marcosgoudinho",
    linkedin: "https://www.linkedin.com/in/marcos-goudinho-50631b266",
    instagram: "https://www.instagram.com/marcos.goudinho?igsh=Mmh0azJxeXF6YmVl&utm_source=qr",
    whatsapp: "https://wa.me/5548998401212",
  },
  activityPhotos: [
    { src: "/activity-1.jpeg", alt: "Presenting at tech conference", caption: { en: "Speaking at React Summit 2024", pt: "Palestra no React Summit 2024" } },
    { src: "/activity-2.jpeg", alt: "Team at tech event", caption: { en: "Networking at Web Dev Conference", pt: "Networking na Web Dev Conference" } },
    { src: "/activity-3.jpeg", alt: "Workshop teaching session", caption: { en: "Teaching at JavaScript Meetup", pt: "Ensinando no JavaScript Meetup" } },
    { src: "/activity-4.jpeg", alt: "Professional photo at event", caption: { en: "Tech Conference Networking", pt: "Networking em Conferencia de Tecnologia" } },
    { src: "/activity-5.jpeg", alt: "Team collaboration", caption: { en: "Team Building Activity", pt: "Atividade de Team Building" } },
    { src: "/activity-6.jpeg", alt: "Award recognition", caption: { en: "Developer Excellence Award", pt: "Premio de Excelencia em Desenvolvimento" } },
  ],
}

const translations = {
  en: {
    profile: {
      title: "Full-Stack Developer",
      tagline: "I build accessible, performant web applications from front to back.",
      location: "Criciuma, SC",
    },
    navItems: [
      { id: "about", label: "About" },
      { id: "experience", label: "Experience" },
      { id: "skills", label: "Skills" },
      { id: "projects", label: "Projects" },
      { id: "education", label: "Courses" },
    ],
    terminalLabel: "Terminal",
    ui: {
      viewMore: "View more",
      viewLess: "View less",
      sourceCode: "Source code",
      viewCertificate: "View Certificate",
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
      "I'm a Full Stack Software Developer passionate about turning ideas into products that create real impact. I currently work on the development and evolution of enterprise systems, contributing to new features and exploring how Artificial Intelligence can be integrated to make business processes smarter and more efficient.",
      "Over the past few months, I've been deeply focused on studying AI integrations, exploring how large language models can be embedded into software products to solve real-world problems and improve user experiences.",
      "Beyond my professional work, I'm also building my own mobile application for psychology clinics, combining technology and product thinking to simplify daily operations for mental health professionals.",
      "My goal is to build an international career working remotely with teams that value software quality, innovation, and continuous learning. I believe great products are created by combining solid engineering, curiosity, and a constant focus on solving real problems in the simplest and most effective way.",
    ],
    experiences: [
      {
        period: "2025/2 - Present",
        role: "Junior Full-Stack Developer",
        company: "Agrosys",
        url: "https://www.agrosys.com.br/",
        description:
          "Today, I work in the innovation team at Agrosys, where we focus on researching and implementing new technologies and features for the company's ERP system. Our current main focus is integrating Artificial Intelligence (AI) into the ERP. I also develop and maintain ERP screens and business features, in addition to maintaining the company's Cordova-based mobile applications and managing their publication and updates on the Google Play Store and Apple App Store.",
        stack: ["Progress ABL", "AngularJS", "jQuery", "JavaScript", "PHP", "Cordova", "Docker", "AI Integration"],
      },
      {
        period: "2025/1",
        role: "Full Stack Developer Intern",
        company: "Agrosys",
        url: "https://www.agrosys.com.br/",
        description:
          "During my internship at Agrosys, I worked on the development and maintenance of ERP features while building a strong foundation in software development. I gained hands-on experience with Progress OpenEdge ABL, JavaScript, jQuery, HTML, CSS, and Linux, contributing to real-world business applications and improving my understanding of enterprise software development, debugging, and system maintenance.",
        stack: ["Progress ABL", "JavaScript", "jQuery", "HTML", "CSS", "Linux"],
      },
    ],
    skills: [
      { category: "Frontend", items: ["JavaScript", "AngularJS", "React", "Bootstrap"] },
      { category: "Backend", items: ["Node.js", "Java", "Spring Boot", "Progress ABL", "REST APIs"] },
      { category: "Database & Infra", items: ["PostgreSQL", "Docker", "Kubernetes", "Vercel", "Google Cloud Platform", "AWS"] },
      { category: "Tools & Practices", items: ["Git", "CI/CD", "Playwright", "Figma", "Agile"] },
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
    education: [
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
      title: "Desenvolvedor Full-Stack",
      tagline: "Eu construo aplicacoes web acessiveis e performaticas, do front ao back.",
      location: "Criciuma, SC",
    },
    navItems: [
      { id: "about", label: "Sobre" },
      { id: "experience", label: "Experiencia" },
      { id: "skills", label: "Habilidades" },
      { id: "projects", label: "Projetos" },
      { id: "education", label: "Cursos" },
    ],
    terminalLabel: "Terminal",
    ui: {
      viewMore: "Ver mais",
      viewLess: "Ver menos",
      sourceCode: "Codigo fonte",
      viewCertificate: "Ver Certificado",
      closeCertificate: "Fechar certificado",
      clickOutsideToClose: "Clique fora para fechar ou pressione Esc",
      contactTitle: "Vamos construir algo juntos",
      contactText:
        "Estou sempre aberto a discutir novos projetos, oportunidades ou apenas trocar ideias. Me mande uma mensagem e eu retorno o mais rapido possivel.",
      getInTouch: "Entre em contato",
      designedBy: (name: string) =>
        `Projetado e desenvolvido por ${name}. Construido com Next.js e Tailwind CSS, hospedado na Vercel.`,
    },
    about: [
      "Sou um Desenvolvedor de Software Full Stack apaixonado por transformar ideias em produtos que geram impacto real. Atualmente trabalho no desenvolvimento e evolucao de sistemas corporativos, contribuindo com novas funcionalidades e explorando como a Inteligencia Artificial pode ser integrada para tornar os processos de negocio mais inteligentes e eficientes.",
      "Nos ultimos meses, tenho me dedicado profundamente ao estudo de integracoes de IA, explorando como grandes modelos de linguagem podem ser incorporados a produtos de software para resolver problemas reais e melhorar a experiencia do usuario.",
      "Alem do meu trabalho profissional, tambem estou construindo meu proprio aplicativo mobile para clinicas de psicologia, combinando tecnologia e visao de produto para simplificar as operacoes diarias de profissionais da saude mental.",
      "Meu objetivo e construir uma carreira internacional trabalhando remotamente com times que valorizam qualidade de software, inovacao e aprendizado continuo. Acredito que grandes produtos sao criados combinando engenharia solida, curiosidade e foco constante em resolver problemas reais da forma mais simples e eficaz possivel.",
    ],
    experiences: [
      {
        period: "2025/2 - Atual",
        role: "Desenvolvedor Full-Stack Junior",
        company: "Agrosys",
        url: "https://www.agrosys.com.br/",
        description:
          "Atualmente, trabalho no time de inovacao da Agrosys, onde nosso foco e pesquisar e implementar novas tecnologias e funcionalidades para o sistema ERP da empresa. Nosso principal foco atual e integrar Inteligencia Artificial (IA) ao ERP. Tambem desenvolvo e mantenho telas e funcionalidades de negocio do ERP, alem de manter os aplicativos mobile da empresa baseados em Cordova e gerenciar sua publicacao e atualizacoes na Google Play Store e Apple App Store.",
        stack: ["Progress ABL", "AngularJS", "jQuery", "JavaScript", "PHP", "Cordova", "Docker", "Integracao de IA"],
      },
      {
        period: "2025/1",
        role: "Estagiario Full Stack Developer",
        company: "Agrosys",
        url: "https://www.agrosys.com.br/",
        description:
          "Durante meu estagio na Agrosys, trabalhei no desenvolvimento e manutencao de funcionalidades do ERP enquanto construia uma base solida em desenvolvimento de software. Ganhei experiencia pratica com Progress OpenEdge ABL, JavaScript, jQuery, HTML, CSS e Linux, contribuindo com aplicacoes de negocio reais e aprimorando meu entendimento sobre desenvolvimento de software corporativo, debugging e manutencao de sistemas.",
        stack: ["Progress ABL", "JavaScript", "jQuery", "HTML", "CSS", "Linux"],
      },
    ],
    skills: [
      { category: "Frontend", items: ["JavaScript", "AngularJS", "React", "Bootstrap"] },
      { category: "Backend", items: ["Node.js", "Java", "Spring Boot", "Progress ABL", "REST APIs"] },
      { category: "Banco de Dados & Infra", items: ["PostgreSQL", "Docker", "Kubernetes", "Vercel", "Google Cloud Platform", "AWS"] },
      { category: "Ferramentas & Praticas", items: ["Git", "CI/CD", "Playwright", "Figma", "Agile"] },
    ],
    projects: [
      {
        title: "Marketplace System",
        description:
          "Um dashboard de analytics em tempo real para times de produto, com rastreamento de eventos personalizado, analise de funil e relatorios compartilhaveis. Processa milhoes de eventos por dia.",
        images: ["/project-analytics.png", "/project-commerce.png", "/project-cadence.png"],
        tags: ["Angular", "TypeScript", "Node.js", "Express.js", "JWT", "Multer", "PostgreSQL", "Docker Compose", "GitHub Actions"],
        url: "https://example.com",
        repo: "https://github.com/marcosgoudinho/marketplace-system",
      },
      {
        title: "My Page",
        description:
          "Um site de portfolio pessoal construido com Next.js, apresentando meus projetos, experiencia e habilidades. Possui design responsivo, animacoes suaves e performance otimizada.",
        images: ["/project-analytics.png", "/project-commerce.png", "/project-cadence.png"],
        tags: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel", "GitHub Actions"],
        url: "https://www.marcosgoudinho.dev.br/",
        repo: "https://github.com/marcosgoudinho/my-page.git",
      },
    ],
    education: [
      {
        startDate: "2024-07-01",
        endDate: "2026-07-04",
        degree: "Fluencia em Ingles",
        school: "Rockfeller Language Center",
        description: "Focado em alcancar fluencia em ingles atraves de cursos intensivos e experiencias imersivas no idioma.",
        certificate: "/certificates/rockfeller-english.png",
      },
      {
        startDate: "2023-09-29",
        endDate: "2024-04-19",
        degree: "Analista de Inovacao",
        school: "SATC - Associacao Beneficente da Industria Carbonifera de Santa Catarina",
        description: "Focado no desenvolvimento de habilidades em analise de inovacao atraves de projetos praticos e disciplinas.",
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
    ui: t.ui,
    about: t.about,
    experiences: t.experiences,
    skills: t.skills,
    projects: t.projects,
    education: t.education,
  }
}

export type PortfolioData = ReturnType<typeof getPortfolioData>
