import React, { Component } from 'react';
import './App.css';

import Button from './components/button/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="default" />
      </div>
    );
  }
}

export default App;
