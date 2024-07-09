const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
  nav.classList.toggle('opened-nav');
});

const swiper = new Swiper ('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})