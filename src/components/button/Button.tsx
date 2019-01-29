import './button.less';
import ClassNameBuild from '../../utils/class-name-builder';
import * as React from 'react';

type buttonType = 'default' | 'primary' | 'warning' | 'danger';

export interface Props {
  type?: buttonType;
  loading?: boolean;
  disabled?: boolean;
  size?: string;
  children?: any;
  onClick?: any;
}

export default function Button(props: Props) {
  const prefixClass = 'cobalt-button';
  const { type, loading, onClick, ...rest } = props;

  let classNameBuild = new ClassNameBuild(prefixClass, {
    [`${prefixClass}-default`]: !type,
    [`${prefixClass}-${type}`]: type,
    [`${prefixClass}-loading`]: loading
  });

  function handleClick(e: any) {
    if (loading) {
      return;
    }
    if (onClick) {
      onClick(e);
    }
  }

  let children = props.children ? props.children : 'Button';

  let className = classNameBuild.toString();

  return (
    <button className={className} onClick={handleClick} {...rest}>
      {children}
      {loading ? '...' : ''}
    </button>
  );
}
