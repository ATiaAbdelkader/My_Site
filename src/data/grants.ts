/**
 * Grants & Funding data
 *
 * HOW TO ADD YOUR GRANTS:
 * Replace sample entries with your actual grants, fellowships, and funded projects.
 */

export type GrantStatus = 'ongoing' | 'completed' | 'pending';

export interface Grant {
  id: string;
  title: string;
  funder: string;
  role: 'pi' | 'co-pi' | 'collaborator' | 'fellow';
  amount: number; // in USD
  currency: string;
  startDate: string; // YYYY-MM
  endDate: string; // YYYY-MM
  status: GrantStatus;
  description: string;
  pi?: string; // Principal Investigator (if role is not pi)
  topics?: string[];
}

export const grants: Grant[] = [
  {
    id: 'grant-001',
    title:
      'Digital Innovation for Sustainable Livestock Management in Arid Regions',
    funder: 'National Agency for Research and Development (NARD)',
    role: 'pi',
    amount: 85000,
    currency: 'USD',
    startDate: '2024-01',
    endDate: '2026-12',
    status: 'ongoing',
    description:
      'A 3-year research project developing IoT-based monitoring systems and AI analytics for sustainable livestock production in arid and semi-arid regions of Algeria. The project includes field trials across 12 pilot farms and capacity building for 50+ extension workers.',
    topics: ['Digital Agriculture', 'IoT', 'Sustainability', 'Livestock'],
  },
  {
    id: 'grant-002',
    title:
      'Cryopreservation Protocols for Endangered Local Livestock Breeds',
    funder: 'Ministry of Higher Education and Scientific Research',
    role: 'pi',
    amount: 45000,
    currency: 'USD',
    startDate: '2023-06',
    endDate: '2025-05',
    status: 'ongoing',
    description:
      'Research grant to develop breed-specific cryopreservation protocols for endangered local livestock breeds, supporting genetic diversity conservation efforts.',
    topics: ['Cryopreservation', 'Genetic Conservation', 'Endangered Breeds'],
  },
  {
    id: 'grant-003',
    title: 'AI-Driven Early Disease Detection in Dairy Cattle',
    funder: 'International Foundation for Science (IFS)',
    role: 'co-pi',
    amount: 12000,
    currency: 'USD',
    startDate: '2023-03',
    endDate: '2024-08',
    status: 'completed',
    description:
      'Collaborative research project developing computer vision algorithms for early disease detection in dairy cattle, achieving 94% accuracy in field trials.',
    pi: 'Dr. Senior Collaborator',
    topics: ['AI', 'Computer Vision', 'Animal Health'],
  },
  {
    id: 'grant-004',
    title: 'PhD Research Fellowship: Semen Quality Assessment',
    funder: 'Algerian Government Scholarship Program',
    role: 'fellow',
    amount: 30000,
    currency: 'USD',
    startDate: '2021-09',
    endDate: '2025-06',
    status: 'ongoing',
    description:
      'Full PhD fellowship funding research on semen quality parameters and cryopreservation techniques across local livestock breeds.',
    topics: ['Semen Quality', 'Cryopreservation', 'PhD Research'],
  },
  {
    id: 'grant-005',
    title:
      'Training Program: Digital Agriculture for Smallholder Farmers',
    funder: 'FAO (Food and Agriculture Organization)',
    role: 'collaborator',
    amount: 25000,
    currency: 'USD',
    startDate: '2022-06',
    endDate: '2023-05',
    status: 'completed',
    description:
      'Capacity building program training 200+ smallholder farmers on digital agriculture tools and sustainable practices.',
    topics: ['Training', 'Digital Agriculture', 'Smallholder Farmers'],
  },
  {
    id: 'grant-006',
    title:
      'Network for Precision Livestock Farming in the MENA Region',
    funder: 'Pending: EU Horizon Europe Collaboration Grant',
    role: 'co-pi',
    amount: 200000,
    currency: 'USD',
    startDate: '2025-01',
    endDate: '2027-12',
    status: 'pending',
    description:
      'Proposed international collaboration network for advancing precision livestock farming technologies across the MENA region. Application under review.',
    topics: ['Precision Farming', 'MENA', 'Collaboration'],
  },
];

export const statusLabels: Record<GrantStatus, string> = {
  ongoing: 'Ongoing',
  completed: 'Completed',
  pending: 'Pending',
};

export const statusColors: Record<GrantStatus, string> = {
  ongoing: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  completed: 'bg-gray-500/10 text-gray-400 border-gray-500/30',
  pending: 'bg-amber-500/10 text-amber-400 border-amber-500/30',
};

export const roleLabels: Record<Grant['role'], string> = {
  pi: 'Principal Investigator',
  'co-pi': 'Co-Principal Investigator',
  collaborator: 'Collaborator',
  fellow: 'Fellow',
};

export function formatAmount(amount: number, currency: string): string {
  if (amount >= 1000000) {
    return `$${(amount / 1000000).toFixed(1)}M`;
  }
  if (amount >= 1000) {
    return `$${(amount / 1000).toFixed(0)}K`;
  }
  return `${currency} ${amount.toLocaleString()}`;
}

export function formatDateRange(start: string, end: string): string {
  const startYear = start.split('-')[0];
  const endYear = end.split('-')[0];
  return `${startYear} - ${endYear}`;
}

export const totalFunding = grants
  .filter((g) => g.status !== 'pending')
  .reduce((sum, g) => sum + g.amount, 0);

export const ongoingGrants = grants.filter((g) => g.status === 'ongoing');
