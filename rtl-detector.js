/**
 * RTL Language Detector
 * Automatically detects when the page language changes (e.g., via Google Translate)
 * and applies RTL (right-to-left) layout for appropriate languages
 */

(function() {
  'use strict';

  // List of RTL language codes
  // These languages are written from right to left
  const RTL_LANGUAGES = [
    'ar',    // Arabic
    'arc',   // Aramaic
    'dv',    // Divehi
    'fa',    // Persian
    'ha',    // Hausa (when written in Arabic script)
    'he',    // Hebrew
    'khw',   // Khowar
    'ks',    // Kashmiri
    'ku',    // Kurdish (Sorani)
    'ps',    // Pashto
    'ur',    // Urdu
    'yi'     // Yiddish
  ];

  /**
   * Check if a language code indicates an RTL language
   * @param {string} langCode - The language code to check (e.g., 'ar', 'en-US')
   * @returns {boolean} - True if the language is RTL
   */
  function isRTLLanguage(langCode) {
    if (!langCode) return false;
    
    // Get the base language code (e.g., 'ar' from 'ar-SA')
    const baseLang = langCode.toLowerCase().split('-')[0];
    
    // Check if the base language is in our RTL list
    return RTL_LANGUAGES.includes(baseLang);
  }

  /**
   * Apply RTL or LTR layout to the page
   * @param {boolean} isRTL - Whether to apply RTL layout
   */
  function applyDirection(isRTL) {
    const htmlElement = document.documentElement;
    const bodyElement = document.body;
    
    if (isRTL) {
      // Apply RTL layout
      htmlElement.setAttribute('dir', 'rtl');
      bodyElement.setAttribute('dir', 'rtl');
      
      // Add RTL class for additional CSS styling
      document.body.classList.add('rtl-active');
      document.body.classList.remove('ltr-active');
      
      console.log('RTL layout applied');
    } else {
      // Apply LTR layout
      htmlElement.setAttribute('dir', 'ltr');
      bodyElement.setAttribute('dir', 'ltr');
      
      // Add LTR class for additional CSS styling
      document.body.classList.add('ltr-active');
      document.body.classList.remove('rtl-active');
      
      console.log('LTR layout applied');
    }
  }

  /**
   * Detect the current page language and apply appropriate direction
   */
  function detectAndApplyLanguage() {
    // Check multiple sources for the language code
    const htmlLang = document.documentElement.lang;
    const bodyLang = document.body.lang;
    const metaLang = document.querySelector('meta[http-equiv="content-language"]')?.content;
    
    // Use the first available language code
    const currentLang = htmlLang || bodyLang || metaLang || 'en';
    
    // Check if current language is RTL
    const shouldBeRTL = isRTLLanguage(currentLang);
    
    // Apply the appropriate direction
    applyDirection(shouldBeRTL);
    
    return currentLang;
  }

  /**
   * Detect Google Translate changes by looking for common indicators
   */
  function detectGoogleTranslate() {
    // Google Translate adds specific classes and attributes
    const hasGoogleTranslateFrame = document.querySelector('.goog-te-banner-frame');
    const hasGoogleTranslateClass = document.body.classList.contains('translated-ltr') || 
                                     document.body.classList.contains('translated-rtl');
    const hasGoogleFont = document.querySelector('font[class*="translate"]');
    
    return hasGoogleTranslateFrame || hasGoogleTranslateClass || hasGoogleFont;
  }

  /**
   * Handle mutations in the DOM (for Google Translate detection)
   */
  function handleMutations(mutations) {
    for (const mutation of mutations) {
      // Check if lang attribute changed
      if (mutation.type === 'attributes' && mutation.attributeName === 'lang') {
        console.log('Language attribute changed, re-detecting...');
        detectAndApplyLanguage();
        break;
      }
      
      // Check if Google Translate modified the page
      if (mutation.type === 'childList' || mutation.type === 'attributes') {
        if (detectGoogleTranslate()) {
          console.log('Google Translate detected, checking language...');
          // Small delay to let Google Translate finish
          setTimeout(detectAndApplyLanguage, 100);
          break;
        }
      }
    }
  }

  /**
   * Initialize the RTL detector
   */
  function init() {
    console.log('RTL Language Detector initialized');
    
    // Initial detection on page load
    detectAndApplyLanguage();
    
    // Create a MutationObserver to watch for language changes
    const observer = new MutationObserver(handleMutations);
    
    // Observe changes to the html element's attributes (especially lang)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['lang', 'class'],
      subtree: false
    });
    
    // Observe changes to the body for Google Translate modifications
    observer.observe(document.body, {
      attributes: true,
      childList: true,
      subtree: true,
      attributeFilter: ['class', 'lang']
    });
    
    // Also check periodically (as a fallback for aggressive translations)
    setInterval(() => {
      if (detectGoogleTranslate()) {
        detectAndApplyLanguage();
      }
    }, 2000);
    
    console.log('Watching for language changes...');
  }

  // Wait for DOM to be ready before initializing
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // DOM is already ready
    init();
  }

  // Expose a global function to manually trigger detection
  window.detectRTL = detectAndApplyLanguage;

})();
