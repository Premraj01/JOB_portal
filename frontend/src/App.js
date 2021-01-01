/** @format */

import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header'
import ProfileScreen from './screens/ProfileScreen'
import MainScreen from './screens/MainScreen'
import ShortlistedScreen from './screens/ShortlistedScreen'
import RejectedScreen from './screens/RejectedScreen'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <main>
          <Container>
            <Route path='/' component={MainScreen} exact />
            <Route path='/candidate/:id' component={ProfileScreen} />
            <Route path='/search/:keyword' component={MainScreen} />
            <Route
              path='/candidates/Shortlisted'
              component={ShortlistedScreen}
            />
            <Route path='/candidates/Rejected' component={RejectedScreen} />
          </Container>
        </main>
      </Router>
    </div>
  )
}

export default App
