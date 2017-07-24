import { combineReducers } from 'redux';
import flashMessages from './src/reducers/flashMessages';
import auth from './src/reducers/auth';

export default combineReducers({
  flashMessages,
  auth
});
