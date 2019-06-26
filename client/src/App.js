import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RunnerState from './context/runner/RunnerState';
import AlertState from './context/alert/AlertState';

import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';
import Footer from './components/layout/Footer';
import './App.css';

const App = () => {
  return (
    <RunnerState>
      <AlertState>
        <Router>
          <Fragment>
            <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/register' component={SignUp} />
              <Route exact path='/about' component={About} />
            </Switch>
            <Footer />
          </Fragment>
        </Router>
      </AlertState>
    </RunnerState>
  );
};

export default App;
