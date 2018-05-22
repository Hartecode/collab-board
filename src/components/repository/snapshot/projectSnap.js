import React from 'react';
import {Link} from 'react-router-dom';
import './projectSnap.css';

export default function SnapShot(props) {
	return (
		<li className="projectSnapShot" key={props.index}>
	    	<h3 className="projectSnapShotTitle"><Link to={"/project/" + props.id}> {props.projectName} </Link></h3>
	        <p className="projectSnapShotDec">{props.projectDec}</p>
	        <div className="projectSnapShotRole">{props.userRole}</div>
	        <div className="projectSnapShotCollabs">Collabs: {props.numberOfCollabs}</div>
	    </li>
	);
}