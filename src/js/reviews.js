import { register } from 'swiper/element/bundle';
import axios from 'axios';
import Swiper from 'swiper';
import iziToast from 'izitoast';

register();

const BASE_URL = "https://portfolio-js.b.goit.study/api/reviews";
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const reviewsSection = document.querySelector('.reviews'); 
let serverError = false; 
let lastKnownScrollPosition = 0;
let ticking = false;

async function fetchReviews() {
    try {
        const { data } = await axios.get(BASE_URL);
        renderReviews(data);
        initializeSwiper();
    } catch (error) {
        serverError = true; 
    }
}

function renderReviews(reviews) {
    const reviewItemsHTML = reviews.map(({ review, avatar_url, author }) => `
        <li class="review-item swiper-slide">
            <p class="review-text">${review}</p>
            <div class="person-box">
                <img class="person-icon" src="${avatar_url || 'path/to/default-image.png'}" alt="${author}">
                <p class="person-text">${author}</p>
            </div>
        </li>
    `).join('');

    document.querySelector('.swiper-wrapper').innerHTML = reviewItemsHTML; 
}

function initializeSwiper() {
    const swiperParams = {
        slidesPerView: 1,
        spaceBetween: 32,
        loop: false,
        speed: 500,
        navigation: {
            nextEl: '.next-button',
            prevEl: '.prev-button',
        },
        breakpoints: {
            360: { slidesPerView: 1, slidesPerGroup: 1 },
            768: { slidesPerView: 1, slidesPerGroup: 1 },
            1280: { slidesPerView: 2, slidesPerGroup: 2 },
        },
        on: {
            slideChange: updateButtonStates,
        }
    };

    const swiper = new Swiper('.swiper-container', swiperParams);

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowRight" && !nextButton.disabled) {
            event.preventDefault();
            swiper.slideNext();
        } else if (event.key === "ArrowLeft" && !prevButton.disabled) {
            event.preventDefault();
            swiper.slidePrev();
        }
    });

    window.addEventListener('resize', () => swiper.update());

    function updateButtonStates() {
        prevButton.disabled = swiper.isBeginning;
        nextButton.disabled = swiper.isEnd;
    }

    updateButtonStates();
}

function isSectionInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function checkAndShowError() {
    if (serverError && isSectionInViewport(reviewsSection)) {
        iziToast.show({
            title: "Not Found",
            messageColor: "black",
            color: "red",
            timeout: 2000,
            position: "topRight",
        });
        document.removeEventListener("scroll", onScroll); 
}
}
function onScroll(event) {
    lastKnownScrollPosition = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(() => {
            checkAndShowError();
            ticking = false;
        });

        ticking = true;
    }
}

fetchReviews();

document.addEventListener("scroll", onScroll);
