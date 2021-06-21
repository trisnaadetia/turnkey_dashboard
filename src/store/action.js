import {
  SET_LIST_USER,
  SET_LOADING_USER,
  SET_ERROR_USER
} from './constanta'
import axios from 'axios'


export function setUser(payload) {
  return { type: SET_LIST_USER, payload }
}

export function setLoadingUser(payload) {
  return { type: SET_LOADING_USER, payload }
}

export function setErrorUser(payload) {
  return { type: SET_ERROR_USER, payload }
}

export function fetchUser() {
  return function(dispatch) {
    axios.get('https://randomuser.me/api/?results=20')
      .then(({ data }) => dispatch(setUser(data)))
      .catch(err => dispatch(setErrorUser(err)))
      .finally(() => dispatch(setLoadingUser(false)))
  }
}