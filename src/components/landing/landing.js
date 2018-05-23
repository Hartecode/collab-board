import React from 'react';
import {Link} from 'react-router-dom';
import './landing.css';

export default function LandingPage() {
	return (
		<div className="LandingContainer">
			<h1>Collab Board</h1>
	    	<p> 
	    		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus sit amet tellus iaculis auctor. Curabitur sed leo mi. Etiam rutrum tincidunt massa sit amet lobortis. Phasellus venenatis aliquet arcu id pulvinar." 
	    	</p>
	    	<Link to='/login'>
	    		<button className="startButton">
	    			Lets Collab
	    		</button>
	    	</Link>
		</div>
	);
}