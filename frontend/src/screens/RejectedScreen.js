/** @format */

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCandidateStatus } from '../actions/candidateActions'
import Candidate from '../components/Candidate'
import { Row, Col } from 'react-bootstrap'

const RejectedScreen = () => {
  const dispatch = useDispatch()
  const candidateStatusList = useSelector((state) => state.candidateStatusList)
  const { candidatesStatus } = candidateStatusList

  useEffect(() => {
    dispatch(getCandidateStatus('Rejected'))
  }, [dispatch])

  return (
    <>
      {' '}
      <Row>
        {candidatesStatus.map((candidate) => (
          <Col md={4} className='mt-5' key={candidate._id}>
            <Candidate candidate={candidate} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default RejectedScreen
