require("dotenv").config();


const axios = require("axios");
var omdbSearch= function(userInput) {
    let movie = userInput;
    if (movie === "") {
        movie = "Interstellar";
    }
    axios.get("http://www.omdbapi.com/?t=" + movie + "&apikey=trilogy").then(function (response) {
        console.log("==================================");
        console.log("Title: " + response.data.Title);
        console.log("Release Year: " + response.data.Year);
        console.log("IMDB rating: " + response.data.imdbRating);
        console.log("Rotten Tomatoes rating: " + response.data.Ratings[0].Value);
        console.log("Country Produced in: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
        console.log("==================================");
        
    });
}

module.exports = omdbSearch;