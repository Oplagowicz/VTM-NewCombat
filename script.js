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
  
  document.querySelectorAll(".card-item").forEach((card) => {
    const popover = card.querySelector(".popover-content");
    const closeBtn = card.querySelector(".close-popover");

    // Проверка на существование поповера и кнопки
    if (!popover || !closeBtn) {
        console.log("Popover или кнопка закрытия не найдены в:", card);
        return;
    }

    // Открытие поповера при клике на карточку
    card.addEventListener("click", (event) => {
        // Проверяем, что клик происходит на карточке, а не на кнопке "Закрыть"
        if (!event.target.classList.contains("close-popover")) {
            popover.style.display = "block";
            console.log("Поповер открыт для:", card);
        }
    });

    // Закрытие поповера при клике на кнопку закрытия
    closeBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // Останавливаем всплытие события
        popover.style.display = "none";
        console.log("Поповер закрыт для:", card);
    });
});