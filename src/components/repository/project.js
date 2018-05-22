import React from 'react';
import './project.css';

export default class Project extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			repositories : [
				{
					id: 23434,
					projectName: 'Project Name',
					projectDec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim justo eget aliquet efficitur. Curabitur finibus pellentesque fermentum. Aenean urna magna, maximus sed justo ac, ultrices laoreet odio. Curabitur hendrerit sollicitudin leo id convallis.',
					projectLink: 'www.github.com/name/project',
					ownerID: 66666,
					ownerAvatarUrl: "https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg",
					collaborators: [],
					pendingRequest: [
						{
							userID: 888888
						}
					]
					
				},
				{
					id: 4447,
					projectName: 'Project Name',
					projectDec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim justo eget aliquet efficitur. Curabitur finibus pellentesque fermentum. Aenean urna magna, maximus sed justo ac, ultrices laoreet odio. Curabitur hendrerit sollicitudin leo id convallis.',
					projectLink: 'www.github.com/name/project',
					ownerID: 66666,
					ownerAvatarUrl: "https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg",
					collaborators: [
						{
							userID: 5555,
							avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
						},
						{
							userID: 5555,
							avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
						}
					],
					pendingRequest: [
						{
							userID: 888888
						}
					]
					
				},
				{
					id: 58976,
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
						}
					],
					pendingRequest: [
						{
							userID: 888888
						}
					]
					
				},
				{
					id: 89898,
					projectName: 'Project Name',
					projectDec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim justo eget aliquet efficitur. Curabitur finibus pellentesque fermentum. Aenean urna magna, maximus sed justo ac, ultrices laoreet odio. Curabitur hendrerit sollicitudin leo id convallis.',
					projectLink: 'www.github.com/name/project',
					ownerID: 66666,
					ownerAvatarUrl: "https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg",
					collaborators: [
						{
							userID: 5555,
							avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
						},
						{
							userID: 5555,
							avatarImgUrl:"https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg"
						}
					],
					pendingRequest: [
						{
							userID: 64532
						}
					]
					
				},
				{
					id: 99999,
					projectName: 'Project Name',
					projectDec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim justo eget aliquet efficitur. Curabitur finibus pellentesque fermentum. Aenean urna magna, maximus sed justo ac, ultrices laoreet odio. Curabitur hendrerit sollicitudin leo id convallis.',
					projectLink: 'www.github.com/name/project',
					ownerID: 66666,
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
						},
						{
							userID: 64532,
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
						}
					],
					pendingRequest: [
						{
							userID: 888888
						}
					]
					
				}

			]		
		};
	}

	// const mapStateToProps = (state, props) => {
	//     const folderId = props.match.params.folderId;
	//     const folder = state[folderId];
	//     return {
	//         folderId,
	//         folderName: folder.name,
	//         emailList: Object.keys(folder.emails).map(
	//             emailId => folder.emails[emailId]
	//         )
	//     };
	// };

	render() {
		const collabList = this.state.repositories[4].collaborators.map((person, index) =>  
					<li key={index}>
						<img className="userThumpnail" src={person.avatarImgUrl} alt="{person.userID}" />
		            </li>          
		);


		return (
			<main role="main">
		      <section className="container">
		        <h2 className="pageTilte">{this.state.repositories[4].projectName}</h2>
		        
		        <p className="projectDec">{this.state.repositories[4].projectDec}</p>
		        <h3 className="projectLink">Project Link</h3>
		        <p><a href="#">{this.state.repositories[4].projectLink}</a></p>
		        <div className="projectTeam">
		          <h3>Team Lead:</h3>
		          <img className="userThumpnail" src={this.state.repositories[4].ownerAvatarUrl} /> 
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