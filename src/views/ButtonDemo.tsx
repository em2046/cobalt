import React, { Component } from 'react';
import '../App.less';

import Button from '../components/button/Button';

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
          <Button size="small" type="primary">
            Primary
          </Button>
          <Button size="small">Default</Button>
          <Button size="small" type="danger">
            Danger
          </Button>
        </section>
        <h4>Normal</h4>
        <section>
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="danger">Danger</Button>
        </section>
        <h4>Large</h4>
        <section>
          <Button size="large" type="primary">
            Primary
          </Button>
          <Button size="large">Default</Button>
          <Button size="large" type="danger">
            Danger
          </Button>
        </section>
        <h3>Loading</h3>
        <section>
          <Button type="primary" loading={true}>
            Primary
          </Button>
          <Button loading={true}>Default</Button>
          <Button type="danger" loading={true}>
            Danger
          </Button>
        </section>
        <h3>Disabled</h3>
        <section>
          <Button type="primary" disabled>
            Primary
          </Button>
          <Button disabled>Default</Button>
          <Button type="danger" disabled>
            Danger
          </Button>
        </section>
        <h3>HTML Type</h3>
        <section>
          <Button htmlType="button">Button</Button>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button type="danger" htmlType="reset">
            Reset
          </Button>
        </section>
      </div>
    );
  }
}

export default ButtonDemo;
