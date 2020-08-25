// Core deps.
import React, { Component } from 'react'

// Third-party deps.
import { connect } from 'react-redux'

// Local deps.
import Link from 'components/Link'
import { appSelector } from 'data/selectors/app'

// Styles.
import './base.less'

@connect(appSelector)
class HelloSection extends Component {
  render () {
    return (
      <div
        className="section--content secton--content--hello"
      >
        <div
          className="intro"
        >
          <h1>
            Let's make stuff together.
          </h1>

          <p>
            Hi! I'm <strong>Nick Badagliacca</strong>, a <strong>Software Engineer</strong> based out of Santa Cruz, CA.
          </p>

          <p>
            I have 8+ years experience building applications with the "Usual Suspects" (HTML, CSS, and JavaScript), focusing heavily on the React, React Native, and Redux frameworks.
          </p>

          <p>
            Right now I'm looking for a <strong>full time engineering position</strong> in the Bay Area or working remotely.
          </p>

          <div
            className="hello-links"
          >
            <Link
              button
              href="mailto:nbadag@gmail.com"
              className="hello-links--hire-me"
            >
              Hire me!

              <i
                className="fas fa-briefcase"
              />
            </Link>

            <Link
              button
              href="https://www.dropbox.com/s/u00kc6k27rfnb1b/nickbadagliacca_cv_2020.pdf?dl=0"
              className="hello-links--read-cv"
            >
              Read my CV

              <i
                className="fas fa-address-card"
              />
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

export default HelloSection
