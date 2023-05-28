import React, { useEffect, useMemo, useState } from "react";
import MovieCard from "../../components/movie/MovieCard";
import axios from "axios";

const Movies = () => {
  const [moviesList, setMoviesList] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3002/get-movies-list").then(({ data }) => {
      setMoviesList(JSON.parse(data?.data));
    });
  }, []);

  const showMovies = useMemo(() => {
    return moviesList?.map((movie) => {
      return (
        <div className="col-sm-12 col-md-6 col-lg-6 col-xl-4">
          <MovieCard key={movie.Id} movie={movie} />
        </div>
      );
    });
  }, [moviesList]);
  return (
    <div className="container mb-4">
      <div className="row">{showMovies}</div>
    </div>
  );
};

export default Movies;
