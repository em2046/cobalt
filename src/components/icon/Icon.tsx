import ClassNameBuilder from '../../utils/class-name-builder';
import * as React from 'react';
import IconSheet, { Sheet } from './IconSheet';

interface Props {
  type: keyof Sheet;
}

function isSpin(type: keyof Sheet) {
  return ['loading'].includes(type);
}

export default function Icon(props: Props) {
  const prefixClass = 'cobalt-icon';
  let classNameBuilder = new ClassNameBuilder(prefixClass, {
    [`${prefixClass}-spin`]: isSpin(props.type)
  });

  let classes = classNameBuilder.toString();

  let Svg = IconSheet[props.type];
  return (
    <div className={classes}>
      <Svg fill="currentColor" />
    </div>
  );
}
