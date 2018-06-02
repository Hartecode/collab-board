import React from 'react';
import { connect } from 'react-redux';
import './project.css';

export function Project(props) {
	
	const canJoin = () => {
		const currentUser = props.mainUser.id;
		const projectOwner = props.selectedProject.ownerID;
		if(currentUser != projectOwner) {
			return <button className="projectJoin">
	        		Join Team
	        	   </button>
		}
	}

	const collabList = props.selectedProject.collaborators.map((person, index) =>  
				<li key={index}>
					<img className="userThumpnail" 
						src={person.avatarImgUrl} 
						alt="{person.userID}" 
					/>
	            </li>          
	);

	return (
		<main role="main">
	      <section className="container">
	        <h2 className="pageTilte">
	        	{props.selectedProject.projectName}
	        </h2>
	        <p className="projectDec">
	        	{props.selectedProject.projectDec}
	        </p>
	        <h3 className="projectLink">
	        	Project Link
	        </h3>
	        <p>
	        	<a href={props.selectedProject.projectLink}>
	        		{props.selectedProject.projectLink}
	        	</a>
	        </p>
	        <div className="projectTeam">
	          <h3>Team Lead:</h3>
	          <img className="userThumpnail" 
	          src={props.selectedProject.ownerAvatarUrl} 
	          /> 
	        </div>
	        <div className="projectTeam">
	          <h3>Collabs:</h3>
	          <ul className="collabList">
	          	{collabList}
	          </ul>
	        </div> 
	        <div className="">
	        	{canJoin()}
	        </div>
	      </section>
	    </main>
	);
}

const mapStateToProps = state => ({
    mainUser: state.mainUser,
    selectedProject: state.selectedProject
});

export default connect(mapStateToProps)(Project);

