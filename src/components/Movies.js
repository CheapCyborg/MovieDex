import React, { Component } from 'react';
import MovieInfoPage from './MovieInfoPage';
import MovieItem from './MovieItem';

export default class Movies extends Component {
  constructor() {
    super();
    this.state = {
      movieInfo: {},
      movieInfoClicked: false
    }
  }
    getMovieInfo = (id) => {
    let url = `http://www.omdbapi.com/?i=${id}&plot=full&apikey=8509c42b`
    console.log(url)
    fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      this.setState({
        movieInfo: data,
        movieInfoClicked: true
      });
    });
  }
  render() {
    let movieList;
    if(this.props.movies != null) {
      movieList = this.props.movies.map((movie, i) => {
      return (
        <MovieItem key={i} movie={movie} getMovieInfo={this.getMovieInfo.bind(this, movie.imdbID)}/>
      );
    });
  }
    if(!this.state.movieInfoClicked){
      return(
        <div>
          {movieList}
        </div>
      )
    }
    return (
      <div>
        <MovieInfoPage data={this.state.movieInfo} />
      </div>
    );
  }
}
