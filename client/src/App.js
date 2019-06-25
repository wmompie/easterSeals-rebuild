import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RunnerState from './context/runner/RunnerState';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import About from './components/pages/About';
import SignUp from './components/pages/SignUp';
import './App.css';

const App = () => {
	return (
		<RunnerState>
			<Router>
				<Fragment>
					<Navbar />
					<Switch>
						<Route exact path='/' component={Home} />
						<Route exact path='/api/users' component={SignUp} />
						<Route exact path='/about' component={About} />
					</Switch>
				</Fragment>
			</Router>
		</RunnerState>
	);
};

export default App;
