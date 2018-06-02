import React from 'react';
import { connect } from 'react-redux';
import { viewProject } from '../../../actions';
import { Link } from 'react-router-dom';
import './projectSnap.css';

export function SnapShot(props) {

	const onClick = () => {
		const projectInfo = props.transferProject;
		props.dispatch(viewProject(projectInfo));
	}

	return (
		<li className="projectSnapShot" >
	    	<h3 className="projectSnapShotTitle">
	    		<Link onClick={onClick()} to={"/project/" + props.id}> 
	    			{props.projectName} 
	    		</Link>
	    	</h3>
	        <p className="projectSnapShotDec">
	        	{props.projectDec}
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