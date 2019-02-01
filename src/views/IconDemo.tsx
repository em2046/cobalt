import React from 'react';
import Icon from '../components/icon/Icon';
import { iconList, IconType } from '../components/icon/icon-sheet-generated';

export default function ModalDemo() {
  let strings = iconList as IconType[];
  return (
    <div className="Demo">
      <h1>Icon</h1>
      <h2>Example</h2>
      <h3>Basic</h3>
      <div className="Demo-icon-list">
        <ul>
          {strings.map(item => {
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
