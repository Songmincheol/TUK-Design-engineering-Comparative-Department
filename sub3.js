document.addEventListener("DOMContentLoaded", () => {
    
    // ==========================================
    // 1. 공지사항 데이터 DB (링크하신 1~8페이지 분량의 대표적 가상 데이터)
    // ==========================================
    const notices = [
        { id: 25, category: '멘토링', title: '[2026비교과] [디자인]멘토링_그리드(GRI:D)팀 확정 안내', date: '2026.05.29', views: 856 },
        { id: 24, category: '과제전/공모전', title: '[비교과]학술전시회 “NO:DE” 행사안내', date: '2025.11.18', views: 856 },
        { id: 23, category: '특성화', title: '2024-2학기 디자인공학부 특성화장학금 "전공 비교과 프로그램 3회 이상 수료"', date: '2024.11.15', views: 432 },
        { id: 22, category: '과제전/공모전', title: '[비교과] 2024학년도 디자인공학부 과제전 참여자 모집', date: '2024.10.12', views: 320 },
        { id: 21, category: '멘토링', title: '[비교과] 2024년도 2학기 디자인공학부 멘토링 멘토/멘티 모집 안내', date: '2024.09.05', views: 1245 },
        { id: 20, category: '특성화', title: '[특성화] 2024-1학기 특성화 장학금 지급 안내', date: '2024.08.20', views: 560 },
        { id: 19, category: '과제전/공모전', title: '[비교과] 2023학년도 디자인공학부 졸업전시회 안내', date: '2024.07.15', views: 900 },
        { id: 18, category: '멘토링', title: '[비교과] 2023 디자인공학부 멘토링 우수팀 결과 발표', date: '2024.06.30', views: 640 },
        { id: 17, category: '특성화', title: '[비교과] U-CAN+ 비교과 프로그램 만족도 조사 참여 안내', date: '2024.06.10', views: 410 },
        { id: 16, category: '과제전/공모전', title: '[비교과] 제 12회 디자인공학부 학술대회 수상자 공지', date: '2024.05.22', views: 780 },
        { id: 15, category: '특성화', title: '[특성화] 2023-2학기 전공 비교과 마일리지 정산 안내', date: '2024.04.18', views: 520 },
        { id: 14, category: '멘토링', title: '[멘토링] 2024학년도 1학기 멘토링 오리엔테이션 자료', date: '2024.03.05', views: 1020 },
        { id: 13, category: '과제전/공모전', title: '[과제전/공모전] 2024 K-Design Award 교내 출품 지원 안내', date: '2024.02.15', views: 880 },
        { id: 12, category: '과제전/공모전', title: '[비교과] 2023학년도 과제전 "피어나" 행사 일정 안내', date: '2023.11.20', views: 950 },
        { id: 11, category: '특성화', title: '[특성화] 전공 자격증 취득 지원금 신청 안내', date: '2023.10.12', views: 410 },
        { id: 10, category: '멘토링', title: '[비교과] 2023년도 2학기 멘토링 팀 매칭 결과 안내', date: '2023.09.28', views: 670 },
        { id: 9, category: '과제전/공모전', title: '[공모전] 레드닷 디자인 어워드 출품자 모집', date: '2023.08.15', views: 820 },
        { id: 8, category: '특성화', title: '[특성화] 글로벌 전공 연수 프로그램 선발 공고', date: '2023.07.02', views: 460 },
        { id: 7, category: '멘토링', title: '[멘토링] 선배 특강 및 멘토링 결연식 안내', date: '2023.05.14', views: 530 },
        { id: 6, category: '과제전/공모전', title: '[과제전] 디자인공학부 1학년 과제전 출품 가이드', date: '2023.04.10', views: 610 },
        { id: 5, category: '특성화', title: '[특성화] 외부 전문가 초청 세미나 참석 마일리지 안내', date: '2023.03.22', views: 320 },
        { id: 4, category: '멘토링', title: '[멘토링] 2023학년도 1학기 멘토링 모집 연장', date: '2023.03.10', views: 450 },
        { id: 3, category: '과제전/공모전', title: '[과제전] 학술대회 심사위원 및 심사 기준 안내', date: '2022.12.01', views: 770 },
        { id: 2, category: '특성화', title: '[특성화] 2022-2학기 비교과 활동 증명서 발급 안내', date: '2022.11.15', views: 390 },
        { id: 1, category: '멘토링', title: '[멘토링] 2022년 멘토링 활동 우수 사례집 배포', date: '2022.10.05', views: 810 }
    ];

    // ==========================================
    // 2. 상태 관리 변수
    // ==========================================
    const itemsPerPage = 5; // 한 페이지당 보여줄 게시글 수
    let currentPage = 1;
    let currentFilter = '전체';
    let searchQuery = '';

    const boardBody = document.getElementById('board-body');
    const paginationContainer = document.getElementById('pagination-container');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('search-input');
    const datalist = document.getElementById('notice-suggestions');

    // ==========================================
    // 3. 검색창 자동완성(Datalist) 세팅
    // ==========================================
    function setupAutocomplete() {
        datalist.innerHTML = '';
        notices.forEach(notice => {
            const option = document.createElement('option');
            option.value = notice.title;
            datalist.appendChild(option);
        });
    }

    // ==========================================
    // 4. 화면 렌더링 함수
    // ==========================================
    function renderBoard() {
        // 필터링 & 검색 적용
        const filteredData = notices.filter(item => {
            const matchCategory = currentFilter === '전체' || item.category === currentFilter;
            const matchSearch = item.title.includes(searchQuery);
            return matchCategory && matchSearch;
        });

        // 페이지 계산
        const totalItems = filteredData.length;
        const totalPages = Math.ceil(totalItems / itemsPerPage) || 1;
        
        // 현재 페이지 방어코드
        if(currentPage > totalPages) currentPage = totalPages;
        if(currentPage < 1) currentPage = 1;

        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const pageData = filteredData.slice(startIndex, endIndex);

        // 테이블 그리기
        boardBody.innerHTML = '';
        if(pageData.length === 0) {
            boardBody.innerHTML = `<div style="padding:40px; color:#888;">해당하는 공지사항이 없습니다.</div>`;
        } else {
            pageData.forEach(item => {
                const row = document.createElement('div');
                row.className = 'board-row';
                row.innerHTML = `
                    <div class="col-num">${item.id}</div>
                    <div class="col-category"><span class="badge black">${item.category}</span></div>
                    <div class="col-title"><a href="#">${item.title}</a></div>
                    <div class="col-date">${item.date}</div>
                    <div class="col-views">${item.views}</div>
                `;
                boardBody.appendChild(row);
            });
        }

        // 페이지네이션 버튼 그리기
        renderPagination(totalPages);
    }

    // ==========================================
    // 5. 페이지네이션 생성 함수
    // ==========================================
    function renderPagination(totalPages) {
        paginationContainer.innerHTML = '';

        // 이전 화살표
        const prevBtn = document.createElement('button');
        prevBtn.className = 'page-arrow';
        prevBtn.innerText = '<';
        prevBtn.disabled = currentPage === 1;
        prevBtn.onclick = () => { if(currentPage > 1) { currentPage--; renderBoard(); } };
        paginationContainer.appendChild(prevBtn);

        // 숫자 버튼 (1~totalPages)
        for(let i = 1; i <= totalPages; i++) {
            const pageBtn = document.createElement('button');
            pageBtn.className = `page-num ${i === currentPage ? 'active' : ''}`;
            pageBtn.innerText = i;
            pageBtn.onclick = () => { currentPage = i; renderBoard(); };
            paginationContainer.appendChild(pageBtn);
        }

        // 다음 화살표
        const nextBtn = document.createElement('button');
        nextBtn.className = 'page-arrow';
        nextBtn.innerText = '>';
        nextBtn.disabled = currentPage === totalPages;
        nextBtn.onclick = () => { if(currentPage < totalPages) { currentPage++; renderBoard(); } };
        paginationContainer.appendChild(nextBtn);
    }

    // ==========================================
    // 6. 이벤트 리스너 등록
    // ==========================================
    // 태그(전체, 멘토링 등) 클릭 시
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            filterBtns.forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            
            currentFilter = e.target.getAttribute('data-filter');
            currentPage = 1; // 필터 변경 시 무조건 1페이지로 이동
            renderBoard();
        });
    });

    // 검색창 입력 시 실시간 렌더링
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        currentPage = 1;
        renderBoard();
    });

    // ==========================================
    // 초기 실행
    // ==========================================
    setupAutocomplete();
    renderBoard();

});