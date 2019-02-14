import React, { useState } from 'react';
import Modal, { ModalFuncProps, prefixClass } from './Modal';
import * as ReactDOM from 'react-dom';
import Icon from '../icon';
import { IconType } from '../icon/icon-sheet-generated';
import ClassNameBuilder from '../../utils/class-name-builder';
import Button from '../button';

export type ConfirmType = 'confirm' | 'info' | 'success' | 'error' | 'warning';

export interface ConfirmModalProps extends ModalFuncProps {
  type: ConfirmType;
  close?: () => void;
  okCancel: boolean;
}

function ConfirmModal(props: ConfirmModalProps) {
  let { title, content, close, type, okCancel } = props;

  function typeToIcon(type: ConfirmType): IconType {
    switch (type) {
      case 'confirm':
        return 'confirm';
      case 'info':
        return 'info-circle';
      case 'success':
        return 'check-circle';
      case 'error':
        return 'error';
      case 'warning':
        return 'warning';
    }
  }

  const [visible, setVisible] = useState(true);
  let icon = typeToIcon(type);
  let confirmPrefixClass = `${prefixClass}-confirm`;
  let confirmBoxClass = `${confirmPrefixClass}-box`;
  let confirmIconClass = `${confirmPrefixClass}-icon`;
  let confirmTitleClass = `${confirmPrefixClass}-title`;
  let confirmContentClass = `${confirmPrefixClass}-content`;

  let classNameBuilder = new ClassNameBuilder(
    confirmPrefixClass,
    `${confirmPrefixClass}-${type}`
  );
  let classes = classNameBuilder.toString();

  function handleOk() {
    close && close();
    setVisible(false);
  }

  function handleCancel() {
    close && close();
    setVisible(false);
  }

  let cancelButton = okCancel ? (
    <Button onClick={handleCancel}>Cancel</Button>
  ) : null;
  let okButton = (
    <Button type="primary" onClick={handleOk}>
      Ok
    </Button>
  );

  let footer = (
    <React.Fragment>
      {cancelButton}
      {okButton}
    </React.Fragment>
  );
  return (
    <Modal
      wrapClassName={classes}
      closable={false}
      visible={visible}
      maskClosable={false}
      footer={footer}
    >
      <div className={confirmBoxClass}>
        <div className={confirmIconClass}>
          <Icon type={icon} />
        </div>
        <div>
          <div className={confirmTitleClass}>{title}</div>
          <div className={confirmContentClass}>{content}</div>
        </div>
      </div>
    </Modal>
  );
}

export default function confirm(config: ConfirmModalProps) {
  function close() {
    if (div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  let currentConfig = { ...config, close };

  let div = document.createElement('div');
  document.body.appendChild(div);
  ReactDOM.render(<ConfirmModal {...currentConfig} />, div);
}
