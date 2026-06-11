/**
 * RAG (Retrieval-Augmented Generation) Search Module
 * Provides context-aware responses by searching through website content
 */

// Website knowledge base (simulated)
const knowledgeBase = [
  {
    id: 'about-phd',
    category: 'background',
    content: 'PhD in animal sciences specializing in semen quality and reproductive performance',
    keywords: ['phd', 'doctorate', 'background', 'education', 'qualification']
  },
  {
    id: 'fbs-training',
    category: 'training',
    content: 'FBS (Farmer Field Schools) Training Program covers livestock production and sustainable agriculture with hands-on training',
    keywords: ['fbs', 'training', 'farmer', 'field', 'school', 'livestock']
  },
  {
    id: 'agriskills-academy',
    category: 'business',
    content: 'AgriSkills Academy offers integrated educational platform with online & offline programs, certifications, and industry partnerships. 500+ trainees trained',
    keywords: ['agriskills', 'academy', 'certification', 'education', 'platform']
  },
  {
    id: 'semen-analysis',
    category: 'research',
    content: 'Semen Quality Analysis App uses imaging and AI techniques for smart evaluation of semen quality in livestock breeding',
    keywords: ['semen', 'analysis', 'app', 'ai', 'quality', 'breeding']
  },
  {
    id: 'kamel3lom-platform',
    category: 'app',
    content: 'kamel3lom is a digital platform for disseminating agricultural knowledge with interactive content available on web and mobile',
    keywords: ['kamel3lom', 'platform', 'digital', 'knowledge', 'mobile', 'app']
  },
  {
    id: 'research-consulting',
    category: 'services',
    content: 'Consulting services include experimental design, data analysis, scientific writing, thesis supervision, and international publishing support',
    keywords: ['consulting', 'research', 'data', 'analysis', 'writing', 'publishing']
  },
  {
    id: 'farm-management',
    category: 'app',
    content: 'Smart Farm Management System provides comprehensive application for farm asset tracking, productivity monitoring, and smart predictions',
    keywords: ['farm', 'management', 'system', 'smart', 'productivity', 'tracking']
  },
  {
    id: 'bsf-breeding',
    category: 'business',
    content: 'BSF (Black Soldier Fly) Breeding Project is an innovative initiative for breeding BSF as alternative protein source and waste management solution',
    keywords: ['bsf', 'black', 'soldier', 'fly', 'breeding', 'protein']
  }
];

/**
 * Search knowledge base using simple keyword matching and semantic similarity
 * @param {string} query - User query
 * @param {number} limit - Max results to return
 * @returns {Array} Relevant knowledge items
 */
function searchKnowledgeBase(query, limit = 3) {
  const queryWords = query.toLowerCase().split(/\s+/);
  
  const scored = knowledgeBase.map(item => {
    let score = 0;
    
    // Keyword matching
    queryWords.forEach(word => {
      if (item.keywords.some(kw => kw.includes(word) || word.includes(kw))) {
        score += 3;
      }
      if (item.content.toLowerCase().includes(word)) {
        score += 1;
      }
    });
    
    return { ...item, score };
  });
  
  return scored
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ score, ...item }) => item);
}

/**
 * Enrich response with RAG context
 * @param {string} userMessage - Original user message
 * @returns {Object} RAG context data
 */
function enrichWithRAG(userMessage) {
  const results = searchKnowledgeBase(userMessage);
  
  return {
    query: userMessage,
    results: results,
    context: results.map(r => r.content).join('\n'),
    hasContext: results.length > 0,
    sources: results.map(r => r.id)
  };
}

/**
 * Format RAG context for prompt injection
 */
function formatRAGContext(ragData) {
  if (!ragData.hasContext) return '';
  
  return `\n\nContext from knowledge base:\n${ragData.results.map(r => `- ${r.content}`).join('\n')}`;
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { searchKnowledgeBase, enrichWithRAG, formatRAGContext, knowledgeBase };
}
