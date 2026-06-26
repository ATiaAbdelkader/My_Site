/**
 * Academic profile configuration
 *
 * HOW TO CONFIGURE YOUR PROFILES:
 * 1. Replace the placeholder URLs below with your actual profile URLs.
 * 2. Set `enabled: false` on any profile you don't have yet.
 * 3. The ORCID and Google Scholar IDs are used for structured data (JSON-LD)
 *    which helps search engines and academic databases discover your work.
 *
 * ORCID: Get your ORCID iD at https://orcid.org (free, takes 2 minutes)
 * Google Scholar: Create your profile at https://scholar.google.com
 * ResearchGate: https://www.researchgate.net
 * Scopus: https://www.scopus.com/authid/detail.uri
 * PubMed: https://pubmed.ncbi.nlm.nih.gov
 */

export interface AcademicProfile {
  id: string;
  name: string;
  url: string;
  username: string;
  icon: string; // SVG path data
  color: string; // brand color
  enabled: boolean;
  description: string;
}

export const orcidId = '0000-0002-0000-0000'; // Replace with your real ORCID iD

export const googleScholarId = 'ABCD1234'; // Replace with your Scholar ID

export const academicProfiles: AcademicProfile[] = [
  {
    id: 'orcid',
    name: 'ORCID',
    url: `https://orcid.org/${orcidId}`,
    username: orcidId,
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 2c4.41 0 8 3.59 8 8s-3.59 8-8 8-8-3.59-8-8 3.59-8 8-8zm-1 4v8h2V8h-2zm0-3v2h2V5h-2z',
    color: '#A6CE39',
    enabled: true,
    description: 'Persistent digital identifier for researchers',
  },
  {
    id: 'google-scholar',
    name: 'Google Scholar',
    url: `https://scholar.google.com/citations?user=${googleScholarId}`,
    username: googleScholarId,
    icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
    color: '#4285F4',
    enabled: true,
    description: 'Citation tracking and scholarly publications',
  },
  {
    id: 'researchgate',
    name: 'ResearchGate',
    url: 'https://www.researchgate.net/profile/Abdelkader-Atia',
    username: 'Abdelkader-Atia',
    icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14.5l-3-3 1.41-1.41L11 13.67V7h2v6.67l1.59-1.58L16 13.5l-3 3-1 1-1-1z',
    color: '#00D0AF',
    enabled: true,
    description: 'Research network for scientists',
  },
  {
    id: 'scopus',
    name: 'Scopus',
    url: 'https://www.scopus.com/authid/detail.uri?authorId=00000000000',
    username: '00000000000',
    icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5',
    color: '#E9711C',
    enabled: false,
    description: 'Elsevier citation database',
  },
  {
    id: 'pubmed',
    name: 'PubMed',
    url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Abdelkader+Atia',
    username: 'Abdelkader Atia',
    icon: 'M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14h-2v-4h2v4zm0-6h-2V7h2v4z',
    color: '#20558A',
    enabled: false,
    description: 'NIH biomedical literature database',
  },
  {
    id: 'arxiv',
    name: 'arXiv',
    url: 'https://arxiv.org/a/atia_a_1',
    username: 'atia_a_1',
    icon: 'M5 4h14v2H5V4zm0 4h14v2H5V8zm0 4h14v2H5v-2zm0 4h10v2H5v-2z',
    color: '#B31B1B',
    enabled: false,
    description: 'Preprint repository',
  },
];

export const enabledProfiles = academicProfiles.filter((p) => p.enabled);
