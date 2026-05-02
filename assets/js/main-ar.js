// Projects data
const projects = [
  { name: 'تطبيق تحليل السائل المنوي', desc: 'تطبيق ذكي لتقييم وتحليل جودة السائل المنوي باستخدام تقنيات التصوير والذكاء الاصطناعي', cat: 'app', icon: '🔬', link: '#' },
  { name: 'AgriSkills Academy', desc: 'منصة تعليمية متكاملة للتدريب الزراعي وبناء القدرات المهنية مع شهادات معترف بها', cat: 'business', icon: '🎓', link: '#' },
  { name: 'برنامج FBS التدريبي', desc: 'سلسلة برامج تدريبية شاملة في مدارس المزارعين الحقلية تغطي الإنتاج الحيواني والزراعة المستدامة', cat: 'training', icon: '🌾', link: '#' },
  { name: 'أبحاث التكاثر الحيواني', desc: 'مشاريع بحثية متقدمة في تحسين الأداء التناسلي وجودة السائل المنوي مع نشر دولي', cat: 'research', icon: '🧬', link: '#' },
  { name: 'مشروع تربية BSF', desc: 'مبادرة مبتكرة لتربية ذبابة الجندي الأسود كمصدر بروتين بديل وحل للنفايات', cat: 'business', icon: '🦟', link: '#' },
  { name: 'منصة kamel3lom', desc: 'منصة رقمية لنشر المعرفة الزراعية وتبسيط العلوم للمجتمع مع محتوى تفاعلي', cat: 'app', icon: '📱', link: '#' },
  { name: 'نظام إدارة المزارع الذكي', desc: 'تطبيق شامل لإدارة المزارع بتتبع الثروة والإنتاجية والتنبؤات الذكية', cat: 'app', icon: '🌐', link: '#' },
  { name: 'دراسات في تحسين السلالات', desc: 'أبحاث متخصصة في التربية الانتخابية وتحسين المؤشرات الوراثية للماشية', cat: 'research', icon: '📊', link: '#' },
  { name: 'ورش عمل الزراعة الحديثة', desc: 'سلسلة ورش عمل عملية حول التقنيات الحديثة والممارسات الزراعية الفضلى', cat: 'training', icon: '🛠️', link: '#' },
];

// Testimonials data
const testimonials = [
  { text: 'تدريب ممتاز ومحتوى علمي رصين. استفدت كثيرًا من الجانب التطبيقي في برنامج FBS، والمدرب يشرح بطريقة مبسطة وواضحة.', author: 'م. أحمد', role: 'مهندس زراعي', initials: 'م.أ', color: 'from-cyan-500 to-cyan-600', rating: 5 },
  { text: 'ساعدني الدكتور عبد القادر في تحليل بيانات رسالتي بطريقة احترافية ومبسّطة. مشرف ممتاز يتقن مجاله بشكل عميق.', author: 'سارة ك.', role: 'طالبة ماجستير', initials: 'س.ك', color: 'from-amber-500 to-amber-600', rating: 5 },
  { text: 'شريك موثوق في مجال الابتكار الزراعي. يجمع بين الرؤية العلمية والتنفيذ العملي، وملتزم بجودة النتائج.', author: 'د. محمد', role: 'شريك أعمال', initials: 'د.م', color: 'from-cyan-500 to-cyan-600', rating: 5 },
  { text: 'برامج التدريب متخصصة وعملية جدًا. ساعدتني في تطوير مهارات التسيير الحديثة وتطبيق التقنيات الجديدة.', author: 'فاطمة ع.', role: 'مزارعة', initials: 'ف.ع', color: 'from-amber-500 to-amber-600', rating: 5 },
  { text: 'منصة kamel3lom غيرت طريقة فهمي للمفاهيم الزراعية المعقدة. محتوى غني وسهل الفهم وقيم جدًا.', author: 'إبراهيم ق.', role: 'طالب جامعي', initials: 'إ.ق', color: 'from-cyan-500 to-cyan-600', rating: 5 },
  { text: 'دعم احترافي في البحث العلمي والنشر الدولي. ساعدني على نشر بحثي في مجلة محترمة دوليًا.', author: 'د. ليلى', role: 'باحثة', initials: 'د.ل', color: 'from-amber-500 to-amber-600', rating: 5 },
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
    const catLabels = { app: 'تطبيق', research: 'بحث', training: 'تدريب', business: 'ريادة أعمال' };
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
        <a href="${p.link}" class="text-cyan-400 text-sm font-semibold hover:text-cyan-300 flex items-center gap-1">عرض التفاصيل <i data-lucide="arrow-left" style="width:14px;height:14px"></i></a>
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
    showToast('⚠️ يرجى ملء جميع الحقول المطلوبة', 'warning');
    return;
  }
  
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('⚠️ البريد الإلكتروني غير صحيح', 'warning');
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
    showToast('⚠️ الرجاء إدخال بريدك الإلكتروني', 'warning');
    return;
  }
  
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('⚠️ البريد الإلكتروني غير صحيح', 'warning');
    return;
  }
  
  // Simulate subscription
  showToast('✅ شكرًا! تم اشتراكك بنجاح في النشرة البريدية', 'success');
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
      showToast('✅ جاري تحميل السيرة الذاتية...', 'success');
    } else {
      showToast('📄 السيرة الذاتية غير متوفرة حاليًا', 'warning');
    }
  }).catch(() => {
    showToast('📄 السيرة الذاتية غير متوفرة حاليًا', 'warning');
  });
}

// Init projects
renderProjects();
renderTestimonials();

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

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
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  
  if (lang === 'ar') {
    window.location.href = 'index.html';
  } else {
    window.location.href = 'index-en.html';
  }
}

// Check saved language on load
window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('language') || 'ar';
  const arBtn = document.getElementById('langAr');
  const enBtn = document.getElementById('langEn');
  
  if (savedLang === 'ar') {
    arBtn.style.background = 'rgba(34,211,238,0.2)';
    enBtn.style.background = 'transparent';
  } else {
    enBtn.style.background = 'rgba(34,211,238,0.2)';
    arBtn.style.background = 'transparent';
  }
});

// Element SDK
const defaultConfig = {
  hero_title: 'تحويل المعرفة الزراعية إلى أثر حقيقي',
  hero_subtitle: 'باحث دكتوراه ومدرب ومبتكر في الزراعة الرقمية، أعمل على بناء جسور بين العلم والتطبيق لتطوير أنظمة زراعية أكثر ذكاءً وكفاءة.',
  about_title: 'من أنا',
  services_title: 'خدماتي',
  contact_email: 'contact@abdelkader-atia.com',
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
    defaultConfig,
    onConfigChange: async (config) => {
      const c = { ...defaultConfig, ...config };
      // Text
      const heroEl = document.getElementById('heroTitle');
      if (heroEl) heroEl.innerHTML = c.hero_title.replace(/(المعرفة الزراعية)/g, '<span class="gradient-text">$1</span>');
      const heroSub = document.getElementById('heroSubtitle');
      if (heroSub) heroSub.textContent = c.hero_subtitle;
      const aboutEl = document.getElementById('aboutTitle');
      if (aboutEl) aboutEl.textContent = c.about_title;
      const servEl = document.getElementById('servicesTitle');
      if (servEl) servEl.textContent = c.services_title;
      const emailEl = document.getElementById('contactEmail');
      if (emailEl) emailEl.textContent = c.contact_email;

      // Colors
      document.body.style.background = c.background_color;
      document.querySelectorAll('.glass-card').forEach(el => {
        el.style.background = c.surface_color + '80';
      });
      document.body.style.color = c.text_color;

      // Font
      const fontStack = `${c.font_family}, Cairo, sans-serif`;
      document.body.style.fontFamily = fontStack;

      // Font size
      const base = c.font_size;
      document.querySelectorAll('p').forEach(el => el.style.fontSize = `${base}px`);
      document.querySelectorAll('h2').forEach(el => el.style.fontSize = `${base * 2}px`);
      document.querySelectorAll('h3').forEach(el => el.style.fontSize = `${base * 1.15}px`);
    },
    mapToCapabilities: (config) => {
      const c = { ...defaultConfig, ...config };
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
      const c = { ...defaultConfig, ...config };
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

// Lucide
lucide.createIcons();
