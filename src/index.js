import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import * as serviceWorker from 'lib/serviceWorker'
import smoothscroll from 'smoothscroll-polyfill'

import store from 'data/store'
import routes from 'routes'

import 'theme/less/index.less'

// https://stackoverflow.com/questions/51731754/window-scroll-smooth-not-working-on-safari
smoothscroll.polyfill()

ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={store}
    >
      {routes}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister()
