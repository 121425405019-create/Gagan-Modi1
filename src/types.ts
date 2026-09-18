/**
 * Types for Gagan Modi's Personal Portfolio
 */

export interface PersonalInfo {
  name: string;
  tagline: string;
  headline: string;
  summary: string;
  status: string;
  location: string;
  photoUrl?: string; // Optional path: /images/profile.jpg
}

export interface Strength {
  id: number;
  number: string;
  title: string;
  description: string;
  iconName: 'message-square' | 'target' | 'folder-kanban' | 'sparkles';
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  challenge: string;
  approach: string;
  outcome: string;
  tags: string[];
  imageUrl?: string; // Optional path: /images/project-alpha.jpg
  placeholderLabel: string;
  placeholderType: 'brand' | 'digital' | 'presentation';
  projectUrlPlaceholder: string; // e.g., "[ADD PROJECT URL]"
}

export interface Skill {
  id: string;
  name: string;
  category: 'Strategy & Thinking' | 'Execution & Delivery' | 'Communication & People';
}

export interface ExperienceItem {
  id: string;
  period: string;
  title: string;
  description: string;
  companyPlaceholder: string; // e.g., "[ADD COMPANY NAME]"
  rolePlaceholder: string; // e.g., "[ADD ROLE]"
  detailsPlaceholder: string; // e.g., "[ADD EXPERIENCE DETAILS]"
}

export interface ContactInfo {
  email: string;
  phone: string;
  linkedIn: string;
  location: string;
  availability: string;
}

export interface PortfolioData {
  personal: PersonalInfo;
  strengths: Strength[];
  projects: Project[];
  skills: Skill[];
  experience: ExperienceItem[];
  contact: ContactInfo;
}
