require("dotenv").config();
const fs = require("fs");
let spotifySearch = require("./spotifySearch");
let bandsInTownSearch = require("./bandsInTownSearch");
let omdbSearch = require("./omdbSearch");

var searchParams = function() {
    fs.readFile("./defaultSearch.txt", "utf8", function (err, data) {
        if (err) {
            throw err;
        }
        data = data.split(",");
        searchType = data[0];
        userInput = data[1];
        if (searchType == 'spotify-search') {
            spotifySearch(userInput);
        } else if (searchType == 'bands-in-town-search') {
            bandsInTownSearch(userInput);
        } else if (searchType == 'omdb-search') {
            omdbSearch(userInput);
        }
    });
}

module.exports = searchParams;