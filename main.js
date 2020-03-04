const icon = document.querySelector('#menu-icon');
const nav = document.querySelector('.navbar');

icon.addEventListener('click', () => {
  icon.classList.toggle('fa-times');
  icon.classList.toggle('fa-bars');
  nav.classList.toggle('hidden');
});

const button = document.querySelector('.banner button');

button.addEventListener('click', () => {
  button.innerText = 'Searching...'
});

const images = document.querySelectorAll('.image');

const checkSlide = () => {
  images.forEach(image => {
    let slideInAt= (window.scrollY + window.innerHeight);
    let imageStart = slideInAt > image.offsetTop;

    const imageBottom = image.offsetTop + image.offsetHeight;
    let imageEnd = window.scrollY < imageBottom;

    if (imageStart && imageEnd) {
      image.classList.add('active');
    } else {
      image.classList.remove('active');
    }
  })
}

window.addEventListener('scroll',checkSlide);


const insetArea = document.querySelector('.inset-img');
const insetImg = document.querySelector('.inset-img img');

const scrollImg = () => {
  let slideInAt = (window.scrollY + window.innerHeight);
  let imageStart = slideInAt > insetArea.offsetTop;
  const imageBottom = insetArea.offsetTop + insetArea.offsetHeight;
  let isNotScrolledPast = window.scrollY < imageBottom;

  if (imageStart && isNotScrolledPast) {
    let scrollHeight = slideInAt - insetArea.offsetTop;
    insetImg.style.top = '-' + (scrollHeight / 2) + 'px';
  }
}

window.addEventListener('scroll', scrollImg);

const bannerImg = document.querySelector('.banner-background');

const scrollBanner = () => {
  if (window.scrollY <= window.innerHeight) {
    bannerImg.style.top = window.scrollY + 'px';
  }
}

window.addEventListener('scroll', scrollBanner);
