const swiper = new Swiper('.hero__swiper', {
    loop: true,
    autoplay: {
        delay: 10000,
    },
    effect: 'fade',
    fadeEffect: {
        speed: 900,
    },

});






document.querySelector('.up').addEventListener('click', function() {
    var elementOne = document.querySelector('.dropbown-up1');
    var elementTwo = document.querySelector('.header__botom-svg1');
    if (elementOne.classList.contains("dropdown-acrive")) {
        elementOne.classList.remove("dropdown-acrive");
        elementTwo.classList.contains("svg-active");
        elementTwo.classList.remove("svg-active");
    } else {
        elementOne.classList.add("dropdown-acrive");
        elementTwo.classList.add("svg-active");
    }
})

document.querySelector('.up1').addEventListener('click', function() {
    var elementOne = document.querySelector('.dropbown-up2');
    var elementTwo = document.querySelector('.header__botom-svg2');
    if (elementOne.classList.contains("dropdown-acrive")) {
        elementOne.classList.remove("dropdown-acrive");
        elementTwo.classList.contains("svg-active");
        elementTwo.classList.remove("svg-active");
    } else {
        elementOne.classList.add("dropdown-acrive");
        elementTwo.classList.add("svg-active");
    }
})

document.querySelector('.up2').addEventListener('click', function() {
    var elementOne = document.querySelector('.dropbown-up3');
    var elementTwo = document.querySelector('.header__botom-svg3');
    if (elementOne.classList.contains("dropdown-acrive")) {
        elementOne.classList.remove("dropdown-acrive");
        elementTwo.classList.contains("svg-active");
        elementTwo.classList.remove("svg-active");
    } else {
        elementOne.classList.add("dropdown-acrive");
        elementTwo.classList.add("svg-active");
    }
})


document.querySelector('.up3').addEventListener('click', function() {
    var elementOne = document.querySelector('.dropbown-up4');
    var elementTwo = document.querySelector('.header__botom-svg4');
    if (elementOne.classList.contains("dropdown-acrive")) {
        elementOne.classList.remove("dropdown-acrive");
        elementTwo.classList.contains("svg-active");
        elementTwo.classList.remove("svg-active");
    } else {
        elementOne.classList.add("dropdown-acrive");
        elementTwo.classList.add("svg-active");
    }
})
document.querySelector('.up4').addEventListener('click', function() {
    var elementOne = document.querySelector('.dropbown-up5');
    var elementTwo = document.querySelector('.header__botom-svg5');
    if (elementOne.classList.contains("dropdown-acrive")) {
        elementOne.classList.remove("dropdown-acrive");
        elementTwo.classList.contains("svg-active");
        elementTwo.classList.remove("svg-active");
    } else {
        elementOne.classList.add("dropdown-acrive");
        elementTwo.classList.add("svg-active");
    }

})



const galarySelect = () => {
    const elements = document.querySelectorAll('.gallery__select');
    elements.forEach(el => {
        const choices = new Choices(el, {
            searchEnabled: false,


        })
    })

}
galarySelect();


const swiperGalary = new Swiper('.gallery__swiper', {
    loop: true,
    navigation: {
        nextEl: '.gallery__next',
        prevEl: '.gallery__prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    breakpoints: {

        1600: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 34,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 38
        },



        450: {
            slidesPerView: 1,
            spaceBetween: 15
        }
    }
});


$(function() {
    $(".catalog__accordion").accordion();
});

const swiperEvent = new Swiper('.event__swiper ', {

    navigation: {
        nextEl: '.event__next',
        prevEl: '.event__prev',
    },

    breakpoints: {

        1600: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 27,
        },


        768: {
            slidesPerView: 2,
            spaceBetween: 34,
        },

        400: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
});

const swiperProject = new Swiper('.project__swiper ', {

    navigation: {
        nextEl: '.project__next',
        prevEl: '.project__prev',
    },

    breakpoints: {

        1650: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },

        768: {
            slidesPerView: 2,
            spaceBetween: 34,
        },

        400: {
            slidesPerView: 1,
            spaceBetween: 10
        }
    }
});





ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.758468, 37.601088],
        zoom: 17,
        controls: [],

    });
    myMap.behaviors.disable('scrollZoom');


    var myPlacemark = new ymaps.Placemark([55.758468, 37.601088], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../images/location.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-3, -50]
    });
    myMap.geoObjects.add(myPlacemark);

    if ($(window).width() < '1150') {
        myMap.setCenter([55.758468, 37.601088]);
        myMap.behaviors.disable('drag');
    }

    if ($(window).width() <= '650') {
        myMap.setCenter([55.758468, 37.601088]);
        myMap.behaviors.disable('drag');
    }



}



$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__burger-menu').toggleClass('active');
    })
})


var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7 (999)-999-99-99");
im.mask(selector);



new JustValidate('.contact__form', {
    rules: {
        name: {
            required: true,
            minLength: 2,
            maxLength: 10,
        },

        tel: {
            required: true,
            function: (_name, _value) => {
                const phone = selector.inputmask.unmaskedvalue()
                console.log(phone)
                return Number(phone) && phone.length === 10
            }
        },
        mail: {
            required: true,
            email: true
        },
    },
});