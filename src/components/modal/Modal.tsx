import ClassNameBuilder from '../../utils/class-name-builder';
import * as React from 'react';
import Button from '../button/Button';
import Icon from '../icon/Icon';

export interface ModalProps {
  title?: string;
  mask?: boolean;
  children?: React.ReactNode;
  visible?: boolean;
  onCancel?: React.MouseEventHandler;
  onOk?: React.MouseEventHandler;
  maskClosable?: boolean;
}

export default function Modal(props: ModalProps) {
  const prefixClass = 'cobalt-modal';

  let {
    title,
    children,
    mask = true,
    visible,
    onCancel,
    onOk,
    maskClosable = true
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

  return (
    <div>
      {maskNode}
      <div className={wrapClass} onClick={handleMaskClick}>
        <div className={classes} onClick={handleModalClick}>
          <div className={headerClass}>
            <div className={titleClass}>{title}</div>
            <div className={closeClass} onClick={handleCancel}>
              <Icon type="close" />
            </div>
          </div>
          <div className={bodyClass}>{children}</div>
          <div className={footerClass}>
            <Button onClick={handleCancel}>Cancel</Button>
            <Button type="primary" onClick={handleOk}>
              OK
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
