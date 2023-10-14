let allMovies = [];
{
  /* <div  class="contentBox"></div> */
}
//Define a movie class with parameters title (string), rating (number) and haveWatched (boolean)
class Movie {
  constructor(title, rating, havewatched) {
    this.title = title;
    this.rating = rating;
    this.havewatched = havewatched;
  }
}

//add a movie OBJECT to the allMovies array
let addMovie = (movie) => {
  document.getElementById("output").innerHTML +=
    "A new movie is added<br/><br/>";
  const { title, rating, havewatched } = movie;

  allMovies.push({
    title,
    rating,
    havewatched,
  });
};

//iterate through all elements of allMovies array
//Display the total number of movies in allMovies array
let printMovies = () => {
  let output = "";
  document.getElementById("output").innerHTML += "Printing all movies....<br/>";
  allMovies.forEach(
    (movie) =>
      (output += `${movie.title}, rating of ${movie.rating}, havewatched: ${movie.havewatched}<br>`)
  );
  output += `</br>You have ${allMovies.length} movies in total</br>`;

  // Update the content of the output div
  document.getElementById(
    "output"
  ).innerHTML += `<div class="contentBox">${output}</div><br/>`;
};

//Display only the movies that has a rating higher than rating(argument)
//Display the total number of matches
let highRatings = (rating) => {
  let output;
  document.getElementById(
    "output"
  ).innerHTML += `printing movie that has a rating higher than ${rating}<br>`;
  var fileteredMovies = allMovies.filter((movie) => movie.rating > rating);
  fileteredMovies.forEach(
    (movie) => (output += `${movie.title} has a rating of ${movie.rating}<br>`)
  );
  output += `</br>In total, there are ${fileteredMovies.length} matches`;
  document.getElementById(
    "output"
  ).innerHTML += `<div class="contentBox">${output}</div>`;
};

//Toggle the 'haveWatched' property of the specified movie
let changeWatched = (title) => {
  document.getElementById("output").innerHTML +=
    "changing the status of the movie...<br/><br/>";
  allMovies = allMovies.filter((movie) => {
    if (movie.title == title) {
      movie.havewatched = !movie.havewatched;
      return movie;
    }
    return movie;
  });
};

////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE
let x = new Movie("Spiderman", 3, true);
let y = new Movie("Citizen Kane", 4, false);
let z = new Movie("Zootopia", 4.5, true);

allMovies.push(x, y, z);

/*replace console.log with display on web page*/
console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();

let movie1 = new Movie("Parasite", 2, false);

/*replace console.log with display on web page*/
console.log("----------------");
addMovie(movie1);
console.log("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();

/*replace console.log with display on web page*/
console.log("----------------");

changeWatched("Spiderman");
/*replace console.log with display on web page*/
console.log("----------------");

printMovies();
/*replace console.log with display on web page*/
console.log("----------------");

highRatings(3.5);
