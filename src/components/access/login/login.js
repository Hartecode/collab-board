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
				<header id="landingHeader" role="banner">
		      		<nav role="navagation">
		      			<Link id="navLinkLand" to='/'>		
	    					<h1 className="logoLanding">CollaBoard</h1>
	    				</Link>   
		      		</nav>
		    	</header>
				<div className="authBox">
					<div>
						<h1 className="signTitle">Sign Up/ Sign In</h1>
						<p>All users need a Github account to access the site.</p>
					</div>
					<a href="https://boiling-earth-62792.herokuapp.com/auth/github">
						<button className="btn loginBtn">
							<i className="fab fa-github"></i> Github
						</button>
					</a>
				</div>
				
			</main>
		);
	}
}