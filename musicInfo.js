const clientId = '71054472ad4f4db3b38f6a60fbb8c6b1';
const clientSecret = '8ae11bdacdb04a1b9ed655ccfc794240';
let albumList = [];
let keyword = '';
let spotify_search_one = '';
let musicHTML = '';

let accessToken;  // accessToken을 더 높은 범위에서 선언

const startSpotify = async () => {
  try {
    const tokenResponse = await axios.post(
      'https://accounts.spotify.com/api/token',
      `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      }
      );
      
      accessToken = tokenResponse.data.access_token;
    } catch (error) {
      console.error('Access Token 얻기 오류:', error);
    }
  };
  
  // startSpotify 함수를 호출하여 액세스 토큰을 얻습니다.
  startSpotify();
  
  async function render() {
    for (let i = 0; i < songList.length; i++) {
      keyword = songList[i].title + ' ' + songList[i].singer;
      
      spotify_search_one = await axios.get('https://api.spotify.com/v1/search', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      params: {
        q: keyword,
        type: 'track',
        limit: 1,
      },
    });
    
    musicHTML += `
    <div class="swiper-slide slide-list" data-swiper-autoplay="5000" data-video-idx="1" data-video-type="Youtube">
    <a href="#none" class="slide-item">
    <img class="slide-img" alt="앨범이미지" src=${spotify_search_one.data.tracks.items[0].album.images[0].url}>
    </a>
    </div>
    `;

  }
  
  document.querySelector('.swiper-wrapper').innerHTML += musicHTML;
  
  updateVideoBackgroundImage(); //240303 Eunju추가
  
  $searchResult.classList.add('on');
  $wrap.style.overflowY = 'auto';
  $searchInfo.style.display = ('none');
  $searchWrap.classList.add('search-value');

//slide item click
const slideItemClick = document.querySelectorAll('.slide-list').forEach((item, index) => {
	item.addEventListener('click', function() {
        
		console.log(document.querySelectorAll('.slide-list'));
		indexNum = index;
		console.log("리스트클릭", index);
		    
		cancel(); // 슬라이드 클릭하면 동영상 중지하고 원래 코드로 복귀

			const slideImgSrc = this.querySelector('.slide-img').getAttribute('src');
			const videoImg = document.querySelector('.video_img');
			videoImg.style.backgroundImage = `url(${slideImgSrc})`;

    console.log(this.querySelector('.play_btn'))
    execute()
			


	});
});

}