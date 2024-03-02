const clientId = `71054472ad4f4db3b38f6a60fbb8c6b1`;
const clientSecret = `8ae11bdacdb04a1b9ed655ccfc794240`;
let albumList = [];
let albumId = '';
let artist = '';
let songName = '';
let songImage = '';
let keyword = '';
let spotify_search_one = '';

const btn = document.querySelector('.title-small');
btn.addEventListener('click', async function () {
  let i = 0;
  for (i = 0; i < songList.length; i++) {
    keyword = songList[i].title + ' ' + songList[i].singer;
    console.log('재희의 테스트 : ', songList);
    console.log('재희의 테스트 : ', keyword);
    console.log(keyword);

    // Step 2: 키워드로 검색하기
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

    const render = () => {
      songName = spotify_search_one.data.tracks.items[0].name;
      artist = spotify_search_one.data.tracks.items[0].artists[0].name;
      songImage = spotify_search_one.data.tracks.items[0].album.images[0].url;
      albumList = spotify_search_one.data.tracks.items[0];
      console.log(spotify_search_one);

      const musicHTML = `
        <div class="swiper-slide slide-list" data-swiper-autoplay="5000" data-video-idx="1" data-video-type="Youtube">
                  <a href="#none" class="slide-item">
                    <img class="slide-img" alt="앨범이미지" src=${songImage}>
                  </a>
                </div>
          `;

      document.querySelector('.swiper-wrapper').innerHTML += musicHTML;
    };

    // startSpotify();
    render();
  }
});

// Step 1: Access Token 받기

const tokenResponse = await axios.post(
  'https://accounts.spotify.com/api/token',

  `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,

  {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  }
);

const accessToken = tokenResponse.data.access_token;

const startSpotify = async () => {};

console.log('필요한 데이터 : ', spotify_search_one);
console.log('필요한 데이터 : ', spotify_search_one.data.tracks.items[0].name);
console.log('필요한 데이터 : ', spotify_search_one.data.tracks.items[0].artists[0].name);
console.log('필요한 데이터 : ', spotify_search_one.data.tracks.items[0].album.images[0].url);
