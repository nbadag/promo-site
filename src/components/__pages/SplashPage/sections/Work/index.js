// Core deps.
import React, { Component } from 'react'

// Local deps.
import Link from 'components/Link'

// Styles.
import './base.less'

class WorkSection extends Component {
  render () {
    return (
      <div
        className="section--content section--content--work"
      >
        <div
          className="section--content--work--body"
        >
          <h2>Work</h2>

          <p>
            Unfortunately, the lion's share of my GitHub contributions (including forks of open source repositories) are behind private organizations for <Link href="https://www.github.com/wribbn">Wribbn</Link> and <Link href="https://www.github.com/terraeclipse">Terra Eclipse</Link>. Below are some other examples of my work that are publicly viewable.
          </p>

          <ul className="work-links">
            <li>
              <h3>
                Wribbn
              </h3>

              <p>
                Over the past 2 years I've been a key part of the team bringing an app called Wribbn to mobile devices. I wrote a large portion of the client side code using React Native, occasionally dipping my toes into Objective C and Java.
              </p>

              <div
                className="work-link animate-with-section"
              >
                <Link
                  button
                  small
                  icon
                  href="https://www.wribbn.com"
                >
                  Check out Wribbn
                </Link>
              </div>
            </li>

            <li>
              <h3>
                This Site
              </h3>

              <p>
                If you'd like to see an example of a personal project, you can check out the complete code for this site on GitHub. It's a front end web application written with React, Redux, and React Router.
              </p>

              <div
                className="work-link animate-with-section"
              >
                <Link
                  button
                  small
                  icon
                  href="https://www.github.com/nbadag/promo-site"
                >
                  See the code
                </Link>
              </div>
            </li>

            <li>
              <h3>
                Game Viewer
              </h3>

              <p>
                As another example of a work-in-progress personal project, I built a web viewer for my tabletop game collection. It uses React, Redux, React Router, and a Google Firestore NoSQL backend.
              </p>

              <div
                className="work-link animate-with-section"
              >
                <Link
                  button
                  small
                  icon
                  href="https://games.nbadag.com"
                >
                  Look at some games
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default WorkSection
