import React, { Component } from 'react';

class MovieEntry extends Component {
	render() {
      const { users, whichMovie, movieFans } = this.props;
      console.log(movieFans);
      return (
        <div key={whichMovie.id}>
      		<h2>{whichMovie.name}</h2>
        	<h3>Liked By:</h3>
        	{
        	(movieFans && movieFans.length) ? (
      			movieFans.map(userId => {
        			return (
        				<li key={userId}>{users[userId].name}</li>
      				);
        		})
      		) : (
            	<p>None of the current users liked this movie.</p>
            )
        	}
        </div>
      )
    }
}

export default MovieEntry;