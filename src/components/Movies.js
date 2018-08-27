import React, { Component } from 'react';
import MovieItem from './MovieItem';

export default class Movies extends Component {
  render() {
    let movieList;
    if(this.props.movies != null) {
      movieList = this.props.movies.map((movie, i) => {
      return (
        <MovieItem key={i} movie={movie}/>
      );
    });
  }
    return (
      <div>
        {movieList}
      </div>
    );
  }
}
