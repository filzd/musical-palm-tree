// Script
let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () => {
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () => {
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () => {
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
};

document.querySelector('#info-btn').onclick = () => {
   contactInfo.classList.toggle('active');
};

document.querySelector('#info-btn').onclick = () => {
   contactInfo.classList.add('active');
};

document.querySelector('#close-contact-info').onclick = () => {
   contactInfo.classList.remove('active');
};

window.onscroll = () => {
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop: true,
   grabCursor: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      640: {
         slidesPerView: 1
      },
      768: {
         slidesPerView: 2
      },
      991: {
         slidesPerView: 3
      },
   }
});

var swiper = new Swiper(".blogs-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      640: {
         slidesPerView: 1
      },
      768: {
         slidesPerView: 2
      },
      991: {
         slidesPerView: 3
      },
   }
});

// Toggle Language
let langData = {
   "en": {
     "loginFormHeading": "login form",
     "loginFormEmailPlaceholder": "Enter your email",
     "loginFormPasswordPlaceholder": "Enter your password",
     "loginFormRememberMe": "remember me",
     "loginFormForgotPassword": "forgot password?",
     "loginFormLoginNow": "login now",
     "loginFormDontHaveAccount": "don't have an account",
     "loginFormCreateOne": "create one!",
     // Add more translations for other text in your website
   },
   "sk": {
     "loginFormHeading": "prihlasovací formulár",
     "loginFormEmailPlaceholder": "Zadajte váš email",
     "loginFormPasswordPlaceholder": "Zadajte vaše heslo",
     "loginFormRememberMe": "zapamätať si ma",
     "loginFormForgotPassword": "zabudli ste heslo?",
     "loginFormLoginNow": "prihlásiť sa teraz",
     "loginFormDontHaveAccount": "nemáte účet",
     "loginFormCreateOne": "vytvoriť jeden",
     // Add more translations for other text in your website
   }
 };
 

 function toggleLanguage(lang) {
   document.querySelectorAll("[data-translate]").forEach(el => {
     let key = el.getAttribute("data-translate");
     if (langData[lang][key]) {
       if (el.placeholder !== undefined) { // For input placeholders
         el.placeholder = langData[lang][key];
       } else { // For other elements
         el.textContent = langData[lang][key];
       }
     }
   });
 }
 
 
 
var swiper = new Swiper(".logo-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2
      },
      640: {
         slidesPerView: 3
      },
      768: {
         slidesPerView: 4
      },
      1000: {
         slidesPerView: 5
      },
   }
});





































































































/* let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () => {
   navbar.classList.toggle('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () => {
   searchForm.classList.toggle('active');
   navbar.classList.remove('active');
   loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () => {
   loginForm.classList.toggle('active');
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
};

document.querySelector('#info-btn').onclick = () => {
   contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () => {
   contactInfo.classList.remove('active');
}

window.onscroll = () => {
   navbar.classList.remove('active');
   searchForm.classList.remove('active');
   loginForm.classList.remove('active');
   contactInfo.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
   loop: true,
   grabCursor: true,
   navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      640: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      991: {
         slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".blogs-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      640: {
         slidesPerView: 1,
      },
      768: {
         slidesPerView: 2,
      },
      991: {
         slidesPerView: 3,
      },
   },
});

var swiper = new Swiper(".logo-slider", {
   loop: true,
   grabCursor: true,
   spaceBetween: 20,
   breakpoints: {
      450: {
         slidesPerView: 2,
      },
      640: {
         slidesPerView: 3,
      },
      768: {
         slidesPerView: 4,
      },
      1000: {
         slidesPerView: 5,
      },
   },
}); */