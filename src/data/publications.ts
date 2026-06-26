/**
 * Publications data for Abdelkader Atia
 *
 * HOW TO ADD YOUR REAL PUBLICATIONS:
 * 1. Replace the sample entries below with your actual publications.
 * 2. Each entry follows the `Publication` interface.
 * 3. Required fields: id, title, authors, journal, year, type
 * 4. Optional fields: volume, issue, pages, doi, url, abstract, citations, pdfUrl, featured, tags
 * 5. Set `featured: true` on 3-5 key publications to show them on the homepage.
 *
 * Publication types: 'journal' | 'conference' | 'preprint' | 'book' | 'book-chapter' | 'thesis'
 */

export type PublicationType =
  | 'journal'
  | 'conference'
  | 'preprint'
  | 'book'
  | 'book-chapter'
  | 'thesis';

export interface Publication {
  id: string;
  title: string;
  authors: string[];
  journal: string;
  year: number;
  volume?: string;
  issue?: string;
  pages?: string;
  doi?: string;
  url?: string;
  abstract?: string;
  type: PublicationType;
  citations?: number;
  pdfUrl?: string;
  featured?: boolean;
  tags?: string[];
}

export const publications: Publication[] = [
  {
    id: 'pub-001',
    title:
      'Effects of Cryopreservation on Semen Quality and Fertility Rates in Local Livestock Breeds',
    authors: ['Abdelkader Atia', 'Co-author Name', 'Supervisor Name'],
    journal: 'Journal of Animal Reproduction',
    year: 2024,
    volume: '48',
    issue: '3',
    pages: '215-228',
    doi: '10.1016/j.anirepro.2024.05.012',
    url: 'https://doi.org/10.1016/j.anirepro.2024.05.012',
    type: 'journal',
    citations: 12,
    featured: true,
    tags: ['semen-quality', 'cryopreservation', 'livestock', 'fertility'],
    abstract:
      'This study investigates the impact of cryopreservation techniques on post-thaw semen quality across three local livestock breeds. Results indicate significant breed-specific variations in membrane integrity and motility recovery, suggesting the need for breed-optimized cryopreservation protocols.',
  },
  {
    id: 'pub-002',
    title:
      'Digital Innovation in Smart Agriculture: A Framework for Sustainable Livestock Management',
    authors: ['Abdelkader Atia', 'Co-author Name'],
    journal: 'Computers and Electronics in Agriculture',
    year: 2024,
    volume: '218',
    pages: '108675',
    doi: '10.1016/j.compag.2024.108675',
    url: 'https://doi.org/10.1016/j.compag.2024.108675',
    type: 'journal',
    citations: 8,
    featured: true,
    tags: ['digital-agriculture', 'smart-farming', 'livestock', 'sustainability'],
    abstract:
      'A comprehensive framework integrating IoT sensors, data analytics, and machine learning for real-time livestock monitoring. The proposed system demonstrates a 23% improvement in resource efficiency and early disease detection across pilot farms.',
  },
  {
    id: 'pub-003',
    title:
      'Sustainable Livestock Production Systems in Arid Regions: Challenges and Opportunities',
    authors: ['Abdelkader Atia', 'Co-author Name', 'Co-author Name'],
    journal: 'Sustainable Agriculture Reviews',
    year: 2023,
    volume: '52',
    pages: '145-178',
    doi: '10.1007/978-3-031-23456-7_6',
    url: 'https://doi.org/10.1007/978-3-031-23456-7_6',
    type: 'book-chapter',
    citations: 5,
    featured: true,
    tags: ['sustainability', 'arid-regions', 'livestock-production'],
    abstract:
      'This book chapter reviews sustainable livestock production practices adapted to arid and semi-arid regions, covering feed management, water conservation, breed selection, and integrated crop-livestock systems.',
  },
  {
    id: 'pub-004',
    title:
      'Comparative Analysis of Semen Quality Parameters in Different Livestock Breeds Under Heat Stress Conditions',
    authors: ['Abdelkader Atia', 'Co-author Name'],
    journal: 'Theriogenology',
    year: 2023,
    volume: '201',
    pages: '45-56',
    doi: '10.1016/j.theriogenology.2023.05.024',
    url: 'https://doi.org/10.1016/j.theriogenology.2023.05.024',
    type: 'journal',
    citations: 18,
    featured: false,
    tags: ['semen-quality', 'heat-stress', 'livestock', 'breeding'],
    abstract:
      'Heat stress significantly impacts semen quality across livestock breeds, with notable reductions in motility and viability. This study identifies breed-specific resilience markers and recommends management strategies for breeding programs in hot climates.',
  },
  {
    id: 'pub-005',
    title:
      'Precision Livestock Farming: AI-Driven Health Monitoring for Early Disease Detection',
    authors: ['Abdelkader Atia'],
    journal: 'Proceedings of the International Conference on Smart Agriculture',
    year: 2023,
    pages: '89-96',
    url: '#',
    type: 'conference',
    citations: 3,
    featured: false,
    tags: ['precision-agriculture', 'ai', 'health-monitoring'],
    abstract:
      'A novel AI-based system for continuous health monitoring in livestock using computer vision and behavioral analysis, achieving 94% accuracy in early disease detection.',
  },
  {
    id: 'pub-006',
    title:
      'Training Farmers in Digital Agriculture: A Pedagogical Approach to Knowledge Transfer',
    authors: ['Abdelkader Atia', 'Co-author Name'],
    journal: 'Journal of Agricultural Education and Extension',
    year: 2022,
    volume: '29',
    issue: '4',
    pages: '512-530',
    doi: '10.1080/1389224X.2022.2109876',
    url: 'https://doi.org/10.1080/1389224X.2022.2109876',
    type: 'journal',
    citations: 7,
    featured: false,
    tags: ['training', 'digital-agriculture', 'pedagogy', 'extension'],
    abstract:
      'An evaluation of training programs designed to upskill farmers in digital agriculture technologies, highlighting effective pedagogical strategies and barriers to adoption.',
  },
  {
    id: 'pub-007',
    title: 'Machine Learning Applications in Semen Quality Assessment',
    authors: ['Abdelkader Atia', 'Co-author Name'],
    journal: 'bioRxiv',
    year: 2024,
    doi: '10.1101/2024.06.15.598732',
    url: 'https://doi.org/10.1101/2024.06.15.598732',
    type: 'preprint',
    citations: 2,
    featured: false,
    tags: ['machine-learning', 'semen-quality', 'computer-vision'],
    abstract:
      'This preprint explores the application of deep learning techniques for automated semen quality assessment using microscopic image analysis, demonstrating promising results for routine laboratory use.',
  },
];

export const publicationTypeLabels: Record<PublicationType, string> = {
  journal: 'Journal Article',
  conference: 'Conference Paper',
  preprint: 'Preprint',
  book: 'Book',
  'book-chapter': 'Book Chapter',
  thesis: 'Thesis',
};

export const publicationTypeColors: Record<PublicationType, string> = {
  journal: 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  conference: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  preprint: 'bg-orange-500/10 text-orange-400 border-orange-500/30',
  book: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  'book-chapter': 'bg-teal-500/10 text-teal-400 border-teal-500/30',
  thesis: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
};

/** Get all unique tags from publications */
export const allTags = Array.from(
  new Set(publications.flatMap((p) => p.tags ?? []))
).sort();

/** Get all unique years from publications, sorted descending */
export const allYears = Array.from(
  new Set(publications.map((p) => p.year))
).sort((a, b) => b - a);

/** Total citation count */
export const totalCitations = publications.reduce(
  (sum, p) => sum + (p.citations ?? 0),
  0
);

/** Featured publications (shown on homepage) */
export const featuredPublications = publications.filter((p) => p.featured);
