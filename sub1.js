document.addEventListener("DOMContentLoaded", () => {
    
    // ==================================================
    // SECTION 4 (sub1.html) : 멘토링 활동 기록 무한 순환 슬라이더
    // ==================================================
    
    // 멘토링 이미지3-2.jpg를 시작으로 과거 멘토링 2~7까지 총 7개의 데이터 세트 구성
    const historyData = [
        {
            image: "멘토링 이미지1.png",
            tags: '<span class="tag green">전공심화</span> <span class="tag black">Fusion 360</span> <span class="tag white">2025 우수 멘토링</span>',
            title: "지드래곤 아닙니다",
            mentor: "멘토_산업디자인공학전공 정민호",
            desc: "기존 학생들이 많이 접했던 NX, 라이노와는 다른 익숙하지 않은 퓨전이라는 프로그램에 관한 인터페이스 및 툴에 대해 설명하는 과정을 거쳐 학생들이 프로그램을 사용하는 것에 있어 불편함이 없도록 한다. 또한 제너레이티브 디자인이라는 툴에 대한 기본적인 구조 하중, 시작·유지·방해 형상에 대한 원리를 설명하여 어떠한 방식으로 제너레이티브 디자인이 형성되는지 숙지한다. 이후 학생들이 일상생활에서 사용하는 자주 접할 수 있는 용품 중 여러 가지를 선정하여 제너레이티브 디자인을 적용, 이를 3D 프린터로 출력하여 3D가 아닌 실제 목업을 통해 구조가 어떻게 설계되었는지, 강도는 어느 정도인지에 대해 직접 체험할 수 있는 시간을 가진다."
        },
        {
            image: "과거 멘토링2.png",
            tags: '<span class="tag green">전공심화</span> <span class="tag black">Keyshot</span> <span class="tag white">2025 우수 멘토링</span>',
            title: "Keylight",
            mentor: "멘토_산업디자인공학전공 박00",
            desc: "전반기에는 키샷 툴을 중심으로 재질, 카메라, 조명, 환경 등의 정량화 과정을 학습하고, 목적에 맞게 이를 조절하는 능력을 기른다. 하반기에는 제품 선정 및 시각화 기획 단계로 넘어가며, 선정한 제품의 컨셉과 무드보드를 명확히 이해한 후 이를 키샷을 활용해 시각적으로 구현해 낸다."
        },
        {
            image: "과거 멘토링3.png",
            tags: '<span class="tag green">전공심화</span> <span class="tag black">Fusion 360</span> <span class="tag white">2025 우수 멘토링</span>',
            title: "퓨싹 속았수다~!",
            mentor: "멘토_산업디자인공학전공 구00",
            desc: "1학기에는 Autodesk Fusion의 기본적인 사용 방법과 곡면 모델링 예제를 다루며 기초를 다진다. 여름방학 기간에는 과제나 공모전 등 개인작의 스케치 과정을 통해 면의 구조를 명확히 이해하고 본격적인 모델링을 진행한다. 이를 바탕으로 2학기에는 개인작의 모델링을 최종적으로 완성하는 단계로 나아간다."
        },
        {
            image: "과거 멘토링4.jpg",
            tags: '<span class="tag green">전공심화</span> <span class="tag black">Illustrator</span> <span class="tag white">2025 우수 멘토링</span>',
            title: "Dobe is free",
            mentor: "멘토_산업디자인공학전공 최00",
            desc: "어도비 프로그램에 익숙해질 수 있도록, 어도비의 단축키와 주요 툴 사용법을 중심으로 기초 및 응용을 쌓는 실습형 수업으로 진행된다. 프로그램에서 많이 사용되는 툴의 활용법과 어떻게 아트워크에 적용되는지, 실제 포스터에 있는 효과를 주는 방법을 알아가고 자신만의 아트워크를 제작한다. 제작한 아트워크의 퀄리티를 높이기 위해 2D 아트워크를 목업에 입히고 합성하여 마무리하는 단계를 가진다."
        },
        {
            image: "과거 멘토링5.jpg",
            tags: '<span class="tag green">전공심화</span> <span class="tag black">NX10.0</span> <span class="tag white">2025 우수 멘토링</span>',
            title: "3D 트랄라레오 트랄랄라",
            mentor: "멘토_산업디자인공학전공 홍00",
            desc: "NX를 기반으로 간단한 오브제를 출력하는 과정에서 서포터의 수나 곡면에 따른 출력 퀄리티 및 소요 시간 등 고려해야 할 점들을 학습한다. 이후 파츠를 세분화하고 다수의 프린터를 사용하여, 여러 파츠들의 결합이 필요한 중간 크기의 실물을 직접 출력해 본다. 아울러 사포나 퍼티를 이용한 간단한 후가공 처리 방식까지 함께 습득한다."
        },
        {
            image: "과거 멘토링6.jpg",
            tags: '<span class="tag green">전공심화</span> <span class="tag black">Cinema4D</span> <span class="tag white">2025 우수 멘토링</span>',
            title: "C4D:M",
            mentor: "멘토_산업디자인공학전공 김00",
            desc: "1주차에는 Cinema4D 툴에 대한 이해와 기초 학습을 진행하고, 2-3주차에는 제품 모델링을 위한 아이템을 선정하여 직접 모델링 실습을 한다. 4주차에는 애니메이션 키프레임의 원리를 배우고 제품 씬 시나리오를 기획한다. 이어 5-6주차에는 Cinema4D를 활용해 제품 애니메이션 씬을 구성하고 제작하는 실습을 거친 후, 7주차에 After Effects를 활용하여 애니메이션 렌더링 실습을 진행한다. 마지막 8주차에는 최종 결과물을 점검하고 피드백을 받으며 활동을 마무리한다."
        },
        {
            image: "과거 멘토링7.jpg",
            tags: '<span class="tag green">전공심화</span> <span class="tag black">ChatGPT</span> <span class="tag white">2025 우수 멘토링</span>',
            title: "피티야 지브리스타일로 그려줘",
            mentor: "멘토_미디어디자인공학전공 이00",
            desc: "디자이너가 AI를 슬기롭게 활용하는 방식에는 GPT, 이미지 생성, 제너레이티브 디자인, 오픈 API까지 다양한 활용법이 존재한다. “디자이너가 AI와 어떻게 공존할 수 있을까?”에 대해 고찰하는 시간을 갖고 다양한 오류와 실수를 겪어나가고 재미있게 프롬프트를 직접 실험해보며, 그 안에서 나만의 AI 활용 스타일을 찾아간다. 요즘 필수적인 활용 도구가 된 AI를 슬기롭게 활용하는 법, 디자인과 융합하는 법, 저작권 등 윤리문제에 대한 주의사항들에 대해 알아가며 AI와 친해지는 법을 알아간다. 최종적으로 AI를 활용한 간단한 프로젝트를 직접 수행하고 결과물을 창작해 공유한다."
        }
    ];
    
    let currentIndex = 0; 
    
    const sliderImage = document.getElementById("slider-image");
    const sliderTags = document.getElementById("slider-tags");
    const sliderTitle = document.getElementById("slider-title");
    const sliderMentor = document.getElementById("slider-mentor");
    const sliderDesc = document.getElementById("slider-desc");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    function updateSectionContent(index) {
        if (!historyData[index]) return;
        const data = historyData[index];
        if (sliderImage) sliderImage.src = data.image;
        if (sliderTags) sliderTags.innerHTML = data.tags;
        if (sliderTitle) sliderTitle.innerText = data.title;
        if (sliderMentor) sliderMentor.innerText = data.mentor;
        if (sliderDesc) sliderDesc.innerText = data.desc;
    }

    if (prevBtn && nextBtn && sliderImage) {
        // 다음 버튼 클릭 시 (마지막 인덱스 도달 시 0번으로 순환)
        nextBtn.addEventListener("click", (e) => {
            e.preventDefault();
            currentIndex++;
            if (currentIndex >= historyData.length) {
                currentIndex = 0; 
            }
            updateSectionContent(currentIndex);
        });

        // 이전 버튼 클릭 시 (0번 인덱스에서 뒤로 갈 시 마지막 인덱스로 순환)
        prevBtn.addEventListener("click", (e) => {
            e.preventDefault();
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = historyData.length - 1; 
            }
            updateSectionContent(currentIndex);
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    
    // ==================================================
    // SECTION 4 (sub1.html) : 멘토링 활동 기록 무한 순환 슬라이더
    // ==================================================
    
    const historyData = [
        {
            image: "멘토링 이미지3-2.jpg",
            tags: '<span class="tag green">전공심화</span> <span class="tag black">Fusion 360</span> <span class="tag white">2025 우수 멘토링</span>',
            title: "지드래곤 아닙니다",
            mentor: "멘토_산업디자인공학전공 정민호",
            desc: "기존 학생들이 많이 접했던 NX, 라이노와는 다른 익숙하지 않은 퓨전이라는 프로그램에 관한 인터페이스 및 툴에 대해 설명하는 과정을 거쳐 학생들이 프로그램을 사용하는 것에 있어 불편함이 없도록 한다. 또한 제너레이티브 디자인이라는 툴에 대한 기본적인 구조 하중, 시작·유지·방해 형상에 대한 원리를 설명하여 어떠한 방식으로 제너레이티브 디자인이 형성되는지 숙지한다. 이후 학생들이 일상생활에서 사용하는 자주 접할 수 있는 용품 중 여러 가지를 선정하여 제너레이티브 디자인을 적용, 이를 3D 프린터로 출력하여 3D가 아닌 실제 목업을 통해 구조가 어떻게 설계되었는지, 강도는 어느 정도인지에 대해 직접 체험할 수 있는 시간을 가진다."
        },
        {
            image: "과거 멘토링2.jpg",
            tags: '<span class="tag green">전공심화</span> <span class="tag black">Keyshot</span> <span class="tag white">2025 우수 멘토링</span>',
            title: "Keylight",
            mentor: "멘토_산업디자인공학전공 박00",
            desc: "전반기에는 키샷 툴을 중심으로 재질, 카메라, 조명, 환경 등의 정량화 과정을 학습하고, 목적에 맞게 이를 조절하는 능력을 기른다. 하반기에는 제품 선정 및 시각화 기획 단계로 넘어가며, 선정한 제품의 컨셉과 무드보드를 명확히 이해한 후 이를 키샷을 활용해 시각적으로 구현해 낸다."
        },
        {
            image: "과거 멘토링3.png",
            tags: '<span class="tag green">전공심화</span> <span class="tag black">Fusion 360</span> <span class="tag white">2025 우수 멘토링</span>',
            title: "퓨싹 속았수다~!",
            mentor: "멘토_산업디자인공학전공 구00",
            desc: "1학기에는 Autodesk Fusion의 기본적인 사용 방법과 곡면 모델링 예제를 다루며 기초를 다진다. 여름방학 기간에는 과제나 공모전 등 개인작의 스케치 과정을 통해 면의 구조를 명확히 이해하고 본격적인 모델링을 진행한다. 이를 바탕으로 2학기에는 개인작의 모델링을 최종적으로 완성하는 단계로 나아간다."
        },
        {
            image: "과거 멘토링4.jpg",
            tags: '<span class="tag green">전공심화</span> <span class="tag black">Illustrator</span> <span class="tag white">2025 우수 멘토링</span>',
            title: "Dobe is free",
            mentor: "멘토_산업디자인공학전공 최00",
            desc: "어도비 프로그램에 익숙해질 수 있도록, 어도비의 단축키와 주요 툴 사용법을 중심으로 기초 및 응용을 쌓는 실습형 수업으로 진행된다. 프로그램에서 많이 사용되는 툴의 활용법과 어떻게 아트워크에 적용되는지, 실제 포스터에 있는 효과를 주는 방법을 알아가고 자신만의 아트워크를 제작한다. 제작한 아트워크의 퀄리티를 높이기 위해 2D 아트워크를 목업에 입히고 합성하여 마무리하는 단계를 가진다."
        },
        {
            image: "과거 멘토링5.jpg",
            tags: '<span class="tag green">전공심화</span> <span class="tag black">NX10.0</span> <span class="tag white">2025 우수 멘토링</span>',
            title: "3D 트랄라레오 트랄랄라",
            mentor: "멘토_산업디자인공학전공 홍00",
            desc: "NX를 기반으로 간단한 오브제를 출력하는 과정에서 서포터의 수나 곡면에 따른 출력 퀄리티 및 소요 시간 등 고려해야 할 점들을 학습한다. 이후 파츠를 세분화하고 다수의 프린터를 사용하여, 여러 파츠들의 결합이 필요한 중간 크기의 실물을 직접 출력해 본다. 아울러 사포나 퍼티를 이용한 간단한 후가공 처리 방식까지 함께 습득한다."
        },
        {
            image: "과거 멘토링6.jpg",
            tags: '<span class="tag green">전공심화</span> <span class="tag black">Cinema4D</span> <span class="tag white">2025 우수 멘토링</span>',
            title: "C4D:M",
            mentor: "멘토_산업디자인공학전공 김00",
            desc: "1주차에는 Cinema4D 툴에 대한 이해와 기초 학습을 진행하고, 2-3주차에는 제품 모델링을 위한 아이템을 선정하여 직접 모델링 실습을 한다. 4주차에는 애니메이션 키프레임의 원리를 배우고 제품 씬 시나리오를 기획한다. 이어 5-6주차에는 Cinema4D를 활용해 제품 애니메이션 씬을 구성하고 제작하는 실습을 거친 후, 7주차에 After Effects를 활용하여 애니메이션 렌더링 실습을 진행한다. 마지막 8주차에는 최종 결과물을 점검하고 피드백을 받으며 활동을 마무리한다."
        },
        {
            image: "과거 멘토링7.jpg",
            tags: '<span class="tag green">전공심화</span> <span class="tag black">ChatGPT</span> <span class="tag white">2025 우수 멘토링</span>',
            title: "피티야 지브리스타일로 그려줘",
            mentor: "멘토_미디어디자인공학전공 이00",
            desc: "디자이너가 AI를 슬기롭게 활용하는 방식에는 GPT, 이미지 생성, 제너레이티브 디자인, 오픈 API까지 다양한 활용법이 존재한다. “디자이너가 AI와 어떻게 공존할 수 있을까?”에 대해 고찰하는 시간을 갖고 다양한 오류와 실수를 겪어나가고 재미있게 프롬프트를 직접 실험해보며, 그 안에서 나만의 AI 활용 스타일을 찾아간다. 요즘 필수적인 활용 도구가 된 AI를 슬기롭게 활용하는 법, 디자인과 융합하는 법, 저작권 등 윤리문제에 대한 주의사항들에 대해 알아가며 AI와 친해지는 법을 알아간다. 최종적으로 AI를 활용한 간단한 프로젝트를 직접 수행하고 결과물을 창작해 공유한다."
        }
    ];
    
    let currentIndex = 0; 
    let isAnimating = false; // ★ 애니메이션 꼬임 방지 변수
    
    const sliderImage = document.getElementById("slider-image");
    const sliderTags = document.getElementById("slider-tags");
    const sliderTitle = document.getElementById("slider-title");
    const sliderMentor = document.getElementById("slider-mentor");
    const sliderDesc = document.getElementById("slider-desc");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    function updateSectionContent(index) {
        if (!historyData[index] || isAnimating) return;
        isAnimating = true;

        const data = historyData[index];
        const contentContainer = document.querySelector('.history-content');

        // 1. 컨텐츠를 투명하게 만듦 (Fade Out)
        if(contentContainer) contentContainer.classList.add('fade');

        // 2. 0.4초 대기 후 내용 변경하고 다시 불투명하게 만듦 (Fade In)
        setTimeout(() => {
            if (sliderImage) sliderImage.src = data.image;
            if (sliderTags) sliderTags.innerHTML = data.tags;
            if (sliderTitle) sliderTitle.innerText = data.title;
            if (sliderMentor) sliderMentor.innerText = data.mentor;
            if (sliderDesc) sliderDesc.innerText = data.desc;

            if(contentContainer) contentContainer.classList.remove('fade');
            
            // 애니메이션 락 해제
            setTimeout(() => { isAnimating = false; }, 400); 
        }, 400); 
    }

    if (prevBtn && nextBtn && sliderImage) {
        nextBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (isAnimating) return; // 애니메이션 중 클릭 무시
            currentIndex++;
            if (currentIndex >= historyData.length) {
                currentIndex = 0; 
            }
            updateSectionContent(currentIndex);
        });

        prevBtn.addEventListener("click", (e) => {
            e.preventDefault();
            if (isAnimating) return; // 애니메이션 중 클릭 무시
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = historyData.length - 1; 
            }
            updateSectionContent(currentIndex);
        });
    }
});