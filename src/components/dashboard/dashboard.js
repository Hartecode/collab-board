import React from 'react';
import SnapShot from '../repository/snapshot/projectSnap';
import Profile from './profile';

export default class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this .state = {
			index: 1,
			projectName: 'Project Name',
			projectDec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim justo eget aliquet efficitur. Curabitur finibus pellentesque fermentum. Aenean urna magna, maximus sed justo ac, ultrices laoreet odio. Curabitur hendrerit sollicitudin leo id convallis.',
			userRole: 'Team Lead',
			numberOfCollabs: 2
		}
	}

	render() {
		return (
			<main role="main">
		      <Profile 
		      	avatarImgUrl={"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"}
		      	userName={"User name"}
		      	githubLink={"www.github.com"}
		      />
		      <section>
		        <h2>Repository</h2>
		        <ul className="userprojectlist" aria-live="assertive">
		        	<SnapShot 
		        		index={this.state.index}
		        		projectName={this.state.projectName}
		        		projectDec={this.state.projectDec}
		        		userRole={this.state.userRole}
		        		numberOfCollabs={this.state.numberOfCollabs}
		        	/>
		        	<SnapShot 
		        		index={this.state.index}
		        		projectName={this.state.projectName}
		        		projectDec={this.state.projectDec}
		        		userRole={this.state.userRole}
		        		numberOfCollabs={this.state.numberOfCollabs}
		        	/>
		        	<SnapShot 
		        		index={this.state.index}
		        		projectName={this.state.projectName}
		        		projectDec={this.state.projectDec}
		        		userRole={'Co-Collab'}
		        		numberOfCollabs={this.state.numberOfCollabs}
		        	/>
		        </ul>
		      </section>
		    </main>
		);
	}
}