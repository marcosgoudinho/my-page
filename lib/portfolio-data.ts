export const profile = {
  name: "Alex Carter",
  title: "Full-Stack Developer",
  tagline: "I build accessible, performant web applications from front to back.",
  location: "San Francisco, CA",
  email: "alex.carter@example.com",
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    whatsapp: "https://wa.me/",
  },
  activityPhotos: [
    {
      src: "/activity-1.png",
      alt: "Presenting at tech conference",
      caption: "Speaking at React Summit 2024",
    },
    {
      src: "/activity-2.png",
      alt: "Team at tech event",
      caption: "Networking at Web Dev Conference",
    },
    {
      src: "/activity-3.png",
      alt: "Workshop teaching session",
      caption: "Teaching at JavaScript Meetup",
    },
    {
      src: "/activity-4.png",
      alt: "Professional photo at event",
      caption: "Tech Conference Networking",
    },
    {
      src: "/activity-5.png",
      alt: "Team collaboration",
      caption: "Team Building Activity",
    },
    {
      src: "/activity-6.png",
      alt: "Award recognition",
      caption: "Developer Excellence Award",
    },
  ],
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
    images: ["/project-analytics.png", "/project-commerce.png", "/project-cadence.png"],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Redis"],
    url: "https://example.com",
    repo: "https://github.com",
  },
  {
    title: "Lumen Commerce",
    description:
      "Headless e-commerce storefront with a custom CMS, Stripe checkout, and sub-second page loads powered by edge rendering and smart caching.",
    images: ["/project-commerce.png", "/project-analytics.png"],
    tags: ["React", "Node.js", "Stripe", "Tailwind CSS"],
    url: "https://example.com",
    repo: "https://github.com",
  },
  {
    title: "Cadence",
    description:
      "An open-source team retrospective tool with live collaboration, anonymous voting, and timeboxed sessions. Built with WebSockets for real-time sync.",
    images: ["/project-cadence.png", "/project-analytics.png", "/project-commerce.png"],
    tags: ["Vue.js", "WebSockets", "Go", "Docker"],
    url: "https://example.com",
    repo: "https://github.com",
  },
]

export const education = [
  {
    startDate: "2015-09-01",
    endDate: "2019-05-15",
    degree: "B.Sc. in Computer Science",
    school: "University of California, Berkeley",
    description:
      "Focused on distributed systems and human-computer interaction. Graduated with honors and led the student web development club.",
    certificate: "/certificates/berkeley-cs.png",
  },
  {
    startDate: "2022-03-01",
    endDate: "2022-06-15",
    degree: "AWS Certified Solutions Architect",
    school: "Amazon Web Services",
    description:
      "Professional certification covering scalable, resilient cloud architecture and best practices.",
    certificate: "/certificates/aws-architect.png",
  },
  {
    startDate: "2023-01-15",
    endDate: "2023-04-20",
    degree: "Google Cloud Associate Cloud Engineer",
    school: "Google Cloud",
    description:
      "Certification demonstrating skills in managing and deploying applications on Google Cloud Platform.",
    certificate: "/certificates/gcp-engineer.png",
  },
  {
    startDate: "2023-05-01",
    endDate: "2023-08-10",
    degree: "Kubernetes Application Developer",
    school: "Linux Foundation",
    description:
      "Advanced certification for building, configuring, and exposing applications running on Kubernetes clusters.",
    certificate: "/certificates/kubernetes.png",
  },
  {
    startDate: "2023-09-01",
    endDate: "2023-11-30",
    degree: "Docker Certified Associate",
    school: "Docker",
    description:
      "Professional certification validating expertise in containerization and Docker platform.",
    certificate: "/certificates/docker.png",
  },
  {
    startDate: "2024-01-10",
    endDate: "2024-03-25",
    degree: "Certified Kubernetes Administrator (CKA)",
    school: "Linux Foundation",
    description:
      "Advanced certification demonstrating proficiency in managing production-grade Kubernetes clusters.",
    certificate: "/certificates/cka.png",
  },
  {
    startDate: "2024-04-01",
    endDate: "2024-06-15",
    degree: "HashiCorp Certified: Terraform Associate",
    school: "HashiCorp",
    description:
      "Certification covering Infrastructure as Code principles and Terraform fundamentals.",
    certificate: "/certificates/terraform.png",
  },
  {
    startDate: "2024-07-01",
    endDate: "2024-09-30",
    degree: "Advanced JavaScript & TypeScript",
    school: "Udemy",
    description:
      "Comprehensive course covering advanced JavaScript patterns, async programming, and TypeScript mastery.",
    certificate: "/certificates/typescript.png",
  },
]
