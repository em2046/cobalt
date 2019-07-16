import React, { useState } from 'react'
import Modal, { ModalFuncProps, prefixClass } from './Modal'
import * as ReactDOM from 'react-dom'
import Icon from '../icon'
import { IconType } from '../icon/icon-sheet-generated'
import ClassNameBuilder from '../../utils/class-name-builder'
import Button from '../button'

export type ConfirmType = 'confirm' | 'info' | 'success' | 'error' | 'warning'

export interface ConfirmModalProps extends ModalFuncProps {
  type: ConfirmType
  close?: () => void
  okCancel: boolean
  onOk?: (...args: any[]) => any | PromiseLike<any>
  onCancel?: (...args: any[]) => any | PromiseLike<any>
}

function ConfirmModal(props: ConfirmModalProps) {
  let { title, content, close, type, okCancel, onOk, onCancel } = props

  function typeToIcon(type: ConfirmType): IconType {
    switch (type) {
      case 'confirm':
        return 'confirm'
      case 'info':
        return 'info-circle'
      case 'success':
        return 'check-circle'
      case 'error':
        return 'error'
      case 'warning':
        return 'warning'
    }
  }

  const [visible, setVisible] = useState(true)
  const [okLoading, setOkLoading] = useState(false)
  const [cancelLoading, setCancelLoading] = useState(false)

  let icon = typeToIcon(type)
  let confirmPrefixClass = `${prefixClass}-confirm`
  let confirmBoxClass = `${confirmPrefixClass}-box`
  let confirmIconClass = `${confirmPrefixClass}-icon`
  let confirmTitleClass = `${confirmPrefixClass}-title`
  let confirmContentClass = `${confirmPrefixClass}-content`

  let classNameBuilder = new ClassNameBuilder(
    confirmPrefixClass,
    `${confirmPrefixClass}-${type}`
  )
  let classes = classNameBuilder.toString()

  function hide() {
    close && close()
    setVisible(false)
  }

  function handleOk(e: React.MouseEvent) {
    if (onOk) {
      let okRet = onOk(e)
      if (okRet && okRet.then) {
        setOkLoading(true)
        okRet.then(
          () => {
            hide()
          },
          () => {
            setOkLoading(false)
          }
        )
      } else {
        hide()
      }
    } else {
      hide()
    }
  }

  function handleCancel(e: React.MouseEvent) {
    if (onCancel) {
      let cancelRet = onCancel(e)
      if (cancelRet && cancelRet.then) {
        setCancelLoading(true)
        cancelRet.then(
          () => {
            hide()
          },
          () => {
            setCancelLoading(false)
          }
        )
      } else {
        hide()
      }
    } else {
      hide()
    }
  }

  let okButton = (
    <Button loading={okLoading} type="primary" onClick={handleOk}>
      Ok
    </Button>
  )
  let cancelButton = okCancel ? (
    <Button loading={cancelLoading} onClick={handleCancel}>
      Cancel
    </Button>
  ) : null

  let footer = (
    <React.Fragment>
      {cancelButton}
      {okButton}
    </React.Fragment>
  )
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
  )
}

export default function confirm(config: ConfirmModalProps) {
  function close() {
    if (div.parentNode) {
      div.parentNode.removeChild(div)
    }
  }

  let currentConfig = { ...config, close }

  let div = document.createElement('div')
  document.body.appendChild(div)
  ReactDOM.render(<ConfirmModal {...currentConfig} />, div)
}
