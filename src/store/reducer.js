import {
  SET_LIST_USER,
  SET_LOADING_USER,
  SET_ERROR_USER
} from './constanta'

const initialState = {
  userData: [],
  loading: true,
  error: false
}

function userReducer(state = initialState, action) {
  const { type, payload } = action
  switch(type) {
    case SET_LIST_USER:
      return { ...state, userData: payload }
    case SET_LOADING_USER:
      return { ...state, loading: payload }
    case SET_ERROR_USER:
      return { ...state, error: payload }
    default:
      return state
  }
}

export default userReducer