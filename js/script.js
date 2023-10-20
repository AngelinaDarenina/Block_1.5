"use strict";

// СВАЙПЕР (инициализация)
const swiper = new Swiper('.swiper', {
 direction: 'horizontal',
loop: true,
pagination: {
el: '.swiper-pagination',
 },
});

//отключение свайпера при ширине экрана больше 767 px

function disableSwiperIfScreenIsWide() {
  const screenWidth = window.innerWidth;

  if (screenWidth > 767) { 
    swiper.destroy(); 
  } else {
    swiper.init();//
  }
}
// вызываем функцию при загрузке страницы и изменении размера окна
window.addEventListener('load', disableSwiperIfScreenIsWide);
window.addEventListener('resize', disableSwiperIfScreenIsWide);


//КНОПКА
//-------------------------------------------------------------------------------------------------------------------------------
//(при ширине экрана больше 767px)

// Получаем ссылки на кнопку и контент
const button = document.querySelector('.btn'); //кнопка
const hiddenSlides767 = document.querySelectorAll('.slide_hidden-767'); // слайды (бренды), которые скрыты при ширине экрана 767px


// Функция для добавления/удаления класса и изменения кнопки при ширине экрана больше 767px
function toggleClassAndChangeButton767() {
  hiddenSlides767.forEach(function (element) {
    if (element.classList.contains('slide_hidden-767')) {
      element.classList.remove('slide_hidden-767');
      button.innerHTML = "Скрыть";
    } else {
      element.classList.add('slide_hidden-767');
      button.innerHTML = "Показать все";
    }
  });
}
  
// Добавляем обработчик события на кнопку
button.addEventListener('click', toggleClassAndChangeButton767);



//-------------------------------------------------------------------------------------------------------------------------------

//(при ширине экрана больше 1119px)
const hiddenSlides1119 = document.querySelectorAll('.slide_hidden-1119'); // слайды (бренды), которые скрыты при ширине экрана 1119px

// Функция для добавления/удаления класса и изменения кнопки при ширине экрана больше 1119px
function toggleClassAndChangeButton1119() {
  hiddenSlides1119.forEach(function (element) {
    if (element.classList.contains('slide_hidden-1119')) {
      element.classList.remove('slide_hidden-1119');
      button.innerHTML = "Скрыть";
    } else {
      element.classList.add('slide_hidden-1119');
      button.innerHTML = "Показать все";
    }
  });
}
  
// Добавляем обработчик события на кнопку
button.addEventListener('click', toggleClassAndChangeButton1119);

