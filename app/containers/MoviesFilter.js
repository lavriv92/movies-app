import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { setMoviesFilter } from '../actions';

class MoviesFilter extends Component {

  setFilter(filter) {
    const { dispatch } = this.props;
    dispatch(setMoviesFilter(filter));
  }

  render() {
    return (
      <div className="row page-header">
        <div className="btn-group pull-right">
          <button className="btn btn-success" onClick={this.setFilter.bind(this, 'ALL')}>All</button>
          <button className="btn btn-success" onClick={this.setFilter.bind(this, 'MOVIES')}>Movies</button>
          <button className="btn btn-success" onClick={this.setFilter.bind(this, 'GAMES')}>Games</button>
          <button className="btn btn-success" onClick={this.setFilter.bind(this, 'SERIES')}>TV Series</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    filter: state.moviesFilter
  };
}

MoviesFilter.propTypes = {
  dispatch: PropTypes.func.isRequired
}

export default connect(mapStateToProps)(MoviesFilter);
