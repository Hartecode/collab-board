import React from 'react';
import SnapShot from '../repository/snapshot/projectSnap';
import './board.css';

export default class Board extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user : {
				id : 64532,
				name: 'User Name',
				avatarImgUrl: "https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg",
				githubLink: "www.github.com"
			},
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
		}
	}


	render() {
		const boardList = () => {
			const repository = this.state.repositories;

			return repository.map((file, index) => {
				let totalOfCollabs = file.collaborators.length;
				let mainUserId = this.state.user.id;
				let pending = (1 === file.pendingRequest.filter(req => req.userID === mainUserId).length) ? 'Pending': <button className="projectSnapShotJoin">Join Team</button>;
				console.log(index);
				return <SnapShot 
			        		index={index}
			        		id={file.id}
			        		projectName={file.projectName}
			        		projectDec={file.projectDec}
			 				userRole={pending}
			        		numberOfCollabs={totalOfCollabs}
			        	/>
			});
		}

		return (
			<main role="main">
		    	<section>
		        	<h2 className="pageTilte">Board</h2>
		        	<ul className="userprojectlist" aria-live="assertive">
			        	{boardList()}
		        	</ul>
		    	</section>
		    </main>
		);
	}
}