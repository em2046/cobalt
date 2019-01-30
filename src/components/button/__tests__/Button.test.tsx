import React, { useState } from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

describe('Button', () => {
  it('renders without crashing', () => {
    const component = renderer.create(<Button>Button</Button>);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders loading', () => {
    function LoadingButton() {
      const [loading, setLoading] = useState(false);

      return (
        <Button loading={loading} onClick={() => setLoading(!loading)}>
          Button
        </Button>
      );
    }

    const component = renderer.create(<LoadingButton />);
    let tree = component.toJSON();
    expect(tree).not.toBeNull();
    expect(tree).toMatchSnapshot();

    if (tree) {
      tree.props.onClick();
    }

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders disabled', () => {
    function DisabledButton() {
      const [disabled, setDisabled] = useState(false);

      return (
        <Button disabled={disabled} onClick={() => setDisabled(!disabled)}>
          Button
        </Button>
      );
    }

    // disabled == false
    const component = renderer.create(<DisabledButton />);
    let tree = component.toJSON();
    expect(tree).not.toBeNull();
    expect(tree).toMatchSnapshot();

    // disabled == true
    if (tree) {
      tree.props.onClick();
    }

    tree = component.toJSON();
    expect(tree).toMatchSnapshot();

    // disabled == true
    if (tree) {
      tree.props.onClick();
    }
    tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders {0}, 0, {false}', () => {
    const componentSetZero = renderer.create(<Button>{0}</Button>);
    let treeSetZero = componentSetZero.toJSON();
    expect(treeSetZero).toMatchSnapshot();

    const componentZero = renderer.create(<Button>0</Button>);
    let treeZero = componentZero.toJSON();
    expect(treeZero).toMatchSnapshot();

    const componentFalse = renderer.create(<Button>{false}</Button>);
    let treeFalse = componentFalse.toJSON();
    expect(treeFalse).toMatchSnapshot();
  });
});
