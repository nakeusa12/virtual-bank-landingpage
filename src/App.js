import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Home from "./Pages/Home"
import SigninPage from './Pages/SigninPage';

function App() {
	return (
		<Router>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/signin" component={SigninPage} exact />
			</Switch>
		</Router>
	);
}

export default App;
