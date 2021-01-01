/** @format */

import express from 'express'
const router = express.Router()

import {
  getCandidates,
  getCandidateById,
  getCandidateByStatus,
  updateCandidateStatus,
} from '../controllers/candidteController.js'

router.route('/').get(getCandidates)
router.route('/:id').get(getCandidateById)
router.route('/status/:status').get(getCandidateByStatus)
router.route('/:id/status').put(updateCandidateStatus)

export default router
