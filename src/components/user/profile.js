import React from 'react';
import { connect } from 'react-redux';
import AddProjectForm from '../form/addProject'
import './profile.css';



export default function Profile(props)  {
	console.log(props.githubLink);
	return (
		<div>
			<section className="profile" role="region">
				<div className="profileElements">
			    	<img className="profileImage" 
			    		src={props.avatarUrl} 
			    		alt={props.username} 
			    	/>
			    </div>
			    <div className="profileElements">
			    	<p>
			    		{props.username}
			    	</p>
			    	<p>
			    		<a href={props.githubProfileUrl} target="_blank">
			    			Github Profile
			    		</a>
			    	</p>
			    </div>
			</section>
	    </div>
	);
}

