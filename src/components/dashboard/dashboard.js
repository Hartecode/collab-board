import React from 'react';
import { connect } from 'react-redux';
import SnapShot from '../repository/snapshot/projectSnap';
import Profile from './profile';

import { fetchLoginUser } from '../../actions';

export function Dashboard(props) {

 	props.dispatch(fetchLoginUser());

	const displayUserRepo = () => {
		const userProjects = props.userRepo;
		if(userProjects.length > 0) {
			return userProjects.map( project => {
				let totalOfCollabs = project.collaborators.length;
				let userRole = (project.ownerID === props.mainUser.id)? 'Owner' : 'Co-Collab';
				console.log(props.mainUser.id);
				return <SnapShot 
			        		id={project.id}
			        		key={project.id}
			        		transferProject={project}
			        		projectName={project.projectName}
			        		projectDec={project.projectDec}
			        		userRole={userRole}
			        		numberOfCollabs={totalOfCollabs}
			        	/>
			})
		} else {
			return <li><h2> There are no projects posted.</h2></li>
		}
	}

	return (
		<main role="main">
	      <Profile 
	      	avatarImgUrl={props.mainUser.avatarUrl}
	      	userName= {props.mainUser.username}
	      	githubLink= {props.mainUser.githubProfileUrl}
	      />
	      <section>
	        <h2>Repository</h2>
	        <ul className="userprojectlist" aria-live="assertive">
	        	{displayUserRepo()}
	        </ul>
	      </section>
	    </main>
	);
	
}



const mapStateToProps = state => ({
    mainUser: state.mainUser,
    userRepo: state.userRepo
});

export default connect(mapStateToProps)(Dashboard);