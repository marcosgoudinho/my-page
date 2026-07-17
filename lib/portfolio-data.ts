export const profile = {
  name: "Marcos Goudinho",
  title: "Full-Stack Developer",
  tagline: "I build accessible, performant web applications from front to back.",
  location: "Criciúma, SC",
  email: "marcos.goudinho@outlook.com",
  socials: {
    github: "https://github.com/marcosgoudinho",
    linkedin: "https://www.linkedin.com/in/marcos-goudinho-50631b266",
    instagram: "https://www.instagram.com/marcos.goudinho?igsh=Mmh0azJxeXF6YmVl&utm_source=qr",
    whatsapp: "https://wa.me/qr/UP36PTWU2XBCC1",
  },
  activityPhotos: [
    {
      src: "/activity-1.jpeg",
      alt: "Presenting at tech conference",
      caption: "Speaking at React Summit 2024",
    },
    {
      src: "/activity-2.jpeg",
      alt: "Team at tech event",
      caption: "Networking at Web Dev Conference",
    },
    {
      src: "/activity-3.jpeg",
      alt: "Workshop teaching session",
      caption: "Teaching at JavaScript Meetup",
    },
    {
      src: "/activity-4.jpeg",
      alt: "Professional photo at event",
      caption: "Tech Conference Networking",
    },
    {
      src: "/activity-5.jpeg",
      alt: "Team collaboration",
      caption: "Team Building Activity",
    },
    {
      src: "/activity-6.jpeg",
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
    period: "2025/2 — Present",
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
]

export const skills = [
  {
    category: "Frontend",
    items: ["JavaScript", "AngularJS", "React", "Bootstrap"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Java", "Spring Boot", "Progress ABL", "REST APIs"],
  },
  {
    category: "Database & Infra",
    items: ["PostgreSQL", "Docker", "Kubernetes","Vercel", "Google Cloud Platform", "AWS"],
  },
  {
    category: "Tools & Practices",
    items: ["Git", "CI/CD", "Playwright", "Figma", "Agile"],
  },
]

export const projects = [
  {
    title: "Marketplace System",
    description:
      "A real-time analytics dashboard for product teams, with custom event tracking, funnel analysis, and shareable reports. Handles millions of events per day.",
    images: ["/project-analytics.png", "/project-commerce.png", "/project-cadence.png"],
    tags: ["Angular", "TypeScript", "Node.js", "Express.js", "JWT", "Multer", "PostgreSQL", "Docker Compose", "GitHub Actions"],
    url: "https://example.com",
    repo: "https://github.com/marcosgoudinho/marketplace-system",
  }
]

export const education = [
  {
    startDate: "2024-07-01",
    endDate: "2026-07-04",
    degree: "Fluency in English",
    school: "Rockfeller Language Center",
    description:
      "Focused on achieving fluency in English through intensive courses and immersive language experiences.",
    certificate: "/certificates/rockfeller-english.png",
  },
  {
    startDate: "2023-09-29",
    endDate: "2024-04-19",
    degree: "Innovation Analyst",
    school: "SATC - Charitable Association of the Coal Industry of Santa Catarina",
    description:
      "Focused on developing skills in innovation analysis through practical projects and coursework.",
    certificate: "/certificates/innovation-analyst.png",
  }
]
