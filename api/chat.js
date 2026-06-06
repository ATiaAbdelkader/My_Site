const SYSTEM_PROMPT = `You are Abdelkader Atia's AI assistant - a knowledgeable, professional, and friendly persona representing a PhD researcher in animal sciences and agricultural innovation.

Background: PhD in Animal Sciences specializing in semen quality and reproductive performance. 10+ years in research, training, and digital innovation in agriculture.

Your role: Answer questions about Abdelkader's work, projects, services, and provide insights on agricultural topics. Keep responses concise (max 100 words). When discussing services, include a CTA. Maintain a professional yet approachable tone.

Always be helpful and direct visitors to the contact form for detailed inquiries or consulting requests.`;

const knowledgeBase = [
  { keywords: ['phd', 'doctorate', 'animal science', 'semen quality', 'reproduction'], response: "I hold a PhD in Animal Sciences specializing in semen quality assessment, reproductive performance, and sustainable livestock production. My research bridges laboratory techniques with practical farm applications." },
  { keywords: ['fbs', 'farmer field school', 'training program'], response: "FBS (Farmer Field Schools) is our flagship training methodology - a hands-on, participatory approach that empowers farmers through learning-by-doing. We've trained 500+ farmers with a 40% productivity increase." },
  { keywords: ['agriskills', 'academy', 'online course'], response: "AgriSkills Academy is our integrated educational platform offering comprehensive agricultural training programs with internationally recognized certifications. We provide 40+ programs covering livestock, crops, and digital agriculture." },
  { keywords: ['kamel3lom', 'platform', 'mobile app'], response: "kamel3lom is our digital platform making agricultural knowledge accessible through web and mobile apps. It features interactive content, tutorials, and community features for farmers and students." },
  { keywords: ['research', 'consulting', 'consultation', 'data analysis'], response: "I provide consulting services in experimental design, statistical analysis (R, SAS), scientific writing, and international publication strategy. I've helped researchers publish in high-impact journals." },
  { keywords: ['semen analysis', 'app', 'software'], response: "The Semen Analysis App uses AI-powered imaging to evaluate semen quality parameters including motility, morphology, and concentration. It's designed for veterinarians and researchers." },
  { keywords: ['bsf', 'black soldier fly', 'breeding', 'protein'], response: "The BSF Breeding Project is an innovative initiative using Black Soldier Fly larvae as an alternative protein source for animal feed while managing organic waste sustainably." },
  { keywords: ['smart farm', 'management system'], response: "Smart Farm Management System is a comprehensive solution for tracking livestock, monitoring productivity, and generating predictive insights using data analytics and IoT integration." },
  { keywords: ['publication', 'publish', 'journal', 'paper'], response: "I have 20+ publications in peer-reviewed international journals. I offer mentoring on manuscript preparation, journal selection, peer review response, and research communication." },
  { keywords: ['certificate', 'certification', 'diploma'], response: "I hold 40+ international certifications from Wageningen, FAO, ASM, GIZ, Oxford Climate Society, and other prestigious institutions covering sustainable agriculture, climate resilience, and digital innovation." },
  { keywords: ['workshop', 'event', 'seminar', 'conference'], response: "I regularly conduct workshops on modern agriculture techniques, data analysis, scientific writing, and digital farming. Check the services section or contact me for upcoming events." },
  { keywords: ['collaboration', 'partner', 'international', 'project'], response: "I collaborate with institutions across Europe, Middle East, and Africa including Wageningen University, FAO, and GIZ. I'm open to research partnerships, training collaborations, and consulting projects." },
];

function detectIntent(message) {
  const msg = message.toLowerCase();

  // Greetings
  if (/^(مرحبا|السلام|hi|hello|hey|مرحباً|اهلا|peace)/.test(msg)) {
    return 'greeting';
  }

  // About / background
  if (/^(من|who|tell me|what is|how are|عرفني|اخبرني)/.test(msg) || msg.includes('your background') || msg.includes('yourself')) {
    return 'about';
  }

  // Contact
  if (/contact|email|phone|call|reach|تواصل|اتصل|بريد|هاتف/.test(msg)) {
    return 'contact';
  }

  // Services
  if (/service|offer|provide|price|cost|سعر|خدمة|كم/.test(msg)) {
    return 'services';
  }

  // Thanks
  if (/^(شكرا|thanks|thank you|شكراً|جزاك)/.test(msg)) {
    return 'thanks';
  }

  return 'knowledge';
}

function generateMockResponse(userMessage, context = {}) {
  const message = userMessage.toLowerCase();
  const intent = detectIntent(userMessage);

  switch (intent) {
    case 'greeting':
      const greetings = [
        "مرحباً! 👋 كيف يمكنني مساعدتك اليوم؟ يمكنك السؤال عن خدماتي، أبحاثي، أو أي استفسار في المجال الزراعي.",
        "أهلاً بك! 🌾 أنا هنا للإجابة على أسئلتك حول التدريب الزراعي، البحث العلمي، أو المشاريع الرقمية. كيف أقدر أساعدك؟",
        "Hello! 👋 Welcome to Abdelkader Atia's assistant. How can I help you today? Feel free to ask about training, research, or digital agriculture solutions.",
        "Hi there! 🌾 I'm here to help with information about agricultural innovation, training programs, and research. What would you like to know?"
      ];
      return greetings[Math.floor(Math.random() * greetings.length)];

    case 'about':
      return "I'm Abdelkader Atia, a PhD researcher in animal sciences specializing in semen quality and reproductive performance. I combine scientific research with practical training (FBS, AgriSkills Academy) and digital innovation (kamel3lom platform, smart farming tools). My mission is to bridge the gap between agricultural science and practical application. 🌾 How can I assist you?";

    case 'contact':
      return "You can reach me through the contact form on this website, email me at contact@abdelkader-atia.com, or connect on LinkedIn. I typically respond within 24-48 hours. I'm always open to collaboration opportunities in research, training, and digital agriculture! 📬";

    case 'services':
      return "I offer: (1) Agricultural training through FBS programs and AgriSkills Academy, (2) Research consulting (experimental design, data analysis, publishing), (3) Digital agriculture solutions, (4) Scientific writing mentoring. All services are available remotely worldwide. Which interests you? 🎯";

    case 'thanks':
      return "You're welcome! 😊 If you have any more questions, feel free to ask. Don't forget to check out the projects and articles sections for more detailed information about my work.";

    case 'knowledge':
    default:
      // Search knowledge base
      for (const entry of knowledgeBase) {
        if (entry.keywords.some(kw => message.includes(kw))) {
          return entry.response + " Would you like more details about this topic? Feel free to ask! 😊";
        }
      }

      // Fallback with context awareness
      if (context.lastTopic) {
        return `That's an interesting follow-up about ${context.lastTopic}! To give you the most accurate information, could you please be more specific about what you'd like to know? You can also browse the projects or articles sections for detailed content. 😊`;
      }

      return "That's a great question! 🤔 I'd be happy to help. Could you please provide more details about what you're looking for? I can assist with:\n- Agricultural training programs\n- Research and consulting services\n- Digital agriculture solutions\n- Information about my projects and publications\n\nOr feel free to browse the website sections above!";
  }
}

async function handleChatMessage(req) {
  try {
    const { message, conversationId, context } = req;

    if (!message || message.trim().length === 0) {
      return { status: 400, error: 'Message cannot be empty' };
    }

    logConversation({
      conversationId,
      role: 'user',
      content: message,
      timestamp: new Date().toISOString()
    });

    // Use RAG search if available
    let ragContext = null;
    if (typeof searchKnowledgeBase !== 'undefined') {
      ragContext = searchKnowledgeBase(message);
    }

    const conversationHistory = loadConversationHistory(conversationId);
    const lastTopic = conversationHistory.length > 0
      ? conversationHistory[conversationHistory.length - 1].content.split(' ').slice(0, 5).join(' ')
      : null;

    const response = generateMockResponse(message, {
      lastTopic,
      ragContext,
      conversationHistory
    });

    logConversation({
      conversationId,
      role: 'assistant',
      content: response,
      timestamp: new Date().toISOString()
    });

    return {
      status: 200,
      content: response,
      conversationId,
      timestamp: new Date().toISOString(),
      context: { lastTopic: message.split(' ').slice(0, 5).join(' ') }
    };
  } catch (error) {
    console.error('Chat error:', error);
    return { status: 500, error: 'Failed to process message' };
  }
}

function loadConversationHistory(conversationId) {
  if (typeof window !== 'undefined') {
    const key = `chat_log_${conversationId}`;
    return JSON.parse(localStorage.getItem(key) || '[]');
  }
  return [];
}

function logConversation(data) {
  const timestamp = new Date().toISOString();
  const logData = { ...data, timestamp, source: 'browser' };

  if (typeof window !== 'undefined') {
    const key = `chat_log_${data.conversationId}`;
    const existing = JSON.parse(localStorage.getItem(key) || '[]');
    existing.push(logData);
    localStorage.setItem(key, JSON.stringify(existing.slice(-50)));
  }

  return logData;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { handleChatMessage, generateMockResponse, logConversation, SYSTEM_PROMPT };
}
