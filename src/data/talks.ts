/**
 * Talks & Conferences data
 *
 * HOW TO ADD YOUR TALKS:
 * Replace the sample entries with your actual conference presentations,
 * invited talks, poster sessions, and workshops attended.
 */

export type TalkType =
  | 'invited-talk'
  | 'conference-presentation'
  | 'poster'
  | 'workshop'
  | 'panel'
  | 'keynote';

export interface Talk {
  id: string;
  title: string;
  event: string;
  venue: string;
  location: string;
  date: string; // ISO format: YYYY-MM-DD
  type: TalkType;
  description: string;
  url?: string;
  slidesUrl?: string;
  videoUrl?: string;
  featured?: boolean;
}

export const talks: Talk[] = [
  {
    id: 'talk-001',
    title:
      'Cryopreservation Techniques for Local Livestock Breeds: Challenges and Breakthroughs',
    event: 'International Conference on Animal Reproduction',
    venue: 'University of Cairo',
    location: 'Cairo, Egypt',
    date: '2024-09-15',
    type: 'invited-talk',
    description:
      'An invited talk presenting findings from a multi-year study on breed-specific cryopreservation protocols, attended by 200+ researchers and practitioners in animal reproduction.',
    featured: true,
  },
  {
    id: 'talk-002',
    title:
      'AI-Driven Health Monitoring in Smart Livestock Farms',
    event: 'Smart Agriculture Summit 2024',
    venue: 'Expo Center',
    location: 'Dubai, UAE',
    date: '2024-03-22',
    type: 'conference-presentation',
    description:
      'Presented a novel framework for AI-based continuous health monitoring in livestock, demonstrating 94% accuracy in early disease detection.',
    slidesUrl: '#',
    featured: true,
  },
  {
    id: 'talk-003',
    title: 'Sustainable Livestock Production in Arid Regions',
    event: 'Sustainable Agriculture Forum',
    venue: 'Agricultural Research Center',
    location: 'Rabat, Morocco',
    date: '2023-11-08',
    type: 'keynote',
    description:
      'A keynote address covering integrated approaches to sustainable livestock management adapted to arid and semi-arid climates.',
    videoUrl: '#',
    featured: true,
  },
  {
    id: 'talk-004',
    title: 'Poster: Heat Stress Effects on Semen Quality Across Breeds',
    event: 'European Society for Animal Reproduction',
    venue: 'University of Bologna',
    location: 'Bologna, Italy',
    date: '2023-07-12',
    type: 'poster',
    description:
      'A poster presentation showcasing comparative analysis of semen quality parameters under heat stress conditions across different livestock breeds.',
  },
  {
    id: 'talk-005',
    title: 'Workshop: Digital Tools for Modern Farmers',
    event: 'Agricultural Extension Training Program',
    venue: 'Ministry of Agriculture',
    location: 'Algiers, Algeria',
    date: '2023-05-20',
    type: 'workshop',
    description:
      'Led a hands-on workshop training 50+ extension workers on digital agriculture tools, IoT sensors, and data-driven decision making.',
  },
  {
    id: 'talk-006',
    title: 'Panel: The Future of Precision Livestock Farming',
    event: 'AgriTech Innovation Conference',
    venue: 'Convention Center',
    location: 'Riyadh, Saudi Arabia',
    date: '2022-10-15',
    type: 'panel',
    description:
      'Participated as a panelist discussing emerging technologies in precision livestock farming and their adoption challenges in the MENA region.',
  },
  {
    id: 'talk-007',
    title: 'Training Farmers in Digital Agriculture: Lessons Learned',
    event: 'International Conference on Agricultural Education',
    venue: 'University of Tunis',
    location: 'Tunis, Tunisia',
    date: '2022-06-10',
    type: 'conference-presentation',
    description:
      'Shared research findings on effective pedagogical strategies for upskilling farmers in digital agriculture technologies.',
  },
];

export const talkTypeLabels: Record<TalkType, string> = {
  'invited-talk': 'Invited Talk',
  'conference-presentation': 'Conference Presentation',
  poster: 'Poster Presentation',
  workshop: 'Workshop',
  panel: 'Panel Discussion',
  keynote: 'Keynote',
};

export const talkTypeColors: Record<TalkType, string> = {
  'invited-talk': 'bg-amber-500/10 text-amber-400 border-amber-500/30',
  'conference-presentation': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
  poster: 'bg-purple-500/10 text-purple-400 border-purple-500/30',
  workshop: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30',
  panel: 'bg-rose-500/10 text-rose-400 border-rose-500/30',
  keynote: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30',
};

/** Format date as "Month DD, YYYY" */
export function formatTalkDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/** Get year from ISO date */
export function getTalkYear(isoDate: string): number {
  return new Date(isoDate).getFullYear();
}

/** All unique years, descending */
export const allTalkYears = Array.from(
  new Set(talks.map((t) => getTalkYear(t.date)))
).sort((a, b) => b - a);
