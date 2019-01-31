import React from 'react';
import Icon from '../components/icon/Icon';

export default function ModalDemo() {
  return (
    <div className="Demo">
      <h1>Icon</h1>
      <h2>Example</h2>
      <h3>Basic</h3>
      <div className="Demo-icon-list">
        <li>
          <Icon type="caret-down" />
          <span>caret-down</span>
        </li>
        <li>
          <Icon type="check" />
          <span>check</span>
        </li>
        <li>
          <Icon type="close" />
          <span>close</span>
        </li>
        <li>
          <Icon type="loading" />
          <span>loading</span>
        </li>
        <li>
          <Icon type="minus" />
          <span>minus</span>
        </li>
        <li>
          <Icon type="plus" />
          <span>plus</span>
        </li>
      </div>
    </div>
  );
}
