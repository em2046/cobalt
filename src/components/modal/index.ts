import Modal, { ModalFuncProps, ModalProps } from './Modal'
import { ConfirmModalProps } from './confirm'
import confirm from './confirm'
import * as React from 'react'

interface ModalExtendedType {
  (props: ModalProps): React.ReactPortal | null

  confirm: (props: ModalFuncProps) => void
  info: (props: ModalFuncProps) => void
  success: (props: ModalFuncProps) => void
  error: (props: ModalFuncProps) => void
  warning: (props: ModalFuncProps) => void
}

let ModalExtended = Modal as ModalExtendedType

ModalExtended.confirm = function(props: ModalFuncProps) {
  let config: ConfirmModalProps = {
    type: 'confirm',
    okCancel: true,
    ...props
  }
  return confirm(config)
}

ModalExtended.info = function(props: ModalFuncProps) {
  let config: ConfirmModalProps = {
    type: 'info',
    okCancel: false,
    ...props
  }
  return confirm(config)
}

ModalExtended.success = function(props: ModalFuncProps) {
  let config: ConfirmModalProps = {
    type: 'success',
    okCancel: false,
    ...props
  }
  return confirm(config)
}

ModalExtended.error = function(props: ModalFuncProps) {
  let config: ConfirmModalProps = {
    type: 'error',
    okCancel: false,
    ...props
  }
  return confirm(config)
}

ModalExtended.warning = function(props: ModalFuncProps) {
  let config: ConfirmModalProps = {
    type: 'warning',
    okCancel: false,
    ...props
  }
  return confirm(config)
}

export default ModalExtended
