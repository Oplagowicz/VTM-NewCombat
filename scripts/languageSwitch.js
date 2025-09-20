document.addEventListener("DOMContentLoaded", () => {
  const savedLanguage = localStorage.getItem("currentLanguage") || "ru";
  document.documentElement.setAttribute("lang", savedLanguage);
  changeLanguage(savedLanguage);
});

function toggleLanguage() {
  const htmlTag = document.documentElement;
  const currentLanguage = htmlTag.getAttribute("lang");
  
  const newLanguage = currentLanguage === "en" ? "ru" : "en";
  htmlTag.setAttribute("lang", newLanguage);

  localStorage.setItem("currentLanguage", newLanguage);

  changeLanguage(newLanguage);
}

function changeLanguage(language) {
  const elements = document.querySelectorAll("[data-en][data-ru]");
  
  elements.forEach(element => {
    element.innerHTML = element.getAttribute(`data-${language}`);
  });

  const images = document.querySelectorAll("img[data-en][data-ru]");
  images.forEach(img => {
      img.src = img.getAttribute(`data-${language}`);
  });
}