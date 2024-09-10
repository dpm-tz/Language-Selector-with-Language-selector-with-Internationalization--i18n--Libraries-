// Initialize i18next
i18next
  .use(i18nextBrowserLanguageDetector)
  .init({
    debug: true,
    fallbackLng: 'en', // Default language
    resources: {
      en: {
        translation: {
          "home": "Home",
          "about": "About",
          "services": "Services",
          "contact": "Contact",
          "welcome": "Welcome to my website",
          "description": "This is a simple internationalized website using i18next.",
          "intro": "Explore the content and change the language using the dropdown below."
        }
      },
      fr: {
        translation: {
          "home": "Accueil",
          "about": "À propos",
          "services": "Services",
          "contact": "Contact",
          "welcome": "Bienvenue sur mon site Web",
          "description": "Ceci est un site Web internationalisé simple utilisant i18next.",
          "intro": "Explorez le contenu et changez la langue à l'aide du menu déroulant ci-dessous."
        }
      },
      sw: {
        translation: {
          "home": "Nyumbani",
          "about": "Kuhusu",
          "services": "Huduma",
          "contact": "Wasiliana",
          "welcome": "Karibu kwenye tovuti yangu",
          "description": "Hii ni tovuti rahisi ya kimataifa inayotumia i18next.",
          "intro": "Gundua yaliyomo na ubadilishe lugha kwa kutumia menyu hapa chini."
        }
      }
    }
  }, function(err, t) {
    // Initialize content
    updateContent();
  });

// Function to update content based on the selected language
function updateContent() {
  document.querySelectorAll('[data-i18n]').forEach(function(element) {
    const key = element.getAttribute('data-i18n');
    element.innerHTML = i18next.t(key);
  });
}

// Language switcher event
document.getElementById('languageSwitcher').addEventListener('change', function() {
  const selectedLang = this.value;
  i18next.changeLanguage(selectedLang, function(err, t) {
    if (err) return console.error(err);
    updateContent();
  });
});
