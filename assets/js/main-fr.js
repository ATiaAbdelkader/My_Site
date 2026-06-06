// Projects data (French)
const projects = [
  { name: 'Application Analyse Semence', desc: 'Application intelligente pour évaluer et analyser la qualité du sperme à l\'aide de l\'imagerie et de l\'IA', cat: 'app', icon: '🔬', link: '#' },
  { name: 'AgriSkills Academy', desc: 'Plateforme éducative intégrée pour la formation agricole et le renforcement des capacités avec certifications reconnues', cat: 'business', icon: '🎓', link: '#' },
  { name: 'Programme FBS', desc: 'Série complète de programmes de formation dans les écoles pratiques agricoles couvrant la production animale et l\'agriculture durable', cat: 'training', icon: '🌾', link: '#' },
  { name: 'Recherche Reproduction Animale', desc: 'Projets de recherche avancés pour améliorer les performances reproductives et la qualité du sperme avec publications internationales', cat: 'research', icon: '🧬', link: '#' },
  { name: 'Projet Élevage BSF', desc: 'Initiative innovante d\'élevage de mouche soldat noire comme source de protéines alternative et solution de gestion des déchets', cat: 'business', icon: '🦟', link: '#' },
  { name: 'Plateforme kamel3lom', desc: 'Plateforme numérique pour diffuser les connaissances agricoles et simplifier les sciences avec du contenu interactif', cat: 'app', icon: '📱', link: '#' },
  { name: 'Système Gestion Ferme Intelligente', desc: 'Application complète de gestion agricole avec suivi des actifs, productivité et prévisions intelligentes', cat: 'app', icon: '🌐', link: '#' },
  { name: 'Études Amélioration Génétique', desc: 'Recherche spécialisée en sélection génétique et amélioration des indicateurs pour les bovins', cat: 'research', icon: '📊', link: '#' },
  { name: 'Ateliers Agriculture Moderne', desc: 'Série d\'ateliers pratiques sur les techniques modernes et les bonnes pratiques en production agricole', cat: 'training', icon: '🛠️', link: '#' },
];

// Testimonials data (French)
const testimonials = [
  { text: 'Formation excellente avec un contenu scientifique solide. J\'ai beaucoup appris des aspects pratiques du programme FBS. Le formateur explique clairement et simplement.', author: 'Ing. Ahmed', role: 'Ingénieur Agronome', initials: 'IA', color: 'from-cyan-500 to-cyan-600', rating: 5 },
  { text: 'Dr. Abdelkader m\'a aidée à analyser les données de ma thèse de façon professionnelle et claire. Un excellent encadrant qui maîtrise profondément son domaine.', author: 'Sarah K.', role: 'Étudiante Master', initials: 'SK', color: 'from-amber-500 to-amber-600', rating: 5 },
  { text: 'Un partenaire fiable en innovation agricole. Il allie vision scientifique et mise en œuvre pratique, toujours engagé pour des résultats de qualité.', author: 'Dr. Mohamed', role: 'Partenaire d\'Affaires', initials: 'DM', color: 'from-cyan-500 to-cyan-600', rating: 5 },
  { text: 'Les programmes de formation sont spécialisés et très pratiques. Ils m\'ont aidé à développer des compétences modernes en gestion agricole.', author: 'Fatima A.', role: 'Agricultrice', initials: 'FA', color: 'from-amber-500 to-amber-600', rating: 5 },
  { text: 'La plateforme kamel3lom a changé ma façon de comprendre les concepts agricoles complexes. Contenu riche, facile à comprendre et très précieux.', author: 'Ibrahim Q.', role: 'Étudiant Universitaire', initials: 'IQ', color: 'from-cyan-500 to-cyan-600', rating: 5 },
  { text: 'Soutien professionnel en recherche scientifique et publication internationale. Il m\'a aidé à publier mes recherches dans une revue internationale réputée.', author: 'Dr. Leila', role: 'Chercheuse', initials: 'DL', color: 'from-amber-500 to-amber-600', rating: 5 },
];

// Gallery data (French)
const galleryItems = [
  { id: 1, title: 'Laboratoire de Recherche', desc: 'Installation avancée pour l\'analyse de la qualité du sperme', cat: 'research', icon: '🔬', image: '🧪' },
  { id: 2, title: 'Session de Formation', desc: 'Programme FBS en action avec les agriculteurs', cat: 'training', icon: '👨‍🌾', image: '🎓' },
  { id: 3, title: 'Visite de Ferme', desc: 'Travail sur le terrain et suivi du bétail', cat: 'farm', icon: '🐄', image: '🚜' },
  { id: 4, title: 'Conférence', desc: 'Conférence agricole internationale', cat: 'event', icon: '🎤', image: '🌍' },
  { id: 5, title: 'Données de Recherche', desc: 'Recherche collaborative et analyse', cat: 'research', icon: '📊', image: '📈' },
  { id: 6, title: 'Atelier Agricole', desc: 'Atelier de formation pratique', cat: 'training', icon: '🛠️', image: '🌱' },
  { id: 7, title: 'Évaluation du Bétail', desc: 'Évaluation de la santé et de la productivité animale', cat: 'farm', icon: '🐑', image: '✅' },
  { id: 8, title: 'Séminaire', desc: 'Séminaire éducatif avec des experts du secteur', cat: 'event', icon: '🎯', image: '🏆' },
  { id: 9, title: 'Plateforme Numérique', desc: 'Démonstration de la plateforme kamel3lom', cat: 'research', icon: '💻', image: '📱' },
];

// Case studies data (French)
const caseStudies = [
  { id: 1, title: 'Croissance AgriSkills Academy', subtitle: 'Bâtir l\'Excellence Éducative', challenge: 'Créer une plateforme de formation agricole complète au service des agriculteurs et des chercheurs', solution: 'Académie intégrée avec programmes en ligne & présentiels, certifications et partenariats industriels', results: '500+ stagiaires | 40+ programmes | 95% satisfaction', impact: '🎓 Transformation éducative', tags: ['Formation', 'Plateforme', 'Éducation'] },
  { id: 2, title: 'Recherche sur la Qualité du Sperme', subtitle: 'Innovation Scientifique', challenge: 'Améliorer l\'élevage par une meilleure évaluation de la qualité du sperme', solution: 'Techniques de laboratoire avancées combinées à un système d\'analyse par IA', results: '20+ publications | Collaborations internationales | Technologie brevetable', impact: '🧬 Percée scientifique', tags: ['Recherche', 'Innovation', 'Science'] },
  { id: 3, title: 'Impact de la Formation FBS', subtitle: 'Autonomisation Communautaire', challenge: 'Agriculteurs manquant de connaissances et techniques agricoles modernes', solution: 'Programme structuré d\'écoles pratiques agricoles avec formation pratique', results: '500+ agriculteurs formés | 40% d\'augmentation productivité | Pratiques durables', impact: '🌾 Croissance communautaire', tags: ['Formation', 'Impact', 'Durabilité'] },
];

// Blog articles data (French)
const blogArticles = [
  {
    id: 1, icon: '🐄', category: 'SCIENCE ANIMALE',
    title: 'Amélioration de la Qualité du Sperme : Techniques Récentes',
    summary: 'Aperçu complet des dernières recherches et techniques utilisées pour évaluer et améliorer la qualité du sperme et les performances reproductives.',
    content: 'La qualité du sperme joue un rôle crucial dans l\'amélioration des performances reproductives animales et l\'augmentation de la productivité agricole. Cet article passe en revue les dernières techniques utilisées.\n\nTechniques modernes :\n- Analyse par IA pour l\'évaluation de la motilité et de la morphologie\n- Microscopie électronique pour l\'examen des structures fines\n- Techniques avancées de refroidissement et congélation\n- Biomarqueurs pour la détection précoce des problèmes\n\nApplications pratiques :\n- Amélioration des programmes d\'insémination artificielle\n- Sélection de géniteurs génétiquement supérieurs\n- Réduction des coûts de production',
    date: '2026-01-15', readTime: '8 min'
  },
  {
    id: 2, icon: '📊', category: 'ANALYSE DE DONNÉES',
    title: 'Utilisation de R pour l\'Analyse des Données Agricoles',
    summary: 'Guide pratique pour utiliser le langage R pour traiter, analyser et visualiser les données agricoles de manière efficace et professionnelle.',
    content: 'R est l\'un des outils open-source les plus puissants pour l\'analyse statistique et la visualisation de données. En agriculture, R offre une large gamme de packages spécialisés.\n\nPackages essentiels :\n- agricolae : Analyse statistique pour expériences agricoles\n- lme4 : Modèles linéaires à effets mixtes\n- ggplot2 : Visualisation professionnelle\n- caret : Apprentissage automatique\n\nÉtapes pratiques :\n1. Importer des données Excel ou CSV\n2. Nettoyer et traiter les valeurs manquantes\n3. Analyse statistique (ANOVA, Régression)\n4. Créer des visualisations et rapports',
    date: '2026-02-20', readTime: '10 min'
  },
  {
    id: 3, icon: '🌾', category: 'FORMATION',
    title: 'Écoles Pratiques Agricoles : Méthodologie Efficace',
    summary: 'Comment les programmes FBS responsabilisent les agriculteurs et améliorent la productivité grâce aux pratiques modernes.',
    content: 'Les Écoles Pratiques Agricoles (FBS) sont une méthodologie de formation innovante basée sur l\'apprentissage par la pratique et l\'échange de connaissances entre agriculteurs.\n\nPrincipes fondamentaux :\n- Apprendre en faisant\n- Prise de décision collective\n- Expériences comparatives sur le terrain\n- Autonomisation des agriculteurs comme experts locaux\n\nRésultats obtenus :\n- 30-50% d\'amélioration de la productivité\n- Réduction des coûts de production\n- Adoption de pratiques durables\n- Construction de réseaux de connaissances locaux',
    date: '2026-03-10', readTime: '7 min'
  },
  {
    id: 4, icon: '💡', category: 'INNOVATION',
    title: 'IA en Agriculture : Applications Pratiques',
    summary: 'Exploration des cas d\'utilisation de l\'intelligence artificielle pour améliorer les décisions agricoles et la productivité.',
    content: 'L\'IA révolutionne le secteur agricole en fournissant des solutions intelligentes pour une productivité et une durabilité accrues.\n\nApplications clés :\n- Reconnaissance des maladies des plantes par imagerie\n- Prédiction des rendements et évaluation des risques climatiques\n- Robotique agricole intelligente\n- Gestion efficace des ressources en eau\n- Analyse de la qualité des produits agricoles\n\nÉtude de cas :\nUtilisation de techniques d\'apprentissage profond pour analyser les images de grains de pollen et évaluer automatiquement la qualité, réduisant le temps d\'inspection de plusieurs heures à quelques minutes.',
    date: '2026-04-05', readTime: '9 min'
  },
  {
    id: 5, icon: '🔬', category: 'RECHERCHE',
    title: 'Guide de Publication Scientifique',
    summary: 'Étapes pratiques pour publier vos recherches dans des revues internationales à comité de lecture et des bases de données réputées.',
    content: 'La publication scientifique internationale est la porte d\'entrée pour se connecter à la communauté scientifique mondiale et bâtir une réputation académique prestigieuse.\n\nÉtapes clés :\n1. Choisir la bonne revue (Scopus, Web of Science)\n2. Rédiger selon les normes de la revue\n3. Préparer le manuscrit professionnellement\n4. Gérer les commentaires des évaluateurs\n5. Suivre la publication et la promotion\n\nConseils importants :\n- Choisir un titre attrayant et clair\n- Rédiger un résumé percutant\n- Citer les références avec précision\n- Respecter l\'éthique scientifique',
    date: '2026-05-01', readTime: '11 min'
  },
  {
    id: 6, icon: '🚀', category: 'ENTREPRENEURIAT',
    title: 'Lancer un Projet Agricole',
    summary: 'Guide complet pour les entrepreneurs agricoles sur le lancement et le développement d\'une entreprise agricole prospère.',
    content: 'L\'entrepreneuriat agricole nécessite un mélange unique de connaissances techniques, de compétences managériales et de vision d\'avenir.\n\nÉtapes du projet :\n1. Étude de faisabilité et analyse de marché\n2. Élaboration du plan d\'affaires\n3. Obtention de financement (prêts, subventions, investisseurs)\n4. Choix du site et de l\'équipement\n5. Recrutement et formation\n6. Marketing et distribution\n\nDomaines prometteurs :\n- Agriculture biologique\n- Agriculture climato-intelligente\n- Production animale durable\n- Agriculture verticale et serres',
    date: '2026-05-20', readTime: '8 min'
  }
];
const faqItems = [
  { question: 'Quel est votre parcours et votre expertise ?', answer: 'Je suis titulaire d\'un doctorat en sciences animales spécialisé dans la qualité du sperme et les performances reproductives. J\'ai plus de 10 ans d\'expérience en recherche, formation et innovation numérique en agriculture.' },
  { question: 'Quels programmes de formation proposez-vous ?', answer: 'Je propose des formations agricoles complètes via les programmes FBS, AgriSkills Academy, et des ateliers spécialisés couvrant la production animale, les techniques agricoles modernes et l\'agriculture numérique.' },
  { question: 'Offrez-vous des services de conseil en recherche ?', answer: 'Oui ! Je fournis du conseil en conception expérimentale, analyse de données, rédaction scientifique et soutien à la publication internationale pour les chercheurs et institutions.' },
  { question: 'Comment accéder à la plateforme kamel3lom ?', answer: 'kamel3lom est notre plateforme numérique de connaissances agricoles. Vous pouvez y accéder via notre site web ou application mobile avec du contenu gratuit et premium.' },
  { question: 'Fournissez-vous des certifications pour les formations ?', answer: 'Oui, tous nos programmes de formation incluent des certificats reconnus. AgriSkills Academy délivre des certifications agricoles internationalement reconnues.' },
  { question: 'Quelle est votre disponibilité pour le conseil ?', answer: 'Je propose des modalités de conseil flexibles. Vous pouvez me contacter pour des solutions sur mesure en formation, recherche ou développement de plateformes numériques.' },
  { question: 'Comment vous contacter pour une collaboration ?', answer: 'Vous pouvez me joindre via le formulaire de contact sur ce site, par email, LinkedIn ou téléphone. Je réponds sous 24-48 heures à toutes les demandes.' },
  { question: 'Travaillez-vous à l\'international ?', answer: 'Oui ! J\'ai des collaborations avec des institutions en Europe, au Moyen-Orient et en Afrique. Le conseil et la formation à distance sont disponibles dans le monde entier.' },
];

function renderProjects(filter = 'all') {
  const grid = document.getElementById('projectGrid');
  grid.innerHTML = '';
  const filtered = filter === 'all' ? projects : projects.filter(p => p.cat === filter);
  filtered.forEach((p, i) => {
    const catLabels = { app: 'Application', research: 'Recherche', training: 'Formation', business: 'Entreprise' };
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
        <a href="${p.link}" class="text-cyan-400 text-sm font-semibold hover:text-cyan-300 flex items-center gap-1">Voir Détails <i data-lucide="arrow-right" style="width:14px;height:14px"></i></a>
      </div>
    `;
    grid.appendChild(card);
  });
  lucide.createIcons();
}

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
          <p class="text-gray-400 text-sm"><strong>Défi :</strong> ${study.challenge}</p>
        </div>
        <div>
          <p class="text-gray-400 text-sm"><strong>Solution :</strong> ${study.solution}</p>
        </div>
        <div>
          <p class="text-cyan-400 text-sm font-semibold">Résultats : ${study.results}</p>
        </div>
        <div class="flex flex-wrap gap-2 pt-2">
          ${study.tags.map(tag => `<span class="px-3 py-1 rounded-full bg-gradient-cyan-light text-white text-xs font-semibold">${tag}</span>`).join('')}
        </div>
      </div>
    `;
    container.appendChild(card);
  });
}

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

function toggleFAQ(index) {
  const answer = document.getElementById(`faq-answer-${index}`);
  const icon = document.querySelector(`.faq-icon-${index}`);
  
  answer.classList.toggle('hidden');
  if (icon) {
    icon.style.transform = answer.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(180deg)';
  }
}

function toggleMobile() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

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
  updateActiveNavLink(scrollTop);
  lastScroll = scrollTop;
});

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
  
  if (!name || !email || !subject || !message) {
    showToast('⚠️ Veuillez remplir tous les champs requis', 'warning');
    return;
  }
  
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('⚠️ Adresse email invalide', 'warning');
    return;
  }
  
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<span>Envoi...</span>';
  
  const formData = new FormData();
  formData.append('name', name);
  formData.append('email', email);
  formData.append('subject', subject);
  formData.append('message', message);
  
  fetch('https://formspree.io/f/ada15_agro@', {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
  })
  .then(response => {
    if (response.ok) {
      success.classList.remove('hidden');
      form.reset();
      setTimeout(() => success.classList.add('hidden'), 4000);
      showToast('✅ Message envoyé avec succès ! Je vous répondrai bientôt.', 'success');
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .catch(error => {
    showToast('❌ Échec d\'envoi du message. Veuillez réessayer.', 'warning');
    console.error('Error:', error);
  })
  .finally(() => {
    submitBtn.disabled = false;
    submitBtn.innerHTML = originalBtnText;
  });
}

function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  const bgColor = type === 'warning' ? 'from-amber-500 to-amber-600' : 'from-cyan-500 to-cyan-600';
  toast.className = `fixed top-24 left-1/2 -translate-x-1/2 z-50 glass px-6 py-3 rounded-xl text-white text-sm font-semibold bg-gradient-to-r ${bgColor}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

function subscribeNewsletter() {
  const email = document.getElementById('newsletterEmail').value.trim();
  
  if (!email) {
    showToast('⚠️ Veuillez entrer votre adresse email', 'warning');
    return;
  }
  
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    showToast('⚠️ Adresse email invalide', 'warning');
    return;
  }
  
  const subscriptions = JSON.parse(localStorage.getItem('newsletter_subscriptions') || '[]');
  if (subscriptions.find(s => s.email === email)) {
    showToast('⚠️ Cet email est déjà abonné', 'warning');
    return;
  }
  subscriptions.push({ email, subscribedAt: new Date().toISOString() });
  localStorage.setItem('newsletter_subscriptions', JSON.stringify(subscriptions));
  localStorage.setItem('newsletter_count', subscriptions.length);
  
  showToast('✅ Merci ! Vous êtes abonné avec succès', 'success');
  document.getElementById('newsletterEmail').value = '';
  if (window.analyticsTracker) {
    window.analyticsTracker.trackEvent('newsletter_subscribe', { email });
  }
}

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
          <button onclick="openArticle(${article.id})" class="text-cyan-400 text-sm font-semibold hover:text-cyan-300 flex items-center gap-1">Lire Plus <i data-lucide="arrow-right" style="width:14px;height:14px"></i></button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
  lucide.createIcons();
}

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

function closeArticle() {
  const overlay = document.getElementById('articleModal');
  if (overlay) {
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
  }
}

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

function downloadCV() {
  const cvUrl = 'CV_AbdelkaderAtia.pdf';
  
  fetch(cvUrl, { method: 'HEAD' }).then(response => {
    if (response.ok) {
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'CV_AbdelkaderAtia.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast('✅ Téléchargement du CV...', 'success');
    } else {
      showToast('📄 CV non disponible actuellement', 'warning');
    }
  }).catch(() => {
    showToast('📄 CV non disponible actuellement', 'warning');
  });
}

let isDarkMode = true;
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

window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    isDarkMode = true;
    toggleTheme();
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const menu = document.getElementById('mobileMenu');
    if (menu.classList.contains('open')) {
      toggleMobile();
    }
  }
  
  if ((e.ctrlKey || e.metaKey) && e.key === 'Home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

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

window.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('language') || 'fr';
  const frBtn = document.getElementById('langFr');
  const enBtn = document.getElementById('langEn');
  const arBtn = document.getElementById('langAr');
  
  if (savedLang === 'fr') {
    if (frBtn) frBtn.style.background = 'rgba(34,211,238,0.2)';
    if (enBtn) enBtn.style.background = 'transparent';
    if (arBtn) arBtn.style.background = 'transparent';
  } else if (savedLang === 'en') {
    if (enBtn) enBtn.style.background = 'rgba(34,211,238,0.2)';
    if (frBtn) frBtn.style.background = 'transparent';
    if (arBtn) arBtn.style.background = 'transparent';
  } else {
    if (arBtn) arBtn.style.background = 'rgba(34,211,238,0.2)';
    if (frBtn) frBtn.style.background = 'transparent';
    if (enBtn) enBtn.style.background = 'transparent';
  }
});

document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

renderProjects();
renderTestimonials();
renderGallery();
renderCaseStudies();
renderFAQ();
renderBlog();

lucide.createIcons();

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
  
  startCounterAnimation();
  initLazyLoading();
});

function startCounterAnimation() {
  const counters = document.querySelectorAll('.stat-number');
  
  const runCounters = () => {
    counters.forEach(counter => {
      const target = parseInt(counter.dataset.target);
      const increment = target / 50;
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

function shareToSocial(text) {
  const url = encodeURIComponent(window.location.href);
  const shareText = encodeURIComponent(text || document.title);
  const modal = document.getElementById('shareModal');
  if (!modal) return;
  document.getElementById('shareUrl').value = window.location.href;
  document.getElementById('shareContent').innerHTML = `
    <button onclick="window.open('https://twitter.com/intent/tweet?text=${shareText}&url=${url}','_blank','width=600,height=400')"
      class="flex items-center gap-3 w-full p-4 rounded-xl hover:bg-gray-700 transition text-left">
      <span class="text-2xl">🐦</span><div><div class="text-white font-semibold">Twitter / X</div><div class="text-gray-400 text-xs">Partager sur Twitter</div></div>
    </button>
    <button onclick="window.open('https://www.linkedin.com/sharing/share-offsite/?url=${url}','_blank','width=600,height=400')"
      class="flex items-center gap-3 w-full p-4 rounded-xl hover:bg-gray-700 transition text-left">
      <span class="text-2xl">💼</span><div><div class="text-white font-semibold">LinkedIn</div><div class="text-gray-400 text-xs">Partager sur LinkedIn</div></div>
    </button>
    <button onclick="window.open('https://www.facebook.com/sharer/sharer.php?u=${url}','_blank','width=600,height=400')"
      class="flex items-center gap-3 w-full p-4 rounded-xl hover:bg-gray-700 transition text-left">
      <span class="text-2xl">📘</span><div><div class="text-white font-semibold">Facebook</div><div class="text-gray-400 text-xs">Partager sur Facebook</div></div>
    </button>
    <button onclick="navigator.clipboard.writeText(window.location.href).then(()=>{showToast('✅ Lien copié !','success');closeShareModal();})"
      class="flex items-center gap-3 w-full p-4 rounded-xl hover:bg-gray-700 transition text-left">
      <span class="text-2xl">🔗</span><div><div class="text-white font-semibold">Copier le Lien</div><div class="text-gray-400 text-xs">Copier le lien dans le presse-papier</div></div>
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

window.addEventListener('resize', () => {
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
});

async function subscribePushNotifications() {
  if (!('Notification' in window) || !('serviceWorker' in navigator)) {
    showToast('⚠️ Notifications non supportées par ce navigateur', 'warning');
    return false;
  }
  try {
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      showToast('⚠️ Permission de notification refusée', 'warning');
      return false;
    }
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true
    });
    localStorage.setItem('push_subscription', JSON.stringify(subscription));
    showToast('✅ Notifications activées avec succès', 'success');
    return true;
  } catch (err) {
    console.error('Push subscription failed:', err);
    showToast('❌ Échec d\'activation des notifications', 'warning');
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
      showToast('✅ Notifications désactivées', 'success');
    }
  } catch (err) {
    console.error('Unsubscribe failed:', err);
  }
}

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

const defaultConfigFr = {
  hero_title: 'Transformer les Connaissances Agricoles en Impact Réel',
  hero_subtitle: 'Doctorant et formateur spécialisé en agriculture numérique, construisant des ponts entre la science et l\'application pratique.',
  about_title: 'À Propos de Moi',
  services_title: 'Mes Services',
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
    defaultConfig: defaultConfigFr,
    onConfigChange: async (config) => {
      const c = { ...defaultConfigFr, ...config };
      const heroEl = document.getElementById('heroTitle');
      if (heroEl) heroEl.innerHTML = c.hero_title.replace(/(Connaissances Agricoles)/g, '<span class="gradient-text">$1</span>');
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
      const c = { ...defaultConfigFr, ...config };
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
      const c = { ...defaultConfigFr, ...config };
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
