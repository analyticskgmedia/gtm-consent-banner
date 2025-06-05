/**
 * GTM Consent Banner - Production Version
 */

(function() {
  'use strict';
  
  console.log('GTM Consent Banner initializing...');
  
  // Wait for config to be available
  var configCheckCount = 0;
  var configInterval = setInterval(function() {
    configCheckCount++;
    
    if (window.gtmConsentConfig) {
      console.log('Config found, initializing banner');
      clearInterval(configInterval);
      initializeBanner();
    } else if (configCheckCount > 50) { // 5 seconds timeout
      console.error('GTM config not found after 5 seconds');
      clearInterval(configInterval);
    }
  }, 100);
  
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
      }
    };
    
    // Get configuration from GTM
    var config = window.gtmConsentConfig || {};
    var currentLang = config.currentLanguage || 'en';
    var t = translations[currentLang] || translations.en;
    
    console.log('Using language:', currentLang);
    
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
        border-radius: 12px;
        box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        max-width: 600px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        padding: 2rem;
        margin: 1rem;
      }
      .gtm-consent-title {
        font-size: 1.75rem;
        font-weight: 700;
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
        gap: 0.75rem;
        flex-wrap: wrap;
        margin-bottom: 1rem;
      }
      .gtm-consent-button {
        padding: 0.75rem 1.5rem;
        border-radius: 6px;
        border: none;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
        min-width: 120px;
        flex: 1;
      }
      .gtm-consent-button:hover {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      }
      .gtm-consent-button:active {
        transform: translateY(0);
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
        padding: 1rem;
        border-radius: 8px;
        background: #f8f9fa;
      }
      .gtm-consent-category-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 0.5rem;
      }
      .gtm-consent-category-title {
        font-weight: 600;
        color: #202124;
        font-size: 1.1rem;
      }
      .gtm-consent-category-desc {
        font-size: 0.9rem;
        color: #5f6368;
        line-height: 1.4;
      }
      .gtm-consent-toggle {
        position: relative;
        display: inline-block;
        width: 52px;
        height: 28px;
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
        background-color: #dadce0;
        transition: .3s;
        border-radius: 34px;
      }
      .gtm-consent-toggle-slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: .3s;
        border-radius: 50%;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
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
        font-size: 0.9rem;
        font-weight: 500;
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
        width: 56px;
        height: 56px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        z-index: 999998;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
      }
      .gtm-consent-settings-button:hover {
        transform: scale(1.1);
        box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
      }
      .gtm-consent-settings-icon {
        width: 28px;
        height: 28px;
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
        console.log('Accept all clicked');
        updateAllConsent('granted');
        hideBanner();
      };
      
      var detailsBtn = document.createElement('button');
      detailsBtn.className = 'gtm-consent-button gtm-consent-button-secondary';
      detailsBtn.textContent = t.details;
      detailsBtn.onclick = function() {
        console.log('Details clicked');
        var details = document.getElementById('consent-details');
        if (details) {
          details.classList.toggle('show');
        }
      };
      
      var rejectAllBtn = document.createElement('button');
      rejectAllBtn.className = 'gtm-consent-button gtm-consent-button-secondary';
      rejectAllBtn.textContent = t.rejectAll;
      rejectAllBtn.onclick = function() {
        console.log('Reject all clicked');
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
      saveBtn.style.width = '100%';
      saveBtn.onclick = function() {
        console.log('Save preferences clicked');
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
      
      console.log('Updating all consent to:', status);
      
      // Call GTM's update function
      if (config.updateConsent && typeof config.updateConsent === 'function') {
        console.log('Calling GTM updateConsent');
        config.updateConsent(consentUpdate);
      } else {
        console.error('GTM updateConsent function not found!');
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
      
      console.log('Saving preferences:', consentUpdate);
      
      // Call GTM's update function
      if (config.updateConsent && typeof config.updateConsent === 'function') {
        console.log('Calling GTM updateConsent');
        config.updateConsent(consentUpdate);
      } else {
        console.error('GTM updateConsent function not found!');
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
      console.log('Initializing banner UI');
      
      // Always add settings button
      document.body.appendChild(createSettingsButton());
      
      // Show banner if no existing consent
      if (!config.hasExistingConsent) {
        console.log('No existing consent, showing banner');
        showBanner();
      } else {
        console.log('Existing consent found, not showing banner');
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