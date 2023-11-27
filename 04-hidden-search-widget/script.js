const search = document.querySelector('.search');
const btn = document.querySelector('.search__btn');
const input = document.querySelector('.search__input');

btn.addEventListener('click', () => {
  search.classList.toggle('active');
  input.focus();
});
