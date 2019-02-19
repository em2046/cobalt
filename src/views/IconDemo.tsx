import React from 'react';
import { Icon } from 'cobalt';
import { iconList } from '@components/icon/icon-list-generated';

export default function ModalDemo() {
  return (
    <div className="Demo">
      <h1>Icon</h1>
      <h2>Example</h2>
      {iconList.map(group => {
        return (
          <React.Fragment key={group.group}>
            <h3>{group.group} Icon</h3>
            <div className="Demo-icon-list">
              <ul>
                {group.children.map(item => {
                  return (
                    <li key={item}>
                      <Icon type={item} />
                      <span>{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
