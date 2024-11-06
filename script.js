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
    const modalOverlay = card.querySelector(".modal-overlay");
    const closeModalBtn = card.querySelector(".close-modal");

    // Проверка на существование модального окна и кнопки закрытия
    if (!modalOverlay || !closeModalBtn) {
        console.log("Модальное окно или кнопка закрытия не найдены в:", card);
        return;
    }

    // Открытие модального окна при клике на карточку
    card.addEventListener("click", (event) => {
        // Проверяем, что клик происходит на карточке, а не на кнопке "Закрыть"
        if (!event.target.classList.contains("close-modal")) {
            // Скрыть все другие модальные окна
            document.querySelectorAll(".modal-overlay").forEach(modal => {
                modal.style.display = "none";
            });
            // Открыть текущее модальное окно
            modalOverlay.style.display = "flex";
        }
    });

    // Закрытие модального окна при клике на кнопку "Закрыть" или на оверлей
    closeModalBtn.addEventListener("click", (event) => {
        event.stopPropagation(); // Останавливаем всплытие события
        modalOverlay.style.display = "none";
    });

});