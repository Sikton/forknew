document.querySelector('.burger').addEventListener('click', (e) => {
  e.target.classList.toggle('fa-bars');
  e.target.classList.toggle('fa-times');
  // document.querySelector('.menu__list').classList.toggle('active');
  document.querySelector('.menu').classList.toggle('active');

  // document.querySelector('.main').classList.toggle('no-active');
  // document.querySelector('.box').style.paddingBottom = '50px';
});
