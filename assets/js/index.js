// 영화 차트 메뉴
const movBtn = document.querySelectorAll(".movie_title ul li");
const movCont = document.querySelectorAll(".movie_chart > div");

// 모든 뮤비차트를 숨기고, 첫번째만 보이기(기본화면)
movCont.forEach((cont) => {
    cont.style.display = "none";
});
movCont[0].style.display = "block";

// 이벤트 시작
movBtn.forEach((menu, index) => {
    menu.addEventListener("click", (e) => {
        e.preventDefault(); // a링크 디폴트값을 제거

        movBtn.forEach((item) => {
            item.classList.remove("active");
        }); // 전체 active 제거
        // item → 현재 검사 중인 메뉴 하나
        // classList.remove("active") → 그 메뉴에서 active 삭제
        menu.classList.add("active"); // 클릭한 메뉴에 active 추가

        movCont.forEach((cont) => {
            cont.style.display = "none";
        }); // 모든 차트 숨기기
        movCont[index].style.display = "block"; // 클릭한 버튼과 같은 index 보이기

        // 클릭한 탭의 슬라이드를 첫 번째 포스터로 이동
        const currentSwiper = movCont[index].querySelector(".slider2").swiper;

        currentSwiper.update();
        currentSwiper.slideTo(0, 0);
    });
});

// help
// 공지사항의 탭 메뉴
const tabList = document.querySelectorAll(".notice > ul > li > a");
const tabContents = document.querySelectorAll(".notice > ul > li > ul");

// 전부 숨기고 active만 보이기
tabContents.forEach((ul) => {
    ul.style.display = "none";
});
document.querySelector(".notice > ul > li.active > ul").style.display = "block";
// tabContents[0].style.display = "block";

tabList.forEach((a) => {
    a.addEventListener("click", (e) => {
        e.preventDefault();

        // 모든 메뉴 active를 제거하고 전체 컨텐츠를 숨기기
        tabList.forEach((item) => {
            item.parentElement.classList.remove("active");
            item.nextElementSibling.style.display = "none";
        });

        // 클릭한 것만 active + 해당하는 컨텐츠가 보이기
        a.parentElement.classList.add("active"); // a가 아니라 a의 부모인 li한테 active를 붙여야함 -> parentElement
        a.nextElementSibling.style.display = "block";
        // 내 기준으로 동생은 nextElementSibling
    });
});

// 모바일 메뉴
const ham = document.querySelector("#mNav .ham");
const mNavMenu = document.querySelector("#mNav ul");

ham.addEventListener("click", (e) => {
    e.preventDefault();
    mNavMenu.classList.toggle("active");
});

// 스크롤 이벤트
window.addEventListener("scroll", () => {
    let scrollTop = window.scrollY + window.innerHeight / 2;

    let event = document.querySelector("#event");
    let eventTop = event.offsetTop;

    if (scrollTop >= eventTop) {
        document.querySelector(".event_left").classList.add("show");
        document.querySelector(".event_right").classList.add("show");
    } else {
        document.querySelector(".event_left").classList.remove("show");
        document.querySelector(".event_right").classList.remove("show");
    }

    let opening = document.querySelector("#opening");
    let openingTop = opening.offsetTop;
    let openBox = document.querySelectorAll(".open_box > div");

    if (scrollTop > openingTop) {
        openBox.forEach((div) => {
            div.classList.add("bounce");
        });
    } else {
        openBox.forEach((div) => {
            div.classList.remove("bounce");
        });
    }

    let newSection = document.querySelector("#new");
    let newSectionTop = newSection.offsetTop;

    if (scrollTop >= newSectionTop) {
        document.querySelector(".new_left").classList.add("show");
        document.querySelector(".new_right").classList.add("show");
    }

    let help = document.querySelector("#help");
    let helpTop = help.offsetTop;
    let helpBox = document.querySelectorAll(".help > div");

    if (scrollTop >= helpTop) {
        helpBox.forEach((div) => {
            div.classList.add("show");
        });
    } else {
        helpBox.forEach((div) => {
            div.classList.remove("show");
        });
    }
});
