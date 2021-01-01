/** @format */

import mongoose from 'mongoose'

const candidateSchema = mongoose.Schema(
  {
    candidate_id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    Image: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: 'Pending',
    },
  },
  {
    timestamps: true,
  }
)

const Candidate = mongoose.model('Candidate', candidateSchema)
export default Candidate
