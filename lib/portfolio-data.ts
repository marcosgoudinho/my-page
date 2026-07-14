export const profile = {
  name: "Alex Carter",
  title: "Full-Stack Developer",
  tagline: "I build accessible, performant web applications from front to back.",
  location: "San Francisco, CA",
  email: "alex.carter@example.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
  },
}

export const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Courses" },
] as const

export const experiences = [
  {
    period: "2023 — Present",
    role: "Senior Full-Stack Developer",
    company: "Northwind Labs",
    url: "https://example.com",
    description:
      "Lead development of a multi-tenant SaaS platform serving 40k+ monthly users. Architected the migration from a monolith to a modular Next.js + Node.js stack, cutting page load times by 45%.",
    stack: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    period: "2021 — 2023",
    role: "Full-Stack Developer",
    company: "Brightwave Studio",
    url: "https://example.com",
    description:
      "Built and shipped client web apps across e-commerce, fintech, and healthcare. Owned features end to end, from database schema design to polished, accessible interfaces.",
    stack: ["React", "Express", "MongoDB", "Tailwind CSS", "Docker"],
  },
  {
    period: "2019 — 2021",
    role: "Junior Web Developer",
    company: "Pixel & Co.",
    url: "https://example.com",
    description:
      "Developed responsive marketing sites and internal tools. Collaborated closely with designers to translate Figma mockups into pixel-perfect, performant pages.",
    stack: ["JavaScript", "Vue.js", "Sass", "PHP"],
  },
]

export const skills = [
  {
    category: "Frontend",
    items: ["TypeScript", "React", "Next.js", "Vue.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "Python", "Go", "GraphQL", "REST APIs"],
  },
  {
    category: "Database & Infra",
    items: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Vercel"],
  },
  {
    category: "Tools & Practices",
    items: ["Git", "CI/CD", "Jest", "Playwright", "Figma", "Agile"],
  },
]

export const projects = [
  {
    title: "Atlas Analytics",
    description:
      "A real-time analytics dashboard for product teams, with custom event tracking, funnel analysis, and shareable reports. Handles millions of events per day.",
    image: "/project-analytics.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
    url: "https://example.com",
    repo: "https://github.com",
  },
  {
    title: "Lumen Commerce",
    description:
      "Headless e-commerce storefront with a custom CMS, Stripe checkout, and sub-second page loads powered by edge rendering and smart caching.",
    image: "/project-commerce.png",
    tags: ["React", "Node.js", "Stripe", "Tailwind CSS"],
    url: "https://example.com",
    repo: "https://github.com",
  },
  {
    title: "Cadence",
    description:
      "An open-source team retrospective tool with live collaboration, anonymous voting, and timeboxed sessions. Built with WebSockets for real-time sync.",
    image: "/project-cadence.png",
    tags: ["Vue.js", "WebSockets", "Go", "Docker"],
    url: "https://example.com",
    repo: "https://github.com",
  },
]

export const education = [
  {
    period: "2015 — 2019",
    degree: "B.Sc. in Computer Science",
    school: "University of California, Berkeley",
    description:
      "Focused on distributed systems and human-computer interaction. Graduated with honors and led the student web development club.",
    certificate: "/certificates/berkeley-cs.png",
  },
  {
    period: "2022",
    degree: "AWS Certified Solutions Architect",
    school: "Amazon Web Services",
    description:
      "Professional certification covering scalable, resilient cloud architecture and best practices.",
    certificate: "/certificates/aws-architect.png",
  },
]
