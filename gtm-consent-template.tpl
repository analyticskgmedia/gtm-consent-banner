___TERMS_OF_SERVICE___

By creating or modifying this file you agree to Google Tag Manager's Community
Template Gallery Developer Terms of Service available at
https://developers.google.com/tag-manager/gallery-tos (or such other URL as
Google may provide), as modified from time to time.

___INFO___

{
  "type": "TAG",
  "id": "cvt_temp_public_id",
  "version": 1,
  "securityGroups": [],
  "displayName": "Advanced Consent Mode v2 Banner",
  "brand": {
    "id": "brand_dummy",
    "displayName": "",
    "thumbnail": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
  },
  "description": "A comprehensive consent banner implementing Google's Advanced Consent Mode v2 with multi-language support",
  "containerContexts": [
    "WEB"
  ]
}

___TEMPLATE_PARAMETERS___

[
  {
    "type": "GROUP",
    "name": "consentDefaults",
    "displayName": "Consent Defaults",
    "groupStyle": "ZIPPY_OPEN",
    "subParams": [
      {
        "type": "CHECKBOX",
        "name": "defaultAnalytics",
        "checkboxText": "Analytics Storage (Default: Denied)",
        "simpleValueType": true,
        "defaultValue": false
      },
      {
        "type": "CHECKBOX",
        "name": "defaultAds",
        "checkboxText": "Ad Storage (Default: Denied)",
        "simpleValueType": true,
        "defaultValue": false
      },
      {
        "type": "CHECKBOX",
        "name": "defaultAdUserData",
        "checkboxText": "Ad User Data (Default: Denied)",
        "simpleValueType": true,
        "defaultValue": false
      },
      {
        "type": "CHECKBOX",
        "name": "defaultAdPersonalization",
        "checkboxText": "Ad Personalization (Default: Denied)",
        "simpleValueType": true,
        "defaultValue": false
      },
      {
        "type": "CHECKBOX",
        "name": "defaultFunctionality",
        "checkboxText": "Functionality Storage (Default: Denied)",
        "simpleValueType": true,
        "defaultValue": false
      },
      {
        "type": "CHECKBOX",
        "name": "defaultPersonalization",
        "checkboxText": "Personalization Storage (Default: Denied)",
        "simpleValueType": true,
        "defaultValue": false
      },
      {
        "type": "TEXT",
        "name": "waitForUpdate",
        "displayName": "Wait for Update (ms)",
        "simpleValueType": true,
        "defaultValue": "500",
        "valueValidators": [
          {
            "type": "POSITIVE_NUMBER"
          }
        ]
      }
    ]
  },
  {
    "type": "GROUP",
    "name": "appearance",
    "displayName": "Appearance Settings",
    "groupStyle": "ZIPPY_OPEN",
    "subParams": [
      {
        "type": "TEXT",
        "name": "primaryColor",
        "displayName": "Primary Button Color",
        "simpleValueType": true,
        "defaultValue": "#1a73e8",
        "valueHint": "Hex color code"
      },
      {
        "type": "TEXT",
        "name": "primaryTextColor",
        "displayName": "Primary Button Text Color",
        "simpleValueType": true,
        "defaultValue": "#ffffff",
        "valueHint": "Hex color code"
      },
      {
        "type": "TEXT",
        "name": "secondaryColor",
        "displayName": "Secondary Button Color",
        "simpleValueType": true,
        "defaultValue": "#f1f3f4",
        "valueHint": "Hex color code"
      },
      {
        "type": "TEXT",
        "name": "secondaryTextColor",
        "displayName": "Secondary Button Text Color",
        "simpleValueType": true,
        "defaultValue": "#5f6368",
        "valueHint": "Hex color code"
      }
    ]
  },
  {
    "type": "GROUP",
    "name": "logos",
    "displayName": "Logo Settings",
    "groupStyle": "ZIPPY_CLOSED",
    "subParams": [
      {
        "type": "TEXT",
        "name": "websiteLogo",
        "displayName": "Website Logo URL",
        "simpleValueType": true,
        "valueHint": "https://example.com/logo.png"
      },
      {
        "type": "TEXT",
        "name": "companyLogo",
        "displayName": "Banner Designer Logo URL",
        "simpleValueType": true,
        "valueHint": "https://example.com/company-logo.png"
      }
    ]
  },
  {
    "type": "GROUP",
    "name": "languages",
    "displayName": "Language Settings",
    "groupStyle": "ZIPPY_OPEN",
    "subParams": [
      {
        "type": "SELECT",
        "name": "defaultLanguage",
        "displayName": "Default Language",
        "macrosInSelect": false,
        "selectItems": [
          {"value": "en", "displayValue": "English"},
          {"value": "zh", "displayValue": "Chinese (Simplified)"},
          {"value": "es", "displayValue": "Spanish"},
          {"value": "hi", "displayValue": "Hindi"},
          {"value": "ar", "displayValue": "Arabic"},
          {"value": "pt", "displayValue": "Portuguese"},
          {"value": "ru", "displayValue": "Russian"},
          {"value": "ja", "displayValue": "Japanese"},
          {"value": "de", "displayValue": "German"},
          {"value": "fr", "displayValue": "French"},
          {"value": "hr", "displayValue": "Croatian"}
        ],
        "simpleValueType": true,
        "defaultValue": "en"
      },
      {
        "type": "SIMPLE_TABLE",
        "name": "privacyUrls",
        "displayName": "Privacy Policy URLs by Language",
        "simpleTableColumns": [
          {
            "defaultValue": "",
            "displayName": "Language Code",
            "name": "lang",
            "type": "TEXT"
          },
          {
            "defaultValue": "",
            "displayName": "Privacy Policy URL",
            "name": "url",
            "type": "TEXT"
          }
        ],
        "newRowButtonText": "Add Language"
      }
    ]
  },
  {
    "type": "GROUP",
    "name": "advanced",
    "displayName": "Advanced Settings",
    "groupStyle": "ZIPPY_CLOSED",
    "subParams": [
      {
        "type": "CHECKBOX",
        "name": "adsDataRedaction",
        "checkboxText": "Enable Ads Data Redaction",
        "simpleValueType": true,
        "defaultValue": false
      },
      {
        "type": "CHECKBOX",
        "name": "urlPassthrough",
        "checkboxText": "Enable URL Passthrough",
        "simpleValueType": true,
        "defaultValue": true
      },
      {
        "type": "TEXT",
        "name": "cookieDomain",
        "displayName": "Cookie Domain",
        "simpleValueType": true,
        "valueHint": "Leave empty for current domain"
      },
      {
        "type": "TEXT",
        "name": "cookieExpiry",
        "displayName": "Cookie Expiry (days)",
        "simpleValueType": true,
        "defaultValue": "365",
        "valueValidators": [
          {
            "type": "POSITIVE_NUMBER"
          }
        ]
      }
    ]
  }
]

___SANDBOXED_JS_FOR_WEB_TEMPLATE___

// GTM API imports
const log = require('logToConsole');
const injectScript = require('injectScript');
const setInWindow = require('setInWindow');
const callInWindow = require('callInWindow');
const createQueue = require('createQueue');
const getCookieValues = require('getCookieValues');
const setCookie = require('setCookie');
const queryPermission = require('queryPermission');
const JSON = require('JSON');
const getUrl = require('getUrl');
const makeInteger = require('makeInteger');

// Initialize dataLayer and gtag
const dataLayerPush = createQueue('dataLayer');
setInWindow('gtag', function() {
  dataLayerPush(arguments);
}, true);

// Configuration from template fields
const config = {
  defaults: {
    analytics_storage: data.defaultAnalytics ? 'granted' : 'denied',
    ad_storage: data.defaultAds ? 'granted' : 'denied',
    ad_user_data: data.defaultAdUserData ? 'granted' : 'denied',
    ad_personalization: data.defaultAdPersonalization ? 'granted' : 'denied',
    functionality_storage: data.defaultFunctionality ? 'granted' : 'denied',
    personalization_storage: data.defaultPersonalization ? 'granted' : 'denied',
    security_storage: 'granted',
    wait_for_update: makeInteger(data.waitForUpdate) || 500
  },
  appearance: {
    primaryColor: data.primaryColor || '#1a73e8',
    primaryTextColor: data.primaryTextColor || '#ffffff',
    secondaryColor: data.secondaryColor || '#f1f3f4',
    secondaryTextColor: data.secondaryTextColor || '#5f6368'
  },
  logos: {
    website: data.websiteLogo || '',
    company: data.companyLogo || ''
  },
  language: {
    default: data.defaultLanguage || 'en',
    privacyUrls: {}
  },
  advanced: {
    adsDataRedaction: data.adsDataRedaction || false,
    urlPassthrough: data.urlPassthrough || true,
    cookieDomain: data.cookieDomain || '',
    cookieExpiry: makeInteger(data.cookieExpiry) || 365
  }
};

// Build privacy URLs map
if (data.privacyUrls && data.privacyUrls.length > 0) {
  data.privacyUrls.forEach(function(item) {
    if (item.lang && item.url) {
      config.language.privacyUrls[item.lang] = item.url;
    }
  });
}

// Function to check if consent has been given
function hasConsent() {
  const consentCookie = getCookieValues('gtm_consent_mode');
  return consentCookie && consentCookie.length > 0;
}

// Function to get current language from URL
function getCurrentLanguage() {
  const pathname = getUrl('path');
  // Check if path starts with a language code like /en/, /de/, etc.
  if (pathname && pathname.length > 3) {
    const firstPart = pathname.substring(1, 3); // Get characters after first slash
    const possibleLang = firstPart.toLowerCase();
    // Check if it's a valid 2-letter language code followed by a slash
    if (pathname.charAt(0) === '/' && pathname.charAt(3) === '/') {
      // Check if it's only letters
      var isValidLang = true;
      for (var i = 0; i < possibleLang.length; i++) {
        var char = possibleLang.charAt(i);
        if (char < 'a' || char > 'z') {
          isValidLang = false;
          break;
        }
      }
      if (isValidLang && possibleLang.length === 2) {
        // Check if we support this language
        const supportedLangs = ['en', 'zh', 'es', 'hi', 'ar', 'pt', 'ru', 'ja', 'de', 'fr', 'hr'];
        if (supportedLangs.indexOf(possibleLang) !== -1) {
          return possibleLang;
        }
      }
    }
  }
  return config.language.default;
}

// Function to set default consent state
function setDefaultConsent() {
  callInWindow('gtag', 'consent', 'default', config.defaults);
  callInWindow('gtag', 'set', 'ads_data_redaction', config.advanced.adsDataRedaction);
  callInWindow('gtag', 'set', 'url_passthrough', config.advanced.urlPassthrough);
}

// Function to update consent
function updateConsent(consentSettings) {
  callInWindow('gtag', 'consent', 'update', consentSettings);
  
  // Store consent in cookie
  const cookieOptions = {
    domain: config.cookieDomain || 'auto',
    path: '/',
    'max-age': config.advanced.cookieExpiry * 24 * 60 * 60,
    secure: true,
    sameSite: 'strict'
  };
  
  if (queryPermission('set_cookies', 'gtm_consent_mode')) {
    setCookie('gtm_consent_mode', JSON.stringify(consentSettings), cookieOptions);
  }
}

// Function to initialize consent banner
function initConsentBanner() {
  // Set configuration in window
  setInWindow('gtmConsentConfig', {
    config: config,
    currentLanguage: getCurrentLanguage(),
    updateConsent: updateConsent
  }, true);
  
  // Inject the banner script
  const scriptUrl = 'https://github.com/analyticskgmedia/gtm-consent-banner/blob/ac703fe473c5e2522db4ce4ad115e0704995dc25/banner.min.js';
  
  if (queryPermission('inject_script', scriptUrl)) {
    injectScript(scriptUrl, function() {
      log('Consent banner script loaded successfully');
    }, function() {
      log('Failed to load consent banner script');
    }, scriptUrl);
  }
}

// Main execution
if (!hasConsent()) {
  // Set default consent state
  setDefaultConsent();
  
  // Initialize consent banner
  initConsentBanner();
} else {
  // Restore consent from cookie
  const savedConsentStr = getCookieValues('gtm_consent_mode')[0];
  if (savedConsentStr) {
    const savedConsent = JSON.parse(savedConsentStr);
    if (savedConsent) {
      callInWindow('gtag', 'consent', 'update', savedConsent);
    } else {
      // If parsing failed, reset consent
      setDefaultConsent();
      initConsentBanner();
    }
  } else {
    setDefaultConsent();
    initConsentBanner();
  }
}

// Always show the consent settings button
initConsentBanner();

// Call data.gtmOnSuccess when the tag is finished.
data.gtmOnSuccess();

___WEB_PERMISSIONS___

[
  {
    "instance": {
      "key": {
        "publicId": "logging",
        "versionId": "1"
      },
      "param": [
        {
          "key": "environments",
          "value": {
            "type": 1,
            "string": "debug"
          }
        }
      ]
    },
    "isRequired": true
  },
  {
    "instance": {
      "key": {
        "publicId": "access_globals",
        "versionId": "1"
      },
      "param": [
        {
          "key": "keys",
          "value": {
            "type": 2,
            "listItem": [
              {
                "type": 3,
                "mapKey": [
                  {
                    "type": 1,
                    "string": "key"
                  },
                  {
                    "type": 1,
                    "string": "read"
                  },
                  {
                    "type": 1,
                    "string": "write"
                  },
                  {
                    "type": 1,
                    "string": "execute"
                  }
                ],
                "mapValue": [
                  {
                    "type": 1,
                    "string": "gtag"
                  },
                  {
                    "type": 8,
                    "boolean": true
                  },
                  {
                    "type": 8,
                    "boolean": true
                  },
                  {
                    "type": 8,
                    "boolean": true
                  }
                ]
              },
              {
                "type": 3,
                "mapKey": [
                  {
                    "type": 1,
                    "string": "key"
                  },
                  {
                    "type": 1,
                    "string": "read"
                  },
                  {
                    "type": 1,
                    "string": "write"
                  },
                  {
                    "type": 1,
                    "string": "execute"
                  }
                ],
                "mapValue": [
                  {
                    "type": 1,
                    "string": "dataLayer"
                  },
                  {
                    "type": 8,
                    "boolean": true
                  },
                  {
                    "type": 8,
                    "boolean": true
                  },
                  {
                    "type": 8,
                    "boolean": false
                  }
                ]
              },
              {
                "type": 3,
                "mapKey": [
                  {
                    "type": 1,
                    "string": "key"
                  },
                  {
                    "type": 1,
                    "string": "read"
                  },
                  {
                    "type": 1,
                    "string": "write"
                  },
                  {
                    "type": 1,
                    "string": "execute"
                  }
                ],
                "mapValue": [
                  {
                    "type": 1,
                    "string": "gtmConsentConfig"
                  },
                  {
                    "type": 8,
                    "boolean": true
                  },
                  {
                    "type": 8,
                    "boolean": true
                  },
                  {
                    "type": 8,
                    "boolean": false
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    "clientAnnotations": {
      "isEditedByUser": true
    },
    "isRequired": true
  },
  {
    "instance": {
      "key": {
        "publicId": "inject_script",
        "versionId": "1"
      },
      "param": [
        {
          "key": "urls",
          "value": {
            "type": 2,
            "listItem": [
              {
                "type": 1,
                "string": "https://cdn.jsdelivr.net/gh/*"
              }
            ]
          }
        }
      ]
    },
    "clientAnnotations": {
      "isEditedByUser": true
    },
    "isRequired": true
  },
  {
    "instance": {
      "key": {
        "publicId": "get_cookies",
        "versionId": "1"
      },
      "param": [
        {
          "key": "cookieAccess",
          "value": {
            "type": 1,
            "string": "specific"
          }
        },
        {
          "key": "cookieNames",
          "value": {
            "type": 2,
            "listItem": [
              {
                "type": 1,
                "string": "gtm_consent_mode"
              }
            ]
          }
        }
      ]
    },
    "clientAnnotations": {
      "isEditedByUser": true
    },
    "isRequired": true
  },
  {
    "instance": {
      "key": {
        "publicId": "set_cookies",
        "versionId": "1"
      },
      "param": [
        {
          "key": "allowedCookies",
          "value": {
            "type": 2,
            "listItem": [
              {
                "type": 3,
                "mapKey": [
                  {
                    "type": 1,
                    "string": "name"
                  },
                  {
                    "type": 1,
                    "string": "domain"
                  },
                  {
                    "type": 1,
                    "string": "path"
                  },
                  {
                    "type": 1,
                    "string": "secure"
                  },
                  {
                    "type": 1,
                    "string": "session"
                  }
                ],
                "mapValue": [
                  {
                    "type": 1,
                    "string": "gtm_consent_mode"
                  },
                  {
                    "type": 1,
                    "string": "*"
                  },
                  {
                    "type": 1,
                    "string": "*"
                  },
                  {
                    "type": 1,
                    "string": "any"
                  },
                  {
                    "type": 1,
                    "string": "any"
                  }
                ]
              }
            ]
          }
        }
      ]
    },
    "clientAnnotations": {
      "isEditedByUser": true
    },
    "isRequired": true
  },
  {
    "instance": {
      "key": {
        "publicId": "get_url",
        "versionId": "1"
      },
      "param": [
        {
          "key": "urlParts",
          "value": {
            "type": 1,
            "string": "any"
          }
        },
        {
          "key": "queriesAllowed",
          "value": {
            "type": 1,
            "string": "any"
          }
        }
      ]
    },
    "clientAnnotations": {
      "isEditedByUser": true
    },
    "isRequired": true
  }
]

___TESTS___

scenarios: []

___NOTES___

Created on 06/06/2025, 00:00:00