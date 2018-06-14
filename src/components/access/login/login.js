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
			<main className="loginContainer" role='main'>
				<div className="authBox">
					<h1 className="signTitle">Sign Up/ Sign In</h1>
					<a href="http://localhost:8080/auth/github">
						<button className="loginBtn">
							<i className="fab fa-github"></i> Github
						</button>
					</a>
				</div>
				
			</main>
		);
	}
}