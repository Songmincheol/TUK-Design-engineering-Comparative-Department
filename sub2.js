document.addEventListener("DOMContentLoaded", () => {
    // ==========================================
    // SECTION 3 (sub2.html): 역대 과제전 수상작 연도별 탭 전환
    // ==========================================
    const yearTabs = document.querySelectorAll('.year-tab');
    const archiveGrids = document.querySelectorAll('.archive-grid-ex');

    if(yearTabs.length > 0 && archiveGrids.length > 0) {
        yearTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                // 1. 모든 탭에서 active 제거, 클릭한 탭에 active 추가
                yearTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');

                // 2. data-target 속성을 읽어 해당 그리드만 보여주기
                const targetId = tab.getAttribute('data-target');
                
                archiveGrids.forEach(grid => {
                    if (grid.id === targetId) {
                        grid.classList.remove('hidden');
                    } else {
                        grid.classList.add('hidden');
                    }
                });
            });
        });
    }
});

// ==========================================
// SECTION 4 (sub2.html): 유튜브 영상 재생 (퍼가기 금지 우회용)
// ==========================================
window.playVideo = function(containerId, youtubeId) {
    // 학교 공식 유튜브의 '퍼가기 허용'이 막혀있어 iframe 재생이 불가능하므로,
    // 사용자가 재생 버튼을 누르면 새 탭을 열어 유튜브 원본 링크로 바로 연결해줍니다.
    
    const youtubeUrl = `https://www.youtube.com/watch?v=${youtubeId}`;
    window.open(youtubeUrl, '_blank');
};