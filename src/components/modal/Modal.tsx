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
  getContainer?: () => HTMLElement | undefined;
  footer?: React.ReactNode;
  closable?: boolean;
  wrapClassName?: string;
}

export interface ModalFuncProps extends ModalBaseProps {
  content?: React.ReactNode;
}

export const prefixClass = 'cobalt-modal';

let dialogCounter = 1;

export default function Modal(props: ModalProps) {
  dialogCounter++;

  let {
    title,
    children,
    mask = true,
    visible,
    onCancel,
    onOk,
    maskClosable = true,
    getContainer = () => document.body,
    footer,
    wrapClassName,
    closable = true
  } = props;

  let classNameBuilder = new ClassNameBuilder(prefixClass, wrapClassName);
  let classes = classNameBuilder.toString();

  let wrapClass = `${prefixClass}-wrap`;
  let maskClass = `${prefixClass}-mask`;
  let headerClass = `${prefixClass}-header`;
  let bodyClass = `${prefixClass}-body`;
  let footerClass = `${prefixClass}-footer`;
  let titleClass = `${prefixClass}-title`;
  let closeClass = `${prefixClass}-close`;

  let hasHeader = closable || title;
  let footerIsNull = footer === null;

  let labelledby = hasHeader ? `dialog${dialogCounter}Title` : undefined;
  let describedby = `dialog${dialogCounter}Desc`;

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

  let modalClose = closable ? (
    <button className={closeClass} onClick={handleCancel}>
      <Icon type="close" />
    </button>
  ) : null;

  let modalHeader = hasHeader ? (
    <div className={headerClass}>
      <div id={labelledby} className={titleClass}>
        {title}
      </div>
      {modalClose}
    </div>
  ) : null;

  let modalBody = (
    <div id={describedby} className={bodyClass}>
      {children}
    </div>
  );

  let defaultFooter = (
    <div className={footerClass}>
      <Button onClick={handleCancel}>Cancel</Button>
      <Button type="primary" onClick={handleOk}>
        OK
      </Button>
    </div>
  );

  let customFooter = <div className={footerClass}>{footer}</div>;
  let computedFooter = footer ? customFooter : defaultFooter;
  let modalFooter = footerIsNull ? null : computedFooter;

  let dialog = (
    <div>
      {maskNode}
      <div
        role="dialog"
        aria-labelledby={labelledby}
        aria-describedby={describedby}
        className={wrapClass}
        onClick={handleMaskClick}
      >
        <div className={classes} onClick={handleModalClick}>
          {modalHeader}
          {modalBody}
          {modalFooter}
        </div>
      </div>
    </div>
  );

  let container = getContainer() || document.body;
  return ReactDOM.createPortal(dialog, container);
}
