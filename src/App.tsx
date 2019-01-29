import React, { Component } from 'react';
import './App.css';

import Button from './components/button/Button';

class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <Button />
          <Button type="primary" />
          <Button type="warning" />
          <Button type="danger" />
        </section>
        <section>
          <Button loading={true} />
          <Button type="primary" loading={true} />
          <Button type="warning" loading={true} />
          <Button type="danger" loading={true} />
        </section>
        <section>
          <Button disabled={true} />
          <Button type="primary" disabled={true} />
          <Button type="warning" disabled={true} />
          <Button type="danger" disabled={true} />
        </section>
      </div>
    );
  }
}

export default App;
