import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login'
import Register from './pages/Register'
import Profile from './pages/Profile'
import NewQuote from './pages/NewQuote'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/quotes/new' exact component={NewQuote} />
      </Switch>
    </BrowserRouter>
  )
}
