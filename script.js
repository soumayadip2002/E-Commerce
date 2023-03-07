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


document.addEventListener("click", (e) => {
    if (e.target.classList.contains("product_button")) {
        togglePortfolioPopup();
        portfolioItemDetails(e.target.parentElement);
    }
})

function togglePortfolioPopup() {
    document.querySelector(".product_popup").classList.toggle("open");
}

document.querySelector(".product_popup-close").addEventListener("click", togglePortfolioPopup)

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".product_thumbnail img").src = portfolioItem.querySelector(".product_img").src;
    document.querySelector(".product_popup-body").innerHTML = portfolioItem.querySelector(".product_item-details").innerHTML;
}


var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    loop: true,

    breakpoints: {
        0: {
            slidesPerView: 1,
        },

        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }

    }
});