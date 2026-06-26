/**
 * Teaching & Supervision data
 *
 * HOW TO ADD YOUR TEACHING:
 * Replace sample entries with your actual courses taught, students supervised,
 * and workshops led.
 */

export interface Course {
  id: string;
  title: string;
  code: string;
  level: 'undergraduate' | 'graduate' | 'postgraduate' | 'professional';
  institution: string;
  role: 'instructor' | 'co-instructor' | 'teaching-assistant' | 'guest-lecturer';
  year: string;
  semester?: string;
  description: string;
  studentsCount?: number;
  topics?: string[];
}

export interface Supervision {
  id: string;
  studentName: string;
  degree: 'bachelor' | 'master' | 'phd' | 'postdoc';
  thesisTitle: string;
  role: 'supervisor' | 'co-supervisor' | 'advisor';
  year: string;
  status: 'ongoing' | 'completed';
  institution?: string;
}

export interface Workshop {
  id: string;
  title: string;
  audience: string;
  date: string;
  location: string;
  participantsCount?: number;
  description: string;
  duration?: string;
}

export const courses: Course[] = [
  {
    id: 'course-001',
    title: 'Animal Reproduction and Breeding',
    code: 'ANIM-401',
    level: 'undergraduate',
    institution: 'University of Algiers',
    role: 'instructor',
    year: '2024',
    semester: 'Fall',
    description:
      'Comprehensive course covering reproductive physiology, breeding technologies, and genetic improvement in livestock. Includes lab sessions on semen analysis and cryopreservation techniques.',
    studentsCount: 45,
    topics: ['Reproductive Physiology', 'Artificial Insemination', 'Breeding Technologies', 'Genetics'],
  },
  {
    id: 'course-002',
    title: 'Digital Agriculture and Smart Farming',
    code: 'AGRI-512',
    level: 'graduate',
    institution: 'University of Algiers',
    role: 'instructor',
    year: '2024',
    semester: 'Spring',
    description:
      'Graduate seminar exploring IoT, AI, and data analytics applications in modern agriculture. Students design and prototype smart farming solutions as final projects.',
    studentsCount: 22,
    topics: ['IoT in Agriculture', 'Precision Farming', 'AI/ML', 'Data Analytics'],
  },
  {
    id: 'course-003',
    title: 'Sustainable Livestock Production Systems',
    code: 'ANIM-503',
    level: 'graduate',
    institution: 'University of Algiers',
    role: 'co-instructor',
    year: '2023',
    semester: 'Fall',
    description:
      'Advanced course on sustainable practices in livestock production, covering feed management, waste reduction, and environmental impact assessment.',
    studentsCount: 18,
    topics: ['Sustainability', 'Feed Management', 'Environmental Impact'],
  },
  {
    id: 'course-004',
    title: 'Research Methods in Animal Sciences',
    code: 'ANIM-601',
    level: 'postgraduate',
    institution: 'University of Algiers',
    role: 'instructor',
    year: '2023',
    description:
      'PhD-level course on experimental design, statistical analysis, and scientific writing for animal science research.',
    studentsCount: 12,
    topics: ['Experimental Design', 'Statistics', 'Scientific Writing', 'Publication'],
  },
  {
    id: 'course-005',
    title: 'Introduction to Animal Sciences',
    code: 'ANIM-101',
    level: 'undergraduate',
    institution: 'University of Algiers',
    role: 'teaching-assistant',
    year: '2022',
    semester: 'Fall',
    description:
      'Foundational course introducing students to animal science principles, livestock management, and agricultural systems.',
    studentsCount: 120,
    topics: ['Animal Science Fundamentals', 'Livestock Management'],
  },
];

export const supervisions: Supervision[] = [
  {
    id: 'sup-001',
    studentName: 'Student Name 1',
    degree: 'master',
    thesisTitle:
      'Effects of Heat Stress on Semen Quality in Local Sheep Breeds',
    role: 'supervisor',
    year: '2024',
    status: 'ongoing',
    institution: 'University of Algiers',
  },
  {
    id: 'sup-002',
    studentName: 'Student Name 2',
    degree: 'master',
    thesisTitle:
      'Digital Transformation in Algerian Livestock Farms: Barriers and Opportunities',
    role: 'supervisor',
    year: '2024',
    status: 'ongoing',
    institution: 'University of Algiers',
  },
  {
    id: 'sup-003',
    studentName: 'Student Name 3',
    degree: 'bachelor',
    thesisTitle: 'Comparative Analysis of Cryopreservation Techniques',
    role: 'co-supervisor',
    year: '2023',
    status: 'completed',
    institution: 'University of Algiers',
  },
  {
    id: 'sup-004',
    studentName: 'Student Name 4',
    degree: 'master',
    thesisTitle:
      'IoT-Based Health Monitoring System for Dairy Cattle',
    role: 'advisor',
    year: '2023',
    status: 'completed',
    institution: 'University of Algiers',
  },
];

export const workshops: Workshop[] = [
  {
    id: 'ws-001',
    title: 'Digital Tools for Modern Farmers',
    audience: 'Agricultural Extension Workers',
    date: '2024-05-15',
    location: 'Ministry of Agriculture, Algiers',
    participantsCount: 50,
    duration: '3 days',
    description:
      'Hands-on training on digital agriculture tools, IoT sensors, and data-driven decision making for extension workers.',
  },
  {
    id: 'ws-002',
    title: 'Semen Analysis Laboratory Techniques',
    audience: 'Veterinary Students',
    date: '2024-03-10',
    location: 'University of Algiers',
    participantsCount: 25,
    duration: '2 days',
    description:
      'Practical workshop on semen collection, evaluation, and cryopreservation techniques for veterinary students.',
  },
  {
    id: 'ws-003',
    title: 'Smart Farming with IoT and AI',
    audience: 'Agriculture Professionals',
    date: '2023-11-20',
    location: 'Agricultural Research Center, Oran',
    participantsCount: 35,
    duration: '1 day',
    description:
      'Introduction to IoT sensors and AI applications for precision livestock farming.',
  },
  {
    id: 'ws-004',
    title: 'Scientific Writing and Publication',
    audience: 'Graduate Students',
    date: '2023-09-05',
    location: 'University of Algiers',
    participantsCount: 30,
    duration: '2 days',
    description:
      'Workshop on writing research papers, structuring manuscripts, and navigating the publication process.',
  },
];

export const levelLabels: Record<Course['level'], string> = {
  undergraduate: 'Undergraduate',
  graduate: 'Graduate',
  postgraduate: 'Postgraduate',
  professional: 'Professional',
};

export const levelColors: Record<Course['level'], string> = {
  undergraduate: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  graduate: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  postgraduate: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
  professional: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
};

export const roleLabels: Record<Course['role'], string> = {
  instructor: 'Instructor',
  'co-instructor': 'Co-Instructor',
  'teaching-assistant': 'Teaching Assistant',
  'guest-lecturer': 'Guest Lecturer',
};

export const degreeLabels: Record<Supervision['degree'], string> = {
  bachelor: 'Bachelor',
  master: 'Master',
  phd: 'PhD',
  postdoc: 'Postdoc',
};

export const degreeColors: Record<Supervision['degree'], string> = {
  bachelor: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  master: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  phd: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
  postdoc: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
};

export const totalStudents =
  courses.reduce((sum, c) => sum + (c.studentsCount ?? 0), 0) +
  workshops.reduce((sum, w) => sum + (w.participantsCount ?? 0), 0);
