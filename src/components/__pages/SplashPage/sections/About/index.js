// Core deps.
import React, { Component } from 'react'

// Local deps.
import Link from 'components/Link'

// styles.
import './base.less'

class AboutSection extends Component {
  render () {
    return (
      <div
        className="section--content section--content--about"
      >
        <h2>
          About
        </h2>

        <p>
          If you think you may want to build stuff together, I highly encourange you to <Link href="https://www.dropbox.com/s/u00kc6k27rfnb1b/nickbadagliacca_cv_2020.pdf?dl=0">download my CV</Link>.
        </p>

        <p>
          Otherwise, here are the basics:
        </p>


        <ul
          className="cv"
        >
          <li>
            8+ years coding dynamic, interactive Javascript applications, including the use of popular platforms and frameworks such as React, React Native, Redux, Apollo, etc.
          </li>
          <li>
            A keen eye for graphic design, UI/UX, and visual aesthetic delivering beautiful, functional interfaces using HTML and CSS.
          </li>
          <li>
            Extensive experience writing front end code to interface with a wide range of server implementations and databases including GraphQL, MySQL, NoSQL MongoDB, Redis, etc.
          </li>
          <li>
            Extensive experience integrating with 3rd party SASS applications (CMSs, image processors, analytics platforms, etc.).
          </li>
          <li>
            Experience building custom server implementations and RESTful APIs using Node.js and Express.
          </li>
        </ul>
      </div>
    )
  }
}

export default AboutSection
