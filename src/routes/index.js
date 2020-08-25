import React from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'

import AppLayout from 'components/__layouts/AppLayout'

import SplashPage from 'components/__pages/SplashPage'

import SwitchWithTransition from 'components/SwitchWithTransition'

export default (
  <BrowserRouter>
    <AppLayout>
      <SwitchWithTransition
        classNames='fade'
        timeout={300}
      >
        <Route path='/' exact component={SplashPage} />
      </SwitchWithTransition>
    </AppLayout>
  </BrowserRouter>
)
