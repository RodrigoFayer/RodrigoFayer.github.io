export const personalInfo = {
  name: "Rodrigo Fayer",
  location: "Juiz de Fora, Brazil",
  email: "rodrigofayer26@gmail.com",
  github: "https://github.com/rodrigofayer",
  linkedin: "https://www.linkedin.com/in/rodrigo-fayer/",
};

export const workExperience = [
  {
    company: "Reportei",
    location: "Remote",
    position: "Mid-level Software Developer | Team Lead",
    period: "Jan 2025 - Present",
    achievements: [
      "Currently leading the Core team in a company with 10,000+ clients.",
      "Responsible for defining the team’s OKRs and roadmap.",
      "Guide and support three developers while also contributing to strategic technical projects hands-on."
    ],
  },
  {
    company: "Reportei",
    location: "Remote",
    position: "Mid-level Software Developer",
    period: "Jun 2022 - Jan 2025",
    achievements: [
      "Mentored and managed three interns, two of whom were promoted and continue to perform at a high level within the company.",
      "A dynamic pricing table with Stripe integration.",
      "CLI command to migrate plans due to inflation adjustments.",
      "Created a JavaScript grid component with drag and drop and resizable items, enhancing the visual editor’s flexibility."
    ],
  },
  {
    company: "Reportei",
    location: "Remote",
    position: "Junior Software Developer",
    period: "Dec 2021 - Jun 2022",
    achievements: [
      "Led all required updates to support the new Stripe-based subscription model (plan to axis migration).",
      "Took on responsibilities such as code reviews and deploys.",
      "Supported other teams and projects during a period when the development team had only three members, being the most experienced dev on the team at the time."
    ],
  },
  {
    company: "Reportei",
    location: "Remote",
    position: "Software Developer Intern",
    period: "Apr 2021 - Dec 2021",
    achievements: [
      "Contributed to the launch of Reportei V4, participating in one of the company’s most important product milestones.",
      "Built a full integration with RD Station’s new API from scratch during a company hackathon."
    ],
  },
];

export const education = [
  {
    institution: "Instituto Federal de Educação, Ciência e Tecnologia do Sudeste de Minas Gerais",
    location: "Juiz de Fora, Brazil",
    degree: "Bachelor of Information systems",
    period: "Jan 2021 - Present",
    achievements: [
    ],
  },
  {
    institution: "EC Brighton English Language School",
    location: "Brighton, England",
    degree: "General English 30 lessons / 22.5 hours",
    period: "Jul 2023 - Aug 2023",
    achievements: [
    ],
  },
];
export const skills = {
  programmingLanguages: [
    "JavaScript",
    "PhP",
    "Java",
    "Go",
  ],
  frontendDevelopment: [
    "VueJs",
    "ReactJs",
    "Tailwind CSS",
    "HTML",
    "CSS",
  ],
  backendDevelopment: ["Laravel", "Nodejs", "Expressjs", "Go"],
  databaseAndStorage: ["MySQL", "PostgreSQL", "MongoDB", "Redis"],
  cloudAndDevOps: ["AWS", "Jenkins", "Docker", "GitHub Actions", "Digital Ocean"],
  toolsAndServices: [  
    "Sentry",
    "Posthog",
    "New Relic",
  ],
};

export const projects = [
  {
    title: "Grid JavaScript Library",
    description: [
      "Developed a custom JavaScript grid library with drag-and-drop and resizable elements.",
      "Powers over 1.5 million reports created in Reportei.",
      "Solved long-standing issues with PDF generation and mobile responsiveness.",
      "Replaced the previous third-party solution, reducing support tickets from over 200 to just 4.",
    ],
  },
  {
    title: "Billing Architecture & Axis System",
    description: [
      "Played a key role in designing and improving the Axis architecture at Reportei during its initial launch, and later became fully responsible for maintaining and evolving it.",
      "Created CLI tools to generate dynamic pricing tables and to handle plan migrations on Stripe due to inflation adjustments.",
      "Acted as the lead developer during two Black Friday events, ensuring billing system stability and scalability under high demand.",
    ],
  },
  {
    title: "Social Media Analytics API Integrations",
    description: [
      "Developed the entire RD Station integration during a company hackathon, building directly on early API documentation and providing key feedback to improve the API’s alignment with Reportei’s needs.",
      "Migrated the Hotmart integration from a webhook-based system to a more stable API-driven solution.",
      "Took the lead on implementing core parts of the Meta Ads and Google Ads integrations",
      "Helped maintain and evolve 30+ marketing data integrations that support thousands of client reports inside Reportei."
    ],
  },
  {
    title: "Report Editing Architecture",
    description: [
      "Designed and implemented the core architecture for Reportei’s report editing system, building the foundation used by over 1 million reports to date.",
      "Defined much of the Vue.js component lifecycle management, leveraging its reactivity system to ensure performance and consistency across dynamic editing experiences.",
      "The architecture, created in late 2021, remains the core of the report editor in production today",
    ],
  },
];
