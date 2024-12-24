import { render } from 'solid-js/web';
import { Route, Router } from '@solidjs/router';
import './index.css';
import App from './App';
import Home from './pages/home';
import CreateToDo from './pages/create';

render(() => (
  <Router root={App}>
    <Route path="/" component={Home} />
    <Route path="/create" component={CreateToDo} />
    <Route path="/r2" component={undefined} />
    <Route path="/r3" component={undefined} />
  </Router>
), document.getElementById('root')!);
