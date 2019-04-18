import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import {createBrowserHistory} from 'history'
import Header from './Header';
import About from './pages/About';
import Student from './pages/Student';
import Librarian from './pages/Librarian';
import Login from './Entry/Login';
import Register from './Entry/Register';
import Books_st from './pages/Student/Books_st';
import Books_my from './pages/Student/Books_my';
import Students_lib from './pages/Librarian/Students_lib';
import Lib_books_add from './pages/Librarian/Books_lib/BookAdd';

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
              <Route path='/register' component={Register}/>
              <Route path='/books_st' component={Books_st}/>
              <Route path='/books_my' component={Books_my}/>
              <Route path='/students_lib' component={Students_lib}/>
              <Route path='/lib_books_add' component={Lib_books_add}/>
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
