import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import ColorUiAnimation from '@/views/color-ui-animation'
import Home from '@/views/home'

const CoreRouter = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/color-ui-animation' component={ColorUiAnimation} />
      </Switch>
    </HashRouter>
  )
}

export default CoreRouter
