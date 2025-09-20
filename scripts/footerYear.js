document.addEventListener('DOMContentLoaded', () => {
  const year = String(new Date().getFullYear());
  document.querySelectorAll('[data-year-placeholder]').forEach(el => {

    el.innerHTML = el.innerHTML.replace(/YYYY/g, year);
    if (el.dataset.en) el.dataset.en = el.dataset.en.replace(/YYYY/g, year);
    if (el.dataset.ru) el.dataset.ru = el.dataset.ru.replace(/YYYY/g, year);
  });
});
