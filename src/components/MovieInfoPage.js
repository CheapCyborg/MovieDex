import React from "react";
import MovieRatings from "./MovieRatings";
import { Media } from "react-bootstrap";

export default props => {
  let movieRatings = props.data.Ratings.map((ratings, i) => {
    return <MovieRatings key={i} rating={ratings} />;
  });
  return <div id="movie-info">
      <Media>
        <Media.Left align="top">
          <img src={props.data.Poster} alt="thumbnail" />
          {movieRatings}
        </Media.Left>
        <Media.Body>
          <Media.Heading id="movie-info-title">
            {props.data.Title}
          </Media.Heading>
          <p className="movie-info-description">{props.data.Plot}</p>
          <p className="movie-info-description">
            <strong>Actors:</strong> {props.data.Actors}
          </p>
          <p className="movie-info-description">
            <strong>Director:</strong> {props.data.Director}
          </p>
          <p className="movie-info-description">
            <strong>Writers:</strong> {props.data.Writer}
          </p>
          <p className="movie-info-description">
            <strong>Genre:</strong> {props.data.Genre}
          </p>
        </Media.Body>
      </Media>
    </div>;
};
