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
const videoPlay = document.querySelectorAll('.play_btn').forEach(button => {
	button.addEventListener('click', () => {

		execute(); // 동영상 버튼 클릭하면 유튜브 동영상 자동 실행
		button.style.display = 'none'; // play_btn 버튼 숨기기
	});
});

// 썸네일 클릭한 이후 video_img 이미지 변경
function updateVideoBackgroundImage() {
    const videoImg = document.querySelector('.video_img');
    const playBtn = document.querySelector('.play_btn'); // play_btn 요소 선택
    const videoPlay = document.querySelector('.video-play'); // video-play 요소 선택

    const slideItems = document.querySelectorAll('.slide-item');
    slideItems.forEach(item => {
        item.addEventListener('click', function() {
            const slideImgSrc = this.querySelector('.slide-img').getAttribute('src');
            videoImg.style.backgroundImage = `url(${slideImgSrc})`;
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