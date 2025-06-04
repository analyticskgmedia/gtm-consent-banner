/**
 * GTM Consent Banner Script
 * Implements Google's Advanced Consent Mode v2
 * Compatible with ES5 for maximum browser support
 */

(function() {
  'use strict';
  
  // Multi-language translations
  var translations = {
    en: {
      title: 'We value your privacy',
      description: 'We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. Please choose your preferences.',
      acceptAll: 'Accept All',
      rejectAll: 'Reject All',
      details: 'Details',
      savePreferences: 'Save Preferences',
      necessary: 'Necessary Cookies',
      necessaryDesc: 'Essential for the website to function properly',
      analytics: 'Analytics Cookies',
      analyticsDesc: 'Help us understand how visitors interact with our website',
      advertising: 'Advertising Cookies',
      advertisingDesc: 'Used to deliver personalized advertisements',
      functionality: 'Functionality Cookies',
      functionalityDesc: 'Enable enhanced functionality and personalization',
      personalization: 'Personalization Cookies',
      personalizationDesc: 'Allow the website to remember your preferences',
      privacyPolicy: 'Privacy Policy',
      settings: 'Cookie Settings'
    },
    zh: {
      title: '我们重视您的隐私',
      description: '我们使用 cookie 来增强您的浏览体验、提供个性化内容并分析我们的流量。请选择您的偏好。',
      acceptAll: '全部接受',
      rejectAll: '全部拒绝',
      details: '详情',
      savePreferences: '保存偏好',
      necessary: '必要的 Cookie',
      necessaryDesc: '网站正常运行所必需的',
      analytics: '分析 Cookie',
      analyticsDesc: '帮助我们了解访客如何与我们的网站互动',
      advertising: '广告 Cookie',
      advertisingDesc: '用于投放个性化广告',
      functionality: '功能性 Cookie',
      functionalityDesc: '启用增强功能和个性化',
      personalization: '个性化 Cookie',
      personalizationDesc: '允许网站记住您的偏好',
      privacyPolicy: '隐私政策',
      settings: 'Cookie 设置'
    },
    es: {
      title: 'Valoramos tu privacidad',
      description: 'Utilizamos cookies para mejorar tu experiencia de navegación, ofrecer contenido personalizado y analizar nuestro tráfico. Por favor, elige tus preferencias.',
      acceptAll: 'Aceptar Todo',
      rejectAll: 'Rechazar Todo',
      details: 'Detalles',
      savePreferences: 'Guardar Preferencias',
      necessary: 'Cookies Necesarias',
      necessaryDesc: 'Esenciales para el funcionamiento del sitio web',
      analytics: 'Cookies Analíticas',
      analyticsDesc: 'Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio',
      advertising: 'Cookies Publicitarias',
      advertisingDesc: 'Se utilizan para ofrecer anuncios personalizados',
      functionality: 'Cookies de Funcionalidad',
      functionalityDesc: 'Habilitan funcionalidad mejorada y personalización',
      personalization: 'Cookies de Personalización',
      personalizationDesc: 'Permiten que el sitio web recuerde tus preferencias',
      privacyPolicy: 'Política de Privacidad',
      settings: 'Configuración de Cookies'
    },
    hi: {
      title: 'हम आपकी गोपनीयता को महत्व देते हैं',
      description: 'हम आपके ब्राउज़िंग अनुभव को बेहतर बनाने, व्यक्तिगत सामग्री प्रदान करने और हमारे ट्रैफ़िक का विश्लेषण करने के लिए कुकीज़ का उपयोग करते हैं।',
      acceptAll: 'सभी स्वीकार करें',
      rejectAll: 'सभी अस्वीकार करें',
      details: 'विवरण',
      savePreferences: 'प्राथमिकताएँ सहेजें',
      necessary: 'आवश्यक कुकीज़',
      necessaryDesc: 'वेबसाइट के सही तरीके से काम करने के लिए आवश्यक',
      analytics: 'विश्लेषण कुकीज़',
      analyticsDesc: 'हमें यह समझने में मदद करती हैं कि विज़िटर हमारी वेबसाइट से कैसे इंटरैक्ट करते हैं',
      advertising: 'विज्ञापन कुकीज़',
      advertisingDesc: 'व्यक्तिगत विज्ञापन देने के लिए उपयोग की जाती हैं',
      functionality: 'कार्यक्षमता कुकीज़',
      functionalityDesc: 'उन्नत कार्यक्षमता और व्यक्तिगतकरण सक्षम करें',
      personalization: 'व्यक्तिगतकरण कुकीज़',
      personalizationDesc: 'वेबसाइट को आपकी प्राथमिकताओं को याद रखने की अनुमति दें',
      privacyPolicy: 'गोपनीयता नीति',
      settings: 'कुकी सेटिंग्स'
    },
    ar: {
      title: 'نحن نقدر خصوصيتك',
      description: 'نستخدم ملفات تعريف الارتباط لتحسين تجربة التصفح وتقديم محتوى مخصص وتحليل حركة المرور لدينا.',
      acceptAll: 'قبول الكل',
      rejectAll: 'رفض الكل',
      details: 'التفاصيل',
      savePreferences: 'حفظ التفضيلات',
      necessary: 'ملفات تعريف الارتباط الضرورية',
      necessaryDesc: 'ضرورية لعمل الموقع بشكل صحيح',
      analytics: 'ملفات تعريف الارتباط التحليلية',
      analyticsDesc: 'تساعدنا على فهم كيفية تفاعل الزوار مع موقعنا',
      advertising: 'ملفات تعريف الارتباط الإعلانية',
      advertisingDesc: 'تستخدم لتقديم إعلانات مخصصة',
      functionality: 'ملفات تعريف الارتباط الوظيفية',
      functionalityDesc: 'تمكين الوظائف المحسنة والتخصيص',
      personalization: 'ملفات تعريف الارتباط للتخصيص',
      personalizationDesc: 'تسمح للموقع بتذكر تفضيلاتك',
      privacyPolicy: 'سياسة الخصوصية',
      settings: 'إعدادات ملفات تعريف الارتباط'
    },
    pt: {
      title: 'Valorizamos sua privacidade',
      description: 'Usamos cookies para melhorar sua experiência de navegação, fornecer conteúdo personalizado e analisar nosso tráfego.',
      acceptAll: 'Aceitar Tudo',
      rejectAll: 'Rejeitar Tudo',
      details: 'Detalhes',
      savePreferences: 'Salvar Preferências',
      necessary: 'Cookies Necessários',
      necessaryDesc: 'Essenciais para o funcionamento do site',
      analytics: 'Cookies Analíticos',
      analyticsDesc: 'Nos ajudam a entender como os visitantes interagem com nosso site',
      advertising: 'Cookies de Publicidade',
      advertisingDesc: 'Usados para fornecer anúncios personalizados',
      functionality: 'Cookies de Funcionalidade',
      functionalityDesc: 'Habilitam funcionalidade aprimorada e personalização',
      personalization: 'Cookies de Personalização',
      personalizationDesc: 'Permitem que o site lembre suas preferências',
      privacyPolicy: 'Política de Privacidade',
      settings: 'Configurações de Cookies'
    },
    ru: {
      title: 'Мы ценим вашу конфиденциальность',
      description: 'Мы используем файлы cookie для улучшения вашего опыта просмотра, предоставления персонализированного контента и анализа нашего трафика.',
      acceptAll: 'Принять все',
      rejectAll: 'Отклонить все',
      details: 'Подробнее',
      savePreferences: 'Сохранить предпочтения',
      necessary: 'Необходимые файлы cookie',
      necessaryDesc: 'Необходимы для правильной работы сайта',
      analytics: 'Аналитические файлы cookie',
      analyticsDesc: 'Помогают нам понять, как посетители взаимодействуют с нашим сайтом',
      advertising: 'Рекламные файлы cookie',
      advertisingDesc: 'Используются для показа персонализированной рекламы',
      functionality: 'Функциональные файлы cookie',
      functionalityDesc: 'Обеспечивают расширенную функциональность и персонализацию',
      personalization: 'Файлы cookie для персонализации',
      personalizationDesc: 'Позволяют сайту запоминать ваши предпочтения',
      privacyPolicy: 'Политика конфиденциальности',
      settings: 'Настройки файлов cookie'
    },
    ja: {
      title: 'プライバシーを大切にしています',
      description: 'クッキーを使用して、ブラウジング体験を向上させ、パーソナライズされたコンテンツを提供し、トラフィックを分析します。',
      acceptAll: 'すべて受け入れる',
      rejectAll: 'すべて拒否',
      details: '詳細',
      savePreferences: '設定を保存',
      necessary: '必須Cookie',
      necessaryDesc: 'ウェブサイトが正常に機能するために必要',
      analytics: '分析Cookie',
      analyticsDesc: '訪問者がウェブサイトとどのようにやり取りするかを理解するのに役立ちます',
      advertising: '広告Cookie',
      advertisingDesc: 'パーソナライズされた広告を配信するために使用',
      functionality: '機能性Cookie',
      functionalityDesc: '強化された機能とパーソナライゼーションを有効にする',
      personalization: 'パーソナライゼーションCookie',
      personalizationDesc: 'ウェブサイトがあなたの好みを記憶できるようにする',
      privacyPolicy: 'プライバシーポリシー',
      settings: 'Cookie設定'
    },
    de: {
      title: 'Wir schätzen Ihre Privatsphäre',
      description: 'Wir verwenden Cookies, um Ihr Surferlebnis zu verbessern, personalisierte Inhalte bereitzustellen und unseren Datenverkehr zu analysieren.',
      acceptAll: 'Alle akzeptieren',
      rejectAll: 'Alle ablehnen',
      details: 'Details',
      savePreferences: 'Einstellungen speichern',
      necessary: 'Notwendige Cookies',
      necessaryDesc: 'Erforderlich für das ordnungsgemäße Funktionieren der Website',
      analytics: 'Analyse-Cookies',
      analyticsDesc: 'Helfen uns zu verstehen, wie Besucher mit unserer Website interagieren',
      advertising: 'Werbe-Cookies',
      advertisingDesc: 'Werden verwendet, um personalisierte Werbung zu liefern',
      functionality: 'Funktionalitäts-Cookies',
      functionalityDesc: 'Ermöglichen erweiterte Funktionalität und Personalisierung',
      personalization: 'Personalisierungs-Cookies',
      personalizationDesc: 'Erlauben der Website, Ihre Präferenzen zu speichern',
      privacyPolicy: 'Datenschutzerklärung',
      settings: 'Cookie-Einstellungen'
    },
    fr: {
      title: 'Nous respectons votre vie privée',
      description: 'Nous utilisons des cookies pour améliorer votre expérience de navigation, fournir du contenu personnalisé et analyser notre trafic.',
      acceptAll: 'Tout accepter',
      rejectAll: 'Tout refuser',
      details: 'Détails',
      savePreferences: 'Enregistrer les préférences',
      necessary: 'Cookies nécessaires',
      necessaryDesc: 'Essentiels au bon fonctionnement du site',
      analytics: 'Cookies analytiques',
      analyticsDesc: 'Nous aident à comprendre comment les visiteurs interagissent avec notre site',
      advertising: 'Cookies publicitaires',
      advertisingDesc: 'Utilisés pour diffuser des publicités personnalisées',
      functionality: 'Cookies de fonctionnalité',
      functionalityDesc: 'Permettent une fonctionnalité améliorée et une personnalisation',
      personalization: 'Cookies de personnalisation',
      personalizationDesc: 'Permettent au site de mémoriser vos préférences',
      privacyPolicy: 'Politique de confidentialité',
      settings: 'Paramètres des cookies'
    },
    hr: {
      title: 'Cijenimo vašu privatnost',
      description: 'Koristimo kolačiće za poboljšanje vašeg iskustva pregledavanja, pružanje personaliziranog sadržaja i analizu našeg prometa.',
      acceptAll: 'Prihvati sve',
      rejectAll: 'Odbaci sve',
      details: 'Detalji',
      savePreferences: 'Spremi postavke',
      necessary: 'Nužni kolačići',
      necessaryDesc: 'Neophodni za pravilno funkcioniranje web stranice',
      analytics: 'Analitički kolačići',
      analyticsDesc: 'Pomažu nam razumjeti kako posjetitelji komuniciraju s našom web stranicom',
      advertising: 'Oglašivački kolačići',
      advertisingDesc: 'Koriste se za pružanje personaliziranih oglasa',
      functionality: 'Funkcijski kolačići',
      functionalityDesc: 'Omogućavaju poboljšanu funkcionalnost i personalizaciju',
      personalization: 'Kolačići za personalizaciju',
      personalizationDesc: 'Omogućavaju web stranici da zapamti vaše postavke',
      privacyPolicy: 'Politika privatnosti',
      settings: 'Postavke kolačića'
    }
  };
  
  // Get configuration from GTM
  var config = window.gtmConsentConfig || {};
  var currentLang = config.currentLanguage || 'en';
  var t = translations[currentLang] || translations.en;
  
  // Helper function to create elements with proper ES5 syntax
  function createElement(tag, className, innerHTML) {
    var element = document.createElement(tag);
    if (className) element.className = className;
    if (innerHTML) element.innerHTML = innerHTML;
    return element;
  }
  
  // Helper function to add event listeners
  function addEvent(element, event, handler) {
    if (element.addEventListener) {
      element.addEventListener(event, handler, false);
    } else if (element.attachEvent) {
      element.attachEvent('on' + event, handler);
    }
  }
  
  // Create banner HTML
  function createBanner() {
    var banner = createElement('div', 'gtm-consent-banner');
    banner.id = 'gtm-consent-banner';
    
    // Apply styles
    var styles = [
      '#gtm-consent-banner {',
      '  position: fixed;',
      '  inset: 0;',
      '  background: rgba(0, 0, 0, 0.5);',
      '  z-index: 999999;',
      '  display: flex;',
      '  align-items: center;',
      '  justify-content: center;',
      '  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;',
      '}',
      '.gtm-consent-container {',
      '  background: white;',
      '  border-radius: 8px;',
      '  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);',
      '  max-width: 600px;',
      '  width: 90%;',
      '  max-height: 90vh;',
      '  overflow-y: auto;',
      '  padding: 2rem;',
      '}',
      '.gtm-consent-logos {',
      '  display: flex;',
      '  justify-content: space-between;',
      '  align-items: center;',
      '  margin-bottom: 1.5rem;',
      '}',
      '.gtm-consent-logo {',
      '  max-height: 40px;',
      '  max-width: 120px;',
      '}',
      '.gtm-consent-title {',
      '  font-size: 1.5rem;',
      '  font-weight: 600;',
      '  margin-bottom: 1rem;',
      '  color: #202124;',
      '}',
      '.gtm-consent-description {',
      '  font-size: 1rem;',
      '  line-height: 1.5;',
      '  color: #5f6368;',
      '  margin-bottom: 1.5rem;',
      '}',
      '.gtm-consent-buttons {',
      '  display: flex;',
      '  gap: 0.5rem;',
      '  flex-wrap: wrap;',
      '  margin-bottom: 1rem;',
      '}',
      '.gtm-consent-button {',
      '  padding: 0.75rem 1.5rem;',
      '  border-radius: 4px;',
      '  border: none;',
      '  font-size: 1rem;',
      '  cursor: pointer;',
      '  transition: opacity 0.2s;',
      '  font-weight: 500;',
      '}',
      '.gtm-consent-button:hover {',
      '  opacity: 0.9;',
      '}',
      '.gtm-consent-button-primary {',
      '  background: ' + config.config.appearance.primaryColor + ';',
      '  color: ' + config.config.appearance.primaryTextColor + ';',
      '}',
      '.gtm-consent-button-secondary {',
      '  background: ' + config.config.appearance.secondaryColor + ';',
      '  color: ' + config.config.appearance.secondaryTextColor + ';',
      '}',
      '.gtm-consent-details {',
      '  display: none;',
      '  margin-top: 1.5rem;',
      '  border-top: 1px solid #e8eaed;',
      '  padding-top: 1.5rem;',
      '}',
      '.gtm-consent-category {',
      '  margin-bottom: 1rem;',
      '}',
      '.gtm-consent-category-header {',
      '  display: flex;',
      '  align-items: center;',
      '  justify-content: space-between;',
      '  margin-bottom: 0.5rem;',
      '}',
      '.gtm-consent-category-title {',
      '  font-weight: 500;',
      '  color: #202124;',
      '}',
      '.gtm-consent-category-desc {',
      '  font-size: 0.875rem;',
      '  color: #5f6368;',
      '  margin-bottom: 0.5rem;',
      '}',
      '.gtm-consent-toggle {',
      '  position: relative;',
      '  display: inline-block;',
      '  width: 48px;',
      '  height: 24px;',
      '}',
      '.gtm-consent-toggle input {',
      '  opacity: 0;',
      '  width: 0;',
      '  height: 0;',
      '}',
      '.gtm-consent-toggle-slider {',
      '  position: absolute;',
      '  cursor: pointer;',
      '  top: 0;',
      '  left: 0;',
      '  right: 0;',
      '  bottom: 0;',
      '  background-color: #ccc;',
      '  transition: .4s;',
      '  border-radius: 24px;',
      '}',
      '.gtm-consent-toggle-slider:before {',
      '  position: absolute;',
      '  content: "";',
      '  height: 16px;',
      '  width: 16px;',
      '  left: 4px;',
      '  bottom: 4px;',
      '  background-color: white;',
      '  transition: .4s;',
      '  border-radius: 50%;',
      '}',
      '.gtm-consent-toggle input:checked + .gtm-consent-toggle-slider {',
      '  background-color: ' + config.config.appearance.primaryColor + ';',
      '}',
      '.gtm-consent-toggle input:checked + .gtm-consent-toggle-slider:before {',
      '  transform: translateX(24px);',
      '}',
      '.gtm-consent-privacy-link {',
      '  display: inline-block;',
      '  margin-top: 1rem;',
      '  color: ' + config.config.appearance.primaryColor + ';',
      '  text-decoration: none;',
      '}',
      '.gtm-consent-privacy-link:hover {',
      '  text-decoration: underline;',
      '}',
      '.gtm-consent-settings-button {',
      '  position: fixed;',
      '  bottom: 20px;',
      '  left: 20px;',
      '  background: ' + config.config.appearance.primaryColor + ';',
      '  color: white;',
      '  border: none;',
      '  border-radius: 50%;',
      '  width: 48px;',
      '  height: 48px;',
      '  cursor: pointer;',
      '  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);',
      '  z-index: 999998;',
      '  display: flex;',
      '  align-items: center;',
      '  justify-content: center;',
      '}',
      '.gtm-consent-settings-button:hover {',
      '  opacity: 0.9;',
      '}',
      '.gtm-consent-settings-icon {',
      '  width: 24px;',
      '  height: 24px;',
      '}'
    ].join('\n');
    
    var styleElement = createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
    
    // Build banner content
    var container = createElement('div', 'gtm-consent-container');
    
    // Logos
    if (config.config.logos.website || config.config.logos.company) {
      var logosDiv = createElement('div', 'gtm-consent-logos');
      
      if (config.config.logos.website) {
        var websiteLogo = createElement('img', 'gtm-consent-logo');
        websiteLogo.src = config.config.logos.website;
        websiteLogo.alt = 'Website Logo';
        logosDiv.appendChild(websiteLogo);
      }
      
      if (config.config.logos.company) {
        var companyLogo = createElement('img', 'gtm-consent-logo');
        companyLogo.src = config.config.logos.company;
        companyLogo.alt = 'Company Logo';
        logosDiv.appendChild(companyLogo);
      }
      
      container.appendChild(logosDiv);
    }
    
    // Title and description
    container.appendChild(createElement('h2', 'gtm-consent-title', t.title));
    container.appendChild(createElement('p', 'gtm-consent-description', t.description));
    
    // Buttons
    var buttonsDiv = createElement('div', 'gtm-consent-buttons');
    
    var acceptAllBtn = createElement('button', 'gtm-consent-button gtm-consent-button-primary', t.acceptAll);
    var rejectAllBtn = createElement('button', 'gtm-consent-button gtm-consent-button-secondary', t.rejectAll);
    var detailsBtn = createElement('button', 'gtm-consent-button gtm-consent-button-secondary', t.details);
    
    buttonsDiv.appendChild(acceptAllBtn);
    buttonsDiv.appendChild(detailsBtn);
    buttonsDiv.appendChild(rejectAllBtn);
    
    container.appendChild(buttonsDiv);
    
    // Details section
    var detailsDiv = createElement('div', 'gtm-consent-details');
    
    // Cookie categories
    var categories = [
      {
        name: 'necessary',
        title: t.necessary,
        desc: t.necessaryDesc,
        required: true,
        consent: 'security_storage'
      },
      {
        name: 'analytics',
        title: t.analytics,
        desc: t.analyticsDesc,
        consent: 'analytics_storage'
      },
      {
        name: 'advertising',
        title: t.advertising,
        desc: t.advertisingDesc,
        consent: ['ad_storage', 'ad_user_data', 'ad_personalization']
      },
      {
        name: 'functionality',
        title: t.functionality,
        desc: t.functionalityDesc,
        consent: 'functionality_storage'
      },
      {
        name: 'personalization',
        title: t.personalization,
        desc: t.personalizationDesc,
        consent: 'personalization_storage'
      }
    ];
    
    categories.forEach(function(category) {
      var categoryDiv = createElement('div', 'gtm-consent-category');
      
      var headerDiv = createElement('div', 'gtm-consent-category-header');
      headerDiv.appendChild(createElement('div', 'gtm-consent-category-title', category.title));
      
      var toggle = createElement('label', 'gtm-consent-toggle');
      var input = createElement('input');
      input.type = 'checkbox';
      input.id = 'consent-' + category.name;
      input.checked = category.required;
      input.disabled = category.required;
      
      toggle.appendChild(input);
      toggle.appendChild(createElement('span', 'gtm-consent-toggle-slider'));
      
      headerDiv.appendChild(toggle);
      categoryDiv.appendChild(headerDiv);
      categoryDiv.appendChild(createElement('div', 'gtm-consent-category-desc', category.desc));
      
      detailsDiv.appendChild(categoryDiv);
    });
    
    // Save preferences button
    var saveBtn = createElement('button', 'gtm-consent-button gtm-consent-button-primary', t.savePreferences);
    saveBtn.style.marginTop = '1rem';
    detailsDiv.appendChild(saveBtn);
    
    container.appendChild(detailsDiv);
    
    // Privacy policy link
    var privacyUrl = config.config.language.privacyUrls[currentLang];
    if (privacyUrl) {
      var privacyLink = createElement('a', 'gtm-consent-privacy-link', t.privacyPolicy);
      privacyLink.href = privacyUrl;
      privacyLink.target = '_blank';
      container.appendChild(privacyLink);
    }
    
    banner.appendChild(container);
    
    // Event handlers
    addEvent(acceptAllBtn, 'click', function() {
      updateAllConsent('granted');
      hideBanner();
    });
    
    addEvent(rejectAllBtn, 'click', function() {
      updateAllConsent('denied');
      hideBanner();
    });
    
    addEvent(detailsBtn, 'click', function() {
      detailsDiv.style.display = detailsDiv.style.display === 'none' ? 'block' : 'none';
    });
    
    addEvent(saveBtn, 'click', function() {
      savePreferences();
      hideBanner();
    });
    
    return banner;
  }
  
  // Create settings button
  function createSettingsButton() {
    var button = createElement('button', 'gtm-consent-settings-button');
    button.innerHTML = '<svg class="gtm-consent-settings-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/></svg>';
    button.setAttribute('aria-label', t.settings);
    
    addEvent(button, 'click', function() {
      showBanner();
    });
    
    return button;
  }
  
  // Update all consent
  function updateAllConsent(status) {
    var consentUpdate = {
      analytics_storage: status,
      ad_storage: status,
      ad_user_data: status,
      ad_personalization: status,
      functionality_storage: status,
      personalization_storage: status,
      security_storage: 'granted'
    };
    
    if (config.updateConsent) {
      config.updateConsent(consentUpdate);
    }
  }
  
  // Save preferences
  function savePreferences() {
    var consentUpdate = {
      analytics_storage: document.getElementById('consent-analytics').checked ? 'granted' : 'denied',
      ad_storage: document.getElementById('consent-advertising').checked ? 'granted' : 'denied',
      ad_user_data: document.getElementById('consent-advertising').checked ? 'granted' : 'denied',
      ad_personalization: document.getElementById('consent-advertising').checked ? 'granted' : 'denied',
      functionality_storage: document.getElementById('consent-functionality').checked ? 'granted' : 'denied',
      personalization_storage: document.getElementById('consent-personalization').checked ? 'granted' : 'denied',
      security_storage: 'granted'
    };
    
    if (config.updateConsent) {
      config.updateConsent(consentUpdate);
    }
  }
  
  // Show/hide banner
  function showBanner() {
    var existingBanner = document.getElementById('gtm-consent-banner');
    if (existingBanner) {
      existingBanner.style.display = 'flex';
    } else {
      document.body.appendChild(createBanner());
    }
  }
  
  function hideBanner() {
    var banner = document.getElementById('gtm-consent-banner');
    if (banner) {
      banner.style.display = 'none';
    }
  }
  
  // Check for existing consent
  function getCookie(name) {
    var value = '; ' + document.cookie;
    var parts = value.split('; ' + name + '=');
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  
  // Initialize
  function init() {
    // Add settings button
    document.body.appendChild(createSettingsButton());
    
    // Show banner if no consent
    if (!getCookie('gtm_consent_mode')) {
      showBanner();
    }
  }
  
  // Wait for DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();