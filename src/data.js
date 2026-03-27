export const LINKEDIN = 'https://www.linkedin.com/in/mohammed-janati-idrissi-b938baa6/'
export const GITHUB   = 'https://github.com/simojanati'
export const NAV_LINKS = ['About', 'Experience', 'Projects', 'Skills', 'Contact']

export const SKILLS = {
  Backend:  ['Java', 'Spring Boot', 'Spring MVC', 'Microservices', 'Hibernate', 'REST API', 'SAP Commerce Cloud', 'Liferay'],
  Frontend: ['Angular', 'JavaScript', 'HTML/CSS', 'JSF', 'PrimeFaces'],
  DevOps:   ['Docker', 'Jenkins', 'Maven', 'Azure', 'Git'],
  Database: ['MySQL', 'Oracle SQL', 'Microsoft SQL Server'],
}

export const EXPERIENCES = [
  {
    role: 'Freelance Full Stack Engineer',
    company: 'Independent',
    period: '2023 — Present',
    tags: ['React', 'Angular', 'Spring Boot', 'SaaS'],
    desc: 'Delivering high-impact SaaS projects and custom web apps for diverse clients. Built eSports tournament management, volunteer tracking systems, and sports team management platforms.',
    highlight: true,
  },
  {
    role: 'Full Stack Developer — Team Leader',
    company: 'SQLI Rabat',
    period: 'Nov 2022 — Nov 2023',
    tags: ['Spring Boot', 'Angular', 'MySQL', 'Agile/Scrum'],
    desc: 'Led a team of developers, architected interactive dashboards, and optimized database performance. Supervised code reviews and sprint planning.',
  },
  {
    role: 'Java Developer (SAP Commerce Cloud)',
    company: 'SQLI — Nespresso (Nestlé)',
    period: 'Nov 2019 — Mar 2023',
    tags: ['SAP Commerce', 'Spring Boot', 'Docker', 'Jenkins'],
    desc: 'Developed and configured SAP Commerce Cloud for Nespresso global e-commerce platform. Managed localization, user permissions, and mobile documentation.',
  },
  {
    role: 'Java Developer (SAP Commerce Cloud)',
    company: 'SQLI — ATR (Airbus)',
    period: 'Nov 2017 — Oct 2019',
    tags: ['SAP Commerce', 'Spring Boot', 'Hibernate'],
    desc: 'Designed optimized B2B interfaces for Avions de Transport Regional. Implemented advanced search strategies and bulk-order management.',
  },
  {
    role: 'Java Developer (Liferay)',
    company: 'SQLI — CEAC & Maroc Telecom',
    period: 'Nov 2017 — Oct 2019',
    tags: ['Liferay', 'Spring Boot', 'REST', 'SoapUI'],
    desc: 'Built enterprise intranet portals with custom portlets for Maroc Telecom (Wissal) and the European Conference of Civil Aviation.',
  },
  {
    role: 'Java Developer (Airbus Helicopters)',
    company: 'SQLI — eLogBook',
    period: 'Apr 2022 — Nov 2022',
    tags: ['Spring MVC', 'JSF', 'Oracle', 'Azure'],
    desc: 'Engineered maintenance scheduling and spare parts tracking for Airbus Helicopters. Developed unit and integration tests.',
  },
]

export const PROJECTS = [
  {
    title: 'eSports Tournament Manager',
    emoji: '🎮',
    tags: ['Angular', 'Spring Boot', 'MySQL'],
    color: '#8B5CF6',
    desc: 'Full-featured tournament platform supporting EA FC, Valorant & more. Manages players, teams, bracket types, and live competition tracking.',
    features: ['Multi-game support (EA FC, Valorant...)', 'Bracket management (elimination, round robin)', 'Team & player profiles', 'Live competition tracking'],
  },
  {
    title: 'CAN 2025 Volunteer Tracker',
    emoji: '🏆',
    tags: ['JavaScript', 'HTML/CSS', 'QR Scan'],
    color: '#6EE7B7',
    desc: 'Real-time volunteer attendance system for Africa Cup of Nations 2025 fanzone. QR code scanning, group management, and reporting.',
    features: ['QR code scanning for check-in', 'Group & zone management', 'Real-time attendance reports', 'Export & analytics'],
  },
  {
    title: 'American Football Team Hub',
    emoji: '🏈',
    tags: ['JavaScript', 'HTML/CSS', 'Canvas'],
    color: '#F59E0B',
    desc: 'Comprehensive team management with tactical board, player/coach communication, match stats, training sessions, and absence tracking.',
    features: ['Tactical board (drag & draw)', 'Player-coach messaging', 'Match stats & session planning', 'Absence tracking & ticketing'],
  },
]
