import React from 'react';
import './projectSnap.css';

export default function SnapShot(props) {
	return (
		<li className="projectSnapShot" key={props.index}>
	    	<h3 className="projectSnapShotTitle">{props.projectName}</h3>
	        <p className="projectSnapShotDec">{props.projectDec}</p>
	        <div className="projectSnapShotRole">{props.userRole}</div>
	        <div className="projectSnapShotCollabs">Collabs: {props.numberOfCollabs}</div>
	    </li>
	);
}