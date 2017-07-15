import axios from 'axios';

export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post('/api/users', userData);
  };
}

export function userSigninRequest(userData) {
  return dispatch => {
    const { username, password, email } = userData;
    return axios.get('/api/users', {
      params: {
        username,
        password,
        email
      }
    });
  };
}
