import './button.css';
import React, { useState } from 'react';

interface Props {
  type?: string;
}

function Button(props: Props) {
  const type = props.type;
  const [loading, setLoading] = useState(false);

  function handleClick() {
    setLoading(!loading);
  }

  let classNameList = [];
  classNameList.push('cobalt-button');

  if (type !== '') {
    classNameList.push('cobalt-button-' + type);
  }

  return (
    <div>
      <button className={classNameList.join(' ')} onClick={handleClick}>
        {loading ? 'loading' : ''} Click me
      </button>
    </div>
  );
}

export default Button;
