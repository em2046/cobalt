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
            <h3>
              {group.group} Icon {group.group === 'brand' ? '*' : ''}
            </h3>
            <div className="Demo-icon-list">
              <ul>
                {group.children.map(item => {
                  return (
                    <li key={item}>
                      <Icon type={item} />
                      <span className="text">{item}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </React.Fragment>
        );
      })}
      <h2>* Legal</h2>
      <section>
        <a
          className="Demo-link"
          target="_blank"
          href="https://github.com/logos"
        >
          GitHub Logos and Usage
        </a>
      </section>
    </div>
  );
}
