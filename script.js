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

    card.addEventListener("click", (event) => {
      // Проверяем, что клик происходит на карточке, а не на кнопке "Закрыть"
      const currentDisplay = modalOverlay.style.display; // Сохраняем текущее значение display
      
      if (!event.target.classList.contains("close-modal")) {
          // Скрываем все другие модальные окна
          document.querySelectorAll(".modal-overlay").forEach(modal => {
              modal.style.display = "none";
          });
  
          // Проверяем значение и, если оно не "flex", то устанавливаем "flex"
          if (currentDisplay !== "flex") {
              modalOverlay.style.display = "flex";
          }
      }
  });

  // Добавляем обработчик события на кнопку закрытия
closeModalBtn.addEventListener("click", () => {
  modalOverlay.style.display = "none"; // Закрываем текущее модальное окно
});

});