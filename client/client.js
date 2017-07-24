import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import Router from './routes';
import setAuthorizationToken from './utils/setAuthorizationToken';
import jwt from 'jsonwebtoken';
import { setCurrentUser } from './src/actions/authActions';

import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

);

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);   // 每次刷新都设置token Header
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));    // 保存当前用户
}

render(
  <Provider store={store}>
    <Router />
  </Provider>, document.getElementById('root'));
