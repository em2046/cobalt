import React, { useState } from 'react';
import Modal from '../components/modal/Modal';
import Button from '../components/button/Button';

export default function ModalDemo() {
  let [visible, setVisible] = useState(false);

  function handleOk(e: React.MouseEvent) {
    console.log(e);
    setVisible(false);
  }

  function handleCancel(e: React.MouseEvent) {
    console.log(e);
    setVisible(false);
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
    </div>
  );
}
