import { PortfolioData } from '../types';

/**
 * CENTRAL PORTFOLIO DATA FOR GAGAN MODI
 * 
 * Edit this single file to update all portfolio content, texts, projects,
 * links, and contact details without needing to modify multiple components.
 */

// ==============================
// EDITABLE PERSONAL INFORMATION
// ==============================
export const personalInfo = {
  name: "Gagan Modi",
  tagline: "Creative • Professional • Results-Focused",
  headline: "Turning ideas into practical outcomes.",
  heroSupportingText: "Turning ideas into practical, polished, and high-quality outcomes through clear communication, structured problem-solving, and creative execution.",
  summary: "I am a motivated professional focused on turning ideas into practical, high-quality outcomes. I combine clear communication, structured problem-solving, and attention to detail to deliver work that is useful, polished, and easy to understand.",
  status: "Open to new collaborations & opportunities",
  location: "Hyderabad, India",
  // If you place an image in /public/images/profile.jpg, set photoUrl to "/images/profile.jpg"
  photoUrl: "/images/profile.jpg",
  photoPlaceholderLabel: "[ADD YOUR PHOTO]",
};

// ==============================
// EDITABLE CORE STRENGTHS
// ==============================
export const coreStrengths = [
  {
    id: 1,
    number: "01",
    title: "Communication",
    description: "Clear written and verbal communication.",
    iconName: "message-square" as const,
  },
  {
    id: 2,
    number: "02",
    title: "Problem Solving",
    description: "Structured thinking and practical execution.",
    iconName: "target" as const,
  },
  {
    id: 3,
    number: "03",
    title: "Project Work",
    description: "Planning, coordination, and delivery.",
    iconName: "folder-kanban" as const,
  },
  {
    id: 4,
    number: "04",
    title: "Creativity",
    description: "Concept development and presentation.",
    iconName: "sparkles" as const,
  },
];

// ==============================
// EDITABLE PROJECTS
// ==============================
export const projects = [
  {
    id: "project-alpha",
    number: "01",
    title: "Project Alpha",
    subtitle: "Brand & Content Refresh",
    category: "Brand & Content Direction",
    year: "Case Study 01",
    challenge: "Improve the consistency and clarity of a growing brand.",
    approach: "Audited existing materials, developed a clearer visual direction, and created reusable content templates.",
    outcome: "A more consistent brand presentation and a streamlined content workflow.",
    tags: ["Brand Identity", "Visual System", "Content Templates", "Workflow Optimization"],
    // Optional real image: "/images/project-alpha.jpg"
    imageUrl: "/images/project-alpha.jpg",
    placeholderLabel: "[PROJECT ALPHA IMAGE]",
    placeholderType: "brand" as const,
    projectUrlPlaceholder: "[ADD PROJECT URL]",
  },
  {
    id: "project-beta",
    number: "02",
    title: "Project Beta",
    subtitle: "Digital Experience Concept",
    category: "Digital Product & Flow",
    year: "Case Study 02",
    challenge: "Make a digital service easier for new users to understand.",
    approach: "Mapped the user journey, simplified key steps, and created a prototype concept.",
    outcome: "A clearer user flow and a presentation-ready concept for further development.",
    tags: ["User Flow Mapping", "Prototype Concept", "Experience Simplification", "Interface Structure"],
    // Optional real image: "/images/project-beta.jpg"
    imageUrl: "/images/project-beta.jpg",
    placeholderLabel: "[PROJECT BETA IMAGE]",
    placeholderType: "digital" as const,
    projectUrlPlaceholder: "[ADD PROJECT URL]",
  },
  {
    id: "project-gamma",
    number: "03",
    title: "Project Gamma",
    subtitle: "Business Presentation",
    category: "Executive Storytelling",
    year: "Case Study 03",
    challenge: "Turn complex information into a concise decision-making presentation.",
    approach: "Organized the information into a narrative, highlighted key metrics, and simplified visuals.",
    outcome: "A professional presentation suitable for stakeholder review.",
    tags: ["Narrative Structuring", "Visual Simplification", "Key Metrics Framing", "Stakeholder Deck"],
    // Optional real image: "/images/project-gamma.jpg"
    imageUrl: "/images/project-gamma.jpg",
    placeholderLabel: "[PROJECT GAMMA IMAGE]",
    placeholderType: "presentation" as const,
    projectUrlPlaceholder: "[ADD PROJECT URL]",
  },
];

// ==============================
// EDITABLE SKILLS
// ==============================
export const skills = [
  { id: "s1", name: "Strategic Thinking", category: "Strategy & Thinking" as const },
  { id: "s2", name: "Project Planning", category: "Execution & Delivery" as const },
  { id: "s3", name: "Presentation Design", category: "Communication & People" as const },
  { id: "s4", name: "Research", category: "Strategy & Thinking" as const },
  { id: "s5", name: "Content Development", category: "Execution & Delivery" as const },
  { id: "s6", name: "Data Interpretation", category: "Strategy & Thinking" as const },
  { id: "s7", name: "Client Communication", category: "Communication & People" as const },
  { id: "s8", name: "Time Management", category: "Execution & Delivery" as const },
  { id: "s9", name: "Team Collaboration", category: "Communication & People" as const },
];

// ==============================
// EDITABLE EXPERIENCE
// ==============================
export const experience = [
  {
    id: "exp-1",
    period: "2025 — PRESENT",
    title: "Independent / Freelance",
    description: "Projects across research, content, presentations, and digital work.",
    companyPlaceholder: "[ADD COMPANY NAME]",
    rolePlaceholder: "[ADD ROLE]",
    detailsPlaceholder: "[ADD EXPERIENCE DETAILS]",
  },
  {
    id: "exp-2",
    period: "2023 — 2025",
    title: "Professional Experience",
    description: "Supported projects involving coordination, communication, and delivery.",
    companyPlaceholder: "[ADD COMPANY NAME]",
    rolePlaceholder: "[ADD ROLE]",
    detailsPlaceholder: "[ADD EXPERIENCE DETAILS]",
  },
  {
    id: "exp-3",
    period: "2021 — 2023",
    title: "Early Career",
    description: "Built foundational skills through academic and practical projects.",
    companyPlaceholder: "[ADD COMPANY NAME]",
    rolePlaceholder: "[ADD ROLE]",
    detailsPlaceholder: "[ADD EXPERIENCE DETAILS]",
  },
];

// ==============================
// EDITABLE CONTACT INFORMATION
// Note: These are demo/placeholder details as specified.
// Update these with your real details when ready.
// ==============================
export const contactInfo = {
  email: "hello@example.com", // Demo placeholder — replace with real email
  emailPlaceholderLabel: "[ADD YOUR REAL EMAIL]",
  phone: "+91 00000 00000",
  phonePlaceholderLabel: "[ADD YOUR PHONE]",
  linkedIn: "linkedin.com/in/example",
  linkedInPlaceholderLabel: "[ADD LINKEDIN URL]",
  location: "Hyderabad, India",
  availability: "Available for new projects & consulting",
};

export const portfolio: PortfolioData = {
  personal: personalInfo,
  strengths: coreStrengths,
  projects,
  skills,
  experience,
  contact: contactInfo,
};

export default portfolio;
