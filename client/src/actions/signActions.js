import axios from 'axios';

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post('/api/users', userData);
  };
}

export function userSigninRequest(userData) {
  return dispatch => {
    return axios.post('/api/auth', userData);
  };
}
