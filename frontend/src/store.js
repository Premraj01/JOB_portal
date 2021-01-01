/** @format */

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  candidateListReducer,
  candidateProfileReducer,
  candidateStatusReducer,
  candidateStatusListReducer,
} from './reducers/candidateReducers'

const reducer = combineReducers({
  candidateList: candidateListReducer,
  candidateProfile: candidateProfileReducer,
  candidateStatus: candidateStatusReducer,
  candidateStatusList: candidateStatusListReducer,
})

const initialState = {} //Anything that has to be load Initially(when application loads), Should be put in the here

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
