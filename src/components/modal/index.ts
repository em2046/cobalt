import Modal, { ModalFuncProps } from './Modal';
import confirm, { ConfirmModalProps } from './confirm';

// @ts-ignore
Modal.confirm = function(props: ModalFuncProps) {
  let config: ConfirmModalProps = {
    type: 'confirm',
    okCancel: true,
    ...props
  };
  return confirm(config);
};

// @ts-ignore
Modal.info = function(props: ModalFuncProps) {
  let config: ConfirmModalProps = {
    type: 'info',
    okCancel: false,
    ...props
  };
  return confirm(config);
};

// @ts-ignore
Modal.success = function(props: ModalFuncProps) {
  let config: ConfirmModalProps = {
    type: 'success',
    okCancel: false,
    ...props
  };
  return confirm(config);
};

// @ts-ignore
Modal.error = function(props: ModalFuncProps) {
  let config: ConfirmModalProps = {
    type: 'error',
    okCancel: false,
    ...props
  };
  return confirm(config);
};

// @ts-ignore
Modal.warning = function(props: ModalFuncProps) {
  let config: ConfirmModalProps = {
    type: 'warning',
    okCancel: false,
    ...props
  };
  return confirm(config);
};

export default Modal;
