import { Route } from 'react-router';

import App from './components/App';

import Index from './components/Index';
import About from './components/About';
import Contacts from './components/Contacts';
import Movies from './components/movies/Movies';


export default (
  <Route path="" component={App} >
    <Route path="/" component={Index} />
    <Route path="/about" component={About} />
    <Route path="/contacts" component={Contacts}/>
    <Route path="/movies" component={Movies}></Route>
  </Route>
);
