// Core deps.
import React, { Component } from 'react'

// Third-party deps.
import { connect } from 'react-redux'
import cn from 'classnames'

// Local deps.
import { appSelector } from 'data/selectors/app'

// Styles.
import './base.less'

// Give all section components access to the central app state, pass in an
// 'is active' boolean they can use, internally, and add active/inactive
// classes for animation
@connect(appSelector)
class SectionWithAppState extends Component {
  render () {
    const {
      className,
      style,
      sectionRef,
      app: {
        activeSplashSection,
      },
    } = this.props

    const isSectionActive = activeSplashSection.id === className

    return (
      <section
        ref={sectionRef}
        style={style}
        className={cn([
          className,
          { 'section--active': isSectionActive },
          { 'section--inactive': !isSectionActive },
        ])}
      >
        {React.cloneElement(this.props.children, {
          ...this.props,
          isSectionActive,
        })}
      </section>
    )
  }
}

// `React.forwardRef` so that we can grab the DOM element to measure
const Section = React.forwardRef(({ children, ...rest }, ref) => (
  <SectionWithAppState
    sectionRef={ref}
    {...rest}
  >
    {children}
  </SectionWithAppState>
))

export default Section
