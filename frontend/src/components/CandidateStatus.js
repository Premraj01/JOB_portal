/** @format */

import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav } from 'react-bootstrap'

const CandidateStatus = () => {

  return (
    <Nav className='ml-auto'>
      <LinkContainer to={`/candidates/Shortlisted`}>
        <Nav.Link>Shortlisted</Nav.Link>
      </LinkContainer>
      <LinkContainer to={`/candidates/Rejected`}>
        <Nav.Link>Rejected</Nav.Link>
      </LinkContainer>
    </Nav>
  )
}

export default CandidateStatus
