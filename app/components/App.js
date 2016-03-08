import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container full-height">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}
