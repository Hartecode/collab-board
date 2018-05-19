import React from 'react';

export default function Notice(props){
	return (
		<li className="request" key={props.index}>
	    	<h3 className="requestProjectTitle"><i className="fas fa-minus"></i>{props.projectName}</h3>
	    	<div className="requestUser">
	    		<div className="requestElement">
	    			<a href="#"><img class="userThumpnail" src={props.avatarImgUrl} alt="User name" />
	            User Name</a>
	    		</div>
	    	<div className="requestElement">
	    		<button className="requestButton">connect</button>
	            <button className="requestButton">hide</button>
	          </div>
	        </div>
	        <p className="requestDec">{props.requestDec}</p>
	    </li>	
	);
}