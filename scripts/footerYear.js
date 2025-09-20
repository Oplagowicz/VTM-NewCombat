const currentYear = new Date().getFullYear();

const footer = document.querySelector("footer");

if (footer) {
  footer.innerHTML = footer.innerHTML.replace(/!currentYear/g, currentYear);
  footer.dataset.en = footer.dataset.en.replace(/!currentYear/g, currentYear);
  footer.dataset.ru = footer.dataset.ru.replace(/!currentYear/g, currentYear);
};
