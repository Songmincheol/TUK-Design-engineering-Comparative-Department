document.addEventListener("DOMContentLoaded", () => {
    
    // ==================================================
    // SECTION 2 : 멘토링 / 과제전 탭 토글 제어
    // ==================================================
    const btnMentoring = document.getElementById("toggle-mentoring");
    const btnExhibition = document.getElementById("toggle-exhibition");
    const wrapperMentoring = document.getElementById("mentoring-wrapper");
    const wrapperExhibition = document.getElementById("exhibition-wrapper");

    if (btnMentoring && btnExhibition && wrapperMentoring && wrapperExhibition) {
        btnMentoring.addEventListener("click", () => {
            btnMentoring.classList.add("active");
            btnExhibition.classList.remove("active");
            wrapperMentoring.classList.remove("hidden");
            wrapperExhibition.classList.add("hidden");
        });

        btnExhibition.addEventListener("click", () => {
            btnExhibition.classList.add("active");
            btnMentoring.classList.remove("active");
            wrapperExhibition.classList.remove("hidden");
            wrapperMentoring.classList.add("hidden");
        });
    }

    // ==================================================
    // SECTION 2 & 3 : 공통 캐러셀 스크롤 제어 헬퍼 함수
    // ==================================================
    const setupCarouselEngine = (btnId, gridId, cardWidth, gapWidth) => {
        const btn = document.getElementById(btnId);
        const grid = document.getElementById(gridId);

        if (btn && grid) {
            btn.addEventListener("click", () => {
                const scrollAmount = cardWidth + gapWidth;
                const maxScrollLeft = grid.scrollWidth - grid.clientWidth;

                // 스크롤이 끝까지 도달했을 때 다시 0번 인덱스로 부드럽게 복귀(순환 구조)
                if (grid.scrollLeft >= maxScrollLeft - 15) {
                    grid.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    grid.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            });
        }
    };

    // 1. 비교과 멘토링 캐러셀 연동 (카드 357px + 공백 24px)
    setupCarouselEngine("archive-mentor-next", "mentoring-grid", 357, 24);

    // 2. 비교과 과제전 캐러셀 연동 (카드 357px + 공백 24px)
    setupCarouselEngine("archive-ex-next", "exhibition-grid", 357, 24);

    // 3. 유튜브 아카이브 캐러셀 연동 (카드 540px + 공백 24px = 564px)
    setupCarouselEngine("yt-next", "yt-slider", 540, 24);
});