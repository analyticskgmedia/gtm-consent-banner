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
    "categories": [
    "MARKETING",
    "PERSONALIZATION",
    "UTILITY"
  ],
  "brand": {
    "id": "kg_media",
    "displayName": "KG Media",
    "thumbnail": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
  },
  "description": "A complete GDPR-compliant consent banner with Google Consent Mode v2 integration. Features two-step consent flow, multi-language support, and full customization options.",
  "containerContexts": [
    "WEB"
  ]
}

___TEMPLATE_PARAMETERS___

[
  {
    "type": "GROUP",
    "name": "generalSettings",
    "displayName": "General Settings",
    "groupStyle": "ZIPPY_OPEN",
    "subParams": [
      {
        "type": "TEXT",
        "name": "bannerId",
        "displayName": "Banner ID",
        "simpleValueType": true,
        "defaultValue": "kg-consent-banner",
        "help": "Unique ID for the consent banner instance"
      },
      {
        "type": "SELECT",
        "name": "defaultLanguage",
        "displayName": "Default Language",
        "macrosInSelect": true,
        "selectItems": [
          {"value": "en", "displayValue": "English"},
          {"value": "de", "displayValue": "German"},
          {"value": "fr", "displayValue": "French"},
          {"value": "es", "displayValue": "Spanish"},
          {"value": "it", "displayValue": "Italian"},
          {"value": "nl", "displayValue": "Dutch"},
          {"value": "pl", "displayValue": "Polish"},
          {"value": "pt", "displayValue": "Portuguese"},
          {"value": "hr", "displayValue": "Croatian"},
          {"value": "cs", "displayValue": "Czech"}
        ],
        "simpleValueType": true,
        "defaultValue": "en"
      },
      {
        "type": "CHECKBOX",
        "name": "autoDetectLanguage",
        "checkboxText": "Auto-detect language from URL",
        "simpleValueType": true,
        "defaultValue": true,
        "help": "Automatically detect language from URL path (e.g., /en/, /de/)"
      }
    ]
  },
  {
    "type": "GROUP",
    "name": "consentSettings",
    "displayName": "Consent Mode Settings",
    "groupStyle": "ZIPPY_OPEN",
    "subParams": [
      {
        "type": "CHECKBOX",
        "name": "adsDataRedaction",
        "checkboxText": "Enable ads_data_redaction",
        "simpleValueType": true,
        "defaultValue": true,
        "help": "Redact ads data when ad_storage is denied"
      },
      {
        "type": "CHECKBOX",
        "name": "urlPassthrough",
        "checkboxText": "Enable url_passthrough",
        "simpleValueType": true,
        "defaultValue": true,
        "help": "Pass ad click information through URL parameters"
      },
      {
        "type": "TEXT",
        "name": "waitForUpdate",
        "displayName": "Wait for update (milliseconds)",
        "simpleValueType": true,
        "defaultValue": "2000",
        "valueValidators": [
          {
            "type": "NON_EMPTY"
          },
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
    "displayName": "Appearance",
    "groupStyle": "ZIPPY_OPEN",
    "subParams": [
      {
        "type": "TEXT",
        "name": "primaryColor",
        "displayName": "Primary Button Color",
        "simpleValueType": true,
        "defaultValue": "#2563eb",
        "help": "Color for the 'Accept All' button"
      },
      {
        "type": "TEXT",
        "name": "primaryTextColor",
        "displayName": "Primary Button Text Color",
        "simpleValueType": true,
        "defaultValue": "#ffffff"
      },
      {
        "type": "TEXT",
        "name": "secondaryColor",
        "displayName": "Secondary Button Color",
        "simpleValueType": true,
        "defaultValue": "#f3f4f6",
        "help": "Color for 'Details' and 'Reject All' buttons"
      },
      {
        "type": "TEXT",
        "name": "secondaryTextColor",
        "displayName": "Secondary Button Text Color",
        "simpleValueType": true,
        "defaultValue": "#374151"
      },
      {
        "type": "TEXT",
        "name": "backgroundColor",
        "displayName": "Banner Background Color",
        "simpleValueType": true,
        "defaultValue": "#ffffff"
      },
      {
        "type": "TEXT",
        "name": "textColor",
        "displayName": "Text Color",
        "simpleValueType": true,
        "defaultValue": "#111827"
      }
    ]
  },
  {
    "type": "GROUP",
    "name": "logos",
    "displayName": "Logos",
    "groupStyle": "ZIPPY_CLOSED",
    "subParams": [
      {
        "type": "TEXT",
        "name": "websiteLogo",
        "displayName": "Website Logo URL",
        "simpleValueType": true,
        "help": "URL to your website logo (optional)"
      },
      {
        "type": "TEXT",
        "name": "companyLogo",
        "displayName": "Company Logo URL",
        "simpleValueType": true,
        "defaultValue": "https://kg-media.eu/banner/kg-logo.svg",
        "help": "URL to your company logo (optional)"
      }
    ]
  },
  {
    "type": "GROUP",
    "name": "privacyLinks",
    "displayName": "Privacy Policy Links",
    "groupStyle": "ZIPPY_CLOSED",
    "subParams": [
      {
        "type": "SIMPLE_TABLE",
        "name": "privacyPolicyUrls",
        "displayName": "Privacy Policy URLs by Language",
        "simpleTableColumns": [
          {
            "defaultValue": "en",
            "displayName": "Language Code",
            "name": "language",
            "type": "SELECT",
            "selectItems": [
              {"value": "en", "displayValue": "English"},
              {"value": "de", "displayValue": "German"},
              {"value": "fr", "displayValue": "French"},
              {"value": "es", "displayValue": "Spanish"},
              {"value": "it", "displayValue": "Italian"},
              {"value": "nl", "displayValue": "Dutch"},
              {"value": "pl", "displayValue": "Polish"},
              {"value": "pt", "displayValue": "Portuguese"},
              {"value": "hr", "displayValue": "Croatian"},
              {"value": "cs", "displayValue": "Czech"}
            ]
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
    "name": "floatingButton",
    "displayName": "Floating Button Settings",
    "groupStyle": "ZIPPY_CLOSED",
    "subParams": [
      {
        "type": "CHECKBOX",
        "name": "showFloatingButton",
        "checkboxText": "Show floating settings button",
        "simpleValueType": true,
        "defaultValue": true,
        "help": "Display a floating button for users to change cookie preferences after closing the banner"
      },
      {
        "type": "SELECT",
        "name": "floatingButtonPosition",
        "displayName": "Button Position",
        "macrosInSelect": false,
        "selectItems": [
          {"value": "bottom-left", "displayValue": "Bottom Left"},
          {"value": "bottom-right", "displayValue": "Bottom Right"},
          {"value": "top-left", "displayValue": "Top Left"},
          {"value": "top-right", "displayValue": "Top Right"}
        ],
        "simpleValueType": true,
        "defaultValue": "bottom-left",
        "enablingConditions": [
          {
            "paramName": "showFloatingButton",
            "paramValue": true,
            "type": "EQUALS"
          }
        ]
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
        "type": "TEXT",
        "name": "cookieName",
        "displayName": "Consent Cookie Name",
        "simpleValueType": true,
        "defaultValue": "kg_consent_preferences",
        "help": "Name of the cookie storing consent preferences"
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
      },
      {
        "type": "TEXT",
        "name": "scriptUrl",
        "displayName": "External Script URL",
        "simpleValueType": true,
        "defaultValue": "https://kg-media.eu/banner/banner-v1.js",
        "help": "URL to the banner JavaScript file"
      }
    ]
  }
]

___SANDBOXED_JS_FOR_WEB_TEMPLATE___

// Import required APIs
const injectScript = require('injectScript');
const setInWindow = require('setInWindow');
const callInWindow = require('callInWindow');
const makeNumber = require('makeNumber');
const makeString = require('makeString');
const log = require('logToConsole');
const queryPermission = require('queryPermission');
const createQueue = require('createQueue');
const setDefaultConsentState = require('setDefaultConsentState');
const updateConsentState = require('updateConsentState');
const getCookieValues = require('getCookieValues');
const JSON = require('JSON');

// Get template parameters
const bannerId = data.bannerId;
const defaultLanguage = data.defaultLanguage;
const autoDetectLanguage = data.autoDetectLanguage;
const adsDataRedaction = data.adsDataRedaction;
const urlPassthrough = data.urlPassthrough;
const waitForUpdate = makeNumber(data.waitForUpdate);
const cookieName = data.cookieName;
const cookieExpiry = makeNumber(data.cookieExpiry);
const scriptUrl = data.scriptUrl;
const showFloatingButton = data.showFloatingButton;
const floatingButtonPosition = data.floatingButtonPosition;

// Appearance settings
const appearance = {
  primaryColor: data.primaryColor,
  primaryTextColor: data.primaryTextColor,
  secondaryColor: data.secondaryColor,
  secondaryTextColor: data.secondaryTextColor,
  backgroundColor: data.backgroundColor,
  textColor: data.textColor
};

// Logo settings
const logos = {
  website: data.websiteLogo,
  company: data.companyLogo
};

// Privacy policy URLs
const privacyPolicyUrls = {};
if (data.privacyPolicyUrls) {
  data.privacyPolicyUrls.forEach(function(item) {
    privacyPolicyUrls[item.language] = item.url;
  });
}

// Create dataLayer push queue
const dataLayerPush = createQueue('dataLayer');

// Helper function to get consent state from cookie
function getConsentFromCookie() {
  const cookieValue = getCookieValues(cookieName);
  if (cookieValue && cookieValue.length > 0) {
    // Parse JSON safely without try/catch
    const parsed = JSON.parse(cookieValue[0]);
    if (parsed && typeof parsed === 'object') {
      return parsed;
    }
  }
  return null;
}

// Set default consent state
function setDefaultConsent() {
  const savedConsent = getConsentFromCookie();
  
  const defaultSettings = {
    'ad_storage': savedConsent ? savedConsent.ad_storage : 'denied',
    'ad_user_data': savedConsent ? savedConsent.ad_user_data : 'denied',
    'ad_personalization': savedConsent ? savedConsent.ad_personalization : 'denied',
    'analytics_storage': savedConsent ? savedConsent.analytics_storage : 'denied',
    'functionality_storage': savedConsent ? savedConsent.functionality_storage : 'denied',
    'personalization_storage': savedConsent ? savedConsent.personalization_storage : 'denied',
    'security_storage': 'granted',
    'wait_for_update': waitForUpdate
  };
  
  // Set the main consent defaults
  setDefaultConsentState(defaultSettings);
  
  // Set ads_data_redaction in a separate gtag call
  if (adsDataRedaction) {
    callInWindow('gtag', 'set', 'ads_data_redaction', true);
  }
  
  // Set url_passthrough in a separate gtag call
  if (urlPassthrough) {
    callInWindow('gtag', 'set', 'url_passthrough', true);
  }
  
  // Push to dataLayer for debugging (only consent types)
  const consentSettingsForDataLayer = {
    'ad_storage': defaultSettings.ad_storage,
    'ad_user_data': defaultSettings.ad_user_data,
    'ad_personalization': defaultSettings.ad_personalization,
    'analytics_storage': defaultSettings.analytics_storage,
    'functionality_storage': defaultSettings.functionality_storage,
    'personalization_storage': defaultSettings.personalization_storage,
    'security_storage': defaultSettings.security_storage
  };
  
  dataLayerPush({
    'event': 'consent_default',
    'consent_settings': consentSettingsForDataLayer
  });
  
  // If we have saved consent, also fire update event
  if (savedConsent) {
    updateConsentState({
      'ad_storage': savedConsent.ad_storage,
      'ad_user_data': savedConsent.ad_user_data,
      'ad_personalization': savedConsent.ad_personalization,
      'analytics_storage': savedConsent.analytics_storage,
      'functionality_storage': savedConsent.functionality_storage,
      'personalization_storage': savedConsent.personalization_storage,
      'security_storage': 'granted'
    });
    
    dataLayerPush({
      'event': 'consent_update',
      'consent_settings': savedConsent
    });
  }
}

// Initialize consent banner
function initConsentBanner() {
  // Set configuration
  const config = {
    bannerId: bannerId,
    defaultLanguage: defaultLanguage,
    autoDetectLanguage: autoDetectLanguage,
    cookieName: cookieName,
    cookieExpiry: cookieExpiry,
    appearance: appearance,
    logos: logos,
    privacyPolicyUrls: privacyPolicyUrls,
    showFloatingButton: showFloatingButton,
    floatingButtonPosition: floatingButtonPosition,
    onConsentUpdate: function(consent) {
      // Update consent state
      updateConsentState({
        'ad_storage': consent.ad_storage,
        'ad_user_data': consent.ad_user_data,
        'ad_personalization': consent.ad_personalization,
        'analytics_storage': consent.analytics_storage,
        'functionality_storage': consent.functionality_storage,
        'personalization_storage': consent.personalization_storage,
        'security_storage': 'granted'
      });
      
      // Push to dataLayer
      dataLayerPush({
        'event': 'consent_update',
        'consent_settings': consent
      });
    }
  };
  
  // Set configuration in window
  setInWindow('kgConsentConfig', config, true);
  
  // Initialize the banner
  callInWindow('initKGConsentBanner');
}

// Set default consent immediately
setDefaultConsent();

// Load external script
if (queryPermission('inject_script', scriptUrl)) {
  injectScript(scriptUrl, function() {
    log('Consent banner script loaded successfully');
    initConsentBanner();
  }, function() {
    log('Failed to load consent banner script');
    data.gtmOnFailure();
  });
} else {
  log('Permission denied for script injection');
  data.gtmOnFailure();
}

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
                "string": "https://kg-media.eu/banner/*"
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
                    "string": "kgConsentConfig"
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
                    "string": "gtag"
                  },
                  {
                    "type": 8,
                    "boolean": true
                  },
                  {
                    "type": 8,
                    "boolean": false
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
                    "string": "initKGConsentBanner"
                  },
                  {
                    "type": 8,
                    "boolean": true
                  },
                  {
                    "type": 8,
                    "boolean": false
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
        "publicId": "access_consent",
        "versionId": "1"
      },
      "param": [
        {
          "key": "consentTypes",
          "value": {
            "type": 2,
            "listItem": [
              {
                "type": 3,
                "mapKey": [
                  {
                    "type": 1,
                    "string": "consentType"
                  },
                  {
                    "type": 1,
                    "string": "read"
                  },
                  {
                    "type": 1,
                    "string": "write"
                  }
                ],
                "mapValue": [
                  {
                    "type": 1,
                    "string": "ad_storage"
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
                    "string": "consentType"
                  },
                  {
                    "type": 1,
                    "string": "read"
                  },
                  {
                    "type": 1,
                    "string": "write"
                  }
                ],
                "mapValue": [
                  {
                    "type": 1,
                    "string": "ad_user_data"
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
                    "string": "consentType"
                  },
                  {
                    "type": 1,
                    "string": "read"
                  },
                  {
                    "type": 1,
                    "string": "write"
                  }
                ],
                "mapValue": [
                  {
                    "type": 1,
                    "string": "ad_personalization"
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
                    "string": "consentType"
                  },
                  {
                    "type": 1,
                    "string": "read"
                  },
                  {
                    "type": 1,
                    "string": "write"
                  }
                ],
                "mapValue": [
                  {
                    "type": 1,
                    "string": "analytics_storage"
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
                    "string": "consentType"
                  },
                  {
                    "type": 1,
                    "string": "read"
                  },
                  {
                    "type": 1,
                    "string": "write"
                  }
                ],
                "mapValue": [
                  {
                    "type": 1,
                    "string": "functionality_storage"
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
                    "string": "consentType"
                  },
                  {
                    "type": 1,
                    "string": "read"
                  },
                  {
                    "type": 1,
                    "string": "write"
                  }
                ],
                "mapValue": [
                  {
                    "type": 1,
                    "string": "personalization_storage"
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
                    "string": "consentType"
                  },
                  {
                    "type": 1,
                    "string": "read"
                  },
                  {
                    "type": 1,
                    "string": "write"
                  }
                ],
                "mapValue": [
                  {
                    "type": 1,
                    "string": "security_storage"
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
                    "string": "consentType"
                  },
                  {
                    "type": 1,
                    "string": "read"
                  },
                  {
                    "type": 1,
                    "string": "write"
                  }
                ],
                "mapValue": [
                  {
                    "type": 1,
                    "string": "ads_data_redaction"
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
                    "string": "consentType"
                  },
                  {
                    "type": 1,
                    "string": "read"
                  },
                  {
                    "type": 1,
                    "string": "write"
                  }
                ],
                "mapValue": [
                  {
                    "type": 1,
                    "string": "url_passthrough"
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
                    "string": "consentType"
                  },
                  {
                    "type": 1,
                    "string": "read"
                  },
                  {
                    "type": 1,
                    "string": "write"
                  }
                ],
                "mapValue": [
                  {
                    "type": 1,
                    "string": "wait_for_update"
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
                "string": "kg_consent_preferences"
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
  }
]

___TESTS___

scenarios: []

___NOTES___

Created on 6/5/2025

This template provides a complete GDPR-compliant consent banner with Google Consent Mode v2 integration.

Features:
- Two-step consent flow
- Multi-language support (10 European languages)
- Full customization options
- Responsive design
- Keyboard navigation
- WCAG compliance
- Lightweight implementation

For the external JavaScript file and language translations, visit:
https://github.com/analyticskgmedia/gtm-consent-banner