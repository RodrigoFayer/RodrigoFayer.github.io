export const personalInfo = {
  name: "Rodrigo Fayer",
  title: "Senior Software Engineer & Team Lead",
  location: "Juiz de Fora, Brazil (UTC-3)",
  availability:
    "Open to remote roles · 4+ hours daily overlap with US East Coast, full morning overlap with Europe",
  email: "rodrigofayer26@gmail.com",
  phone: "+55 32 98711-0939",
  github: "https://github.com/rodrigofayer",
  linkedin: "https://www.linkedin.com/in/rodrigo-fayer/",
  summary:
    "Senior Software Engineer and Team Lead with 5+ years of experience building and scaling web applications for a B2B SaaS marketing analytics platform used by 10,000+ companies. Full-stack across Laravel, Vue.js, React.js and Node.js, with end-to-end ownership of business-critical systems, including the billing infrastructure behind R$1M+ in monthly recurring revenue. Currently lead a team of 4 engineers — defining cycle priorities, tracking delivery KPIs and shipping the changes that move them — while staying hands-on with high-impact technical work.",
};

export const workExperience = [
  {
    company: "Reportei",
    location: "Remote",
    position: "Team Lead — Core Team",
    period: "Jan 2025 - Present",
    achievements: [
      "Promoted from Mid-Level to Senior Software Engineer in March 2026.",
      "Lead the Core team of 4 engineers end-to-end — cycle planning, scope definition, code review — and own the delivery KPIs reported to leadership.",
      "Own the company's churn-reduction and onboarding-activation initiatives: doubled the onboarding activation rate from 15% to 30% in six months, from metric analysis through to shipped product changes.",
      "Contributed to the design and launch of a new product line that reached R$100K+ in monthly recurring revenue within its first year.",
      "Drive technical decision-making and architecture reviews across the team's projects, and mentor engineers through code review and regular feedback.",
    ],
  },
  {
    company: "Reportei",
    location: "Remote",
    position: "Mid-Level Software Engineer",
    period: "Jul 2022 - Jan 2025",
    achievements: [
      "Owned and evolved the company's billing system — today handling R$1M+ in monthly recurring revenue — under high reliability requirements.",
      "Owned support escalations, resolving 50+ tickets per month and unblocking the development team for faster issue resolution.",
      "Drafted task scopes, mentored two interns to independent contribution, and ran regular feedback sessions.",
    ],
  },
  {
    company: "Reportei",
    location: "Remote",
    position: "Junior Software Engineer",
    period: "Dec 2021 - Jul 2022",
    achievements: [
      "Built and maintained features with Laravel, Vue.js and Node.js; ran code reviews, releases and deployments.",
      "Took on informal task prioritization, helping teammates unblock technical challenges.",
    ],
  },
  {
    company: "Reportei",
    location: "Remote",
    position: "Software Development Intern",
    period: "Apr 2021 - Dec 2021",
    achievements: [
      "Delivered an RD Station platform integration and contributed to a revamp of the reporting architecture with customizable metrics, using Laravel, Vue.js and Node.js.",
    ],
  },
];

export const education = [
  {
    institution:
      "Instituto Federal de Educação, Ciência e Tecnologia do Sudeste de Minas Gerais",
    location: "Juiz de Fora, Brazil",
    degree: "BSc in Information Systems",
    period: "2021 - Aug 2026",
    achievements: [],
  },
  {
    institution: "EC Brighton English Language School",
    location: "Brighton, England",
    degree: "General English (Immersion Program)",
    period: "2023",
    achievements: [],
  },
];

export const skills = {
  programmingLanguages: ["PHP", "JavaScript", "TypeScript", "Java"],
  frontendDevelopment: ["Vue.js", "React.js", "Tailwind CSS", "HTML", "CSS"],
  backendDevelopment: ["Laravel", "Node.js", "Express.js", "Spring Boot", "REST APIs"],
  databaseAndStorage: ["MySQL", "MongoDB", "Redis"],
  cloudAndDevOps: [
    "Docker",
    "DigitalOcean",
    "GitHub Actions",
    "Jenkins",
    "CI/CD",
    "Git",
  ],
  toolsAndServices: ["Sentry", "Posthog", "New Relic", "Stripe"],
  practices: [
    "System Design",
    "Automated Testing",
    "Code Review",
    "Technical Mentoring",
    "Agile/Scrum",
  ],
  spokenLanguages: [
    "English (Professional working proficiency)",
    "Portuguese (Native)",
  ],
};

export const projects = [
  {
    title: "Billing Architecture & Subscription System",
    description: [
      "Own the billing infrastructure behind R$1M+ in monthly recurring revenue, under high reliability requirements.",
      "Designed and evolved the Axis billing architecture at Reportei, from initial launch to full ownership.",
      "Created CLI tools to generate dynamic pricing tables and to handle Stripe plan migrations due to inflation adjustments.",
      "Acted as the lead developer during two Black Friday events, ensuring billing stability and scalability under peak demand.",
    ],
  },
  {
    title: "Onboarding Activation & Churn Reduction",
    description: [
      "Own the company's churn-reduction and onboarding-activation initiatives end-to-end.",
      "Doubled the onboarding activation rate from 15% to 30% in six months.",
      "Ran the full loop: metric analysis, hypothesis definition, and shipped product changes.",
      "Defined the indicators used by leadership to track product and team performance.",
    ],
  },
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
    title: "Report Editing Architecture",
    description: [
      "Designed and implemented the core architecture for Reportei's report editing system, the foundation used by over 1 million reports to date.",
      "Defined much of the Vue.js component lifecycle management, leveraging its reactivity system for performance and consistency across dynamic editing experiences.",
      "The architecture, created in late 2021, remains the core of the report editor in production today.",
    ],
  },
  {
    title: "Marketing Data API Integrations",
    description: [
      "Built the entire RD Station integration during a company hackathon, working from early API documentation and providing feedback that shaped the API.",
      "Migrated the Hotmart integration from a webhook-based system to a more stable API-driven solution.",
      "Led the implementation of core parts of the Meta Ads and Google Ads integrations.",
      "Helped maintain and evolve 30+ marketing data integrations supporting thousands of client reports.",
    ],
  },
];
