/**
 * Citation format generators
 * Generates BibTeX, APA, MLA, Chicago, and Harvard citations from a Publication object.
 */

import { Publication } from '@/data/publications';

/** Format author list: "Last, F., Last, F., & Last, F." */
function formatAuthorsAPA(authors: string[]): string {
  if (authors.length === 0) return '';
  if (authors.length === 1) return authors[0];
  if (authors.length === 2) return `${authors[0]} & ${authors[1]}`;
  const all = authors.slice(0, -1).join(', ');
  return `${all}, & ${authors[authors.length - 1]}`;
}

/** Format author list for MLA: "Last, First, and First Last" (max 2, then et al.) */
function formatAuthorsMLA(authors: string[]): string {
  if (authors.length === 0) return '';
  if (authors.length === 1) return authors[0];
  if (authors.length === 2) return `${authors[0]}, and ${authors[1]}`;
  return `${authors[0]}, et al.`;
}

/** Format author list for Chicago: "First Last, First Last, and First Last" */
function formatAuthorsChicago(authors: string[]): string {
  if (authors.length === 0) return '';
  if (authors.length === 1) return authors[0];
  if (authors.length === 2) return `${authors[0]} and ${authors[1]}`;
  const all = authors.slice(0, -1).join(', ');
  return `${all}, and ${authors[authors.length - 1]}`;
}

/** Generate APA 7th edition citation */
export function toAPA(pub: Publication): string {
  const authors = formatAuthorsAPA(pub.authors);
  const title = pub.title;
  const journal = pub.journal;
  const year = pub.year;

  let citation = `${authors} (${year}). ${title}. `;

  if (pub.type === 'journal' || pub.type === 'preprint') {
    citation += `<i>${journal}</i>`;
    if (pub.volume) {
      citation += `, <i>${pub.volume}</i>`;
      if (pub.issue) citation += `(${pub.issue})`;
    }
    if (pub.pages) citation += `, ${pub.pages}`;
    citation += '.';
  } else if (pub.type === 'book-chapter' || pub.type === 'book') {
    citation += `In <i>${journal}</i>`;
    if (pub.pages) citation += ` (pp. ${pub.pages})`;
    citation += '.';
  } else if (pub.type === 'conference') {
    citation += `<i>${journal}</i>`;
    if (pub.pages) citation += `, ${pub.pages}`;
    citation += '.';
  } else {
    citation += `<i>${journal}</i>.`;
  }

  if (pub.doi) citation += ` https://doi.org/${pub.doi}`;
  return citation;
}

/** Generate MLA 9th edition citation */
export function toMLA(pub: Publication): string {
  const authors = formatAuthorsMLA(pub.authors);
  const title = pub.title;
  const journal = pub.journal;
  const year = pub.year;

  let citation = `${authors}. "${title}." <i>${journal}</i>`;
  if (pub.volume) {
    citation += `, vol. ${pub.volume}`;
    if (pub.issue) citation += `, no. ${pub.issue}`;
  }
  if (pub.year) citation += `, ${pub.year}`;
  if (pub.pages) citation += `, pp. ${pub.pages}`;
  citation += '.';

  if (pub.doi) citation += ` https://doi.org/${pub.doi}`;
  return citation;
}

/** Generate Chicago citation */
export function toChicago(pub: Publication): string {
  const authors = formatAuthorsChicago(pub.authors);
  const title = pub.title;
  const journal = pub.journal;
  const year = pub.year;

  let citation = `${authors}. "${title}." <i>${journal}</i>`;
  if (pub.volume) citation += ` ${pub.volume}`;
  if (pub.issue) citation += `, no. ${pub.issue}`;
  if (pub.year) citation += ` (${year})`;
  if (pub.pages) citation += `: ${pub.pages}`;
  citation += '.';

  if (pub.doi) citation += ` https://doi.org/${pub.doi}`;
  return citation;
}

/** Generate BibTeX entry */
export function toBibTeX(pub: Publication): string {
  // Generate a citation key: firstAuthorLastName + year + firstWordOfTitle
  const firstAuthor = pub.authors[0] ?? 'Unknown';
  const lastName = firstAuthor.split(' ').slice(-1)[0]?.toLowerCase() ?? 'unknown';
  const firstWord = pub.title
    .split(' ')
    .find((w) => w.length > 3)
    ?.toLowerCase()
    ?.replace(/[^a-z]/g, '') ?? 'paper';
  const key = `${lastName}${pub.year}${firstWord}`;

  const bibtexAuthors = pub.authors.join(' and ');
  const bibtexTitle = pub.title.replace(/[{}]/g, '');

  let entry = `@${pub.type === 'book-chapter' ? 'incollection' : pub.type === 'preprint' ? 'article' : 'article'}{${key},\n`;
  entry += `  title = {${bibtexTitle}},\n`;
  entry += `  author = {${bibtexAuthors}},\n`;
  entry += `  journal = {${pub.journal}},\n`;
  entry += `  year = {${pub.year}},\n`;
  if (pub.volume) entry += `  volume = {${pub.volume}},\n`;
  if (pub.issue) entry += `  number = {${pub.issue}},\n`;
  if (pub.pages) entry += `  pages = {${pub.pages}},\n`;
  if (pub.doi) entry += `  doi = {${pub.doi}},\n`;
  if (pub.url && pub.url !== '#') entry += `  url = {${pub.url}},\n`;
  entry += `}\n`;

  return entry;
}

/** Generate Harvard citation */
export function toHarvard(pub: Publication): string {
  const authors = formatAuthorsAPA(pub.authors);
  const title = pub.title;
  const journal = pub.journal;
  const year = pub.year;

  let citation = `${authors} ${year}, '${title}', <i>${journal}</i>`;
  if (pub.volume) {
    citation += `, vol. ${pub.volume}`;
    if (pub.issue) citation += `, no. ${pub.issue}`;
  }
  if (pub.pages) citation += `, pp. ${pub.pages}`;
  citation += '.';

  if (pub.doi) citation += ` doi: ${pub.doi}`;
  return citation;
}

export type CitationStyle = 'apa' | 'mla' | 'chicago' | 'bibtex' | 'harvard';

export const citationStyleLabels: Record<CitationStyle, string> = {
  apa: 'APA 7th',
  mla: 'MLA 9th',
  chicago: 'Chicago',
  bibtex: 'BibTeX',
  harvard: 'Harvard',
};

export function generateCitation(
  pub: Publication,
  style: CitationStyle
): string {
  switch (style) {
    case 'apa':
      return toAPA(pub);
    case 'mla':
      return toMLA(pub);
    case 'chicago':
      return toChicago(pub);
    case 'bibtex':
      return toBibTeX(pub);
    case 'harvard':
      return toHarvard(pub);
    default:
      return toAPA(pub);
  }
}

/** Copy text to clipboard (browser-only) */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text);
      return true;
    }
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    const success = document.execCommand('copy');
    document.body.removeChild(textarea);
    return success;
  } catch {
    return false;
  }
}
