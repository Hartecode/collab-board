import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import LandingPage from '../landing/landing';
import LogIn from '../access/login/login';
import LogOut from '../access/logout/logout';
import Header from '../header/header';
import Dashboard from '../dashboard/dashboard';
import Board from '../board/board';
import Project from '../repository/project';
import Request from '../request/request';
import UserProfile from '../user/userProfile';




import './app.css';

export default function App() {

	return (
		<Router>
			<div>
				<Route path="/" render={(props) => (props.location.pathname !== "/" &&  props.location.pathname !== "/login") && <Header /> }/>
				<Route exact path="/" component={LandingPage} />
				<Route exact path="/login" component={LogIn} />
				<Route exact path="/logout" component={LogOut} />
				<Route exact path="/dashboard/:userId" component={Dashboard} />
				<Route exact path="/board" component={Board} />
				<Route exact path="/project/:projectId" component={Project} />
				<Route exact path="/request" component={Request} />
				<Route exact path="/user/:userId" component={UserProfile} />
			</div>
		</Router>
	);
}