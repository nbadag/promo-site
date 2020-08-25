// Core deps
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// Third-party deps
import _ from 'lodash'
import cn from 'classnames'
import { connect } from 'react-redux'

// Local deps
import { appSelector } from 'data/selectors/app'
import { appActions } from 'data/actions/app'

// Styles
import './base.less'

@connect(appSelector, appActions)
class Navigation extends Component {
  constructor (props) {
    super(props)

    // Bootstrap the navigation items with some dummy data from props.sections
    // so that there's something to render initially. `currentSection` will
    // get backfilled with real data in `componentDidMount` by the time the
    // user starts scrolling and we need real offsets.
    this._sections = props.sections.map(section => ({
      id: section.key,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerWidth,
    }))

    this.state = {
      currentSection: this._sections[0],
      isAutoScrolling: false,
    }
  }

  static propTypes = {
    app: PropTypes.object,
    setActiveSplashSection: PropTypes.func,
  }

  static defaultProps = {
    height: 80,
  }

  componentDidUpdate (prevProps, prevState) {
    const scrollPositionY = window.scrollY
    const prevRefs = prevProps.app.reactRefs.length
    const currentRefs = this.props.app.reactRefs.length

    // After we load the section refs from the store for the first time,
    // check to see where we are on the page and activate the appropriate
    // navigation item.
    if (
      !prevRefs.length
      &&
      currentRefs.length
    ) {
      const activeSection = _.find(currentRefs, (ref) => {
        // Using the actual top position of the section as a breakpoint for
        // changing the active section means it has to get all the way to the
        // top of the screen, and that feals late from a UX perspective. So
        // we lead it a bit but activating a section when it's only 1/3 of
        // the way toward the top.
        const buffer = ref.height / 3

        return (
          ref.top >= scrollPositionY - buffer
          &&
          scrollPositionY < ref.bottom - buffer
        )
      })

      this.setState({ currentSection: activeSection })
    }
  }

  componentDidMount () {
    window.addEventListener('scroll', this._handleWindowScroll)
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this._handleWindowScroll)
  }

  _handleWindowScroll = () => {
    const scrollPositionY = window.scrollY

    const {
      app: { reactRefs },
      setActiveSplashSection,
    } = this.props

    const {
      currentSection,
      isAutoScrolling,
    } = this.state

    const activeSection = _.find(reactRefs, ref => (
      ref.top >= scrollPositionY - (ref.height / 3)
      &&
      scrollPositionY < ref.bottom - (ref.height / 3)
    ))

    const isScrollingUp = (
      activeSection
      &&
      (scrollPositionY >= activeSection.top)
    )
    const isScrollingDown = (
      activeSection
      &&
      (scrollPositionY <= activeSection.top)
    )
    const isSelectedSectionActive = (
      activeSection
      &&
      _.isEqual(currentSection, activeSection)
    )

    // If we're just scrolling normally, activate the appropriate navigation
    // item on the fly. If we're auto scrolling from clicking an item,
    // this should be bypassed so we don't sequentially activate all of the
    // sections that get passed through during the animated scroll.
    if (
      !isAutoScrolling
      &&
      !isSelectedSectionActive
    ) {
      this.setState({ currentSection: activeSection }, () => {
        setActiveSplashSection(this.state.currentSection)
      })
    }

    if (
      isAutoScrolling
      &&
      (isScrollingUp || isScrollingDown)
      &&
      _.isEqual(currentSection, activeSection)
    ) {
      this.setState({
        isAutoScrolling: false,
      })
    }
  }

  _handlePressNavigationItem = (e, sectionId) => {
    e.preventDefault()
    e.stopPropagation()

    const {
      app: { reactRefs },
      setActiveSplashSection,
    } = this.props
    const previousSection = this.state.currentSection
    const section = _.find(reactRefs, { id: sectionId })

    this.setState({
      isAutoScrolling: true,
      currentSection: section,
    }, () => {
      const nextSection = this.state.currentSection

      if (sectionId !== previousSection.id) {
        setActiveSplashSection(this.state.currentSection)

        window.scroll({
          // There can be a vartiable amount of buffer space above the first
          // proper section, so if the user has requested to auto scroll to
          // the first one, throw out it's `top` value and just scroll all
          // the way to the top.
          top: _.isEqual(nextSection, _.minBy(reactRefs, ref => ref.top))
            ? 0
            : section.top,
          left: section.left,
          behavior: 'smooth',
        })
      }
    })
  }

  render () {
    const { app: { reactRefs }, height } = this.props
    const { currentSection } = this.state
    // Active width of the navigation items is 1.5x the width of an even split
    // amongst however many there are.
    const activeItemWidth = (100 / reactRefs.length) * 1.5
    // Inactive width of the navigation items is an even split of what's
    // left over after subtracting a single active width.
    const inactiveItemWidth = (100 - activeItemWidth) / (reactRefs.length - 1)
    const refs = reactRefs.length ? reactRefs : this._sections

    return (
      <nav className="navigation">
        {/* <button
          onClick={(e) => {
            this._handlePressNavigationItem(e, this._sections[0].id)
          }}
          className="monogram"
          style={{
            width: height,
            height,
          }}
        >
          <strong>
            NB
          </strong>
        </button> */}

        {currentSection ? (
          <ul>
            {refs.map((section) => {
              const isItemActive = section.id === currentSection.id
              const itemStyle = isItemActive ? {
                width: `${activeItemWidth}%`,
              } : {
                width: `${inactiveItemWidth}%`,
              }

              return (
                <li
                  key={section.id}
                  className={cn({
                    'navigation--item': true,
                    'navigation--item--active': isItemActive,
                  })}
                  style={{
                    height,
                    ...itemStyle,
                  }}
                >
                  <button
                    onClick={(e) => {
                      this._handlePressNavigationItem(e, section.id)
                    }}
                  >
                    <div
                      className="navigation--item--title"
                    >
                      {section.title}
                    </div>

                    <div
                      className="navigation--item--background"
                    />
                  </button>
                </li>
              )
            })}
          </ul>
        ) : null}
      </nav>
    )
  }
}

export default Navigation
