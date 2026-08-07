let MovieTitle: string = "Baahubali: The Beginning";
let ReleaseYear: number = 2015;
let isBlockbuster: boolean = true;
function getMovieStatus(title: string, year: number, status: boolean): string {
    return `${title} was a massive hit released in ${year} and it is a ${status ? "blockbuster" : "flop"}`;
}
let leadActors: string[] = ["Prabhas", "Rana Daggubati", "Anushka Shetty", "Tamannaah"];
const summary: string = getMovieStatus(MovieTitle, ReleaseYear, isBlockbuster);
console.log(summary);
console.log(`Starring: ${leadActors.join(", ")}`);
console.log(`Is it a blockbuster? ${isBlockbuster ? "Yes, Jai Mahishmati!" : "No"}`);