import ClassNameBuilder from '../../utils/class-name-builder';
import * as React from 'react';
import Button from '../button/Button';
import Icon from '../icon/Icon';

export default function Modal() {
  const prefixClass = 'cobalt-modal';
  let classNameBuilder = new ClassNameBuilder(prefixClass);
  let classes = classNameBuilder.toString();

  let headerClass = `${prefixClass}-header`;
  let bodyClass = `${prefixClass}-body`;
  let footerClass = `${prefixClass}-footer`;
  let titleClass = `${prefixClass}-title`;
  let closeClass = `${prefixClass}-close`;
  return (
    <div className={classes}>
      <header className={headerClass}>
        <div className={titleClass}>Title text</div>
        <div className={closeClass}>
          <Icon type="close" />
        </div>
      </header>
      <main className={bodyClass}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, aut
        consectetur eos est fugiat harum illo itaque libero maiores odio placeat
        quos rerum similique unde vel. Excepturi illo laudantium minima.
      </main>
      <footer className={footerClass}>
        <Button>Cancel</Button>
        <Button type="primary">OK</Button>
      </footer>
    </div>
  );
}
