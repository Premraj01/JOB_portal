/** @format */

import asyncHandler from 'express-async-handler'
import Candidate from '../models/candidateModels.js'

//@desc get canididates
//@route GET /api/candidates
//@access Public

const getCandidates = asyncHandler(async (req, res) => {
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const candidates = await Candidate.find({ ...keyword })

  res.json(candidates)
})

//@desc get canididates by Id
//@route GET /api/candidates/:id
//@access Public
const getCandidateById = asyncHandler(async (req, res) => {
  const candidate = await Candidate.findOne({ candidate_id: req.params.id })
  if (candidate) {
    res.json(candidate)
  } else {
    res.status(404)
    throw new Error('Cannot Find Candidate')
  }
})

//@desc get canididates by status
//@route GET /api/candidates/:id
//@access Public
const getCandidateByStatus = asyncHandler(async (req, res) => {
  const candidates = await Candidate.find({ status: req.params.status })
  if (candidates) {
    res.json(candidates)
  } else {
    res.status(404)
    throw new Error('Cannot Find Candidate')
  }
})

//@desc upate canididates status
//@route PUT /api/candidates/:id/status
//@access Public
const updateCandidateStatus = asyncHandler(async (req, res) => {
  const candidate = await Candidate.findOne({ candidate_id: req.params.id })

  if (candidate) {
    candidate.status = req.body.status
    const statusUpdate = await candidate.save()
    res.json({
      status: statusUpdate.status,
    })
  } else {
    res.status(404)
    throw new Error('Cannot Update Status')
  }
})

export {
  getCandidates,
  getCandidateById,
  updateCandidateStatus,
  getCandidateByStatus,
}
