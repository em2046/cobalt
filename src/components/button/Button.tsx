import './button.css';
import React, { useState } from 'react';

interface Props {
  type?: string;
  children?: any;
}

function Button(props: Props) {
  const type = props.type;
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  function handleClick() {
    setLoading(!loading);
    setDisabled(!disabled);
  }

  let classNameList = [];
  classNameList.push('cobalt-button');

  if (type !== '') {
    classNameList.push('cobalt-button-' + type);
  }
  if (loading) {
    classNameList.push('cobalt-button-loading');
  }
  if (disabled) {
    classNameList.push('cobalt-button-disabled');
  }

  let children = props.children ? props.children : 'Button';

  return (
    <button className={classNameList.join(' ')} onClick={handleClick}>
      {loading ? 'loading...' : ''}
      {children}
    </button>
  );
}

export default Button;
