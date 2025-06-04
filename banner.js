/**
 * GTM Consent Banner Script - Fixed Version
 * Works properly with GTM's sandboxed environment
 */

(function() {
  'use strict';
  
  // Wait for config to be available
  var checkConfigInterval = setInterval(function() {
    if (window.gtmConsentConfig) {
      clearInterval(checkConfigInterval);
      initializeBanner();
    }
  }, 100);
  
  // Timeout after 5 seconds
  setTimeout(function() {
    clearInterval(checkConfigInterval);
  }, 5000);
  
  function initializeBanner() {
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
        description: 'Utilizamos cookies para mejorar tu experiencia de navegación, ofrecer contenido personalizado y analizar nuestro tráfico.',
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
    
    // Add CSS styles
    var styles = document.createElement('style');
    styles.textContent = `
      #gtm-consent-banner {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        z-index: 999999;
        display: flex;
        align-items: center;
        justify-content: center;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      }
      .gtm-consent-container {
        background: white;
        border-radius: 8px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        max-width: 600px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        padding: 2rem;
        margin: 1rem;
      }
      .gtm-consent-logos {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        gap: 1rem;
      }
      .gtm-consent-logo {
        max-height: 40px;
        max-width: 120px;
        object-fit: contain;
      }
      .gtm-consent-title {
        font-size: 1.5rem;
        font-weight: 600;
        margin: 0 0 1rem 0;
        color: #202124;
      }
      .gtm-consent-description {
        font-size: 1rem;
        line-height: 1.5;
        color: #5f6368;
        margin: 0 0 1.5rem 0;
      }
      .gtm-consent-buttons {
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        margin-bottom: 1rem;
      }
      .gtm-consent-button {
        padding: 0.75rem 1.5rem;
        border-radius: 4px;
        border: none;
        font-size: 1rem;
        cursor: pointer;
        transition: opacity 0.2s;
        font-weight: 500;
        text-align: center;
        min-width: 120px;
      }
      .gtm-consent-button:hover {
        opacity: 0.8;
      }
      .gtm-consent-button-primary {
        background: ${config.config?.appearance?.primaryColor || '#1a73e8'};
        color: ${config.config?.appearance?.primaryTextColor || '#ffffff'};
      }
      .gtm-consent-button-secondary {
        background: ${config.config?.appearance?.secondaryColor || '#f1f3f4'};
        color: ${config.config?.appearance?.secondaryTextColor || '#5f6368'};
      }
      .gtm-consent-details {
        display: none;
        margin-top: 1.5rem;
        border-top: 1px solid #e8eaed;
        padding-top: 1.5rem;
      }
      .gtm-consent-details.show {
        display: block;
      }
      .gtm-consent-category {
        margin-bottom: 1rem;
        padding: 0.5rem;
        border-radius: 4px;
        background: #f8f9fa;
      }
      .gtm-consent-category-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.5rem;
      }
      .gtm-consent-category-title {
        font-weight: 500;
        color: #202124;
      }
      .gtm-consent-category-desc {
        font-size: 0.875rem;
        color: #5f6368;
        line-height: 1.4;
      }
      .gtm-consent-toggle {
        position: relative;
        display: inline-block;
        width: 48px;
        height: 24px;
      }
      .gtm-consent-toggle input {
        opacity: 0;
        width: 0;
        height: 0;
      }
      .gtm-consent-toggle-slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #ccc;
        transition: .4s;
        border-radius: 24px;
      }
      .gtm-consent-toggle-slider:before {
        position: absolute;
        content: "";
        height: 16px;
        width: 16px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
      }
      .gtm-consent-toggle input:checked + .gtm-consent-toggle-slider {
        background-color: ${config.config?.appearance?.primaryColor || '#1a73e8'};
      }
      .gtm-consent-toggle input:checked + .gtm-consent-toggle-slider:before {
        transform: translateX(24px);
      }
      .gtm-consent-toggle input:disabled + .gtm-consent-toggle-slider {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .gtm-consent-privacy-link {
        display: inline-block;
        margin-top: 1rem;
        color: ${config.config?.appearance?.primaryColor || '#1a73e8'};
        text-decoration: none;
        font-size: 0.875rem;
      }
      .gtm-consent-privacy-link:hover {
        text-decoration: underline;
      }
      .gtm-consent-settings-button {
        position: fixed;
        bottom: 20px;
        left: 20px;
        background: ${config.config?.appearance?.primaryColor || '#1a73e8'};
        color: white;
        border: none;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        cursor: pointer;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
        z-index: 999998;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: opacity 0.2s;
      }
      .gtm-consent-settings-button:hover {
        opacity: 0.8;
      }
      .gtm-consent-settings-icon {
        width: 24px;
        height: 24px;
        fill: currentColor;
      }
      @media (max-width: 640px) {
        .gtm-consent-container {
          width: 100%;
          max-width: 100%;
          margin: 0;
          border-radius: 0;
          max-height: 100vh;
          padding: 1.5rem;
        }
        .gtm-consent-buttons {
          flex-direction: column;
        }
        .gtm-consent-button {
          width: 100%;
        }
      }
    `;
    document.head.appendChild(styles);
    
    // Create banner HTML
    function createBanner() {
      var banner = document.createElement('div');
      banner.id = 'gtm-consent-banner';
      
      var container = document.createElement('div');
      container.className = 'gtm-consent-container';
      
      // Logos
      if (config.config?.logos?.website || config.config?.logos?.company) {
        var logosDiv = document.createElement('div');
        logosDiv.className = 'gtm-consent-logos';
        
        if (config.config.logos.website) {
          var websiteLogo = document.createElement('img');
          websiteLogo.className = 'gtm-consent-logo';
          websiteLogo.src = config.config.logos.website;
          websiteLogo.alt = 'Website Logo';
          logosDiv.appendChild(websiteLogo);
        }
        
        if (config.config.logos.company) {
          var companyLogo = document.createElement('img');
          companyLogo.className = 'gtm-consent-logo';
          companyLogo.src = config.config.logos.company;
          companyLogo.alt = 'Company Logo';
          logosDiv.appendChild(companyLogo);
        }
        
        container.appendChild(logosDiv);
      }
      
      // Title and description
      var title = document.createElement('h2');
      title.className = 'gtm-consent-title';
      title.textContent = t.title;
      container.appendChild(title);
      
      var description = document.createElement('p');
      description.className = 'gtm-consent-description';
      description.textContent = t.description;
      container.appendChild(description);
      
      // Buttons
      var buttonsDiv = document.createElement('div');
      buttonsDiv.className = 'gtm-consent-buttons';
      
      var acceptAllBtn = document.createElement('button');
      acceptAllBtn.className = 'gtm-consent-button gtm-consent-button-primary';
      acceptAllBtn.textContent = t.acceptAll;
      acceptAllBtn.onclick = function() {
        updateAllConsent('granted');
        hideBanner();
      };
      
      var detailsBtn = document.createElement('button');
      detailsBtn.className = 'gtm-consent-button gtm-consent-button-secondary';
      detailsBtn.textContent = t.details;
      detailsBtn.onclick = function() {
        var details = document.getElementById('consent-details');
        if (details) {
          details.classList.toggle('show');
        }
      };
      
      var rejectAllBtn = document.createElement('button');
      rejectAllBtn.className = 'gtm-consent-button gtm-consent-button-secondary';
      rejectAllBtn.textContent = t.rejectAll;
      rejectAllBtn.onclick = function() {
        updateAllConsent('denied');
        hideBanner();
      };
      
      buttonsDiv.appendChild(acceptAllBtn);
      buttonsDiv.appendChild(detailsBtn);
      buttonsDiv.appendChild(rejectAllBtn);
      container.appendChild(buttonsDiv);
      
      // Details section
      var detailsDiv = document.createElement('div');
      detailsDiv.className = 'gtm-consent-details';
      detailsDiv.id = 'consent-details';
      
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
        var categoryDiv = document.createElement('div');
        categoryDiv.className = 'gtm-consent-category';
        
        var headerDiv = document.createElement('div');
        headerDiv.className = 'gtm-consent-category-header';
        
        var titleDiv = document.createElement('div');
        titleDiv.className = 'gtm-consent-category-title';
        titleDiv.textContent = category.title;
        headerDiv.appendChild(titleDiv);
        
        var toggle = document.createElement('label');
        toggle.className = 'gtm-consent-toggle';
        
        var input = document.createElement('input');
        input.type = 'checkbox';
        input.id = 'consent-' + category.name;
        input.checked = category.required;
        input.disabled = category.required;
        
        var slider = document.createElement('span');
        slider.className = 'gtm-consent-toggle-slider';
        
        toggle.appendChild(input);
        toggle.appendChild(slider);
        headerDiv.appendChild(toggle);
        
        categoryDiv.appendChild(headerDiv);
        
        var descDiv = document.createElement('div');
        descDiv.className = 'gtm-consent-category-desc';
        descDiv.textContent = category.desc;
        categoryDiv.appendChild(descDiv);
        
        detailsDiv.appendChild(categoryDiv);
      });
      
      // Save preferences button
      var saveBtn = document.createElement('button');
      saveBtn.className = 'gtm-consent-button gtm-consent-button-primary';
      saveBtn.textContent = t.savePreferences;
      saveBtn.style.marginTop = '1rem';
      saveBtn.onclick = function() {
        savePreferences();
        hideBanner();
      };
      detailsDiv.appendChild(saveBtn);
      
      container.appendChild(detailsDiv);
      
      // Privacy policy link
      var privacyUrls = config.config?.language?.privacyUrls || {};
      var privacyUrl = privacyUrls[currentLang] || privacyUrls.en;
      if (privacyUrl) {
        var privacyLink = document.createElement('a');
        privacyLink.className = 'gtm-consent-privacy-link';
        privacyLink.textContent = t.privacyPolicy;
        privacyLink.href = privacyUrl;
        privacyLink.target = '_blank';
        container.appendChild(privacyLink);
      }
      
      banner.appendChild(container);
      return banner;
    }
    
    // Create settings button
    function createSettingsButton() {
      var button = document.createElement('button');
      button.className = 'gtm-consent-settings-button';
      button.innerHTML = '<svg class="gtm-consent-settings-icon" viewBox="0 0 24 24"><path d="M12 15.5A3.5 3.5 0 0 1 8.5 12A3.5 3.5 0 0 1 12 8.5a3.5 3.5 0 0 1 3.5 3.5a3.5 3.5 0 0 1-3.5 3.5m7.43-2.53c.04-.32.07-.64.07-.97c0-.33-.03-.66-.07-1l2.11-1.63c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.31-.61-.22l-2.49 1c-.52-.39-1.06-.73-1.69-.98l-.37-2.65A.506.506 0 0 0 14 2h-4c-.25 0-.46.18-.5.42l-.37 2.65c-.63.25-1.17.59-1.69.98l-2.49-1c-.22-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64L4.57 11c-.04.34-.07.67-.07 1c0 .33.03.65.07.97l-2.11 1.66c-.19.15-.25.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1.01c.52.4 1.06.74 1.69.99l.37 2.65c.04.24.25.42.5.42h4c.25 0 .46-.18.5-.42l.37-2.65c.63-.26 1.17-.59 1.69-.99l2.49 1.01c.22.08.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.66Z"/></svg>';
      button.setAttribute('aria-label', t.settings);
      button.onclick = function() {
        showBanner();
      };
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
      
      // Call GTM's update function
      if (config.updateConsent) {
        config.updateConsent(consentUpdate);
      }
      
      // Also push to dataLayer for tracking
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'consent_update',
        'consent_update': consentUpdate
      });
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
      
      // Call GTM's update function
      if (config.updateConsent) {
        config.updateConsent(consentUpdate);
      }
      
      // Also push to dataLayer for tracking
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'event': 'consent_update',
        'consent_update': consentUpdate
      });
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
    
    // Initialize
    function init() {
      // Always add settings button
      document.body.appendChild(createSettingsButton());
      
      // Show banner if no existing consent
      if (!config.hasExistingConsent) {
        showBanner();
      }
    }
    
    // Wait for DOM ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }
  }
})();