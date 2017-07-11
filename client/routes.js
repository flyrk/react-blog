import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import App from './App';
import Home from './src/components/Home';

const router = (
  <BrowserRouter>
    <App>
      <Route path='/' component={Home} />
    </App>
  </BrowserRouter>
);

export default router;
