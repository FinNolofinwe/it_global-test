window.addEventListener('DOMContentLoaded', function() {
  const nav = document.querySelector('.nav');
  const mainList = document.querySelector('.nav__main-list');
  const navOpen = document.querySelector('.burger');
  const navClose = document.querySelector('.burger__close');
  const mainMenuBlock = document.querySelectorAll('.main-item__block');
  const subMenuBlock = document.querySelectorAll('.sub-item__block');
  const body = document.querySelector('.body');
  const infoBlock = document.querySelector('.nav__info-list');
  const modalWrapper = document.querySelector('.modal__wrapper');
  const modalBlock = document.querySelector('.modal__block');
  const langList = document.querySelector('.modal__langs');
  const langItem = document.querySelectorAll('.modal__langs-item');
  const langBlock = document.querySelector('.nav__language');
  let lang = document.querySelector('.nav__language-def');
  let langPic = document.querySelector('.nav__language-img');
  const pigPetr = document.querySelector('.content__img');
  const content = document.querySelector('.content');

  pigPetr.classList.toggle('content__img-active');



  navOpen.addEventListener('click', ()=> {
    nav.classList.toggle('nav-active');
    navOpen.style.display = 'none';
    navClose.style.display = 'block';
  });

  navClose.addEventListener('click', ()=> {
    nav.classList.toggle('nav-active');
    navClose.style.display = 'none';
    navOpen.style.display = 'block';
  });

  mainMenuBlock.forEach(item => {
    item.addEventListener('click', () => {
      item.parentElement.classList.toggle('nav__main-item-opened');
      item.nextElementSibling.classList.toggle('sub__list-active');
      item.classList.toggle('main-item__block-active');
      mainList.classList.toggle('nav__main-list-active');
      infoBlock.classList.toggle('nav__info-list-disabled');
      content.classList.toggle('content__disabled');
    })
  });

  subMenuBlock.forEach(item => {
    item.addEventListener('click', () => {
      item.parentElement.classList.toggle('sub__item-opened');
      item.parentElement.parentElement.classList.toggle('sub__list-opened');
      item.nextElementSibling.classList.toggle('details__list-active');
      item.classList.toggle('sub-item__block-active');
      body.classList.toggle('body__active');
    })
  });

  langBlock.addEventListener('click', () => {
    modalWrapper.style.display = 'block';
    modalBlock.classList.toggle('modal__block-active');
    langBlock.classList.toggle('nav__language-active');
  });

  modalWrapper.addEventListener('click', () => {
    modalWrapper.style.display = 'none';
    modalBlock.classList.remove('modal__block-active');
    langBlock.classList.remove('nav__language-active');
  });


  langList.addEventListener('click', (e) => {
    langItem.forEach(item => {
      if (item.classList.contains('modal__langs-item')) {
        item.classList.remove('modal__langs-item-active');
        item.firstElementChild.classList.remove('modal__langs-selected-active');
      }
    });
    let closestItem = e.target.closest('.modal__langs-item');

    closestItem.classList.add('modal__langs-item-active');
    closestItem.firstElementChild.classList.add('modal__langs-selected-active');
    
    lang.innerHTML = e.target.closest('.modal__langs-item').getAttribute('data-lang');
    langPic.src = `../img/${e.target.closest('.modal__langs-item').getAttribute('data-lang')}.png`
  });
});