import React from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

export default (props) => {
  return (
    <div id="movie-results">
      <Grid>
        <Row className="show-grid">
          <Col xs={6} md={6}>
            <p id="movie-title">{props.movie.Title}</p>
          </Col>
          <Col xs={6} md={6}>
            <img className="img-responsive" src={props.movie.Poster} alt={props.movie.Title} width="100"/>
          </Col>
        </Row>
      </Grid>
    </div>
  )
}
