const Actor = require("./Actor");
const Director = require("./Director");
const Genre = require("./Genre");
const Movie = require("./Movie");


//1 de muchos a muchos 
Movie.belongsToMany(Genre, {through: "movieGenre"})
Genre.belongsToMany(Movie, {through: "movieGenre"})

//2 de muchos a muchos 
Movie.belongsToMany(Actor, {through: "movieActors"})
Actor.belongsToMany(Movie, {through: "movieActors"})

//3 de muchos a muchos 
Movie.belongsToMany(Director, {through: "movieDirector"})
Director.belongsToMany(Movie, {through: "movieDirector"})