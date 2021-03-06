import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './projectSnap.css';

export function SnapShot(props) {

	const proDec = props.projectDec;

	const projectTrimDec = (proDec.length <= 140) ? proDec.substring(0, 140): proDec.substring(0, 137) +'...';

	return (
		<li className="projectSnapShot" >
	    	<h3 className="projectSnapShotTitle">
	    		<Link to={"/project/" + props.id}> 
	    			{props.projectname} 
	    		</Link>
	    	</h3>
	        <p className="projectSnapShotDec">
	        	{projectTrimDec}
	        </p>
	        <div className="projectSnapShotRole">
	        	{props.userRole}
	        </div>
	        <div className="projectSnapShotCollabs">
	        	Collabs: {props.numberOfCollabs}
	        </div>
	    </li>
	);
}

export default connect ()(SnapShot);