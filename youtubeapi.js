//let singer = "아이유" //document.getElementById("singer");
let indexNum = 0;


let videoArea = document.getElementById("video-area");
// let playBtn = document.querySelector(".play_btn");

// 유튜브 API KEY 변경하면서 사용
// const API_KEY = "AIzaSyDSDhqWaf8SlzZyCkBF4Wv0ZEFslmQj8wY" // kgmblue9@gmail.com #1
// const API_KEY = "AIzaSyACluLZVihJAQrSJeQ4aZUIG1hRzLO7sVk" // kgmblue9@gmail.com #2
 const API_KEY = "AIzaSyDz-rvZIferhXPI8Hzktj9cTRl6Xbi6lAg" // kgmlovee9@gmail.com

function execute() {

  let songTitle = `${songList[indexNum].singer} ${songList[indexNum].title}`

  console.log(songTitle);

  const settings = {
    
    "url": `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&type=video&videoEmbeddable=true&videoSyndicated=true&q=${songTitle}&key=${API_KEY}`,
    "method": "GET",
    "timeout": 0,
  }

    return $.ajax(settings).done(function (response) {
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
                console.log("videoId", response.items[0].id.videoId);

                let resultHTML = `
                <iframe class="video_img" src="https://www.youtube.com/embed/${response.items[0].id.videoId}?autoplay=1&amp;enablejsapi=1&amp;mute=0&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;controls=0&amp;loop=0" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>`

                videoArea.innerHTML = resultHTML;

              },
              function(err) { console.error("Execute error", err); });     
  }

  function cancel() {
    
    let resultHTML = ``

    resultHTML = `
              <div class="video_img" style="background-image: url(https://hybecorp.com/archive/SYN8Dezw3cxzmcyKoqFBHka7IW9KaX8TfpaEdUbw6SopJMSser2UbzWeVvJvXNfxDKXr7e2IVirKcMDKt3AfaNUhDi3M4l5VeTiQsSThhfetQ6F3q4y9kMxU8A240GPO.jpg);">
                <a href="#none" class="play_btn"></a>
                <iframe class="video-play" src="https://www.youtube.com/embed/UNo0TG9LwwI?autoplay=0&amp;enablejsapi=1&amp;mute=1&amp;showinfo=0&amp;rel=0&amp;modestbranding=1&amp;controls=0&amp;loop=0" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
                <div class="video-text-wrap">
                  <div class="video-main-text">BTS</div>
                  <div class="video-sub-text">Standing Next to You</div>
                </div>
              </div>`

              videoArea.innerHTML = resultHTML;
  }