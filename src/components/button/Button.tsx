import ClassNameBuilder from '../../utils/class-name-builder';
import * as React from 'react';
import Icon from '../icon';
import { IconType } from '../icon/icon-sheet-generated';

export type ButtonType = 'default' | 'primary' | 'danger';
export type ButtonHtmlType = 'button' | 'submit' | 'reset';
export type ButtonSize = 'large' | 'small' | 'default';

export interface CustomButtonProps {
  icon?: IconType;
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

export default function Button(props: ButtonProps) {
  const prefixClass = 'cobalt-button';
  const {
    icon,
    className,
    children,
    type = 'default',
    size,
    disabled,
    loading,
    htmlType,
    onClick,
    ...rest
  } = props;

  let iconType = loading ? 'loading' : icon;
  let iconNode = iconType ? <Icon type={iconType} /> : null;
  let isIconOnly = iconNode && !children;
  let classNameBuilder = new ClassNameBuilder(
    prefixClass,
    className,
    `${prefixClass}-${type}`,
    {
      [`${prefixClass}-${size}`]: size,
      [`${prefixClass}-loading`]: loading,
      [`${prefixClass}-icon-only`]: isIconOnly
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

  return (
    <button
      className={classes}
      type={htmlType}
      disabled={disabled}
      onClick={handleClick}
      {...rest}
    >
      {iconNode}
      {children}
    </button>
  );
}
