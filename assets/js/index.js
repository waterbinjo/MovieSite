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
