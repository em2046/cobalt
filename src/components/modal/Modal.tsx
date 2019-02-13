import ClassNameBuilder from '../../utils/class-name-builder';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Button from '../button';
import Icon from '../icon';

interface ModalBaseProps {
  title?: string;
  mask?: boolean;
  maskClosable?: boolean;
  onCancel?: React.MouseEventHandler;
  onOk?: React.MouseEventHandler;
}

export interface ModalProps extends ModalBaseProps {
  children?: React.ReactNode;
  visible?: boolean;
  container?: HTMLElement;
}

export interface ModalFuncProps extends ModalBaseProps {
  content?: React.ReactNode;
}

export const prefixClass = 'cobalt-modal';

export default function Modal(props: ModalProps) {
  let {
    title,
    children,
    mask = true,
    visible,
    onCancel,
    onOk,
    maskClosable = true,
    container = document.body
  } = props;

  let classNameBuilder = new ClassNameBuilder(prefixClass);
  let classes = classNameBuilder.toString();

  let wrapClass = `${prefixClass}-wrap`;
  let maskClass = `${prefixClass}-mask`;
  let headerClass = `${prefixClass}-header`;
  let bodyClass = `${prefixClass}-body`;
  let footerClass = `${prefixClass}-footer`;
  let titleClass = `${prefixClass}-title`;
  let closeClass = `${prefixClass}-close`;

  let maskNode = mask ? <div className={maskClass} /> : null;

  if (!visible) {
    return null;
  }

  function handleMaskClick(e: React.MouseEvent) {
    if (onCancel && maskClosable) {
      onCancel(e);
    }
  }

  function handleModalClick(e: React.MouseEvent) {
    e.stopPropagation();
  }

  function handleCancel(e: React.MouseEvent) {
    if (onCancel) {
      onCancel(e);
    }
  }

  function handleOk(e: React.MouseEvent) {
    if (onOk) {
      onOk(e);
    }
  }

  let header = (
    <div className={headerClass}>
      <div className={titleClass}>{title}</div>
      <div className={closeClass} onClick={handleCancel}>
        <Icon type="close" />
      </div>
    </div>
  );

  let body = <div className={bodyClass}>{children}</div>;

  let footer = (
    <div className={footerClass}>
      <Button onClick={handleCancel}>Cancel</Button>
      <Button type="primary" onClick={handleOk}>
        OK
      </Button>
    </div>
  );

  let dialog = (
    <div>
      {maskNode}
      <div className={wrapClass} onClick={handleMaskClick}>
        <div className={classes} onClick={handleModalClick}>
          {header}
          {body}
          {footer}
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(dialog, container);
}
