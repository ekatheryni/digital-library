import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import {createBrowserHistory} from 'history'
import Header from './Header';
import About from './pages/About';
import Student from './pages/Student';
import Librarian from './pages/Librarian';
import Login from './Entry/Login';

const history = createBrowserHistory()

class App extends Component {
  render() {
    return (
        <Router history={history}>
          <div className='container'>
            <Header/>
            <Switch>
              <Route path='/' exact component={About}/>
              <Route path='/student' component={Student}/>
              <Route path='/librarian' component={Librarian}/>
              <Route path='/login' component={Login}/>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
