import { Download, Github, Linkedin, Mail, MapPin, Menu, Moon, Phone, Send, Sparkles, Sun, X, ArrowUp, Globe, Briefcase, Code2, Layers3, ChevronRight, Filter, ExternalLink } from 'lucide-react';

const navigation = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

export const profile = {
  name: 'TUYIZERE DAMIEN',
  title: 'Full-Stack Web Developer',
  location: 'Rwanda',
  intro: "Hello! I'm Damien Tuyizere, a passionate Full-Stack Web Developer from Rwanda. I enjoy building modern, responsive, and user-friendly web applications using modern technologies. I am continuously learning and improving my software development skills.",
  email: 'your-email@example.com',
  phone: '+250 000 000 000',
  availability: 'Available for freelance and full-time opportunities',
};

export const stats = [
  { value: '5+', label: 'Years of learning & building' },
  { value: '20+', label: 'Projects explored' },
  { value: '100%', label: 'Focused on quality' },
  { value: '24/7', label: 'Curious & improving' },
];

export const aboutSections = [
  'I am a dedicated software developer focused on creating elegant digital experiences for real-world problems.',
  'My passion lies in building user-friendly systems that combine strong design, clean architecture, and practical functionality.',
  'I enjoy turning ideas into working products through continuous learning, experimentation, and teamwork.',
  'I am motivated by solving meaningful challenges and helping users through well-crafted technology.',
];

export const skillGroups = {
  Frontend: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS', 'REST API'],
  Backend: ['Node.js', 'Express.js', 'PHP'],
  Database: ['MySQL', 'Supabase'],
  Tools: ['Git', 'GitHub', 'Responsive Design'],
};

export const projects = [
  {
    title: 'Student Management System',
    category: 'Web App',
    description: 'A system for managing student records, attendance, grades, and academic reporting in a streamlined workflow.',
    tags: ['React', 'Node.js', 'MySQL'],
    github: 'https://github.com/yourusername/student-management-system',
    live: 'https://your-demo-link.com/student-management-system',
  },
  {
    title: 'SmartJob Rwanda',
    category: 'Platform',
    description: 'A job finder and recruitment platform designed to connect job seekers with opportunities and employers in Rwanda.',
    tags: ['React', 'PHP', 'MySQL'],
    github: 'https://github.com/yourusername/smartjob-rwanda',
    live: 'https://your-demo-link.com/smartjob-rwanda',
  },
  {
    title: 'ADEPR Mashenyi Church Management System',
    category: 'Management',
    description: 'A church administration solution for member management, attendance tracking, and ministry operations.',
    tags: ['React', 'Express', 'Supabase'],
    github: 'https://github.com/yourusername/adepr-mashenyi',
    live: 'https://your-demo-link.com/adepr-mashenyi',
  },
  {
    title: 'Choir Attendance Management System',
    category: 'Management',
    description: 'A tool to track choir attendance, schedules, and participation records for organizational efficiency.',
    tags: ['JavaScript', 'PHP', 'MySQL'],
    github: 'https://github.com/yourusername/choir-attendance-system',
    live: 'https://your-demo-link.com/choir-attendance-system',
  },
  {
    title: 'School Management System',
    category: 'Web App',
    description: 'A complete administrative system for school operations, student data, classes, and reporting workflows.',
    tags: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/school-management-system',
    live: 'https://your-demo-link.com/school-management-system',
  },
  {
    title: 'ABC E-Commerce Website',
    category: 'E-commerce',
    description: 'A modern storefront experience with product listings, shopping flow, and responsive design for online commerce.',
    tags: ['React', 'Tailwind', 'REST API'],
    github: 'https://github.com/yourusername/abc-ecommerce',
    live: 'https://your-demo-link.com/abc-ecommerce',
  },
];

export const services = [
  'Website Development',
  'Frontend Development',
  'Backend Development',
  'Database Management',
  'Responsive Website Design',
  'Web Application Development',
];

export const education = [
  {
    degree: 'Add your degree or certificate here',
    school: 'University / Institution Name',
    period: '2020 — 2024',
    description: 'Describe your course focus, specializations, or achievements here.',
  },
  {
    degree: 'Add your secondary or technical studies here',
    school: 'School / Training Center Name',
    period: '2016 — 2020',
    description: 'Describe your academic or training background here.',
  },
];

export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/yourusername', icon: Github },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yourprofile', icon: Linkedin },
  { label: 'WhatsApp', href: 'https://wa.me/250000000000', icon: 'WhatsApp' },
  { label: 'Facebook', href: 'https://www.facebook.com/yourprofile', icon: 'Facebook' },
];

export const highlightSkills = ['React.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'MySQL', 'GitHub'];

export default {
  navigation,
  profile,
  stats,
  aboutSections,
  skillGroups,
  projects,
  services,
  education,
  socialLinks,
  highlightSkills,
};
