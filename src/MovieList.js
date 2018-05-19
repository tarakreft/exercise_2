import React, { Component } from 'react';
import MovieEntry from './MovieEntry';

class MovieList extends Component {
	render() {    
     const { movies, movieFans } = this.props;
    	return (
          Object.keys(movies).map(id => {
            return (
              <MovieEntry
                  key={id}
                  whichMovie={movies[id]}
                  movieFans={movieFans[id]}
              />
            )
		  })
        )
    }
}

export default MovieList;