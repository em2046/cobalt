import React, { useState } from 'react';

import Button from '../components/button';

export default function ButtonDemo() {
  let [loading, setLoading] = useState(true);

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
        <Button size="small" type="danger" icon="info-circle">
          Danger
        </Button>
        <Button size="small" icon="info-circle" />
      </section>
      <h4>Normal</h4>
      <section>
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="danger" icon="info-circle">
          Danger
        </Button>
        <Button icon="info-circle" />
      </section>
      <h4>Large</h4>
      <section>
        <Button size="large" type="primary">
          Primary
        </Button>
        <Button size="large">Default</Button>
        <Button size="large" type="danger" icon="info-circle">
          Danger
        </Button>
        <Button size="large" icon="info-circle" />
      </section>
      <h3>Loading</h3>
      <section>
        <Button type="primary" loading={loading}>
          Primary
        </Button>
        <Button loading={loading}>Default</Button>
        <Button type="danger" icon="info-circle" loading={loading}>
          Danger
        </Button>
        <Button icon="info-circle" loading={loading} />
        <Button
          onClick={() => setLoading(!loading)}
          type={!loading ? 'primary' : undefined}
        >
          Toggle loading
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
      <h4>Icon</h4>
      <section>
        <Button type="primary" icon="check-circle">
          Primary
        </Button>
        <Button icon="exclamation-circle">Default</Button>
        <Button type="danger" icon="close-circle">
          Danger
        </Button>
        <Button icon="warning" />
      </section>
    </div>
  );
}
