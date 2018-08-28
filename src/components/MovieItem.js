import React, { Component } from 'react';
import {
  Grid,
  Row,
  Col
} from 'react-bootstrap';

export default class MovieItem extends Component {
  render() {
    return (
      <div id="movie-results">
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={6}>
              <a onClick={() => this.props.getMovieInfo()}>
                <p id="movie-title">{this.props.movie.Title}</p>
              </a>
            </Col>
            <Col xs={6} md={6}>
              <img className="img-responsive" src={this.props.movie.Poster} alt={this.props.movie.Title} width="100"/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}