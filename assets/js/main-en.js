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

// Testimonials auto-rotation
let currentTestimonialIndex = 0;
let testimonialInterval;

/**
 * Start auto-rotation of testimonials
 */
function startTestimonialRotation() {
  const container = document.getElementById('testimonialsContainer');
  if (!container) return;
  
  testimonialInterval = setInterval(() => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
    const scrollAmount = container.children[0].offsetWidth + 24; // card width + gap
    container.scrollTo({
      left: currentTestimonialIndex * scrollAmount,
      behavior: 'smooth'
    });
  }, 5000); // Rotate every 5 seconds
}

/**
 * Stop testimonials auto-rotation
 */
function stopTestimonialRotation() {
  if (testimonialInterval) {
    clearInterval(testimonialInterval);
  }
}

// Start auto-rotation on page load
window.addEventListener('load', () => {
  startTestimonialRotation();
});

// Pause rotation on hover
document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('testimonialsContainer');
  if (container) {
    container.addEventListener('mouseenter', stopTestimonialRotation);
    container.addEventListener('mouseleave', startTestimonialRotation);
  }
});

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
    nav.style.background = 'rgba(10, 14, 39, 0.95)';
    nav.style.backdropFilter = 'blur(16px)';
    nav.style.borderBottom = '1px solid rgba(34,211,238,0.08)';
  } else {
    nav.style.background = 'transparent';
    nav.style.backdropFilter = 'none';
    nav.style.borderBottom = 'none';
  }
  // Scroll to top button
  const btn = document.getElementById('scrollTopBtn');
  if (scrollTop > 400) btn.classList.add('visible');
  else btn.classList.remove('visible');
  
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
  
  // Validation
  if (!name || !email || !subject || !message) {
    showToast('⚠️ Please fill in all required fields', 'warning');
    return;
  }
  
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('⚠️ Invalid email address', 'warning');
    return;
  }
  
  // Simulate sending (in production, send to backend)
  success.classList.remove('hidden');
  form.reset();
  setTimeout(() => success.classList.add('hidden'), 4000);
  
  // Log form data (in production, would send to server)
  console.log({ name, email, subject, message, timestamp: new Date() });
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
  
  // Simulate subscription
  showToast('✅ Thank you! You\'ve subscribed successfully', 'success');
  document.getElementById('newsletterEmail').value = '';
  
  // In production, send to backend
  console.log({ email, subscribed: new Date() });
}

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

// Theme toggle
let isDarkMode = true;
/**
 * Toggle between dark and light theme
 */
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
  
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  lucide.createIcons();
}

// Load saved theme
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    isDarkMode = true;
    toggleTheme();
  }
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
  // Close mobile menu with Escape
  if (e.key === 'Escape') {
    const menu = document.getElementById('mobileMenu');
    if (menu.classList.contains('open')) {
      toggleMobile();
    }
  }
  
  // Scroll to top with Ctrl+Home or Cmd+Home
  if ((e.ctrlKey || e.metaKey) && e.key === 'Home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
  } else {
    window.location.href = 'index-en.html';
  }
}

// Check saved language on load
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('language') || 'en';
  const enBtn = document.getElementById('langEn');
  const arBtn = document.getElementById('langAr');
  
  if (savedLang === 'en') {
    enBtn.style.background = 'rgba(34,211,238,0.2)';
    arBtn.style.background = 'transparent';
  } else {
    arBtn.style.background = 'rgba(34,211,238,0.2)';
    enBtn.style.background = 'transparent';
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

// Lucide
lucide.createIcons();
