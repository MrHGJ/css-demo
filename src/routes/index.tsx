import ColorUiAnimation from '../views/color-ui-animation/index'
import Home from '../views/home/index'
import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
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
