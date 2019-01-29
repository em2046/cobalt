import React, { Component } from 'react';
import '../App.less';

import Button from '../components/button/Button';

function handleClick(e: any) {
  console.log(e);
}

class ButtonDemo extends Component {
  render() {
    return (
      <div className="Demo">
        <h1>Button</h1>
        <p>Just normal button</p>
        <h2>Example</h2>
        <h3>Small</h3>
        <section>
          <Button size="small" onClick={handleClick} />
          <Button size="small" type="primary" onClick={handleClick} />
          <Button size="small" type="warning" onClick={handleClick} />
          <Button size="small" type="danger" onClick={handleClick} />
        </section>
        <h3>Normal</h3>
        <section>
          <Button onClick={handleClick} />
          <Button type="primary" onClick={handleClick} />
          <Button type="warning" onClick={handleClick} />
          <Button type="danger" onClick={handleClick} />
        </section>
        <h3>Large</h3>
        <section>
          <Button size="large" onClick={handleClick} />
          <Button size="large" type="primary" onClick={handleClick} />
          <Button size="large" type="warning" onClick={handleClick} />
          <Button size="large" type="danger" onClick={handleClick} />
        </section>
        <h3>Loading</h3>
        <section>
          <Button loading={true} onClick={handleClick} />
          <Button type="primary" loading={true} onClick={handleClick} />
          <Button type="warning" loading={true} onClick={handleClick} />
          <Button type="danger" loading={true} onClick={handleClick} />
        </section>
        <h3>Disabled</h3>
        <section>
          <Button disabled onClick={handleClick} />
          <Button type="primary" disabled onClick={handleClick} />
          <Button type="warning" disabled onClick={handleClick} />
          <Button type="danger" disabled onClick={handleClick} />
        </section>
        <h3>Link</h3>
        <section>
          <Button
            href="http://www.em2046.com/"
            target="_blank"
            onClick={handleClick}
          >
            Home page
          </Button>
          <Button
            type="primary"
            href="http://www.em2046.com/"
            target="_blank"
            onClick={handleClick}
          >
            Home page
          </Button>
          <Button
            type="warning"
            href="http://www.em2046.com/"
            target="_blank"
            onClick={handleClick}
          >
            Home page
          </Button>
          <Button
            type="danger"
            href="http://www.em2046.com/"
            target="_blank"
            onClick={handleClick}
          >
            Home page
          </Button>
        </section>
        <h3>Type</h3>
        <section>
          <Button htmlType="button" onClick={handleClick}>
            Button
          </Button>
          <Button htmlType="submit" onClick={handleClick}>
            Submit
          </Button>
          <Button htmlType="reset" onClick={handleClick}>
            Reset
          </Button>
        </section>
      </div>
    );
  }
}

export default ButtonDemo;
