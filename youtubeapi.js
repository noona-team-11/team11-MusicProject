let singer = document.getElementById("singer");
let songTitle = document.getElementById("song-title");
let firstSong = document.getElementById("first-song");
// let singYoutube = document.getElementById("sing-youtube");

// singYoutube.addEventListener("click",render);

function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
  }
  function loadClient() {
    gapi.client.setApiKey("AIzaSyDSDhqWaf8SlzZyCkBF4Wv0ZEFslmQj8wY");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute() {
    return gapi.client.youtube.search.list({
      "part": [
        "snippet"
      ],
      "maxResults": 25,
      "q": `${singer.value}&&${songTitle.value}`,
      "regionCode": "kr"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);

                let resultHTML = `<iframe id="ytplayer" type="text/html" width="720" height="405"
                src="https://www.youtube.com/embed/${response.result.items[0].id.videoId}"
                frameborder="0" allowfullscreen></iframe>
                `
                firstSong.innerHTML = resultHTML;

              },
              function(err) { console.error("Execute error", err); });
              
  }
  
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "480565195212-hlsv6ugibekr2pm4otj9lc2032p53m7o.apps.googleusercontent.com"});
  });

  // function render(){
  //   let resultHTML = `<iframe id="ytplayer" type="text/html" width="720" height="405"
  //   src="https://www.youtube.com/embed/${response.result.items[0].id.videoId}"
  //   frameborder="0" allowfullscreen></iframe>
  //   `
  //   firstSong.innerHTML = resultHTML;
  // }
