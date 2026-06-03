document.addEventListener("DOMContentLoaded", () => {
    
    // 1. 페이지 로드 시 부드럽게 나타나는 전체 페이드 인(Fade-in) 효과
    const introWrap = document.querySelector('.intro-wrap');
    introWrap.style.transition = "opacity 1.2s ease-in-out";
    setTimeout(() => {
        introWrap.style.opacity = "1";
    }, 0);

    // ==========================================
    // 2. 10초 간격 배경 이미지 자동 순환 (Fade 슬라이드)
    // ==========================================
    const introImages = [
        "인트로 배경.png",
        "인트로 배경2.jpg",
        "인트로 배경3.jpg",
        "인트로 배경4.jpg",
        "인트로 배경5.jpg",
        "인트로 배경6.jpg"
    ];
    
    let currentImgIndex = 0;
    const floatingImg = document.getElementById("intro-floating-img");

    if (floatingImg) {
        // 10초(10000ms)마다 반복 실행
        setInterval(() => {
            
            // 1단계: 이미지를 투명하게 만듦 (페이드 아웃 시작)
            floatingImg.style.opacity = 0;

            // 2단계: 투명해지는 시간(1초)을 기다린 후 이미지 소스 교체
            setTimeout(() => {
                currentImgIndex++;
                
                // 마지막 이미지 다음엔 다시 처음(0번)으로 돌아감
                if (currentImgIndex >= introImages.length) {
                    currentImgIndex = 0;
                }
                
                floatingImg.src = introImages[currentImgIndex];
                
                // 3단계: 소스 교체 후 다시 불투명하게 만듦 (페이드 인 시작)
                floatingImg.style.opacity = 1;

            }, 1000); // CSS의 transition 속도(1s)와 동일하게 1000ms 대기

        }, 4000); // 10초 간격
    }
});