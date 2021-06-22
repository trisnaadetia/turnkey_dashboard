import {
  SET_LIST_USER,
  SET_LOADING_USER,
  SET_ERROR_USER,
  SET_USER_PER_PAGE
} from './constanta'

const initialState = {
  userData: [],
  userPerPage: [],
  loading: true,
  error: false
}

function userReducer(state = initialState, action) {
  const { type, payload } = action
  switch(type) {
    case SET_LIST_USER:
      return { ...state, userData: payload }
    case SET_USER_PER_PAGE:
        return { ...state, userPerPage: payload }
    case SET_LOADING_USER:
      return { ...state, loading: payload }
    case SET_ERROR_USER:
      return { ...state, error: payload }
    default:
      return state
  }
}

export default userReducer