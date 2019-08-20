require("dotenv").config();

const keys = require("./keys");
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);

var spotifySearch = function (userInput) {
    let song = userInput;

    if (song === "") {
        song = "I'm Still A Guy";
    }
    spotify.search({ type: 'track', query: song, limit: 1 }, function (err, data) {

        if (err) {
            console.log('Error occurred: ' + err);
        }

        else {
            for (let i = 0; i < data.tracks.items.length; i++) {
                console.log("==================================");
                console.log('Artist: ' + data.tracks.items[i].artists[0].name);
                console.log('Song name: ' + data.tracks.items[i].name);
                console.log('Preview: ' + data.tracks.items[i].preview_url);
                console.log('Album: ' + data.tracks.items[i].album.name);
                console.log("==================================");
            }
        }
    });
}


module.exports = spotifySearch;
