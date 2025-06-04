/**
 * GTM Consent Banner - Debug Version
 */

(function() {
  'use strict';
  
  console.log('Banner script loaded!');
  
  // Check if config exists
  if (!window.gtmConsentConfig) {
    console.error('GTM Config not found! Waiting...');
    
    // Wait for config
    var attempts = 0;
    var checkInterval = setInterval(function() {
      attempts++;
      console.log('Checking for config, attempt:', attempts);
      
      if (window.gtmConsentConfig) {
        console.log('Config found!', window.gtmConsentConfig);
        clearInterval(checkInterval);
        initBanner();
      } else if (attempts > 20) {
        console.error('Config never loaded after 20 attempts');
        clearInterval(checkInterval);
      }
    }, 250);
  } else {
    console.log('Config already exists:', window.gtmConsentConfig);
    initBanner();
  }
  
  function initBanner() {
    console.log('Initializing banner...');
    
    // Create a simple test banner first
    var testBanner = document.createElement('div');
    testBanner.id = 'gtm-consent-banner';
    testBanner.style.cssText = 'position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0,0,0,0.8);z-index:999999;display:flex;align-items:center;justify-content:center;';
    
    var container = document.createElement('div');
    container.style.cssText = 'background:white;padding:40px;border-radius:8px;text-align:center;max-width:500px;';
    
    container.innerHTML = '<h2>Cookie Consent Test</h2><p>This is a test banner. Can you see this?</p><button onclick="alert(\'Button clicked!\');" style="background:#1a73e8;color:white;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;margin:5px;">Test Button</button>';
    
    testBanner.appendChild(container);
    
    // Add to body
    if (document.body) {
      document.body.appendChild(testBanner);
      console.log('Banner added to body!');
    } else {
      console.log('Body not ready, waiting for DOMContentLoaded');
      document.addEventListener('DOMContentLoaded', function() {
        document.body.appendChild(testBanner);
        console.log('Banner added to body after DOMContentLoaded!');
      });
    }
    
    // Add click handler to show config
    container.innerHTML += '<br><button onclick="console.log(\'Config:\', window.gtmConsentConfig);" style="background:#ccc;color:black;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;margin:5px;">Log Config</button>';
    
    // Test if we can call the update function
    if (window.gtmConsentConfig && window.gtmConsentConfig.updateConsent) {
      container.innerHTML += '<br><button onclick="window.gtmConsentConfig.updateConsent({analytics_storage:\'granted\'});alert(\'Consent updated!\');" style="background:green;color:white;border:none;padding:10px 20px;border-radius:4px;cursor:pointer;margin:5px;">Test Update Consent</button>';
    }
  }
  
  // Also log to console every second to see if script is running
  var logCount = 0;
  var logInterval = setInterval(function() {
    logCount++;
    console.log('Banner script is running, count:', logCount);
    if (logCount > 5) clearInterval(logInterval);
  }, 1000);
  
})();