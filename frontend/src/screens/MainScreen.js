/** @format */

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Candidate from '../components/Candidate'
import { getCandidateList } from '../actions/candidateActions'

const MainScreen = ({ match }) => {
  const dispatch = useDispatch()
  const keyword = match.params.keyword
  const candidateList = useSelector((state) => state.candidateList)
  const { candidates } = candidateList

  useEffect(() => {
    dispatch(getCandidateList(keyword))
  }, [dispatch, keyword])
  return (
    <>
      <h2>Candidate Applications:</h2> <hr />
      <Row>
        {candidates.map((candidate) => (
          <Col md={4} className='mt-5' key={candidate._id}>
            <Candidate candidate={candidate} />
          </Col>
        ))}
      </Row>
    </>
  )
}

export default MainScreen
