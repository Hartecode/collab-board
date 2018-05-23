import React from 'react';
import {Link} from 'react-router-dom';
import './login.css';

export default class LogIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	render() {
		return (
			<main className="container" role='main'>
				<h1>Sign Up/ Sign In</h1>
				<Link to='/dashboard'>
					<button className="loginBtn">
						<i className="fab fa-github"></i> Github
					</button>
				</Link>
			</main>
		);
	}
}