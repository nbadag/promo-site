// Core deps
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Third-party deps
import _ from 'lodash'
import { connect } from 'react-redux'

// Local deps
import Navigation from 'components/Navigation'
import Section from 'components/Section'

import HelloSection from './sections/Hello'
import AboutSection from './sections/About'
import WorkSection from './sections/Work'
import ContactSection from './sections/Contact'

import { appActions } from 'data/actions/app'

@connect(null, appActions)
class SplashPage extends Component {
  constructor (props) {
    super(props)

    this._sections = [
      {
        key: 'SplashPage--section--Hello',
        title: 'Hello!',
        ref: React.createRef(),
        component: HelloSection,
      },
      {
        key: 'SplashPage--section--About',
        title: 'About',
        ref: React.createRef(),
        component: AboutSection,
      },
      {
        key: 'SplashPage--section--Work',
        title: 'Work',
        ref: React.createRef(),
        component: WorkSection,
      },
      {
        key: 'SplashPage--section--Contact',
        title: 'Contact',
        ref: React.createRef(),
        component: ContactSection,
      },
    ]

    this.state = {
      windowWidth: window.innerWidth,
      windowHeight: window.innerHeight,
    }
  }

  static propTypes = {
    app: PropTypes.object,
    measureReactRef: PropTypes.func,
  }

  componentDidMount () {
    if (this._sections.length) {
      _.each(this._sections, this._handleSectionRef)
    }

    window.addEventListener('resize', () => {
      this.setState({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      })

      _.each(this._sections, this._handleSectionRef)
    })
  }

  _handleSectionRef = ({ key, title, ref }) => {
    const { measureReactRef } = this.props
    const { current } = ref

    if (current) {
      const dimensions = {
        top: current.offsetTop,
        bottom: current.offsetTop + current.offsetHeight,
        left: current.offsetLeft,
        right: current.offsetLeft + current.offsetWidth,
        width: current.offsetWidth,
        height: current.offsetHeight,
      }

      measureReactRef(key, title, dimensions)
    }
  }

  render () {
    const { windowWidth, windowHeight } = this.state

    return (
      <div className="page page--SplashPage">
        <Navigation
          sections={this._sections}
          height={50}
        />

        {this._sections.map(({
          key,
          className,
          ref,
          component: Component,
          ...rest
        }) => (
          <Section
            key={key}
            className={className
              ? [key, className].join(' ')
              : key
            }
            ref={ref}
            style={{
              width: windowWidth,
              minHeight: windowHeight,
              height: '100%',
            }}
            { ...rest }
          >
            <Component />
          </Section>
        ))}
      </div>
    )
  }
}

export default SplashPage
