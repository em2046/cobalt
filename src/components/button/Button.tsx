import './button.less';
import ClassNameBuild from '../../utils/class-name-builder';
import * as React from 'react';

export type ButtonHtmlType = 'button' | 'submit' | 'reset';
export type ButtonType = 'default' | 'primary' | 'warning' | 'danger';
export type ButtonSize = 'large' | 'small' | 'default';

export interface Props {
  type?: ButtonType;
  loading?: boolean;
  size?: ButtonSize;
  children?: React.ReactNode;
}

export type NormalProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  htmlType?: ButtonHtmlType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
} & Props;
export type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
} & Props;
export type ButtonProps = NormalProps | LinkProps;

export default function Button(props: ButtonProps) {
  const prefixClass = 'cobalt-button';
  const { size, type, loading, onClick, ...rest } = props;

  let sizeClass = getSize();
  let classNameBuild = new ClassNameBuild(prefixClass, {
    [`${prefixClass}-default`]: !type,
    [`${prefixClass}-${type}`]: type,
    [`${prefixClass}-loading`]: loading,
    [`${prefixClass}-${sizeClass}`]: sizeClass
  });

  function getSize() {
    switch (size) {
      case 'large':
        return 'large';
      case 'small':
        return 'small';
      default:
        break;
    }
    return null;
  }

  function handleClick(e: any) {
    if (loading) {
      return;
    }
    if (onClick) {
      // @ts-ignore
      onClick(e);
    }
  }

  let children = props.children ? props.children : 'Button';
  let className = classNameBuild.toString();

  const linkButtonProps = rest as LinkProps;
  if (linkButtonProps.href !== undefined) {
    return (
      <a className={className} onClick={handleClick} {...linkButtonProps}>
        {children}
        {loading ? '...' : ''}
      </a>
    );
  }

  const {
    htmlType = 'button',
    ...otherNormalButtonProps
  } = rest as NormalProps;
  return (
    <button
      className={className}
      type={htmlType}
      onClick={handleClick}
      {...otherNormalButtonProps}
    >
      {children}
      {loading ? '...' : ''}
    </button>
  );
}
