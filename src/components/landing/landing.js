import React from 'react';
import {Link} from 'react-router-dom';
import './landing.css';

export default function LandingPage() {
	return (
		<div>
			<header className="landingHeader" role="banner">
				<h1 className="logoLanding">Collab Board</h1>
		      <nav role="navagation">
		      	<Link id="navLinkLand" to='/login'>		
	    			Sign Up/Sign In
	    		</Link>   
		      </nav>
		    </header>

		    <main role="main">
		    <section className="openingGreeting" role="region">
		    	<p className="greeting">Collaberate and succeed!</p>
		    </section>
		    <section className="appDec" role="region">
		    	<p>Collab Board is where developers go to seek collaberation on thier projects or find projects to collaberate on.</p>
		    	<p>Join the community:</p>
		    	<div className="descBoxContainer">
		    		<div className="descBox">
		    			<h3>SignUp/Login</h3>
		    			<h3>with Github</h3>
		    			<img className="iconImage" 
	        				src="https://assets-cdn.github.com/images/modules/logos_page/GitHub-Mark.png"
	        				alt="Github" 
	        			/>
		    		</div>
		    		<div className="descBox">
		    			<h3>Add Project</h3>
		    			<img className="iconImage" 
	        				src="https://image.freepik.com/free-icon/circle-plus_318-11168.jpg"
	        				alt="plus" 
	        			/>
		    		</div>
		    		<div className="descBox">
		    			<h3>Review & either Approve/Deny</h3> 
		    			<h3>users request to join the project</h3>
		    			<img className="iconImage" 
	        				src="http://www.stickpng.com/assets/images/585e4d1ccb11b227491c339b.png"
	        				alt="Users" 
	        			/>
		    		</div>
		    		<div className="descBox">
		    			<h3>Browse Board</h3>
		    			<img className="iconImage" 
	        				src="data:image/png;base64,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"
	        				alt="board" 
	        			/>
		    		</div>
		    		<div className="descBox">
		    			<h3>Find a project you like</h3>
		    			<h3>and click join!</h3>
		    			<img className="iconImage" 
	        				src="http://www.jonathankettleborough.com/wp-content/uploads/2013/07/Collaboration.jpg"
	        				alt="join" 
	        			/>
		    		</div>
		    	</div>

		    </section>
		    </main>	
		</div>
	);
}