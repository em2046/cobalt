import React, { useState } from 'react';
import Modal from '../components/modal';
import Button from '../components/button';
import { ModalProps } from '../components/modal/Modal';

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

  handleOk = () => {
    this.setState({
      visible: false
    });
  };

  handleCancel = () => {
    this.setState({
      visible: false
    });
  };

  handleClick = () => {
    this.setState({
      visible: true
    });
  };

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
        <Button onClick={this.handleClick}>Open</Button>
        <Modal
          visible={visible}
          getContainer={this.getContainer}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          title="Title"
        >
          Here is content of Modal
        </Modal>
      </div>
    );
  }
}

export default function ModalDemo() {
  let [visible, setVisible] = useState(false);

  function handleOk(e: React.MouseEvent) {
    console.log('ok', e);
    setVisible(false);
  }

  function handleCancel(e: React.MouseEvent) {
    console.log('cancel', e);
    setVisible(false);
  }

  function handleConfirm() {
    Modal.confirm({
      title: 'Do you want to DELETE these items?',
      content: (
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      ),
      onOk(e: React.MouseEvent) {
        console.log('ok', e);
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve();
          }, 1000);
        });
      },
      onCancel(e: React.MouseEvent) {
        console.log('cancel', e);
      }
    });
  }

  function handleInfo() {
    Modal.info({
      title: 'This is a info message',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    });
  }

  function handleSuccess() {
    Modal.success({
      title: 'This is a Success message',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    });
  }

  function handleError() {
    Modal.error({
      title: 'This is a error message',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    });
  }

  function handleWarning() {
    Modal.warning({
      title: 'This is a warning message',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    });
  }

  return (
    <div className="Demo">
      <h1>Modal</h1>
      <h2>Example</h2>
      <h3>Basic</h3>
      <section>
        <Button type="primary" onClick={() => setVisible(true)}>
          Open Modal
        </Button>
        <Modal
          title="Basic Modal"
          visible={visible}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab atque
          consectetur consequuntur corporis delectus dignissimos eveniet
          explicabo facilis, ipsam laboriosam non pariatur quas, qui quia quo
          reiciendis reprehenderit tempore voluptatibus!
        </Modal>
      </section>
      <h3>getContainer</h3>
      <section>
        <ModalTester />
      </section>
      <h3>Confirm</h3>
      <section>
        <Button icon="confirm" onClick={handleConfirm}>
          Confirm
        </Button>
      </section>
      <h3>Information</h3>
      <section>
        <Button icon="info-circle" onClick={handleInfo}>
          Info
        </Button>
        <Button icon="check-circle" onClick={handleSuccess}>
          Success
        </Button>
        <Button icon="error" onClick={handleError}>
          Error
        </Button>
        <Button icon="warning" onClick={handleWarning}>
          Warning
        </Button>
      </section>
    </div>
  );
}
