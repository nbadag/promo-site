// Core deps.
import React from 'react'

// Third-party deps.
import cn from 'classnames'

// Styles.
import './base.less'

export default (props) => {
  const {
    button,
    small,
    icon,
    children,
    className,
    ...rest
  } = props

  return (
    <a
      rel="noopener noreferrer"
      target="_blank"
      className={cn([
        'link',
        { 'link--button': button },
        { 'link--button--small': button && small },
        className,
      ])}
      {...rest}
    >
      <span
        className="link--content"
      >
        {children}
      </span>

      {icon ? (
        <span
          className="link--button--icon"
        >
          <i
            className="fas fa-caret-right"
          />
        </span>
      ) : null}
    </a>
  )
}
