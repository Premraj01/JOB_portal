/** @format */

import {
  CANDIDATE_LIST_REQUEST,
  CANDIDATE_LIST_SUCCESS,
  CANDIDATE_LIST_FAIL,
  CANDIDATE_PROFILE_REQUEST,
  CANDIDATE_PROFILE_SUCCESS,
  CANDIDATE_PROFILE_FAIL,
  CANDIDATE_STATUS_REQUEST,
  CANDIDATE_STATUS_SUCCESS,
  CANDIDATE_STATUS_FAIL,
  CANDIDATE_STATUS_LIST_REQUEST,
  CANDIDATE_STATUS_LIST_SUCCESS,
  CANDIDATE_STATUS_LIST_FAIL,
} from '../constants/candidateConstants'

export const candidateListReducer = (state = { candidates: [] }, action) => {
  switch (action.type) {
    case CANDIDATE_LIST_REQUEST:
      return { loading: true, candidates: [] }
    case CANDIDATE_LIST_SUCCESS:
      return { loading: false, candidates: action.payload }
    case CANDIDATE_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const candidateStatusListReducer = (
  state = { candidatesStatus: [] },
  action
) => {
  switch (action.type) {
    case CANDIDATE_STATUS_LIST_REQUEST:
      return { loading: true, candidatesStatus: [] }
    case CANDIDATE_STATUS_LIST_SUCCESS:
      return { loading: false, candidatesStatus: action.payload }
    case CANDIDATE_STATUS_LIST_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const candidateProfileReducer = (state = { candidate: [] }, action) => {
  switch (action.type) {
    case CANDIDATE_PROFILE_REQUEST:
      return { loading: true, ...state }
    case CANDIDATE_PROFILE_SUCCESS:
      return { loading: false, candidate: action.payload }
    case CANDIDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const candidateStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case CANDIDATE_STATUS_REQUEST:
      return { loading: true, ...state }
    case CANDIDATE_STATUS_SUCCESS:
      return { loading: false, status: action.payload }
    case CANDIDATE_STATUS_FAIL:
      return { loading: false, status: action.payload }
    default:
      return state
  }
}
