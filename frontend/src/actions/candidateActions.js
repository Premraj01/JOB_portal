/** @format */

import axios from 'axios'
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

export const getCandidateList = (keyword = '', status = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: CANDIDATE_LIST_REQUEST })
    const { data } = await axios.get(`/api/candidates?keyword=${keyword}`)
    dispatch({
      type: CANDIDATE_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CANDIDATE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getCandidateStatus = (status) => async (dispatch) => {
  try {
    dispatch({ type: CANDIDATE_STATUS_LIST_REQUEST })
    console.log(status)
    const { data } = await axios.get(`/api/candidates/status/${status} `)
    dispatch({
      type: CANDIDATE_STATUS_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CANDIDATE_STATUS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const getCandidateById = (id) => async (dispatch) => {
  try {
    dispatch({ type: CANDIDATE_PROFILE_REQUEST })
    const { data } = await axios.get(`/api/candidates/${id}`)
    dispatch({
      type: CANDIDATE_PROFILE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CANDIDATE_PROFILE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateCandidate = (id, status) => async (dispatch) => {
  try {
    dispatch({ type: CANDIDATE_STATUS_REQUEST })

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.put(
      `/api/candidates/${id}/status`,
      { status },
      config
    )

    dispatch({
      type: CANDIDATE_STATUS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: CANDIDATE_STATUS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
