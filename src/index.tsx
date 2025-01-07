import { render } from 'solid-js/web';
import { Route, Router } from '@solidjs/router';
import './index.css';
import App from './App';
import Home from './pages/home';
import CreateToDo from './pages/create';
import BrowseToDos from './pages/browse';

render(() => (
  <Router root={App}>
    <Route path="/" component={Home} />
    <Route path="/create" component={CreateToDo} />
    <Route path="/browse" component={BrowseToDos} />
  </Router>
), document.getElementById('root')!);
