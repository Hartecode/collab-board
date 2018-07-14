import React from 'react';
import { connect } from 'react-redux';
import AddProjectForm from '../form/addProject'
import './profile.css';



export default function Profile(props)  {
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
			    		<a className="connectLinks" href={props.githubProfileUrl} target="_blank">
			    			<i class="fab fa-github"></i>
			    		</a>
			    		<a className="connectLinks" href={"mailto:" + props.email} target="_blank">
			    			<i class="fas fa-envelope"></i>
			    		</a>
			    	</p>
			    </div>
			</section>
	    </div>
	);
}

