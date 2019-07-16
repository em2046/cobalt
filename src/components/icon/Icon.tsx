import ClassNameBuilder from '../../utils/class-name-builder'
import * as React from 'react'
import { IconType, iconSheet } from './icon-sheet-generated'

interface CustomIconProps {
  type: IconType
}

type NativeDivProps = React.HTMLAttributes<HTMLDivElement>
type IconProps = NativeDivProps & CustomIconProps

function isSpin(type: IconType) {
  return ['loading'].includes(type)
}

export default function Icon(props: IconProps) {
  const prefixClass = 'cobalt-icon'
  let classNameBuilder = new ClassNameBuilder(prefixClass, {
    [`${prefixClass}-spin`]: isSpin(props.type)
  })

  let classes = classNameBuilder.toString()

  let SVG = iconSheet[props.type]
  return (
    <span className={classes}>
      <SVG fill="currentColor" width="1em" height="1em" viewBox="0 0 32 32" />
    </span>
  )
}
