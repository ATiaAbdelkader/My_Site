// Projects data (English)
const projects = [
  { name: 'Semen Analysis App', desc: 'Smart application for evaluating and analyzing semen quality using imaging and AI techniques', cat: 'app', icon: '🔬', link: '#' },
  { name: 'AgriSkills Academy', desc: 'Integrated educational platform for agricultural training and professional capacity building with recognized certifications', cat: 'business', icon: '🎓', link: '#' },
  { name: 'FBS Training Program', desc: 'Comprehensive training program series in Farmer Field Schools covering livestock production and sustainable agriculture', cat: 'training', icon: '🌾', link: '#' },
  { name: 'Animal Reproduction Research', desc: 'Advanced research projects in improving reproductive performance and semen quality with international publishing', cat: 'research', icon: '🧬', link: '#' },
  { name: 'BSF Breeding Project', desc: 'Innovative initiative for breeding Black Soldier Fly as alternative protein source and waste management solution', cat: 'business', icon: '🦟', link: '#' },
  { name: 'kamel3lom Platform', desc: 'Digital platform for disseminating agricultural knowledge and simplifying sciences for the community with interactive content', cat: 'app', icon: '📱', link: '#' },
  { name: 'Smart Farm Management System', desc: 'Comprehensive application for farm management with asset tracking, productivity, and smart predictions', cat: 'app', icon: '🌐', link: '#' },
  { name: 'Breeding & Genetics Studies', desc: 'Specialized research in selective breeding and genetic improvement indicators for cattle', cat: 'research', icon: '📊', link: '#' },
  { name: 'Modern Agriculture Workshops', desc: 'Series of practical workshops on modern techniques and best practices in agricultural production', cat: 'training', icon: '🛠️', link: '#' },
];

// Testimonials data (English)
const testimonials = [
  { text: 'Excellent training with solid scientific content. I learned a lot from the practical aspects of the FBS program. The trainer explains concepts clearly and simply.', author: 'Eng. Ahmed', role: 'Agricultural Engineer', initials: 'EA', color: 'from-cyan-500 to-cyan-600', rating: 5 },
  { text: 'Dr. Abdelkader helped me analyze my thesis data professionally and clearly. He is an excellent supervisor who deeply masters his field.', author: 'Sarah K.', role: 'Master\'s Student', initials: 'SK', color: 'from-amber-500 to-amber-600', rating: 5 },
  { text: 'A reliable partner in agricultural innovation. He combines scientific vision with practical implementation perfectly committed to quality results.', author: 'Dr. Mohamed', role: 'Business Partner', initials: 'DM', color: 'from-cyan-500 to-cyan-600', rating: 5 },
  { text: 'Training programs are specialized and very practical. They helped me develop modern farm management skills and apply new technologies.', author: 'Fatima A.', role: 'Farmer', initials: 'FA', color: 'from-amber-500 to-amber-600', rating: 5 },
  { text: 'The kamel3lom platform changed how I understand complex agricultural concepts. Rich content, easy to understand, and very valuable.', author: 'Ibrahim Q.', role: 'University Student', initials: 'IQ', color: 'from-cyan-500 to-cyan-600', rating: 5 },
  { text: 'Professional support in scientific research and international publishing. He helped me publish my research in a reputable international journal.', author: 'Dr. Leila', role: 'Researcher', initials: 'DL', color: 'from-amber-500 to-amber-600', rating: 5 },
];

// Gallery data (English)
const galleryItems = [
  { id: 1, title: 'Field Research Lab', desc: 'Advanced laboratory setup for semen quality analysis', cat: 'research', icon: '🔬', image: '🧪' },
  { id: 2, title: 'Training Session', desc: 'FBS training program in action with farmers', cat: 'training', icon: '👨‍🌾', image: '🎓' },
  { id: 3, title: 'Farm Visit', desc: 'Field work and livestock monitoring', cat: 'farm', icon: '🐄', image: '🚜' },
  { id: 4, title: 'Conference Presentation', desc: 'International agricultural conference', cat: 'event', icon: '🎤', image: '🌍' },
  { id: 5, title: 'Research Data', desc: 'Collaborative research and analysis', cat: 'research', icon: '📊', image: '📈' },
  { id: 6, title: 'Farmer Workshop', desc: 'Hands-on practical training workshop', cat: 'training', icon: '🛠️', image: '🌱' },
  { id: 7, title: 'Livestock Assessment', desc: 'Animal health and productivity evaluation', cat: 'farm', icon: '🐑', image: '✅' },
  { id: 8, title: 'Seminar Event', desc: 'Educational seminar with industry experts', cat: 'event', icon: '🎯', image: '🏆' },
  { id: 9, title: 'Digital Platform', desc: 'kamel3lom platform demonstration', cat: 'research', icon: '💻', image: '📱' },
];

// Case studies data (English)
const caseStudies = [
  { id: 1, title: 'AgriSkills Academy Growth', subtitle: 'Building Educational Excellence', challenge: 'Needed to create a comprehensive agricultural training platform that serves farmers and researchers', solution: 'Developed integrated academy with online & offline programs, certifications, and industry partnerships', results: '500+ trainees | 40+ programs | 95% satisfaction rate', impact: '🎓 Educational transformation', tags: ['Training', 'Platform', 'Education'] },
  { id: 2, title: 'Semen Quality Research', subtitle: 'Scientific Innovation', challenge: 'Improving livestock breeding through better semen quality assessment', solution: 'Advanced laboratory techniques combined with AI-powered analysis system', results: '20+ publications | International collaborations | Patent-pending technology', impact: '🧬 Research breakthrough', tags: ['Research', 'Innovation', 'Science'] },
  { id: 3, title: 'FBS Training Impact', subtitle: 'Community Empowerment', challenge: 'Farmers lacking modern agricultural knowledge and techniques', solution: 'Structured Field Farmer Schools program with hands-on training', results: '500+ farmers trained | 40% productivity increase | Sustainable practices adopted', impact: '🌾 Community growth', tags: ['Training', 'Impact', 'Sustainability'] },
];

// Blog articles data (English)
const blogArticles = [
  {
    id: 1, icon: '🐄', category: 'ANIMAL SCIENCE',
    title: 'Improving Semen Quality: Latest Techniques',
    summary: 'Comprehensive overview of latest research and techniques used in assessing and improving semen quality and reproductive performance.',
    content: 'Semen quality plays a pivotal role in improving animal reproductive performance and increasing farm productivity. This article reviews the latest techniques used in assessing and improving semen quality.\n\nModern techniques include:\n- AI-powered analysis for motility and morphology assessment\n- Electron microscopy for fine structure examination\n- Advanced cooling and freezing techniques for quality preservation\n- Biomarkers for early detection of issues\n\nPractical applications:\n- Improving artificial insemination programs\n- Selecting genetically superior sires\n- Reducing production costs and increasing efficiency',
    date: '2026-01-15', readTime: '8 min read'
  },
  {
    id: 2, icon: '📊', category: 'DATA ANALYSIS',
    title: 'Using R for Agricultural Data Analysis',
    summary: 'Practical guide to using R language for processing, analyzing, and visualizing agricultural data efficiently and professionally.',
    content: 'R is one of the most powerful open-source tools for statistical analysis and data visualization. In agriculture, R offers a wide range of specialized packages.\n\nEssential packages:\n- agricolae: Statistical analysis for agricultural experiments\n- lme4: Linear mixed-effects models\n- ggplot2: Professional data visualization\n- caret: Machine learning\n\nPractical steps:\n1. Import data from Excel or CSV\n2. Clean data and handle missing values\n3. Statistical analysis (ANOVA, Regression)\n4. Create visualizations and reports',
    date: '2026-02-20', readTime: '10 min read'
  },
  {
    id: 3, icon: '🌾', category: 'TRAINING',
    title: 'Field Farmer Schools: Effective Methodology',
    summary: 'How FBS programs empower farmers and improve agricultural productivity through modern practices and knowledge sharing.',
    content: 'Field Farmer Schools (FBS) are an innovative training methodology based on learning by doing and peer knowledge exchange among farmers.\n\nCore principles:\n- Learning by Doing\n- Group decision making\n- Comparative field experiments\n- Empowering farmers as local experts\n\nAchieved results:\n- 30-50% productivity improvement\n- Reduced production costs\n- Adoption of sustainable practices\n- Building local knowledge networks',
    date: '2026-03-10', readTime: '7 min read'
  },
  {
    id: 4, icon: '💡', category: 'INNOVATION',
    title: 'AI in Agriculture: Practical Applications',
    summary: 'Exploring use cases of artificial intelligence and machine learning in improving agricultural decisions and productivity.',
    content: 'AI is revolutionizing the agricultural sector by providing intelligent solutions for increased productivity and sustainability.\n\nKey applications:\n- Plant disease recognition through imaging\n- Yield prediction and climate risk assessment\n- Smart agricultural robotics\n- Efficient water resource management\n- Agricultural product quality analysis\n\nCase study:\nUsing deep learning techniques to analyze pollen grain images and assess quality automatically, reducing inspection time from hours to minutes.',
    date: '2026-04-05', readTime: '9 min read'
  },
  {
    id: 5, icon: '🔬', category: 'RESEARCH',
    title: 'Scientific Publishing Guide',
    summary: 'Practical steps for publishing your research in peer-reviewed international journals and reputable databases.',
    content: 'International scientific publishing is the gateway to connecting with the global scientific community and building a prestigious academic reputation.\n\nKey steps:\n1. Choose the right journal (Scopus, Web of Science)\n2. Write the paper according to journal standards\n3. Prepare the manuscript professionally\n4. Handle reviewer feedback\n5. Follow up on publication and promotion\n\nImportant tips:\n- Choose an attractive and clear title\n- Write a strong abstract\n- Cite references accurately\n- Follow scientific publishing ethics',
    date: '2026-05-01', readTime: '11 min read'
  },
  {
    id: 6, icon: '🚀', category: 'ENTREPRENEURSHIP',
    title: 'Starting an Agricultural Project',
    summary: 'Comprehensive guide for agricultural entrepreneurs on launching and developing a successful agricultural business.',
    content: 'Agricultural entrepreneurship requires a unique blend of technical knowledge, managerial skills, and future vision.\n\nProject stages:\n1. Feasibility study and market analysis\n2. Business plan development\n3. Securing funding (loans, grants, investors)\n4. Location and equipment selection\n5. Hiring and training\n6. Marketing and distribution\n\nPromising areas:\n- Organic farming\n- Climate-smart agriculture\n- Sustainable livestock production\n- Vertical farming and greenhouses',
    date: '2026-05-20', readTime: '8 min read'
  }
];
const faqItems = [
  { question: 'What is your background and expertise?', answer: 'I hold a PhD in animal sciences specializing in semen quality and reproductive performance. I have 10+ years of experience in research, training, and digital innovation in agriculture.' },
  { question: 'What training programs do you offer?', answer: 'I offer comprehensive agricultural training through FBS programs, AgriSkills Academy, and specialized workshops covering livestock production, modern farming techniques, and digital agriculture.' },
  { question: 'Do you offer research consulting services?', answer: 'Yes! I provide consulting in experimental design, data analysis, scientific writing, and international publishing support for researchers and institutions.' },
  { question: 'How can I access the kamel3lom platform?', answer: 'kamel3lom is our digital platform for agricultural knowledge. You can access it through our website or mobile app with free and premium content.' },
  { question: 'Do you provide certification for training?', answer: 'Yes, all our training programs include recognized certificates upon completion. AgriSkills Academy provides internationally recognized agricultural certifications.' },
  { question: 'What is your consulting availability?', answer: 'I offer flexible consulting arrangements. You can contact me for custom solutions for training, research, or digital platform development.' },
  { question: 'How do I contact you for collaboration?', answer: 'You can reach me through the contact form on this website, email, LinkedIn, or phone. I respond within 24-48 hours to all inquiries.' },
  { question: 'Do you work internationally?', answer: 'Yes! I have collaborations with institutions across Europe, Middle East, and Africa. Remote consulting and training are available worldwide.' },
];

/**
 * Render projects grid with optional category filter
 * @param {string} filter - Category filter ('all', 'app', 'research', 'training', 'business')
 */
function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectGrid');
  grid.innerHTML = '';
  const filtered = filter === 'all' ? projects : projects.filter(p => p.cat === filter);
  filtered.forEach((p, i) => {
    const catLabels = { app: 'Application', research: 'Research', training: 'Training', business: 'Business' };
    const card = document.createElement('div');
    card.className = 'glass-card rounded-2xl overflow-hidden anim-in';
    card.style.animationDelay = `${i * 0.1}s`;
    card.style.opacity = '0';
    card.innerHTML = `
      <div class="h-36 flex items-center justify-center text-5xl" style="background:linear-gradient(135deg,rgba(34,211,238,0.1),rgba(6,182,212,0.03));">${p.icon}</div>
      <div class="p-5">
        <span class="text-cyan-400 text-xs font-semibold">${catLabels[p.cat]}</span>
        <h3 class="text-white font-bold mt-2 mb-2">${p.name}</h3>
        <p class="text-gray-400 text-sm mb-4">${p.desc}</p>
        <a href="${p.link}" class="text-cyan-400 text-sm font-semibold hover:text-cyan-300 flex items-center gap-1">View Details <i data-lucide="arrow-right" style="width:14px;height:14px"></i></a>
      </div>
    `;
    grid.appendChild(card);
  });
  lucide.createIcons();
}

/**
 * Filter projects by category and update button styles
 * @param {string} cat - Category to filter by
 */
function filterProjects(cat) {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    if (btn.dataset.filter === cat) {
      btn.className = 'filter-btn px-5 py-2 rounded-lg text-sm font-semibold btn-primary text-white';
    } else {
      btn.className = 'filter-btn px-5 py-2 rounded-lg text-sm font-semibold btn-outline text-gray-400';
    }
  });
  renderProjects(cat);
}

// Render testimonials
/**
 * Render testimonials carousel
 */
function renderTestimonials() {
  const container = document.getElementById('testimonialsContainer');
  container.innerHTML = '';
  testimonials.forEach((t, i) => {
    const stars = '⭐'.repeat(t.rating);
    const card = document.createElement('div');
    card.className = 'testimonial-card glass-card rounded-2xl p-6 flex-shrink-0';
    card.innerHTML = `
      <div class="flex gap-1 mb-3">${stars}</div>
      <p class="text-gray-300 text-sm mb-4 leading-relaxed">"${t.text}"</p>
      <div class="flex items-center gap-3 border-t border-gray-800 pt-4">
        <div class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white" style="background:linear-gradient(135deg,var(--color-start),var(--color-end));">
          ${t.initials}
        </div>
        <div>
          <div class="text-white text-sm font-semibold">${t.author}</div>
          <div class="text-gray-500 text-xs">${t.role}</div>
        </div>
      </div>
    `;
    const [start, end] = t.color === 'from-amber-500 to-amber-600' 
      ? ['#f59e0b', '#d97706']
      : ['#06b6d4', '#0891b2'];
    card.style.setProperty('--color-start', start);
    card.style.setProperty('--color-end', end);
    container.appendChild(card);
  });
}



/**
 * Render portfolio gallery with filtering
 * @param {string} filter - Category filter
 */
function renderGallery(filter = 'all') {
  const grid = document.getElementById('galleryGrid');
  grid.innerHTML = '';
  const filtered = filter === 'all' ? galleryItems : galleryItems.filter(item => item.cat === filter);
  
  filtered.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'glass-card rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform anim-in';
    card.style.animationDelay = `${i * 0.1}s`;
    card.style.opacity = '0';
    card.innerHTML = `
      <div class="h-40 flex items-center justify-center text-6xl relative overflow-hidden" style="background:linear-gradient(135deg,rgba(34,211,238,0.1),rgba(6,182,212,0.03));">
        <div class="absolute inset-0 flex items-center justify-center text-5xl hover:scale-110 transition-transform">${item.image}</div>
      </div>
      <div class="p-4">
        <span class="text-cyan-400 text-xs font-semibold">${item.cat.toUpperCase()}</span>
        <h3 class="text-white font-bold mt-2 mb-1">${item.title}</h3>
        <p class="text-gray-400 text-sm">${item.desc}</p>
      </div>
    `;
    grid.appendChild(card);
  });
}

/**
 * Filter gallery by category
 */
function filterGallery(cat) {
  document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
    if (btn.dataset.filter === cat) {
      btn.className = 'gallery-filter-btn px-5 py-2 rounded-lg text-sm font-semibold btn-primary text-white';
    } else {
      btn.className = 'gallery-filter-btn px-5 py-2 rounded-lg text-sm font-semibold btn-outline text-gray-400';
    }
  });
  renderGallery(cat);
}

/**
 * Render case studies
 */
function renderCaseStudies() {
  const container = document.getElementById('caseStudiesContainer');
  container.innerHTML = '';
  
  caseStudies.forEach((study, i) => {
    const card = document.createElement('div');
    card.className = 'glass-card rounded-2xl p-8 border-l-4 border-cyan-400 hover:border-cyan-300 transition-all anim-in';
    card.style.animationDelay = `${i * 0.2}s`;
    card.style.opacity = '0';
    card.innerHTML = `
      <div class="flex items-start justify-between mb-4">
        <div>
          <h3 class="text-white font-bold text-2xl">${study.title}</h3>
          <p class="text-cyan-400 text-sm mt-1">${study.subtitle}</p>
        </div>
        <span class="text-3xl">${study.impact.split(' ')[0]}</span>
      </div>
      <div class="space-y-4">
        <div>
          <p class="text-gray-400 text-sm"><strong>Challenge:</strong> ${study.challenge}</p>
        </div>
        <div>
          <p class="text-gray-400 text-sm"><strong>Solution:</strong> ${study.solution}</p>
        </div>
        <div>
          <p class="text-cyan-400 text-sm font-semibold">Results: ${study.results}</p>
        </div>
        <div class="flex flex-wrap gap-2 pt-2">
          ${study.tags.map(tag => `<span class="px-3 py-1 rounded-full bg-gradient-cyan-light text-white text-xs font-semibold">${tag}</span>`).join('')}
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

/**
 * Render FAQ items with accordion functionality
 */
function renderFAQ() {
  const container = document.getElementById('faqContainer');
  container.innerHTML = '';
  
  faqItems.forEach((item, i) => {
    const card = document.createElement('div');
    card.className = 'glass-card rounded-2xl p-6 anim-in';
    card.style.animationDelay = `${i * 0.1}s`;
    card.style.opacity = '0';
    card.innerHTML = `
      <button onclick="toggleFAQ(${i})" class="w-full flex items-center justify-between text-left hover:text-cyan-400 transition-colors">
        <h3 class="text-white font-semibold flex-1">${item.question}</h3>
        <i data-lucide="chevron-down" class="faq-icon-${i} transition-transform" style="width:20px;height:20px;"></i>
      </button>
      <div id="faq-answer-${i}" class="faq-answer hidden mt-4 pt-4 border-t border-gray-800">
        <p class="text-gray-400 text-sm leading-relaxed">${item.answer}</p>
      </div>
    `;
    container.appendChild(card);
  });
  lucide.createIcons();
}

/**
 * Toggle FAQ answer visibility
 */
function toggleFAQ(index) {
  const answer = document.getElementById(`faq-answer-${index}`);
  const icon = document.querySelector(`.faq-icon-${index}`);
  
  answer.classList.toggle('hidden');
  if (icon) {
    icon.style.transform = answer.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
  }
}

// Mobile menu
/**
 * Toggle mobile menu visibility
 */
function toggleMobile() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// Navbar scroll effect and active link
let lastScroll = 0;
document.getElementById('app-body').addEventListener('scroll', function() {
  const nav = document.getElementById('navbar');
  const scrollTop = this.scrollTop;
  if (scrollTop > 80) {
    const isLight = document.body.classList.contains('light-theme');
    nav.style.background = isLight ? 'rgba(248,249,250,0.95)' : 'rgba(10, 14, 39, 0.95)';
    nav.style.backdropFilter = 'blur(16px)';
    nav.style.borderBottom = '1px solid rgba(34,211,238,0.08)';
  } else {
    nav.style.background = 'transparent';
    nav.style.backdropFilter = 'none';
    nav.style.borderBottom = 'none';
  }
  // Update active nav links
  updateActiveNavLink(scrollTop);
  lastScroll = scrollTop;
});

/**
 * Update active navigation link based on scroll position
 * @param {number} scrollTop - Current scroll position
 */
function updateActiveNavLink(scrollTop) {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');
  
  sections.forEach(section => {
    const top = section.offsetTop - 100;
    const height = section.offsetHeight;
    
    if (scrollTop >= top && scrollTop < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${section.id}`) {
          link.classList.add('active');
        }
      });
    }
  });
}

// Animate progress bars on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.progress-fill').forEach(bar => {
        bar.style.width = bar.dataset.width;
      });
    }
  });
}, { threshold: 0.3 });
document.getElementById('skills') && observer.observe(document.getElementById('skills'));

// Contact form
/**
 * Handle contact form submission
 * @param {Event} e - Form submit event
 */
function handleContact(e) {
  e.preventDefault();
  const form = document.getElementById('contactForm');
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value.trim();
  const success = document.getElementById('formSuccess');
  const submitBtn = form.querySelector('button[type="submit"]');
  const originalBtnText = submitBtn.innerHTML;
  
  // Validation
  if (!name || !email || !subject || !message) {
    showToast('⚠️ Please fill in all required fields', 'warning');
    return;
  }
  
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('⚠️ Invalid email address', 'warning');
    return;
  }
  
  // Show loading state
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span>Sending...</span>';
  
  // Send to Formspree
  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('subject', subject);
  formData.append('message', message);
  
  fetch('https://formspree.io/f/ada15_agro@', {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      success.classList.remove('hidden');
      form.reset();
      setTimeout(() => success.classList.add('hidden'), 4000);
      showToast('✅ Message sent successfully! I\'ll be in touch soon.', 'success');
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .catch(error => {
    showToast('❌ Failed to send message. Please try again.', 'warning');
    console.error('Error:', error);
  })
  .finally(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;
  });
}

/**
 * Display toast notification message
 * @param {string} message - Message to display
 * @param {string} type - Toast type ('info', 'warning', 'success')
 */
function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  const bgColor = type === 'warning' ? 'from-amber-500 to-amber-600' : 'from-cyan-500 to-cyan-600';
  toast.className = `fixed top-24 left-1/2 -translate-x-1/2 z-50 glass px-6 py-3 rounded-xl text-white text-sm font-semibold bg-gradient-to-r ${bgColor}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// Newsletter subscription
/**
 * Handle newsletter subscription
 */
function subscribeNewsletter() {
  const email = document.getElementById('newsletterEmail').value.trim();
  
  if (!email) {
    showToast('⚠️ Please enter your email address', 'warning');
    return;
  }
  
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('⚠️ Invalid email address', 'warning');
    return;
  }
  
  // Save subscription to localStorage
  const subscriptions = JSON.parse(localStorage.getItem('newsletter_subscriptions') || '[]');
  if (subscriptions.find(s => s.email === email)) {
    showToast('⚠️ This email is already subscribed', 'warning');
    return;
  }
  subscriptions.push({ email, subscribedAt: new Date().toISOString() });
  localStorage.setItem('newsletter_subscriptions', JSON.stringify(subscriptions));
  localStorage.setItem('newsletter_count', subscriptions.length);
  
  showToast('✅ Thank you! You\'ve subscribed successfully', 'success');
  document.getElementById('newsletterEmail').value = '';
  if (window.analyticsTracker) {
    window.analyticsTracker.trackEvent('newsletter_subscribe', { email });
  }
}

/**
 * Render blog articles grid
 */
function renderBlog() {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;
  grid.innerHTML = '';
  blogArticles.forEach((article, i) => {
    const card = document.createElement('div');
    card.className = 'glass-card rounded-2xl overflow-hidden hover:scale-105 transition-transform anim-in';
    card.style.animationDelay = `${i * 0.1}s`;
    card.style.opacity = '0';
    const bgGrad = i % 2 === 0
      ? 'linear-gradient(135deg,rgba(34,211,238,0.15),rgba(6,182,212,0.05))'
      : 'linear-gradient(135deg,rgba(251,191,36,0.15),rgba(245,158,11,0.05))';
    card.innerHTML = `
      <div class="h-40 flex items-center justify-center text-5xl" style="background:${bgGrad};">${article.icon}</div>
      <div class="p-6">
        <span class="${i % 2 === 0 ? 'text-cyan-400' : 'text-gold-400'} text-xs font-semibold">${article.category}</span>
        <h3 class="text-white font-bold mt-2 mb-2">${article.title}</h3>
        <p class="text-gray-400 text-sm mb-4">${article.summary}</p>
        <div class="flex items-center justify-between">
          <span class="text-gray-500 text-xs">${article.date} · ${article.readTime}</span>
          <button onclick="openArticle(${article.id})" class="text-cyan-400 text-sm font-semibold hover:text-cyan-300 flex items-center gap-1">Read More <i data-lucide="arrow-right" style="width:14px;height:14px"></i></button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
  lucide.createIcons();
}

/**
 * Open article in a modal overlay
 */
function openArticle(id) {
  const article = blogArticles.find(a => a.id === id);
  if (!article) return;
  const overlay = document.getElementById('articleModal');
  if (!overlay) return;
  document.getElementById('articleContent').innerHTML = `
    <span class="${id % 2 === 0 ? 'text-gold-400' : 'text-cyan-400'} text-xs font-semibold">${article.category}</span>
    <h3 class="text-2xl font-800 text-white mt-2 mb-2">${article.title}</h3>
    <div class="flex items-center gap-3 text-gray-500 text-xs mb-6">
      <span>${article.date}</span>
      <span>·</span>
      <span>${article.readTime}</span>
    </div>
    <div class="text-6xl mb-6 text-center">${article.icon}</div>
    <div class="text-gray-300 text-sm leading-relaxed space-y-4" style="white-space:pre-line">${article.content}</div>
  `;
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

/**
 * Close article modal
 */
function closeArticle() {
  const overlay = document.getElementById('articleModal');
  if (overlay) {
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

// Close modal on overlay click and Escape key
document.addEventListener('DOMContentLoaded', () => {
  const overlay = document.getElementById('articleModal');
  if (overlay) {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeArticle();
    });
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeArticle();
  });
});

// Download CV
/**
 * Download CV PDF file
 */
function downloadCV() {
  const cvUrl = 'CV_AbdelkaderAtia.pdf';
  
  // Check if file exists before attempting download
  fetch(cvUrl, { method: 'HEAD' }).then(response => {
    if (response.ok) {
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'CV_AbdelkaderAtia.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast('✅ Downloading CV...', 'success');
    } else {
      showToast('📄 CV is not available at the moment', 'warning');
    }
  }).catch(() => {
    showToast('📄 CV is not available at the moment', 'warning');
  });
}

// Theme toggle (per-language)
let isDarkMode = true;
function getThemeKey() {
  const lang = document.documentElement.lang || 'en';
  return `theme_${lang}`;
}
function toggleTheme() {
  isDarkMode = !isDarkMode;
  const body = document.body;
  const icon = document.getElementById('themeIcon');
  
  if (isDarkMode) {
    body.classList.remove('light-theme');
    icon.setAttribute('data-lucide', 'moon');
  } else {
    body.classList.add('light-theme');
    icon.setAttribute('data-lucide', 'sun');
  }
  
  localStorage.setItem(getThemeKey(), isDarkMode ? 'dark' : 'light');
  lucide.createIcons();
}

window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem(getThemeKey());
  if (savedTheme === 'light') {
    isDarkMode = true;
    toggleTheme();
  }
});

// Keyboard navigation & shortcuts
document.addEventListener('keydown', (e) => {
  const tag = document.activeElement?.tagName;
  const isInput = tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT';
  
  // Escape: close all modals
  if (e.key === 'Escape') {
    const menu = document.getElementById('mobileMenu');
    if (menu.classList.contains('open')) { toggleMobile(); return; }
    const search = document.getElementById('searchModal');
    if (!search?.classList.contains('hidden')) { closeSearch(); return; }
    const article = document.getElementById('articleModal');
    if (!article?.classList.contains('hidden')) { closeArticle(); return; }
  }
  
  // Scroll to top with Ctrl+Home or Cmd+Home
  if ((e.ctrlKey || e.metaKey) && e.key === 'Home') {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  
  // Skip shortcuts when typing in inputs
  if (isInput) return;
  
  // / or Ctrl+K: open search
  if (e.key === '/' || ((e.ctrlKey || e.metaKey) && e.key === 'k')) {
    e.preventDefault();
    openSearch();
  }
  
  // t: toggle theme
  if (e.key === 't' && !e.ctrlKey && !e.metaKey) { toggleTheme(); }
  // b: scroll to blog
  if (e.key === 'b' && !e.ctrlKey && !e.metaKey) {
    e.preventDefault();
    const el = document.getElementById('blogGrid');
    if (el) el.closest('section')?.scrollIntoView({ behavior: 'smooth' });
  }
  // p: scroll to projects
  if (e.key === 'p' && !e.ctrlKey && !e.metaKey) {
    e.preventDefault();
    const el = document.getElementById('projectGrid');
    if (el) el.closest('section')?.scrollIntoView({ behavior: 'smooth' });
  }
  // c: toggle chat
  if (e.key === 'c' && !e.ctrlKey && !e.metaKey) {
    const chat = document.querySelector('.chatbot-toggle-btn');
    if (chat) chat.click();
  }
});

// Language switcher - Load different version
/**
 * Switch language and redirect to appropriate page
 * @param {string} lang - Language code ('ar' or 'en')
 */
function loadLanguage(lang) {
  localStorage.setItem('language', lang);
  
  if (lang === 'ar') {
    window.location.href = 'index.html';
  } else if (lang === 'fr') {
    window.location.href = 'index-fr.html';
  } else {
    window.location.href = 'index-en.html';
  }
}

// Check saved language on load
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('language') || 'en';
  const enBtn = document.getElementById('langEn');
  const arBtn = document.getElementById('langAr');
  const frBtn = document.getElementById('langFr');
  
  if (savedLang === 'en' || !savedLang) {
    if (enBtn) enBtn.style.background = 'rgba(34,211,238,0.2)';
    if (frBtn) frBtn.style.background = 'transparent';
    if (arBtn) arBtn.style.background = 'transparent';
  } else if (savedLang === 'fr') {
    if (frBtn) frBtn.style.background = 'rgba(34,211,238,0.2)';
    if (enBtn) enBtn.style.background = 'transparent';
    if (arBtn) arBtn.style.background = 'transparent';
  } else {
    if (arBtn) arBtn.style.background = 'rgba(34,211,238,0.2)';
    if (frBtn) frBtn.style.background = 'transparent';
    if (enBtn) enBtn.style.background = 'transparent';
  }
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Init projects
renderProjects();
renderTestimonials();
renderGallery();
renderCaseStudies();
renderFAQ();
renderBlog();

// Lucide
lucide.createIcons();

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', () => {
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out-cubic',
      once: true,
      offset: 120,
      disable: window.innerWidth < 768 ? 'phone' : false
    });
  }
  
  // Start counter animations
  startCounterAnimation();
  
  // Init lazy loading for images
  initLazyLoading();
});

/**
 * Animated counter for statistics
 */
function startCounterAnimation() {
  const counters = document.querySelectorAll('.stat-number');
  
  const runCounters = () => {
    counters.forEach(counter => {
      const target = parseInt(counter.dataset.target);
      const increment = target / 50; // Animate in 50 steps
      let current = 0;
      
      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + (target >= 10 ? '+' : '');
        }
      };
      
      // Trigger animation when element is in view
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && !counter.classList.contains('animated')) {
          counter.classList.add('animated');
          updateCounter();
          observer.unobserve(counter);
        }
      }, { threshold: 0.5 });
      
      observer.observe(counter);
    });
  };
  
  runCounters();
}

/**
 * Open social sharing modal
 */
function shareToSocial(text) {
  const url = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(text || document.title);
  const modal = document.getElementById('shareModal');
  if (!modal) return;
  document.getElementById('shareUrl').value = window.location.href;
  document.getElementById('shareContent').innerHTML = `
    <button onclick="window.open('https://twitter.com/intent/tweet?text=${shareText}&url=${url}','_blank','width=600,height=400')"
      class="flex items-center gap-3 w-full p-4 rounded-xl hover:bg-gray-700 transition text-left">
      <span class="text-2xl">🐦</span><div><div class="text-white font-semibold">Twitter / X</div><div class="text-gray-400 text-xs">Share on Twitter</div></div>
    </button>
    <button onclick="window.open('https://www.linkedin.com/sharing/share-offsite/?url=${url}','_blank','width=600,height=400')"
      class="flex items-center gap-3 w-full p-4 rounded-xl hover:bg-gray-700 transition text-left">
      <span class="text-2xl">💼</span><div><div class="text-white font-semibold">LinkedIn</div><div class="text-gray-400 text-xs">Share on LinkedIn</div></div>
    </button>
    <button onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${url}','_blank','width=600,height=400')"
      class="flex items-center gap-3 w-full p-4 rounded-xl hover:bg-gray-700 transition text-left">
      <span class="text-2xl">📘</span><div><div class="text-white font-semibold">Facebook</div><div class="text-gray-400 text-xs">Share on Facebook</div></div>
    </button>
    <button onclick="navigator.clipboard.writeText(window.location.href).then(()=>{showToast('✅ Link copied!','success');closeShareModal();})"
      class="flex items-center gap-3 w-full p-4 rounded-xl hover:bg-gray-700 transition text-left">
      <span class="text-2xl">🔗</span><div><div class="text-white font-semibold">Copy Link</div><div class="text-gray-400 text-xs">Copy link to clipboard</div></div>
    </button>
  `;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeShareModal() {
  const modal = document.getElementById('shareModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

/**
 * Lazy load images for better performance
 */
function initLazyLoading() {
  const images = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.add('loaded');
        imageObserver.unobserve(img);
      }
    });
  }, { rootMargin: '50px' });
  
  images.forEach(img => imageObserver.observe(img));
}

// Responsive improvements
window.addEventListener('resize', () => {
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
});

// Push notification subscription
async function subscribePushNotifications() {
  if (!('Notification' in window) || !('serviceWorker' in navigator)) {
    showToast('⚠️ Notifications not supported in your browser', 'warning');
    return false;
  }
  try {
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      showToast('⚠️ Notification permission denied', 'warning');
      return false;
    }
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true
    });
    localStorage.setItem('push_subscription', JSON.stringify(subscription));
    showToast('✅ Notifications enabled successfully', 'success');
    return true;
  } catch (err) {
    console.error('Push subscription failed:', err);
    showToast('❌ Failed to enable notifications', 'warning');
    return false;
  }
}

async function unsubscribePushNotifications() {
  try {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.getSubscription();
    if (subscription) {
      await subscription.unsubscribe();
      localStorage.removeItem('push_subscription');
      showToast('✅ Notifications disabled', 'success');
    }
  } catch (err) {
    console.error('Unsubscribe failed:', err);
  }
}

// Check push subscription status on load
window.addEventListener('load', async () => {
  if ('serviceWorker' in navigator && 'PushManager' in window) {
    try {
      const registration = await navigator.serviceWorker.ready;
      const subscription = await registration.pushManager.getSubscription();
      if (subscription) {
        localStorage.setItem('push_subscription', JSON.stringify(subscription));
      }
    } catch {}
  }
});

// Reading Progress Bar
function initProgressBar() {
  const bar = document.getElementById('readingProgress');
  if (!bar) return;
  document.getElementById('app-body').addEventListener('scroll', () => {
    const scrollTop = document.getElementById('app-body').scrollTop;
    const scrollHeight = document.getElementById('app-body').scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    bar.style.width = Math.min(progress, 100) + '%';
  });
}

// Cookie Consent
function acceptCookies() {
  localStorage.setItem('cookie_consent', 'accepted');
  document.getElementById('cookieBanner').classList.remove('show');
}
function declineCookies() {
  localStorage.setItem('cookie_consent', 'declined');
  document.getElementById('cookieBanner').classList.remove('show');
}
function initCookieBanner() {
  const consent = localStorage.getItem('cookie_consent');
  if (!consent) {
    setTimeout(() => document.getElementById('cookieBanner')?.classList.add('show'), 500);
  }
}

// Search Modal
let searchIndex = [];
function buildSearchIndex() {
  searchIndex = [];
  projects.forEach(p => searchIndex.push({
    type: 'Project', title: p.name, desc: p.desc, url: '#projects', icon: p.icon, tags: [p.cat]
  }));
  blogArticles.forEach(a => searchIndex.push({
    type: 'Article', title: a.title, desc: a.summary, url: '#', icon: a.icon, tags: [a.category], action: `openArticle(${a.id})`
  }));
  faqItems.forEach((f, i) => searchIndex.push({
    type: 'FAQ', title: f.question, desc: f.answer.slice(0, 120) + '...', url: '#faq', icon: '❓'
  }));
  const skillNames = ['Data Analysis', 'Experimental Design', 'Scientific Writing', 'R / Excel / Power BI', 'App Development', 'Data Visualization', 'Livestock Production', 'Breeding & Selection', 'Animal Nutrition', 'FBS Trainer', 'Program Design', 'Communication'];
  skillNames.forEach(s => searchIndex.push({
    type: 'Skill', title: s, desc: 'Professional skill', url: '#skills', icon: '⚡'
  }));
}
function openSearch() {
  const modal = document.getElementById('searchModal');
  if (!modal) return;
  if (searchIndex.length === 0) buildSearchIndex();
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    const input = document.getElementById('searchInput');
    input.value = ''; input.focus();
    renderSearchResults('');
  }, 100);
}
function closeSearch() {
  const modal = document.getElementById('searchModal');
  if (modal) { modal.classList.add('hidden'); document.body.style.overflow = ''; }
}
function renderSearchResults(query) {
  const container = document.getElementById('searchResults');
  const q = query.toLowerCase().trim();
  let results = q ? searchIndex.filter(item =>
    item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q) ||
    item.tags?.some(t => t.toLowerCase().includes(q))
  ) : searchIndex;
  results = results.slice(0, 12);
  if (!results.length) {
    container.innerHTML = '<div class="p-6 text-center text-gray-500 text-sm">No results found</div>';
    return;
  }
  container.innerHTML = results.map((item, i) => `
    <button onclick="navigateSearchResult(${i})" class="search-result-item w-full flex items-center gap-3 p-3 rounded-xl hover:bg-gray-800/50 transition text-left ${i === 0 ? 'search-highlight' : ''}"
      data-index="${i}" onmouseenter="highlightSearchItem(${i})">
      <span class="text-xl flex-shrink-0">${item.icon}</span>
      <div class="flex-1 min-w-0">
        <div class="text-white text-sm font-semibold truncate">${highlightMatch(item.title, q)}</div>
        <div class="text-gray-500 text-xs truncate">${item.type} · ${highlightMatch(item.desc.slice(0, 80), q)}</div>
      </div>
      <span class="text-gray-600 text-xs flex-shrink-0">${item.type}</span>
    </button>
  `).join('');
  container.dataset.results = JSON.stringify(results);
}
function highlightMatch(text, query) {
  if (!query) return text;
  const idx = text.toLowerCase().indexOf(query);
  if (idx === -1) return text;
  return text.slice(0, idx) + '<strong class="text-cyan-400">' + text.slice(idx, idx + query.length) + '</strong>' + text.slice(idx + query.length);
}
let searchSelectedIndex = 0;
function highlightSearchItem(idx) { searchSelectedIndex = idx; }
function navigateSearchResult(idx) {
  const results = JSON.parse(document.getElementById('searchResults').dataset.results || '[]');
  const item = results[idx];
  if (!item) return;
  closeSearch();
  if (item.action) { eval(item.action); }
  else if (item.url && item.url !== '#') { document.querySelector(item.url)?.scrollIntoView({ behavior: 'smooth' }); }
}
function initSearch() {
  buildSearchIndex();
  const input = document.getElementById('searchInput');
  if (!input) return;
  input.addEventListener('input', (e) => renderSearchResults(e.target.value));
  input.addEventListener('keydown', (e) => {
    const items = document.querySelectorAll('.search-result-item');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      searchSelectedIndex = Math.min(searchSelectedIndex + 1, items.length - 1);
      items.forEach((el, i) => el.classList.toggle('search-highlight', i === searchSelectedIndex));
      items[searchSelectedIndex]?.scrollIntoView({ block: 'nearest' });
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      searchSelectedIndex = Math.max(searchSelectedIndex - 1, 0);
      items.forEach((el, i) => el.classList.toggle('search-highlight', i === searchSelectedIndex));
      items[searchSelectedIndex]?.scrollIntoView({ block: 'nearest' });
    }
    if (e.key === 'Enter') { e.preventDefault(); navigateSearchResult(searchSelectedIndex); }
  });
}

// Init all features
document.addEventListener('DOMContentLoaded', () => {
  initProgressBar();
  initCookieBanner();
  initSearch();
  initScrollProgress();
  initNetworkStatus();
  initOfflineIndicator();
});

// Close search on overlay click
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('searchModal');
  if (modal) {
    modal.addEventListener('click', (e) => { if (e.target === modal) closeSearch(); });
  }
});

// Scroll Progress Ring
function initScrollProgress() {
  const ring = document.getElementById('scrollProgress');
  const circle = ring?.querySelector('.fg-circle');
  if (!circle) return;
  const circumference = 2 * Math.PI * 18;
  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = circumference;
  
  document.getElementById('app-body').addEventListener('scroll', () => {
    const scrollTop = document.getElementById('app-body').scrollTop;
    const scrollHeight = document.getElementById('app-body').scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
    circle.style.strokeDashoffset = circumference - progress * circumference;
    ring.classList.toggle('visible', scrollTop > 200);
  });
  lucide.createIcons();
}

// Network Status Dot
function initNetworkStatus() {
  const dot = document.getElementById('networkDot');
  if (!dot) return;
  const update = () => {
    const online = navigator.onLine;
    const dotEl = dot.querySelector('.dot');
    const text = dot.querySelector('.status-text');
    dotEl.className = `dot ${online ? 'online' : 'offline'}`;
    text.textContent = online ? 'Online' : 'Offline';
  };
  window.addEventListener('online', update);
  window.addEventListener('offline', update);
  update();
}

// Offline Indicator Toast
function initOfflineIndicator() {
  const toast = document.getElementById('offlineToast');
  if (!toast) return;
  window.addEventListener('offline', () => toast.classList.add('show'));
  window.addEventListener('online', () => toast.classList.remove('show'));
  if (!navigator.onLine) toast.classList.add('show');
}

// Email Obfuscation
function revealEmail(el) {
  const user = el.dataset.user;
  const domain = el.dataset.domain;
  const tld = el.dataset.tld;
  const email = `${user}@${domain}.${tld}`;
  el.innerHTML = email;
  el.style.cursor = 'default';
  el.onclick = null;
  // Update SDK reference too
  const sdkEmail = document.getElementById('contactEmail');
  if (sdkEmail) sdkEmail.textContent = email;
}

// Element SDK for visual editor (English version)
const defaultConfigEn = {
  hero_title: 'Transforming Agricultural Knowledge into Real Impact',
  hero_subtitle: 'PhD student and trainer specializing in digital agriculture, building bridges between science and practical application.',
  about_title: 'About Me',
  services_title: 'My Services',
  contact_email: 'atia.abdelkader@gmail.com',
  background_color: '#0a0e27',
  surface_color: '#0f1538',
  text_color: '#e2e8f0',
  primary_action_color: '#06b6d4',
  secondary_action_color: '#f59e0b',
  font_family: 'Cairo',
  font_size: 16
};

async function initSDK() {
  if (!window.elementSdk) return;
  await window.elementSdk.init({
    defaultConfig: defaultConfigEn,
    onConfigChange: async (config) => {
      const c = { ...defaultConfigEn, ...config };
      const heroEl = document.getElementById('heroTitle');
      if (heroEl) heroEl.innerHTML = c.hero_title.replace(/(Agricultural Knowledge)/g, '<span class="gradient-text">$1</span>');
      const heroSub = document.getElementById('heroSubtitle');
      if (heroSub) heroSub.textContent = c.hero_subtitle;
      const aboutEl = document.getElementById('aboutTitle');
      if (aboutEl) aboutEl.textContent = c.about_title;
      const servEl = document.getElementById('servicesTitle');
      if (servEl) servEl.textContent = c.services_title;
      const emailEl = document.getElementById('contactEmail');
      if (emailEl) emailEl.textContent = c.contact_email;
      document.body.style.background = c.background_color;
      document.querySelectorAll('.glass-card').forEach(el => {
        el.style.background = c.surface_color + '80';
      });
      document.body.style.color = c.text_color;
      const fontStack = `${c.font_family}, 'Poppins', sans-serif`;
      document.body.style.fontFamily = fontStack;
      const base = c.font_size;
      document.querySelectorAll('p').forEach(el => el.style.fontSize = `${base}px`);
      document.querySelectorAll('h2').forEach(el => el.style.fontSize = `${base * 2}px`);
      document.querySelectorAll('h3').forEach(el => el.style.fontSize = `${base * 1.15}px`);
    },
    mapToCapabilities: (config) => {
      const c = { ...defaultConfigEn, ...config };
      return {
        recolorables: [
          { get: () => c.background_color, set: (v) => { c.background_color = v; window.elementSdk.setConfig({ background_color: v }); } },
          { get: () => c.surface_color, set: (v) => { c.surface_color = v; window.elementSdk.setConfig({ surface_color: v }); } },
          { get: () => c.text_color, set: (v) => { c.text_color = v; window.elementSdk.setConfig({ text_color: v }); } },
          { get: () => c.primary_action_color, set: (v) => { c.primary_action_color = v; window.elementSdk.setConfig({ primary_action_color: v }); } },
          { get: () => c.secondary_action_color, set: (v) => { c.secondary_action_color = v; window.elementSdk.setConfig({ secondary_action_color: v }); } },
        ],
        borderables: [],
        fontEditable: {
          get: () => c.font_family,
          set: (v) => { c.font_family = v; window.elementSdk.setConfig({ font_family: v }); }
        },
        fontSizeable: {
          get: () => c.font_size,
          set: (v) => { c.font_size = v; window.elementSdk.setConfig({ font_size: v }); }
        }
      };
    },
    mapToEditPanelValues: (config) => {
      const c = { ...defaultConfigEn, ...config };
      return new Map([
        ['hero_title', c.hero_title],
        ['hero_subtitle', c.hero_subtitle],
        ['about_title', c.about_title],
        ['services_title', c.services_title],
        ['contact_email', c.contact_email],
      ]);
    }
  });
}
initSDK();
