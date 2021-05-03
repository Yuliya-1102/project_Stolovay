'use strict';

// слайдер 1
document.addEventListener("DOMContentLoaded", () => {
  const categoriesSwiper = new Swiper('.categories__slider', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    // slidesPerView: 11,
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        1400: {
          slidesPerView: 11,
          loopedSlides: 1,
        //   spaceBetween: 110
        },
        1024: {
          slidesPerView: 8,
          loopedSlides: 1,
        //   spaceBetween: 80,
        },
        768: {
          slidesPerView: 6,
          loopedSlides: 2,
        //   spaceBetween: 10
        },

      },
      on: {
        init: function() {
                checkArrow();
        },
        resize: function () {
                checkArrow();
        }
      }
  

  });
  
  // сдайдер 2
  function checkArrow() {
    let swiperPrev = document.querySelector('.swiper-button-prev');
    let swiperNext = document.querySelector('.swiper-button-next');

    if ( window.innerWidth < 1400  ) {
      swiperPrev.style.display = 'block';
      swiperNext.style.display = 'block';
    } else {
      swiperPrev.style.display = 'none';
      swiperNext.style.display = 'none';
    }
  }
  const Mainswiper = new Swiper('.main-container', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

  });

  // аккардтон
  const contactsAccordion = () => {
    const contactsInner = document.querySelector('.contacts__inner');
    const contactsList = document.querySelectorAll('.contacts__list');

    const open = (button, dropDown) => {

      closeAllDrops(button, dropDown);
      // dropDown.style.height = `${dropDown.scrollHeight}px`;
      button.classList.add('active');
      dropDown.classList.add('active');
    }

    const close = (button, dropDown) => {
      button.classList.remove('active');
      dropDown.classList.remove('active');
      // dropDown.style.height = '';
    }

    const closeAllDrops = () => {
      contactsList.forEach(item => {
        close(item.children[0], item.children[1]);
      });
    }

    contactsInner.addEventListener('click', (event) => {
      const target = event.target;

      if(target.closest('.contacts__list')){
        const parent = target.closest('.contacts__list');
        const description = parent.querySelector('.contacts__link');
        
        description.classList.contains('active') ? close(target, description) : open(target, description);
      }
    })

  };
  contactsAccordion();

  // открытие меню
  const openMenu = () => {
    const headerBtn = document.querySelector('.header__btn');
    const menuMobile = document.querySelector('.menu__mobile');
    
    headerBtn.addEventListener("click", () => {

      if(menuMobile.classList.contains('active')){
        menuMobile.classList.remove('active');
        menuMobile.style.height = '';

      } else{
        menuMobile.style.height = `${menuMobile.scrollHeight}px`;
        menuMobile.classList.add('active');
      }

    });
  };
  openMenu();


  const openModal = () => {
    const header = document.querySelector('.header');
    const searchCategoriesShow = document.querySelector('.search__find-categories_show');
    const emailBtn = document.querySelector('.email-btn');
    const contactForm = document.querySelector('.contact-form__wraper');
    const contactFormWraper = document.querySelector('.contact-form__wraper');
    const searchFindCategories = document.querySelector('.search__find-categories');
    const searchFindCategoriesSpan = document.querySelector('.search__find-categories span');
    const searchFindCategoriesMobileSpan = document.querySelector('.search__find-categories_mobile span');
    
    const searchFindText = document.querySelector('.search__find-text input');
    const searchFindMobile = document.querySelector('.search__find-mobile');
    const searchFindCategoriesShowMobile = document.querySelector('.search__find-categories_show-mobile');
    const searchFindCategoriesMobile = document.querySelector('.search__find-categories_mobile');
    const searchFindTextMobile = document.querySelector('.search__find-text_mobile input');
    
    
    //открытие модального окна (основное)
    const open = (elem) => {
      elem.classList.add('active');
      elem.style.opacity = 1;
    };

    const close = (elem) => {
      elem.classList.remove('active');
      elem.style.opacity = 0;
    }

    header.addEventListener('click', (event) => {
      event.preventDefault();
      const target = event.target;

      if(target.closest('.search__find-categories')){
        searchCategoriesShow.classList.contains('active') ? close(searchCategoriesShow) : open(searchCategoriesShow);
      } else if(target.closest('.header__email-link')){
        emailBtn.classList.contains('active') ? close(emailBtn) : open(emailBtn);
      } else if(target.closest('.header__phone') || target.closest('.mobile__phone')){
        contactForm.classList.contains('active') ? close(contactForm) : open(contactForm);
      } else if(target.closest('.mobile__search')){
        searchFindMobile.classList.contains('active-flex') ? searchFindMobile.classList.remove('active-flex') : searchFindMobile.classList.add('active-flex');
      } else if(target.closest('.search__find-categories_mobile')){
        searchFindCategoriesShowMobile.classList.contains('active') ? close(searchFindCategoriesShowMobile) : open(searchFindCategoriesShowMobile);
      }
      
    });

     //открытие модального окна сонтакты по крестику и подложки
    contactFormWraper.addEventListener('click', (event) => {
      const target = event.target;

      if(target.closest('.contact-form__btn-close') || target.closest('.contact-form__wraper')){
        contactForm.classList.contains('active') ? close(contactForm) : open(contactForm);
      }
    });


    // выбираем категорию
    searchFindCategories.addEventListener('click', (event) => {
      const target = event.target;
      if(target.matches('li')) {
        searchFindCategoriesSpan.textContent = target.textContent;
      }
    });

      // выбираем категорию мобильная версия
      searchFindCategoriesMobile.addEventListener('click', (event) => {
        const target = event.target;
        if(target.matches('.search__find-categories_list li')) {
          console.log('target: ', target);

          searchFindCategoriesMobileSpan.textContent = target.textContent;
        }
      });
  };
  openModal();

  // раскрываем текст
  const openText = () => {
    const servicesBtnCircle = document.querySelector('.services__btn-circle');
    const servicesTextShow = document.querySelector('.services__text-show_down');
 
    
    servicesBtnCircle.addEventListener('click', () => {
      if(servicesTextShow.classList.contains('active')){
        servicesTextShow.classList.remove('active');
        servicesTextShow.style.height = '';
        servicesBtnCircle.textContent = '+';
      } else{
        servicesTextShow.style.height = `${servicesTextShow.scrollHeight}px`;
        servicesTextShow.classList.add('active');
        servicesBtnCircle.textContent = '-';
      }
    })
  }
  openText();

  // открытие меню с оборудованием
  const openMainMenu = (event) => {
    const categoriesMobile = document.querySelector('.categories__mobile');
    const mainMenu = document.querySelector('.main__menu');
    
    categoriesMobile.addEventListener("click", (event) => {
      const target = event.target;

      if(mainMenu.classList.contains('active')){
        mainMenu.classList.remove('active');
        mainMenu.style.height = '';

      } else{
        mainMenu.style.height = `${mainMenu.scrollHeight}px`;
        mainMenu.classList.add('active');
      }

    });
  }
  openMainMenu();
})