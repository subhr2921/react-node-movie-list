import React, { useMemo } from "react";
import { Card, CardBody, CardFooter } from "reactstrap";
import ImageSwiper from "./ImageSwiper";

const MovieCard = (props) => {
  const Rating = useMemo(() => {
    let rating = props.movie?.imdbRating;
    let stars = [];
    for (let i = 1; i < 11; i++) {
      let klass = "fa fa-star";
      if (rating >= i && rating !== null) {
        klass = "fa fa-star checked";
      }
      stars.push(
        <i
          style={{ direction: i % 2 === 0 ? "rtl" : "ltr" }}
          className={klass}
          key={`${props.movie?.Id}_${i}`}
        />
      );
    }
    return (
      <div key={props.movie?.Id} className="movie__rating">
        {stars}
      </div>
    );
  }, [props]);

  return (
    <Card className="mt-3">
      <CardBody className="p-0">
        <div className="">
          <ImageSwiper id={props?.movie?.Id} images={props?.movie?.Images} />
        </div>
        <div className="p-2">
          <h6 className="card-title">
            {props.movie.Title}
            <div className="float-right" style={{ display: "flex" }}>
              {Rating}
              <span className="movie__imdb-button">IMDb</span>
            </div>
          </h6>
          <p
            className="card-subtitle mb-1 text-muted"
            style={{ fontSize: "12px" }}
          >
            Date : {props.movie.Released}
          </p>
          <p
            className="card-subtitle mb-1 text-muted"
            style={{ fontSize: "12px" }}
          >
            Duration: {props.movie.Runtime}
          </p>
          <p
            className="pb-0"
            style={{ fontSize: "12px", height: "75px", overflowY: "scroll" }}
          >
            {props.movie.Plot}
          </p>
        </div>
      </CardBody>
      <CardFooter className="p-2">
        <div className="clearfix">
          <div className="float-left mt-1">
            <p className="mb-1" style={{ fontSize: "12px" }}>
              <b>Director</b>: {props.movie.Director}
            </p>
            <p
              className="text-justify"
              style={{ fontSize: "12px", height: "30px" }}
            >
              <b>Cast</b>: {props.movie.Actors}
            </p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default MovieCard;
