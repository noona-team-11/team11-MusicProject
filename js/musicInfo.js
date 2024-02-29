const clientId = `71054472ad4f4db3b38f6a60fbb8c6b1`;

const clientSecret = `8ae11bdacdb04a1b9ed655ccfc794240`;

let albumId = '3HqSLMAZ3g3d5poNaI7GOU';
let artist = '';
let songName = '';
let songImage = '';
let keyword = '';
keyword = 'ariana';

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

// Step 2: 키워드로 검색하기

const spotify_search_one = await axios.get('https://api.spotify.com/v1/search', {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },

  params: {
    q: keyword,

    type: 'album',

    limit: 10,
  },
});

console.log(spotify_search_one.data);
console.log(spotify_search_one.data.albums.items[0].name);
console.log(spotify_search_one.data.albums.items[0].images[0].url);
console.log(spotify_search_one.data.albums.items[0].artists[0].name);
// console.log(spotify_search_one.data.albums.items[0].id);
albumId = spotify_search_one.data.albums.items[0].id;

// 검색결과를 바탕으로 하나씩 정보 받기

albumId = '4IQ9AV1mEjteHrc8KzMDDT';

const spotify_search_album_by_id = await axios.get(`https://api.spotify.com/v1/albums/${albumId}`, {
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

// console.log(' 순수 바닐라 자스 : '.spotify_search_album_by_id);
// console.log('하이');

songName = spotify_search_one.data.albums.items[0].name;
artist = spotify_search_one.data.albums.items[0].artists[0].name;
songImage = spotify_search_one.data.albums.items[0].images[0].url;

const render = () => {
  const songsHTML = `
        <div class="row musics">
          <div class="col-lg-4">
          <img
          class="music-img-size"
          src=${songImage}
          alt="앨범 이미지"
        />
          </div>
          <div class="col-lg-8">
            <h2>${artist}</h2>
            <p class="music-text">${songName}</p>
          </div>
        </div>
        `;

  document.getElementById('musicInfo').innerHTML = songsHTML;
};

render();
