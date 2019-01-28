import React, { Component } from 'react';
import './App.css';

import Button from './components/button/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="default" />
        <Button type="primary" />
        <Button type="warning" />
      </div>
    );
  }
}

export default App;
