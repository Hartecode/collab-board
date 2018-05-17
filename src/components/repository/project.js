import React from 'react';
import './project.css';

export default class Project extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
					index: 1,
					projectName: 'Project Name',
					projectDec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim justo eget aliquet efficitur. Curabitur finibus pellentesque fermentum. Aenean urna magna, maximus sed justo ac, ultrices laoreet odio. Curabitur hendrerit sollicitudin leo id convallis.',
					projectLink: 'www.github.com/name/project',
					ownerID: 64532,
					ownerAvatarUrl: "https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg",
					collaborators: [
						{
							userID: 5555,
							avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
						},
						{
							userID: 5555,
							avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
						},
						{
							userID: 5555,
							avatarImgUrl:"http://www.todayifoundout.com/wp-content/uploads/2017/12/myspace-tom.jpg"
						},
						{
							userID: 5555,
							avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
						},
						{
							userID: 5555,
							avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
						},
						{
							userID: 5555,
							avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
						},
						{
							userID: 5555,
							avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
						},
						{
							userID: 5555,
							avatarImgUrl:"http://www.todayifoundout.com/wp-content/uploads/2017/12/myspace-tom.jpg"
						},
						{
							userID: 5555,
							avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
						},
						{
							userID: 5555,
							avatarImgUrl:"http://www.todayifoundout.com/wp-content/uploads/2017/12/myspace-tom.jpg"
						}
					],
					pendingRequest: [
						{
							userID: 888888
						}
					]
					
				};
	}

	render() {
		const collabList = this.state.collaborators.map((person, index) =>  
					<li key={index}>
						<img className="userThumpnail" src={person.avatarImgUrl} alt="{person.userID}" />
		            </li>          
		);

		return (
			<main role="main">
		      <section className="container">
		        <h2 className="pageTilte">{this.state.projectName}</h2>
		        
		        <p className="projectDec">{this.state.projectDec}</p>
		        <h3 className="projectLink">Project Link</h3>
		        <p><a href="#">{this.state.projectLink}</a></p>
		        <div className="projectTeam">
		          <h3>Team Lead:</h3>
		          <img className="userThumpnail" src={this.state.ownerAvatarUrl} /> 
		        </div>
		        <div className="projectTeam">
		          <h3>Collabs:</h3>
		          <ul className="collabList">
		          	{collabList}
		          </ul>
		        </div> 
		        
		        <div className=""><button className="projectJoin">Join Team</button></div>
		    
		      </section>
		    </main>
		);
	}


}