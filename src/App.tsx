import React, { Component } from 'react';
import './App.css';

import Button from './components/button/Button';

function handleClick(e: any) {
  console.log(e);
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <section>
          <Button onClick={handleClick} />
          <Button type="primary" onClick={handleClick} />
          <Button type="warning" onClick={handleClick} />
          <Button type="danger" onClick={handleClick} />
        </section>
        <section>
          <Button loading={true} onClick={handleClick} />
          <Button type="primary" loading={true} onClick={handleClick} />
          <Button type="warning" loading={true} onClick={handleClick} />
          <Button type="danger" loading={true} onClick={handleClick} />
        </section>
        <section>
          <Button disabled onClick={handleClick} />
          <Button type="primary" disabled onClick={handleClick} />
          <Button type="warning" disabled onClick={handleClick} />
          <Button type="danger" disabled onClick={handleClick} />
        </section>
      </div>
    );
  }
}

export default App;
