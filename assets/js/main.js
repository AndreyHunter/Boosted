// SWIPER START //
const swiper = new Swiper(".mySwiper", {
  direction: 'horizontal',
  slidesPerView: 7,
  spaceBetween: 0,
  speed: 400,
  freeMode: true,
  allowTouchMove: true,
  mousewhell: true,
  keyboard: true,
 
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },

   breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0
     },

      320: {
      slidesPerView: 2,
      spaceBetween: 0
    },

    500: {
      slidesPerView: 3,
      spaceBetween: 0
    },

    768: {
      slidesPerView: 4,
      spaceBetween: 0
     },
    
    1024: {
      slidesPerView: 5,
      spaceBetween: 0
     },
    
     1280: {
      slidesPerView: 6,
      spaceBetween: 0
     },
     
      1366: {
      slidesPerView: 7,
      spaceBetween: 0
    },
  }
});
// SWIPER END //

// Функция для добавления/удаления класса в зависимости от ширины экрана
        function updateClassForSmallScreen() {
            const subArrowItem = document.getElementById('subArrowItem');
            const isSmallScreen = window.matchMedia('(max-width: 1280px)').matches;

            // Если ширина экрана меньше 1280px, добавляем класс, в противном случае удаляем
            if (isSmallScreen) {
                subArrowItem.classList.add('_sub-arrow');
            } else {
                subArrowItem.classList.remove('_sub-arrow');
            }
        }

        window.addEventListener('load', updateClassForSmallScreen);
        window.addEventListener('resize', updateClassForSmallScreen);
        
        
let shouldHideHeader = true; 
let prevScrollPos = window.pageYOffset;
const header = document.querySelector('.header');

if (prevScrollPos > 50) {
  header.style.top = '-29px'; // 
} else {
  header.style.top = '0';
}

document.querySelector('.mobaile-menu').addEventListener('click', function () {
  this.classList.toggle('active');
  document.querySelector('.mobaile-menu-nav').classList.toggle('open');
  shouldHideHeader = !shouldHideHeader; 
});

window.onscroll = function() {
  if (shouldHideHeader) { 
    const currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos && currentScrollPos < 50) {
      header.style.top = '0';
    } else {
      header.style.top = '-29px'; 
    }

    prevScrollPos = currentScrollPos;
  }
};