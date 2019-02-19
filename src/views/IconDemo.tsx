import React from 'react';
import { Icon } from 'cobalt';
import { iconList } from '@components/icon/icon-sheet-generated';

export default function ModalDemo() {
  return (
    <div className="Demo">
      <h1>Icon</h1>
      <h2>Example</h2>
      <h3>Suggested Icon</h3>
      <div className="Demo-icon-list">
        <ul>
          {iconList.map(item => {
            return (
              <li key={item}>
                <Icon type={item} />
                <span>{item}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
