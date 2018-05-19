import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LandingPage from '../landing/landing';
import Header from '../header/header';
import Dashboard from '../dashboard/dashboard';
import Board from '../board/board';
import Project from '../repository/project';
import Request from '../request/request';



import './app.css';

export default function App() {

	return (
		<Router>
			<div>
				<Route path="/" render={(props) => (props.location.pathname !== "/" ) && <Header /> }/>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/board" component={Board} />
				<Route exact path="/project/:projectId" component={Project} />
				<Route exact path="/request" component={Request} />
			</div>
		</Router>
	);
}