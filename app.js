require("dotenv").config();
let spotifySearch = require("./spotifySearch");
let bandsInTownSearch = require("./bandsInTownSearch");
let omdbSearch = require("./omdbSearch");
let searchParams = require("./searchParams");

let operation = process.argv[2];
let userInput = process.argv.splice(3, process.argv.length).join(" ");


if (operation == 'spotify-search') {
  spotifySearch(userInput);
} else if (operation == 'bands-in-town-search') {
  bandsInTownSearch(userInput);
} else if (operation == 'omdb-search') {
  omdbSearch(userInput);
} else if (operation == 'search-random') {
  searchParams();
}
