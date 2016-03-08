import { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { fetchMovies, searchMovies } from '../actions';
import Movie from '../components/movies/Movie';
import MoviesFilter from './MoviesFilter';

class MoviesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      searchKey: ''
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchMovies(1, this.state.searchKey));
  }

  handleSearch(e) {
    const { dispatch } = this.props;
    this.setState({ searchKey: e.target.value });
    dispatch(searchMovies(this.state.page, this.state.searchKey))
  }

  loadMore() {
    const { dispatch } = this.props;
    this.state.page++;
    dispatch(fetchMovies(this.state.page, this.state.searchKey))
  }

  render() {
    let movies = this.props.movies.map(movie => {
      return (<div className="box col-md-4 text-center" key={movie.imdbID}>
        <Movie movie={movie} />
      </div>);
    });

    return (
      <div>
        <div className="col-md-4">
          <input className="form-control pull-left"
                onKeyDown={this.handleSearch.bind(this)}
                placeholder="Search"
          />
        </div>
        <MoviesFilter />
        <div className="row">
          <h3>Total: {this.props.total}</h3>
          {movies}
        </div>
        <div className="row text-center">
          <button className="btn btn-success btn-large"
            onClick={this.loadMore.bind(this)}>Load more</button>
        </div>
    </div>
    );
  }
}

MoviesList.propTypes = {
  dispatch: PropTypes.func.isRequired,
  movies: PropTypes.array.isRequired
};

function getVisibleMovies(state, filter) {
  switch (filter) {
    case 'ALL':
      return state;
    case 'GAMES':
      return state.filter(m => m.Type === 'game')
    case 'MOVIES':
      return state.filter(m => m.Type === 'movie')
    case 'SERIES':
      return state.filter(m => m.Type === 'series')
    default:
      return state

  }
}

function mapStateToProps (state) {
  return {
    movies: getVisibleMovies(state.movies.items, state.moviesFilter),
    total: state.movies.total
  };
};

export default connect(mapStateToProps)(MoviesList);
