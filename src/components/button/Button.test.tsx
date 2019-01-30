import React from 'react';
import TestRenderer from 'react-test-renderer';
import Button from './Button';

it('renders without crashing', () => {
  TestRenderer.create(<Button>Button</Button>);
});
