const addMovieSchema = {
  type: "object",
  properties: {
    Title: { type: "string" },
    Released: { type: "string" },
    Runtime: { type: "string" },
    Genre: { type: "string" },
    Actors: { type: "string" },
    imdbRating: { type: "string" },
    imdbVotes: { type: "string" },
    Images: { type: "string" },
    Director: { type: "string" },
    Plot: { type: "string" },
  },
  required: [
    "Title",
    "Released",
    "Runtime",
    "Genre",
    "Plot",
    "Director",
    "Images",
    "Actors",
    "imdbRating"
  ],
  additionalProperties: true,
};

module.exports = { addMovieSchema };
