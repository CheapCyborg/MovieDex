import React from "react";
import { Grid, Row, Col } from "react-bootstrap";

export default props => {
  return (
    <div>
      <Grid>
        <Row className="show-grid">
          <Col xs={6} md={6}>
            <a onClick={() => props.getMovieInfo()}>
              <p id="movie-title">{props.movie.Title}</p>
            </a>
          </Col>
          <Col xs={6} md={6}>
            <img
              className="img-responsive"
              src={props.movie.Poster}
              alt={props.movie.Title}
              width="100"
            />
          </Col>
        </Row>
      </Grid>
    </div>
  );
};
