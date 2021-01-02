/** @format */

import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, Route } from 'react-router-dom'
import Searchbox from './Searchbox'
import Candidate from './CandidateStatus'

const Header = () => {
  return (
    <header>
      {' '}
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <Link to='/'>
            <Navbar.Brand>
              <h3>Job_Portal</h3>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Route
              render={({ history }) => (
                <>
                  <Searchbox history={history} />
                </>
              )}
            />
            <Candidate />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
