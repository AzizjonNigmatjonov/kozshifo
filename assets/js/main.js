const currentLocation = location.href;
const navItem = document.querySelectorAll('.nav-item');
const navItemLength = navItem.length;
for (let i = 0; i < navItemLength; i++) {
  if (navItem[i].href === currentLocation) {
    navItem[i].classList.add('active');
  }
}

const imgLeft = document.querySelector('.main-images-slider .img1')
const imgCenter = document.querySelector('.main-images-slider .img2')
const imgRight = document.querySelector('.main-images-slider .img3')
const btn1 = document.querySelector('.main-images-slider .btn1');
const btn2 = document.querySelector('.main-images-slider .btn2');
const btn3 = document.querySelector('.main-images-slider .btn3');

btn1.addEventListener('click', e => {
  imgCenter.src = '../assets/images/main/main-img-1.png';
  imgLeft.src = '../assets/images/main/main-img-2.png';
  imgRight.src = '../assets/images/main/main-img-3.png';
  btn1.classList.add('active');
  btn2.classList.remove('active');
  btn3.classList.remove('active');
})
btn2.addEventListener('click', e => {
  imgCenter.src = '../assets/images/main/main-img-2.png';
  imgLeft.src = '../assets/images/main/main-img-1.png';
  imgRight.src = '../assets/images/main/main-img-3.png';
  btn1.classList.remove('active');
  btn2.classList.add('active');
  btn3.classList.remove('active');
})
btn3.addEventListener('click', e => {
  imgCenter.src = '../assets/images/main/main-img-3.png';
  imgLeft.src = '../assets/images/main/main-img-1.png';
  imgRight.src = '../assets/images/main/main-img-2.png';
  btn1.classList.remove('active');
  btn2.classList.remove('active');
  btn3.classList.add('active');
})

window.onload = function() {
  const el = document.getElementById('overlay');
  el.style.display = 'none';
};