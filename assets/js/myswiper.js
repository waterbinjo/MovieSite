// 메인 배너
var swiper = new Swiper(".hero", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

// 영화 포스터 슬라이드
var swiper = new Swiper(".slider2", {
    slidesPerView: 1.4,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        601: {
            slidesPerView: 2,
            spaceBetween: 24,
        },
        769: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        961: {
            slidesPerView: 4,
            spaceBetween: 24,
        },
    },
    autoplay: {
        delay: 1500, // 2초마다 자동 이동, 3000이면 3초
        disableOnInteraction: false, // 직접 넘긴 뒤에도 자동재생 계속
    },
    // loop: true, // 마지막 포스터 다음에 다시 처음으로
});
