import React from 'react';
import renderer from 'react-test-renderer';
import Modal, { ModalProps } from '../Modal';

jest.mock('react-dom', () => ({
  createPortal: (node: React.ReactNode) => node
}));

interface State {
  visible: boolean;
}

class ModalTester extends React.Component<ModalProps, State> {
  constructor(props: ModalProps) {
    super(props);
    this.state = {
      visible: false
    };
  }

  container?: HTMLElement;

  componentWillMount(): void {
    this.setState({
      visible: true
    });
  }

  saveContainer = (container: HTMLDivElement) => {
    this.container = container;
  };

  getContainer = () => {
    return this.container;
  };

  render(): React.ReactNode {
    const { visible } = this.state;
    return (
      <div>
        <div ref={this.saveContainer} />
        <Modal
          {...this.props}
          visible={visible}
          getContainer={this.getContainer}
        >
          Here is content of Modal
        </Modal>
      </div>
    );
  }
}

describe('Modal', () => {
  it('renders without crashing', () => {
    const component = renderer.create(<ModalTester />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('renders without footer', () => {
    const component = renderer.create(<ModalTester footer={null} />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
