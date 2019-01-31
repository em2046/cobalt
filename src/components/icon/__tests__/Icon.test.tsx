import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../Icon';

describe('Icon', () => {
  it('renders without crashing', () => {
    const component = renderer.create(<Icon type="close" />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
