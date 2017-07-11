import { Route, Router, IndexRoute, browserHistory } from 'react-router';
import App from './App';

const router = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
    </Route>
  </Router>
);

export default router;
