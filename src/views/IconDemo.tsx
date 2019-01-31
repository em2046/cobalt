import React from 'react';
import Icon from '../components/icon/Icon';

export default function ModalDemo() {
  return (
    <div className="Demo">
      <h1>Icon</h1>
      <h2>Example</h2>
      <h3>Basic</h3>
      <Icon type="caret-down" />
      <Icon type="check" />
      <Icon type="close" />
      <Icon type="loading" />
      <Icon type="minus" />
      <Icon type="plus" />
    </div>
  );
}
