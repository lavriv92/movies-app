import { Component, PropTypes } from 'react';


class Movie extends Component {
  render() {
    let movie = this.props.movie;
    return (
      <div>
        <div>
          <img src={movie.Poster} width="200" height="300" />
        </div>
        <h3>{movie.Title}</h3>
      </div>
    );
  }
}

Movie.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default Movie;
