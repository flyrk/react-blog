import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Home from './src/components/Home';
import SignupPage from './src/components/signup/SignupPage';

const router = (
  <Router>
    <App>
      <Route exact path='/' component={Home} />
      <Route path='/signup' component={SignupPage} />
    </App>
  </Router>
);

export default router;
