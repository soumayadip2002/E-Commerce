let user = document.querySelector('#user');
let login = document.querySelector('.login')
let close = document.querySelector('#close')

user.onclick = () => {
    login.classList.add('active')
}

close.onclick = () => {
    login.classList.remove('active')
}

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,

    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
    }


});