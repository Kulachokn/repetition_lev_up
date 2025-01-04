class Movie {
  constructor(title, director, genre, releaseYear, rating) {
  this.title = title,
  this.director = director,
  this.genre = genre,
  this.releaseYear = releaseYear,
  this.rating = rating
  }

  get overview() {
    return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
  }
};

const Snatch = new Movie("Snatch", "Guy Richie", "Dark Comedy", 2000, 8.2);
console.log(Snatch);
console.log(Snatch.overview);

//======================================================
// function Movie(title, director, genre, releaseYear, rating) {
//   this.title = title;
//   this.director = director;
//   this.genre = genre;
//   this.releaseYear = releaseYear;
//   this.rating = rating;
// }

// Movie.prototype.getOverview = function() {
//   return `${this.title}, a ${this.genre} film directed by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}`;
// };

// const Snatch = new Movie("Snatch", "Guy Richie", "Dark Comedy", 2000, 8.2);
// console.log(Snatch);
// console.log(Snatch.getOverview());
//======================================================