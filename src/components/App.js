import React from 'react'
import Navigation from './Navigation'
import { Route, Redirect } from 'react-router-dom'
import { ConnectedRouter }  from 'react-router-redux'
import Dashboard from '../containers/dashboard/Dashboard'
import Accounts from '../containers/accounts/Accounts'

const App = ({history}) => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Navigation />
        <Route path="/" >
          <Redirect to="/dashboard" />
        </Route>
        <Route path="/dashboard" component={Dashboard} />
        <Route exact path="/accounts" component={Accounts}/>
        <Route path="/accounts/:accountId" component={Accounts}/>
      </div>
    </ConnectedRouter>
  )
}

export default App
