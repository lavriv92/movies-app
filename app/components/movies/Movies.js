import { Component } from 'react';
import MoviesList from '../../containers/MoviesList';

export default class Movies extends Component {
  render() {
    return (
      <div className="row">
        <h2>Movies</h2>
        <MoviesList />
      </div>
    )
  }
}
