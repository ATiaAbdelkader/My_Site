/**
 * Enhanced JSON-LD Structured Data Generator
 * Creates rich schema data for SEO and AI crawlers
 */

class StructuredDataGenerator {
  constructor() {
    this.baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://abdelkader-atia.com';
  }

  /**
   * Generate Person schema
   */
  generatePersonSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${this.baseUrl}/#person`,
      "name": "عبد القادر عطيه",
      "alternateName": "Abdelkader Atia",
      "jobTitle": "PhD Researcher & Agricultural Innovator",
      "description": "PhD in animal sciences specializing in semen quality and reproductive performance. Expert in digital agriculture, training, and sustainable farming.",
      "image": `${this.baseUrl}/assets/images/profile.jpg`,
      "email": "contact@abdelkader-atia.com",
      "telephone": "+213-XXXXXXXXX", // Add actual number
      "url": `${this.baseUrl}/`,
      "sameAs": [
        "https://www.linkedin.com/in/abdelkader-atia/",
        "https://twitter.com/abdelkader_atia",
        "https://www.facebook.com/abdelkader.atia",
        "https://github.com/abdelkader-atia"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "Algeria",
        "addressLocality": "Algeria"
      },
      "knowsAbout": [
        "Animal Sciences",
        "Reproductive Science",
        "Semen Quality Analysis",
        "Digital Agriculture",
        "Agricultural Training",
        "Sustainable Farming",
        "Livestock Production",
        "Research Methods"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "Doctorate",
          "name": "PhD in Animal Sciences",
          "description": "Specialization in semen quality and reproductive performance"
        }
      ]
    };
  }

  /**
   * Generate Organization schema for services
   */
  generateOrganizationSchema() {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${this.baseUrl}/#organization`,
      "name": "Abdelkader Atia - Agricultural Innovation",
      "url": `${this.baseUrl}/`,
      "logo": `${this.baseUrl}/assets/images/logo.png`,
      "description": "Agricultural innovation, research consulting, and professional training services",
      "sameAs": [
        "https://www.linkedin.com/in/abdelkader-atia/",
        "https://twitter.com/abdelkader_atia"
      ],
      "contact": {
        "@type": "ContactPoint",
        "contactType": "General Support",
        "email": "contact@abdelkader-atia.com"
      }
    };
  }

  /**
   * Generate Service schema
   */
  generateServiceSchema(serviceName, description, price = null) {
    const schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceName,
      "description": description,
      "provider": {
        "@type": "Person",
        "name": "Abdelkader Atia",
        "url": `${this.baseUrl}/`
      },
      "areaServed": {
        "@type": "Country",
        "name": ["Algeria", "Middle East", "Europe", "Africa", "Worldwide"]
      }
    };

    if (price) {
      schema.offers = {
        "@type": "Offer",
        "priceCurrency": "USD",
        "price": price
      };
    }

    return schema;
  }

  /**
   * Generate BreadcrumbList schema
   */
  generateBreadcrumbSchema(breadcrumbs) {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": `${this.baseUrl}${crumb.url}`
      }))
    };
  }

  /**
   * Generate Article schema for case studies
   */
  generateArticleSchema(article) {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": article.title,
      "description": article.description,
      "image": article.image || `${this.baseUrl}/assets/images/default.jpg`,
      "author": {
        "@type": "Person",
        "name": "Abdelkader Atia",
        "url": `${this.baseUrl}/`
      },
      "datePublished": article.datePublished || new Date().toISOString(),
      "dateModified": article.dateModified || new Date().toISOString(),
      "articleBody": article.content || ""
    };
  }

  /**
   * Generate Event schema for workshops
   */
  generateEventSchema(event) {
    return {
      "@context": "https://schema.org",
      "@type": "Event",
      "name": event.name,
      "description": event.description,
      "startDate": event.startDate,
      "endDate": event.endDate,
      "location": {
        "@type": "Place",
        "name": event.location
      },
      "organizer": {
        "@type": "Person",
        "name": "Abdelkader Atia",
        "url": `${this.baseUrl}/`
      }
    };
  }

  /**
   * Generate CourseSchema for training programs
   */
  generateCourseSchema(course) {
    return {
      "@context": "https://schema.org",
      "@type": "Course",
      "name": course.name,
      "description": course.description,
      "provider": {
        "@type": "Organization",
        "name": "Abdelkader Atia - AgriSkills Academy",
        "url": `${this.baseUrl}/`
      },
      "courseCode": course.code || "",
      "duration": course.duration || "PT1M",
      "educationLevel": course.level || "Intermediate"
    };
  }

  /**
   * Generate FAQPage schema
   */
  generateFAQSchema(faqs) {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
  }

  /**
   * Generate aggregate rating schema
   */
  generateAggregateRatingSchema(name, ratingValue, reviewCount) {
    return {
      "@context": "https://schema.org",
      "@type": "AggregateRating",
      "ratingValue": ratingValue,
      "reviewCount": reviewCount,
      "bestRating": "5",
      "worstRating": "1"
    };
  }

  /**
   * Inject schema into page
   */
  injectSchema(schema, id = null) {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    if (id) script.id = id;
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return script;
  }

  /**
   * Generate all schemas for main page
   */
  generateAllSchemas() {
    return [
      this.generatePersonSchema(),
      this.generateOrganizationSchema(),
      this.generateFAQSchema([
        {
          question: "What is your background and expertise?",
          answer: "I hold a PhD in animal sciences specializing in semen quality and reproductive performance. I have 10+ years of experience in research, training, and digital innovation in agriculture."
        },
        {
          question: "What training programs do you offer?",
          answer: "I offer comprehensive agricultural training through FBS programs, AgriSkills Academy, and specialized workshops covering livestock production, modern farming techniques, and digital agriculture."
        },
        {
          question: "Do you offer research consulting services?",
          answer: "Yes! I provide consulting in experimental design, data analysis, scientific writing, thesis supervision, and international publishing support for researchers and institutions."
        }
      ])
    ];
  }
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { StructuredDataGenerator };
}

// Auto-inject on page load
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const generator = new StructuredDataGenerator();
    generator.generateAllSchemas().forEach(schema => {
      generator.injectSchema(schema);
    });
  });
}
