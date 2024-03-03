// 검색 안내 타이틀
let text = "어떤 음악을 찾고 있나요?";
const speed = 150;
let i = 0;

const titleTyping = () => {
	
	if(i < text.length)	{
		document.querySelector('.search-txt').textContent	+= text.charAt(i);
		i++;
		setTimeout(titleTyping, speed);
	}
}
titleTyping();

// Enter버튼 클릭한 이후 실행
const $wrap = document.querySelector('.wrap');
const $searchResult = document.querySelector('.search-result');
const $searchForm = document.querySelector('.searchForm');
const $searchInfo = document.querySelector('.search-info');
const $searchWrap = document.querySelector('.search-wrap');
const $searchData = document.querySelector('.search-data');

// video player
document.querySelector('.video-wrap').addEventListener('click', function(event) {
    if (event.target.classList.contains('play_btn')) {
        execute(); // execute 함수 호출
        event.stopPropagation(); // 이벤트 전파 중단
        event.preventDefault(); // 기본 동작 중단
        event.target.style.display = 'none'; // 클릭된 버튼을 숨김
    }
});

// 썸네일 클릭한 이후 video_img 이미지 변경
function updateVideoBackgroundImage() {
    const videoImg = document.querySelector('.video_img');
    const playBtn = document.querySelector('.play_btn'); // play_btn 요소 선택

    const slideItems = document.querySelectorAll('.slide-item');
    slideItems.forEach(item => {
        item.addEventListener('click', function() {
            const slideImgSrc = this.querySelector('.slide-img').getAttribute('src');
            videoImg.style.backgroundImage = `url(${slideImgSrc})`;

            // play_btn 버튼 보이기
            playBtn.style.display = 'block';
			
            // .search-result에 on 클래스 추가하여 opacity를 1로 설정
            document.querySelector('.search-result').classList.add('on');
        });
    });
}

updateVideoBackgroundImage(); // 이미지 업데이트 호출


//swiper option
const musicSwiper = new Swiper(".swiper", {
	freeMode: true,
	keyboard: true,
	aspectRatio: 1,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	pagination: {
		el: ".swiper-pagination",
	},
	on: {
		init : function() {
			updateNavButtons(this);
		},
		slideChange: function () {
			updateNavButtons(this);
		},
	},
	breakpoints: {
		// when window width is >= 320px
		320: {
			slidesPerView: 1.5,
			spaceBetween: 10
		},
		// when window width is >= 480px
		600: {
			slidesPerView: 4.5,
			spaceBetween: 10
		},
		// when window width is >= 640px
		992: {
			slidesPerView: "6.5",
			spaceBetween: 10
		},
	},
});

//slide button
function updateNavButtons(swiper) {
	const $prevButton = document.querySelector(".swiper-button-prev");
	const $nextButton = document.querySelector(".swiper-button-next");
	
	if (swiper.isBeginning) {
		$prevButton.style.display = 'none';
	} else {
		$prevButton.style.display = 'block';
	}
	if (swiper.isEnd) {
		$nextButton.style.display = 'none';
	} else {
		$nextButton.style.display = 'block';
	}
}