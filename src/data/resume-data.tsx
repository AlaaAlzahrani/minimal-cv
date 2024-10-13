import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import {  AcademiconsResearchgate, AcademiconsGoogleScholar, SimpleIconsOrcid, GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Alaa Alzahrani",
  initials: "AZ",
  location: "Riyadh, Saudi Arabia",
  locationLink: "https://www.google.com/maps/place/Riyadh",
  about:
  "Experimental researcher, statistical modeler, and programmer with a PhD in Applied Linguistics.",
  summary:
    "Researcher and data scientist with a unique blend of skills in experimental design, advanced statistical modeling, and programming. I have a track record of conducting theory-driven and exploratory studies and building cutting-edge analytical models.",  
    avatarUrl: "https://i.imgur.com/1BlYBfs.png",
  personalWebsiteUrl: "https://alaaalzahrani.github.io/",
  contact: {
    email: "alzahrani.alaaa@gmail.com",
    social: [
      {
        name: "ResearchGate",
        url: "https://www.researchgate.net/profile/Alaa_Alzahrani2",
        icon: AcademiconsResearchgate,
      },
      {
        name: "Google Scholar",
        url: "https://scholar.google.com/citations?user=H76z_oEAAAAJ&hl",
        icon: AcademiconsGoogleScholar,
      },
      {
        name: "ORCID",
        url: "https://orcid.org/0000-0002-9914-915X",
        icon: SimpleIconsOrcid,
      },
      {
        name: "GitHub",
        url: "https://github.com/AlaaAlzahrani",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alaa-alzahrani-87b830210/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/zahrani_alaa",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "King Saud University, Saudi Arabia",
      degree: "PhD in Applied Linguistics",
      start: "2019",
      end: "2023",
    },
    {
      school: "King Saud University, Saudi Arabia",
      degree: "MA in Applied Linguistics",
      start: "2016",
      end: "2018",
    },
    {
      school: "Princess Noura University, Saudi Arabia",
      degree: "BA in Translation",
      start: "2010",
      end: "2015",
    },
  ],
  work: [
    {
      company: "Feather",
      link: "https://feathersa.com/",
      badges: ["Data"],
      title: "Lead Data Analyst",
      logo: ConsultlyLogo,
      start: "2024",
      end: null,
      description:
      "Providing digital marketing analytics, analyzing data from over 30 companies across multiple social platforms."
    },
    {
      company: "Princess Noura University",
      link: "https://pnu.edu.sa/en/Departments/DevConsulServices/Pages/Financialandaccounting.aspx",
      badges: ["Research"],
      title: "Research Assistant",
      logo: ParabolLogo,
      start: "2022",
      end: "2022",
      description:
        "Conducted in-depth analysis of school textbooks using discourse analysis frameworks. Resolved data-related issues and maintained effective communication with colleagues throughout the research process.",
    },
    {
      company: "Prince Sultan University",
      link: "https://www.psu.edu.sa/en/CHS/ALLAB",
      badges: ["Research"],
      title: "Research Assistant",
      logo: ClevertechLogo,
      start: "2018",
      end: "2018",
      description:
        "Managed and analyzed data from multiple tasks involving over 100 participants. Collaborated closely with fellow researchers, ensuring smooth project execution.",
    },
  ],
  skills: [
    "Critical thinking",
    "Problem solving",
    "Experimental design",
    "Statistics", 
    "R",
    "Python",
    "TypeScript",
    "React/Next.js",
    "SQL/Firebase"
  ],

  publications: [
    {
      title: "Jiwar: A database and calculator for word neighborhood measures in 40 Languages",
      journal: "",
      year: 2024,
      link: "",
      status:"under-review"
    },
    {
      title: "The acceptability and validity of AI-generated psycholinguistic stimuli",
      journal: "",
      year: 2024,
      link: "https://www.preprints.org/manuscript/202404.1074/v1",
      status:"under-review"
    },
    {
      title: "The role of language learning technologies: Insights from the Saudi context",
      journal: "",
      year: 2024,
      link: "",
      status:"accepted"
    },
    {
      title: "Arabic Syntactic Analyzer (ARSA): an automated tool for the analysis of Arabic written texts",
      journal: "",
      year: 2024,
      link: "",
      status:"under-review"
    },
    {
      title: "L2 video comprehension: effects of video and learner variables",
      journal: "",
      year: 2024,
      link: "",
      status:"under-review"
    },
    {
      title: "I can’t see you two: L2 Arabic speakers cannot anticipate dual nouns",
      journal: "",
      year: 2024,
      link: "",
      status:"under-review"
    },
    {
      title: "The predictive use of gender-marked verbs in L1 and L2 Arabic speakers",
      journal: "",
      year: 2024,
      link: "",
      status:"under-review"
    },
    {
      title: "Utility of Kolmogorov complexity measures: Analysis of L2 groups and L1 backgrounds",
      journal: "PLOS ONE",
      year: 2024,
      link: "Utility of Kolmogorov complexity measures: Analysis of L2 groups and L1 backgrounds",
      status:"published"
    },
    {
      title: "Syntactic priming in the classroom: using narratives to prime L2 Arabic speakers",
      journal: "Asian-Pacific Journal of Secondand Foreign Language Education",
      year: 2024,
      link: "https://sfleducation.springeropen.com/articles/10.1186/s40862-024-00292-y",
      status:"published"
    },
    {
      title: "LexArabic: A receptive vocabulary size test to estimate Arabic proficiency",
      journal: "Behavior Research Methods",
      year: 2023,
      link: "https://link.springer.com/article/10.3758/s13428-023-02286-z",
      status:"published"
    },
    {
      title: "What is the next structure? Guessing enhances L2 syntactic learning in a syntactic priming task",
      journal: "Frontiers in Psychology",
      year: 2023,
      link: "https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2023.1188344/full",
      status:"published"
    },
  ],
  projects: [
    {
      title: "ARSA",
      techStack: ["Python", "Camel Parser", "NLTK"],
      description:
        "An automatic tool that analyzes syntactic complexity in Arabic written texts",
      logo: MonitoLogo,
      link: {
        label: "ARSA",
        href: "https://github.com/AlaaAlzahrani/ARSA",
      },
    },
    {
      title: "Jiwar",
      techStack: ["Python", "phonemizer"],
      description:
        "A linguistic neighborhood calculator",
      logo: MonitoLogo,
      link: {
        label: "JiWAR",
        href: "https://github.com/AlaaAlzahrani/Jiwar",
      },
    },
    {
      title: "LexArabic",
      techStack: [
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
      ],
      description:
        "A quick and validated vocabulary test designed to assess Arabic proficiency for both native and non-native adult Arabic speakers.",
      logo: ParabolLogo,
      link: {
        label: "LexArabic",
        href: "https://lexarabic.netlify.app/",
      },
    },
    {
      title: "Professional Portfolio",
      techStack: [
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
      ],
      description:
        "A one-page professional portfolio design.",
      logo: EvercastLogo,
      link: {
        label: "Portfolio",
        href: "https://github.com/AlaaAlzahrani/bushra_website",
      },
    },
    {
      title: "Academic Portfolio",
      techStack: [
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
      ],
      description: "A minimalist one-page academic portfolio design.",
      logo: ConsultlyLogo,
      link: {
        label: "Portfolio",
        href: "",
      },
    },
    {
      title: "Mood Tracker",
      techStack: ["full-stack", "TypeScript", "Next.js", "firebase"],
      description:
        "An app that allows users to enter and record their daily moods",
      logo: MonitoLogo,
      link: {
        label: "BROODLE",
        href: "https://broodl-alaa.netlify.app/",
      },
    },
  ],
} as const;
