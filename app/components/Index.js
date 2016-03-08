import { Component } from 'react';

import MoviesList from '../containers/MoviesList';

export default class Index extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-9">
          <MoviesList />
        </div>
        <div className="col-md-3"></div>
      </div>
    )
  }
}
