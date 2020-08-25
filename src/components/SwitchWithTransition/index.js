// Core deps
import React from 'react'

// Third-party deps
import { Switch, useLocation } from 'react-router-dom'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

const SwitchWithTransition = (props) => {
  const location = useLocation()

  return (
    <SwitchTransition>
      <CSSTransition
        // https://github.com/reactjs/react-transition-group/issues/569#issuecomment-550571092
        key={location.key || '__default'}
        {...props}
      >
        <Switch
          location={location}
        >
          {props.children}
        </Switch>
      </CSSTransition>
    </SwitchTransition>
  )
}

export default SwitchWithTransition
