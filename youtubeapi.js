// let singer = "아이유" //document.getElementById("singer");
// let songTitle = "무릎" //document.getElementById("song-title");
// let videoArea = document.getElementById("video-area");


// const API_KEY = "AIzaSyDSDhqWaf8SlzZyCkBF4Wv0ZEFslmQj8wY" // kgmblue9@gmail.com #1
// const API_KEY = "AIzaSyACluLZVihJAQrSJeQ4aZUIG1hRzLO7sVk" // kgmblue9@gmail.com #2

// const API_KEY = "AIzaSyDz-rvZIferhXPI8Hzktj9cTRl6Xbi6lAg" // kgmlovee9@gmail.com

// function execute() {

//   const settings = {

//     // "url": `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&type=video&order=viewCount&q=${singer.value.value}&amp;${songTitle}&key=${API_KEY}`,
//     "url": `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=3&type=video&order=viewCount&q=${singer}&amp;${songTitle}&key=${API_KEY}`,
//     "method": "GET",
//     "timeout": 0,
//   }

//     return $.ajax(settings).done(function (response) {
//     })
//         .then(function(response) {
//                 // Handle the results here (response.result has the parsed body).
//                 console.log("Response", response);
//                 console.log("videoId", response.items[0].id.videoId);

//                 let resultHTML = `
//                 <iframe class="video_img" src="https://www.youtube.com/embed/${response.items[0].id.videoId}?autoplay=1&amp;enablejsapi=1&amp;mute=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;controls=0&amp;loop=0" frameborder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowfullscreen></iframe>`

//                 videoArea.innerHTML = resultHTML;

//               },
//               function(err) { console.error("Execute error", err); });

//   }


// function cancel() {
	
// 	let resultHTML = ``
	
// 	resultHTML = `
// 	<div class="video_img" style="background-image: url(https://hybecorp.com/archive/SYN8Dezw3cxzmcyKoqFBHka7IW9KaX8TfpaEdUbw6SopJMSser2UbzWeVvJvXNfxDKXr7e2IVirKcMDKt3AfaNUhDi3M4l5VeTiQsSThhfetQ6F3q4y9kMxU8A240GPO.jpg);">
// 	<a href="#none" class="play_btn"></a>
	
// 	<iframe class="video-play" src="https://www.youtube.com/embed/UNo0TG9LwwI?autoplay=0&amp;enablejsapi=1&amp;mute=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;controls=0&amp;loop=0" frameborder="0"
// 	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
// 	allowfullscreen></iframe>

// 	<div class="video-text-wrap">
// 	<div class="video-main-text">BTS</div>
// 	<div class="video-sub-text">Standing Next to You</div>
// 	</div>
// 	</div>`
	
// 	return    videoArea.innerHTML = resultHTML;
// }

let singer = "아이유" //document.getElementById("singer");
let songTitle = "무릎" //document.getElementById("song-title");
let videoArea = document.getElementById("video-area");
function execute() {
	
	let resultHTML = ``
	
	resultHTML = `
	<iframe class="video_img" src="https://www.youtube.com/embed/gdZLi9oWNZg?autoplay=1&amp;enablejsapi=1&amp;mute=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;controls=0&amp;loop=0" frameborder="0"
	allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
	allowfullscreen></iframe>`
	
	return    videoArea.innerHTML = resultHTML;
}
// 비디오 재생 버튼 클릭 시 실행
const videoPlayBtn = document.querySelectorAll('.play_btn');
videoPlayBtn.forEach(playBtn => {
    playBtn.addEventListener('click', function() {
        // 클릭한 버튼의 data-video-url 속성 값 가져오기
        const videoUrl = this.parentElement.getAttribute('data-video-url');
        if (videoUrl) {
            // video-play의 iframe에 해당 URL을 설정하여 재생
            const videoIframe = document.querySelector('.video-play');
            videoIframe.src = videoUrl;
        }
    });
});