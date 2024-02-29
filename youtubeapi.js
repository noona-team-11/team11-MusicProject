let singer = document.getElementById("singer");
let songTitle = document.getElementById("song-title");
let firstSong = document.getElementById("first-song");

function execute() {

  const settings = {
    "url": `https://www.googleapis.com/youtube/v3/search?key=AIzaSyDSDhqWaf8SlzZyCkBF4Wv0ZEFslmQj8wY&q=${singer.value}+${songTitle}`,
    "method": "GET",
    "timeout": 0,
  }

    return $.ajax(settings).done(function (response) {
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);

                let resultHTML = `<iframe id="ytplayer" type="text/html" width="720" height="405"
                src="https://www.youtube.com/embed/${response.items[0].id.videoId}"
                frameborder="0" allowfullscreen></iframe>
                `
                firstSong.innerHTML = resultHTML;

              },
              function(err) { console.error("Execute error", err); });
       
  }
