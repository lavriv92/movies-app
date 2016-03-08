import { Component } from 'react';
import { Link } from 'react-router';


export default class Header extends Component {
  render() {
    return (
      <header className="navbar navbar-custom navbar-static-top">
        <div className="navbar-header">
          <div className="navbar-brand">
            <Link to="/">Movies app</Link>
          </div>
        </div>
        <nav className="nav navbar-nav pull-right">
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </nav>
      </header>
    );
  }
}
