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
		      			<Link to='/'>		
	    					<h1 id="navLinkLand" className="logoLanding">CollaBoard</h1>
	    				</Link>   
		      		</nav>
		    	</header>
				<div className="authBox">
					<div>
						<h1 className="signTitle">Sign Up/ Sign In</h1>
						<p>All users need a Github account to access the site.</p>
						<p className="demoDirect">To demo the app click the "Demo Profile" button</p>
					</div>
					<a href="https://boiling-earth-62792.herokuapp.com/auth/github">
						<button className="btn loginBtn">
							<i className="fab fa-github"></i> Github
						</button>
					</a>
					<Link to='/dashboard/5b1f173ffc13ae2723000000'>
						<button className="btn loginBtn">
							Demo Profile
						</button>
					</Link>
				</div>
				
			</main>
		);
	}
}