function toggleLanguage() {
    const htmlTag = document.documentElement;
    const currentLanguage = htmlTag.getAttribute('lang');
  
    const newLanguage = currentLanguage === 'en' ? 'ru' : 'en';
    htmlTag.setAttribute('lang', newLanguage);
  
    changeLanguage(newLanguage);
  }
  
  function changeLanguage(language) {
    const elements = document.querySelectorAll('[data-en][data-ru]');
  
    elements.forEach(element => {
      element.textContent = element.getAttribute(`data-${language}`);
    });
  }
  