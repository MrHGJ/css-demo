import React from 'react'
import { Route, Switch, HashRouter } from 'react-router-dom'
import ColorUiAnimation from '@/views/color-ui-animation'
import Home from '@/views/home'
import TransformPage from '@/views/transform-page'
import TransitionPage from '@/views/transition-page'
import StickyPage from '@/views/sticky-page'

const CoreRouter = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/color-ui-animation' component={ColorUiAnimation} />
        <Route exact path='/transform-page' component={TransformPage} />
        <Route exact path='/transition-page' component={TransitionPage} />
        <Route exact path='/sticky-page' component={StickyPage} />
      </Switch>
    </HashRouter>
  )
}

export default CoreRouter
