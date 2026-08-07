"use strict";
let MovieTitle = "Baahubali: The Beginning";
let ReleaseYear = 2015;
let isBlockbuster = true;
function getMovieStatus(title, year, status) {
    return `${title} was a massive hit released in ${year} and it is a ${status ? "blockbuster" : "flop"}`;
}
let leadActors = ["Prabhas", "Rana Daggubati", "Anushka Shetty", "Tamannaah"];
const summary = getMovieStatus(MovieTitle, ReleaseYear, isBlockbuster);
console.log(summary);
console.log(`Starring: ${leadActors.join(", ")}`);
console.log(`Is it a blockbuster? ${isBlockbuster ? "Yes, Jai Mahishmati!" : "No"}`);
