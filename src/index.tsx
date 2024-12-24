import { render } from 'solid-js/web';
import App from './App';
import './index.css';
import { Route, Router } from '@solidjs/router';

render(() => (
  <Router root={App}>
    <Route path="/r1" component={undefined} />
    <Route path="/r2" component={undefined} />
    <Route path="/r3" component={undefined} />
  </Router>
), document.getElementById('root')!);
