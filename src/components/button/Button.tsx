import ClassNameBuilder from '../../utils/class-name-builder';
import * as React from 'react';
import Icon from '../icon/Icon';

export type ButtonType = 'default' | 'primary' | 'danger';
export type ButtonHtmlType = 'button' | 'submit' | 'reset';
export type ButtonSize = 'large' | 'small' | 'default';

export interface CustomButtonProps {
  className?: string;
  children?: React.ReactNode;
  type?: ButtonType;
  size?: ButtonSize;
  disabled?: boolean;
  loading?: boolean;
  htmlType?: ButtonHtmlType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

type NativeButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;
export type ButtonProps = NativeButtonProps & CustomButtonProps;

function getSizeClass(size?: ButtonSize) {
  switch (size) {
    case 'large':
      return 'large';
    case 'small':
      return 'small';
    default:
      return null;
  }
}

function getTypeClass(type?: ButtonType) {
  switch (type) {
    case 'primary':
      return 'primary';
    case 'danger':
      return 'danger';
    default:
      return 'default';
  }
}

export default function Button(props: ButtonProps) {
  const prefixClass = 'cobalt-button';
  const {
    className,
    children,
    type,
    size,
    disabled,
    loading,
    htmlType,
    onClick,
    ...rest
  } = props;

  let sizeClass = getSizeClass(size);
  let typeClass = getTypeClass(type);
  let classNameBuilder = new ClassNameBuilder(
    prefixClass,
    className,
    `${prefixClass}-${typeClass}`,
    {
      [`${prefixClass}-${sizeClass}`]: size,
      [`${prefixClass}-loading`]: loading
    }
  );
  let classes = classNameBuilder.toString();

  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (disabled || loading) {
      return;
    }
    if (onClick) {
      onClick(e);
    }
  }

  let icon = loading ? <Icon type="loading" /> : null;

  return (
    <button
      className={classes}
      type={htmlType}
      disabled={disabled}
      onClick={handleClick}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
}
