import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@components/icon';

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
          <a
            className="App-link"
            target="_blank"
            href="https://github.com/em2046/cobalt"
          >
            <Icon type="github" />
            GitHub
          </a>
        </header>
      </div>
    );
  }
}

export default Home;
