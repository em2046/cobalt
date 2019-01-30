import React, { Component } from 'react';
import '../App.less';

import Button from '../components/button/Button';

let handleClick: React.MouseEventHandler<HTMLButtonElement> = e => {
  e.persist();
  console.log(e);
};

class ButtonDemo extends Component {
  render() {
    return (
      <div className="Demo">
        <h1>Button</h1>
        <p>Just like a normal button</p>
        <h2>Example</h2>
        <h3>Size</h3>
        <h4>Small</h4>
        <section>
          <Button size="small" type="primary" onClick={handleClick}>
            Primary
          </Button>
          <Button size="small" onClick={handleClick}>
            Default
          </Button>
          <Button size="small" type="danger" onClick={handleClick}>
            Danger
          </Button>
        </section>
        <h4>Normal</h4>
        <section>
          <Button type="primary" onClick={handleClick}>
            Primary
          </Button>
          <Button onClick={handleClick}>Default</Button>
          <Button type="danger" onClick={handleClick}>
            Danger
          </Button>
        </section>
        <h4>Large</h4>
        <section>
          <Button size="large" type="primary" onClick={handleClick}>
            Primary
          </Button>
          <Button size="large" onClick={handleClick}>
            Default
          </Button>
          <Button size="large" type="danger" onClick={handleClick}>
            Danger
          </Button>
        </section>
        <h3>Loading</h3>
        <section>
          <Button type="primary" loading={true} onClick={handleClick}>
            Primary
          </Button>
          <Button loading={true} onClick={handleClick}>
            Default
          </Button>
          <Button type="danger" loading={true} onClick={handleClick}>
            Danger
          </Button>
        </section>
        <h3>Disabled</h3>
        <section>
          <Button type="primary" disabled onClick={handleClick}>
            Primary
          </Button>
          <Button disabled onClick={handleClick}>
            Default
          </Button>
          <Button type="danger" disabled onClick={handleClick}>
            Danger
          </Button>
        </section>
        <h3>HTML Type</h3>
        <section>
          <Button htmlType="button" onClick={handleClick}>
            Button
          </Button>
          <Button type="primary" htmlType="submit" onClick={handleClick}>
            Submit
          </Button>
          <Button type="danger" htmlType="reset" onClick={handleClick}>
            Reset
          </Button>
        </section>
      </div>
    );
  }
}

export default ButtonDemo;
