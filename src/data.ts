// ---------- Types ----------

export interface ContactLink {
  label: string;
  href: string;
}

export interface Publication {
  title: string;
  venue: string;
  year: string;
  bullets: string[];
  links: ContactLink[];
}

export interface ExperienceEntry {
  org: string;
  role: string;
  location: string;
  start: string;
  end: string;
  bullets: string[];
}

export interface ProjectEntry {
  title: string;
  stack: string[];
  bullets: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

// ---------- Contact ----------

export const contactLinks: ContactLink[] = [
  { label: "Email", href: "mailto:dpidu001@gmail.com" },
  { label: "GitHub", href: "https://github.com/Davidch4r" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/david-pidugu-712929244/" },
];

// ---------- Publications ----------

export const publications: Publication[] = [
  {
    title: "Connectivity Oracle Under Vertex Failures by Shortcutting Unbreakable Decomposition",
    venue: "International Colloquium on Automata, Languages and Programming (ICALP), Track A",
    year: "2026",
    bullets: [
      "Designed a connectivity oracle under vertex failures with near-linear preprocessing and optimal O(k) query time.",
      "Introduced shortcutting and patch-set techniques that reduce space complexity from quadratic to near-linear.",
      "Extended the unbreakable decomposition framework to obtain update complexity independent of graph size.",
    ],
    links: [],
  },
  {
    title: "Energy-Aware Decentralized Federated Learning",
    venue: "Manuscript — University of Michigan Mathematics REU",
    year: "2025",
    bullets: [
      "Developed a decentralized federated machine learning framework optimizing energy consumption across distributed clients.",
      "Combined pruning and adaptive network growth to dynamically modify model topology during training.",
      "Achieved up to an 80% reduction in training and inference energy costs through architecture optimization.",
    ],
    links: [],
  },
];

// ---------- Experience ----------

export const experience: ExperienceEntry[] = [
  {
    org: "University of Michigan Theory of Computation Lab",
    role: "Theory Research Assistant, Grader",
    location: "Ann Arbor, Michigan",
    start: "Aug 2025",
    end: "Present",
    bullets: [
      "Conduct research in graph algorithms, distributed algorithms, and lattice cryptography under University of Michigan theory faculty.",
      "Work on algorithmic problems including fast graph connectivity under vertex failures and Boolean matrix multiplication via structural methods, alongside complexity problems involving coding theory and Lean 4.",
      "Grade for EECS 376 (Intro to CS Theory) and EECS 475 (Cryptography), serving 300+ students.",
    ],
  },
  {
    org: "University of Michigan Mathematics REU",
    role: "Machine Learning Research Assistant",
    location: "Ann Arbor, Michigan",
    start: "Jan 2025",
    end: "Aug 2025",
    bullets: [
      "Conducted research on energy-aware decentralized federated learning, reducing energy consumption by up to 80%.",
      "Developed adaptive training methods combining pruning, dynamic network growth, and teacher/student architecture.",
    ],
  },
  {
    org: "Detection for Nuclear Nonproliferation Group (DNNG)",
    role: "Software Engineering Research Intern",
    location: "Ann Arbor, Michigan",
    start: "May 2024",
    end: "Dec 2024",
    bullets: [
      "Developed C++ and Rust systems for 3D radiation pathway reconstruction using double-scatter kinematics.",
      "Led the integration of machine learning models with high general accuracy using TensorFlow and PyTorch.",
      "Built an augmented reality system on Microsoft HoloLens 2 to visualize gamma and neutron radiation pathways — including 3D mesh generation, real-time cone visualization, dynamic heat maps, statistical graphs, and voice-recognition-enabled UI for mode-switching, using Unity and C#.",
    ],
  },
];

// ---------- Projects ----------

export const projects: ProjectEntry[] = [
  {
    title: "GameGrid",
    stack: ["TypeScript", "HTML", "CSS", "SQL"],
    bullets: [
      "Built a multiplayer web-based game platform featuring Minesweeper, Spelling Bee, and Sudoku, with custom game modes and modifications to each classic.",
      "Implemented real-time multiplayer support for concurrent gameplay sessions across different games.",
      "Designed and integrated a SQL-based persistence system for saving and loading game state.",
      "Collaborated in a team of three to design and develop the full-stack web application.",
    ],
  },
  {
    title: "Atlas Vision Pro",
    stack: ["Python", "TensorFlow", "NumPy", "Google Maps API", "Matplotlib", "OpenCV"],
    bullets: [
      "Led a team of five to build a computer vision model recognizing locations across the continental United States, southern Canada, and northern Mexico from a single street view image, using over 1.5 million training data points.",
      "Achieved over 85% accuracy within 50 miles of the true location.",
      "Project lead under Michigan Hackers — delegated tasks and developed the majority of the image recognition software, including a custom deep learning architecture.",
    ],
  },
];

// ---------- Skills ----------

export const skills: SkillGroup[] = [
  {
    label: "Languages",
    items: ["C", "C++", "C#", "Java", "Python", "Rust", "TypeScript", "JavaScript", "HTML", "CSS", "SQL", "Lean 4"],
  },
  {
    label: "Technologies",
    items: ["Unity", "NumPy", "TensorFlow", "Pandas", "SciPy", "Matplotlib", "PyTorch", "iOS SDK", "Git", "LaTeX", "Node.js"],
  },
  {
    label: "Concepts",
    items: [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "iOS Development",
      "Game Development",
      "Pure Mathematics",
      "Theoretical Computer Science",
      "Algorithms",
      "Web Development",
      "Full Stack",
      "Backend",
      "Security",
    ],
  },
];
