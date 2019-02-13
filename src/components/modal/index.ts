import Modal, { ModalFuncProps } from './Modal';
import confirm, { ConfirmModalProps } from './confirm';

// @ts-ignore
Modal.info = function(props: ModalFuncProps) {
  let config: ConfirmModalProps = {
    type: 'info',
    ...props
  };
  return confirm(config);
};

// @ts-ignore
Modal.success = function(props: ModalFuncProps) {
  let config: ConfirmModalProps = {
    type: 'success',
    ...props
  };
  return confirm(config);
};

// @ts-ignore
Modal.error = function(props: ModalFuncProps) {
  let config: ConfirmModalProps = {
    type: 'error',
    ...props
  };
  return confirm(config);
};

// @ts-ignore
Modal.warning = function(props: ModalFuncProps) {
  let config: ConfirmModalProps = {
    type: 'warning',
    ...props
  };
  return confirm(config);
};

export default Modal;
