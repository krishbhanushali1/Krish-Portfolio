// ═══════════════════════════════════════════════════════════════
// Personal Data — Single source of truth for all portfolio content
// Update this file to personalize your portfolio. No component
// code needs to be modified.
// ═══════════════════════════════════════════════════════════════

export const personalData = {
  name: 'Krish Bhanushali',
  firstName: 'Krish',
  lastName: 'Bhanushali',
  role: 'Information Technology Student',
  tagline: 'Learning, Building, and Growing Every Day.',
  location: 'Mumbai, Maharashtra, India',
  bio: `I'm a Bachelor of Technology student in Information Technology with a strong passion for software development and creating impactful digital experiences. With hands-on experience in web and mobile development, I enjoy turning ideas into functional, user-centric products.

My interests span across full-stack web development, Flutter app development, and cybersecurity. I thrive on learning new technologies, solving practical problems, and pushing my limits at hackathons — where I won at Ignite 7.0.

I'm actively seeking software development opportunities to apply my technical skills, collaborate with talented teams, and contribute to building products that make a difference.`,

  // ─── Contact (Replace with your actual details) ────────────
  email: 'krishvbhanushali@gmail.com',       // TODO: Replace with your email
  phone: '+91 9137939755',               // TODO: Replace with your phone
  github: 'https://github.com/krishbhanushali1',    // TODO: Replace with your GitHub
  linkedin: 'https://www.linkedin.com/in/krish-bhanushali1/', // TODO: Replace with your LinkedIn
  resume: '/resume/resume.pdf',          // TODO: Place your resume in public/resume/
  profileImage: '/images/krishp.jpeg',   // TODO: Place your photo in public/images/
};

// ─── Education ────────────────────────────────────────────────
export const education = [
  {
    degree: 'Bachelor of Technology (Information Technology)',
    institution: 'Shah & Anchor Kutchhi Engineering College',
    period: '2025 – 2028',
    description:
      'Currently pursuing B.Tech in Information Technology, building expertise in software development, data structures, and modern web technologies.',
  },
  {
    degree: 'Diploma in Computer Engineering',
    institution: 'K J Somaiya Polytechnic',
    period: '2022 – 2025',
    score: '84.60%',
    description:
      'Completed diploma with distinction, gaining strong fundamentals in computer science, programming, and engineering principles.',
  },
];

// ─── Experience ───────────────────────────────────────────────
export const experience = [
  {
    role: 'Digital Governance Fellow',
    company: 'Daxy Pvt Ltd',
    period: 'June 2026 – Present',
    type: 'Fellowship',
    description:
      'Working on Government Projects under Brihanmumbai Municipal Corporation (BMC), contributing to digital governance initiatives.',
    responsibilities: [
      'Data verification & documentation',
      'Government project coordination',
      'Field operations management',
      'Identity card project execution',
    ],
  },
  {
    role: 'Trainee Web Developer',
    company: 'iDiligence Solutions Pvt Ltd',
    period: 'June 2024 – July 2024',
    type: 'Internship',
    description:
      'Developed modules for an Office Attendance Management System, collaborating with the engineering team on web UI development.',
    responsibilities: [
      'Web development & UI implementation',
      'Building interactive user interfaces',
      'Team collaboration & agile workflow',
    ],
  },
];

// ─── Skill Categories ────────────────────────────────────────
export const skillCategories = [
  {
    name: 'Programming',
    skills: ['C', 'C++', 'Java', 'Python', 'JavaScript', 'PHP', 'SQL'],
  },
  {
    name: 'Frontend',
    skills: ['HTML', 'CSS', 'React', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    name: 'Backend',
    skills: ['Node.js', 'Express.js', 'REST APIs'],
  },
  {
    name: 'Mobile',
    skills: ['Flutter'],
  },
  {
    name: 'Database',
    skills: ['MySQL', 'MongoDB', 'Firebase', 'Oracle'],
  },
  {
    name: 'Tools',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Android Studio',
      'Postman',
      'Power BI',
      'MS Excel',
      'Figma',
    ],
  },
  {
    name: 'Core',
    skills: ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'Problem Solving'],
  },
];

// ─── Projects ─────────────────────────────────────────────────
export const projects = [
  {
    title: 'Food Rescue Matchmaker',
    description:
      'Developed a platform connecting NGOs and Restaurants to reduce food wastage using real-time donation matching. Winner of Ignite 7.0 Hackathon.',
    image: '/images/projects/food-rescue.jpg', // TODO: Replace with project screenshot
    tech: ['Flutter', 'Firebase', 'React'],
    features: [
      'NGO Verification',
      'Restaurant Registration',
      'Real-time Food Matching',
      'Impact Dashboard',
    ],
    github: '#', // TODO: Replace with actual GitHub URL
    live: '#',   // TODO: Replace with actual live URL
    featured: true,
    badge: '🏆 Winner Project',
  },
  {
    title: 'Office Attendance System',
    description:
      'Built attendance management system modules during internship at iDiligence Solutions, featuring employee tracking and report generation.',
    image: '/images/projects/attendance.jpg', // TODO: Replace with project screenshot
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    features: [],
    github: '#', // TODO: Replace with actual GitHub URL
    live: '#',   // TODO: Replace with actual live URL
    featured: false,
    badge: 'Internship Project',
  },
  {
    title: 'Personal Portfolio',
    description:
      'Modern, premium portfolio website with dark/light mode, animations, glassmorphism, and responsive design — the site you\'re viewing right now.',
    image: '/images/projects/portfolio.jpg', // TODO: Replace with project screenshot
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    features: [],
    github: '#', // TODO: Replace with actual GitHub URL
    live: '#',   // TODO: Replace with actual live URL
    featured: false,
    badge: 'Personal Project',
  },
];

// ─── Achievements ─────────────────────────────────────────────
export const achievements = [
  {
    title: 'Winner — Ignite 7.0 Hackathon',
    description:
      'Won the Ignite 7.0 Hackathon with the Food Rescue Matchmaker project, competing against multiple teams.',
    icon: 'trophy',
  },
  {
    title: 'Web Development Internship',
    description:
      'Successfully completed web development internship at iDiligence Solutions Pvt Ltd, building production modules.',
    icon: 'certificate',
  },
  {
    title: 'Digital Governance Fellow',
    description:
      'Selected as a Digital Governance Fellow working on Brihanmumbai Municipal Corporation (BMC) government projects.',
    icon: 'star',
  },
  {
    title: 'Diploma — 84.60%',
    description:
      'Graduated with distinction in Diploma in Computer Engineering from K J Somaiya Polytechnic.',
    icon: 'academic',
  },
];

// ─── Navigation Links ────────────────────────────────────────
export const navLinks = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

// ─── Section IDs (for intersection observer) ─────────────────
export const sectionIds = [
  'hero',
  'about',
  'education',
  'experience',
  'skills',
  'projects',
  'achievements',
  'contact',
];
