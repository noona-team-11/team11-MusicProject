// 검색 안내 타이틀
const text = "어떤 음악을 찾고 있나요?";
const speed = 100;
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

let $taskInput = document.querySelector('.search-data');


$taskInput.addEventListener('keypress', (event) => {
	if(event.key == 'Enter'){
		event.preventDefault(); // 폼 제출 방지
		addTask();//enter 키를 눌렸을 때 실행할 동작
	}
})

const addTask = () => {
	if($searchData.value === '') {
		alert('음악을 입력해 주세요.')
		return;
	} else {
		$searchResult.classList.add('on');
		$wrap.style.overflowY = 'auto';
		$searchInfo.style.display = ('none');
		$searchWrap.classList.add('search-value');
	}
}

//video player
const videoPlay = document.querySelectorAll('.play_btn').forEach(button => {
	button.addEventListener('click', () => {
		const parent = document.querySelector('.video_img');
		const sibling  = document.querySelector('.video-play');
		
		parent.style.display = 'none';
		sibling.classList.add('active');
	});
});

//slide item click
const slideItemClick = document.querySelectorAll('.slide-item').forEach((item, index) => {
	item.addEventListener('click', function() {
			const slideImgSrc = this.querySelector('.slide-img').getAttribute('src');
			const videoImg = document.querySelector('.video_img');
			videoImg.style.backgroundImage = `url(${slideImgSrc})`;
	});
});

//swiper option
const musicSwiper = new Swiper(".swiper", {
	freeMode: true,
	keyboard: true,
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

