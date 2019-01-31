import ClassNameBuilder from '../../utils/class-name-builder';
import * as React from 'react';
import iconSheet, { IconType } from './icon-sheet';

interface CustomIconProps {
  type: IconType;
}

type NativeDivProps = React.HTMLAttributes<HTMLDivElement>;
type IconProps = NativeDivProps & CustomIconProps;

function isSpin(type: IconType) {
  return ['loading'].includes(type);
}

export default function Icon(props: IconProps) {
  const prefixClass = 'cobalt-icon';
  let classNameBuilder = new ClassNameBuilder(prefixClass, {
    [`${prefixClass}-spin`]: isSpin(props.type)
  });

  let classes = classNameBuilder.toString();

  let SVG = iconSheet[props.type];
  return (
    <div className={classes}>
      <SVG fill="currentColor" width="1em" height="1em" />
    </div>
  );
}
