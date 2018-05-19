import React, { Component } from 'react';

class MovieEntry extends Component {
	render() {
      const { users, whichMovie, movieFans } = this.props;
      return (
        <li key={whichMovie.id}>
      		<h2>{whichMovie.name}</h2>
        	<h3>Liked By:</h3>
        	{
        	movieFans.length ? (
      			movieFans.map(userId => {
        			return (
      					<li key ={userId}>
        					<p>{users[userId.name]}</p>
        				</li>
      				);
        		})
      		) : (
            	<p>None of the current users liked this movie.</p>
            )
        	}
        </li>
      )
    }
}

export default MovieEntry;