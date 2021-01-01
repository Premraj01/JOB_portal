/** @format */

import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { Card, Button, Row, Col } from 'react-bootstrap'

const Candidates = ({ candidate }) => {
  return (
    <Fragment>
      <Card className='candidate-card'>
        <img
          className='card-img-top'
          src={candidate.Image}
          alt='Card image cap'
        />

        <Card.Body>
          <Card.Title>
            <strong className='p-2'>ID:&nbsp;{candidate.candidate_id}</strong>
          </Card.Title>
          <Card.Text>
            <strong className='p-2'>Name:</strong>
            {candidate.name}
          </Card.Text>
          <Card.Text>
            <strong className='p-2'>Status:</strong>
            <strong> {candidate.status}</strong>
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Row>
            <Col className='text-center'>
              <Link to={`/candidate/${candidate.candidate_id}`}>
                <Button>Profile</Button>
              </Link>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Fragment>
  )
}

export default Candidates
