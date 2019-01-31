import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Cobalt</h1>
          <p>A simple React Component Library</p>
          <Link className="App-link" to="/button">
            Learn More
          </Link>
        </header>
      </div>
    );
  }
}

export default Home;
