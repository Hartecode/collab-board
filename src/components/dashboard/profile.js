import React from 'react';
import './profile.css';

export default function Profile(props) {
	return (
		<section className="profile" role="section">
			<div className="profileElements">
		    	<img className="profileImage" src={props.avatarImgUrl} alt={props.userName} />
		    </div>
		    <div className="profileElements">
		    	<p>{props.userName}</p>
		    	<p><a href="#">{props.githubLink}</a></p>
		    	<a href="#"><i className="fas fa-plus-circle"></i> Add Project</a>
		    </div>
		</section>
	);
}