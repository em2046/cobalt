import './button.less';
import ClassNameBuild from '../../utils/class-name-builder';
import React, { useState } from 'react';

type buttonType = 'default' | 'primary' | 'warning' | 'danger';

interface Props {
  type?: buttonType;
  loading?: boolean;
  disabled?: boolean;
  size?: string;
  children?: any;
}

function Button(props: Props) {
  const prefixClass = 'cobalt-button';
  const { type, loading, disabled } = props;

  let classNameBuild = new ClassNameBuild(prefixClass, {
    [`${prefixClass}-default`]: !type,
    [`${prefixClass}-${type}`]: type,
    [`${prefixClass}-loading`]: loading,
    [`${prefixClass}-disabled`]: disabled
  });

  function handleClick() {
    console.log('click');
  }

  let children = props.children ? props.children : 'Button';

  let className = classNameBuild.toString();

  return (
    <button className={className} onClick={handleClick}>
      {children}
      {loading ? '...' : ''}
    </button>
  );
}

export default Button;
