/** @format */

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCandidateById, updateCandidate } from '../actions/candidateActions'
import { Card, Row, Col, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const ProfileScreen = ({ match }) => {
  const dispatch = useDispatch()

  const candidateProfile = useSelector((state) => state.candidateProfile)
  const { candidate } = candidateProfile

  useEffect(() => {
    dispatch(getCandidateById(match.params.id))
  }, [dispatch, match])

  return (
    <Container className='mt-2'>
      <Link to='/'>
        <button className='btn btn-outline-primary ml-5'>Go back</button>
      </Link>
      <Card className='profile-card'>
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
            <Col md={6} className='text-center'>
              <Link to='/'>
                <button
                  className='btn btn-outline-success'
                  onClick={() => {
                    dispatch(updateCandidate(match.params.id, 'Shortlisted'))
                    dispatch(getCandidateById(match.params.id))
                  }}>
                  Shortlist
                </button>
              </Link>
            </Col>
            <Col md={6} className='text-center'>
              <Link to='/'>
                <button
                  className='btn btn-outline-danger'
                  onClick={() => {
                    dispatch(updateCandidate(match.params.id, 'Rejected'))
                    dispatch(getCandidateById(match.params.id))
                  }}>
                  Reject
                </button>
              </Link>
            </Col>
          </Row>
        </Card.Footer>
      </Card>
    </Container>
  )
}

export default ProfileScreen
