const translate = document.querySelectorAll('.translate');
const hero_title = document.querySelector('.hero-title');
const header = document.querySelector('.header');
const shadow = document.querySelector('.shadow');
const content = document.querySelector('.about-content');
const about = document.querySelector('.about');
const image_container = document.querySelector('.imgContainer');
const opacity = document.querySelectorAll('.opacity');
const border = document.querySelector('.title-border');

let header_height = header.offsetHeight;
let about_height = about.offsetHeight;

window.addEventListener('scroll', () => {
  let scroll = window.pageYOffset;
  let aboutY = about.getBoundingClientRect();

  translate.forEach(element => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`
  });

  hero_title.style.opacity = - scroll / (header_height / 2) + 1;
  shadow.style.height = `${scroll * 0.3 + 300}px`;

  opacity.forEach(element => {
    element.style.opacity = scroll / (aboutY.top + about_height)
  })

  content.style.transform = `translateY(${scroll / (about_height + aboutY.top) * 50 - 50}px)`;
  image_container.style.transform = `translateY(${scroll / (about_height + aboutY.top) * -50 + 50}px)`;

  border.style.width = `${scroll / (aboutY.top + about_height) * 30}%`;
})