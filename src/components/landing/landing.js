import React from 'react';
import {Link} from 'react-router-dom';
import './landing.css';

export default function LandingPage() {
	return (
		<div>
			<header id="landingHeader" role="banner">
				<h1 className="logoLanding">Collab Board</h1>
		      <nav role="navagation">
		      	<Link id="navLinkLand" to='/login'>		
	    			Sign Up/Sign In
	    		</Link>   
		      </nav>
		    </header>

		    <main role="main">
		    <section className="openingGreeting" role="region">
		    	
		    </section>
		    <section className="appDec" role="region">
		    	<p>Collab Board is where developers go to seek collaberation on thier projects or find projects to collaberate on.</p>
		    	<div className="descBoxContainer">
		    		<div className="descBox">
		    			<h3>SignUp/Login</h3>
		    			<br />
		    			<i className="fab fa-github fa-7x"></i>
		    		</div>
		    		<div className="descBox">
		    			<h3>Add Project</h3>
		    			<br />
		    			<i className="fa fa-plus-circle fa-7x" aria-hidden="true"></i>
		    		</div>
		    		<div className="descBox">
		    			<h3>Review request to join the project</h3> 
		    			<i className="fa fa-users fa-7x" aria-hidden="true"></i>
		    		</div>
		    		<div className="descBox">
		    			<h3>Find a project you like</h3>
		    			<h3>and click join!</h3>
		    			<i className="fab fa-connectdevelop fa-7x" aria-hidden="true"></i>
		    		</div>
		    	</div>

		    </section>
		    </main>	
		</div>
	);
}