import React, { useState } from 'react';
import Modal, { ModalFuncProps, prefixClass } from './Modal';
import ReactDOM from 'react-dom';
import Icon from '../icon';
import { IconType } from '../icon/icon-sheet-generated';

export type ConfirmType = 'info' | 'success' | 'error' | 'warning';

export interface ConfirmModalProps extends ModalFuncProps {
  type: ConfirmType;
  close?: () => void;
}

function ConfirmModal(props: ConfirmModalProps) {
  let { title, content, close, type } = props;

  function typeToIcon(type: ConfirmType): IconType {
    switch (type) {
      case 'info':
        return 'info-circle';
      case 'success':
        return 'check-circle';
      case 'error':
        return 'close-circle';
      case 'warning':
        return 'warning';
    }
  }

  const [visible, setVisible] = useState(true);
  let icon = typeToIcon(type);
  let confirmPrefixClass = `${prefixClass}-confirm`;
  let confirmIconClass = `${confirmPrefixClass}-icon`;
  let confirmTitleClass = `${confirmPrefixClass}-title`;
  let confirmContentClass = `${confirmPrefixClass}-content`;

  return (
    <Modal
      visible={visible}
      onOk={() => {
        close && close();
        setVisible(false);
      }}
      onCancel={() => {
        close && close();
        setVisible(false);
      }}
    >
      <div className={confirmPrefixClass}>
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
