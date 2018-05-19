import React from 'react';
import Notice from './notification/notice';
import './request.css';

export default class Request extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			requests: [
				{
					id: 272877289921,
					projectId: 387274874982,
					projectName: 'Project Name',
					ownerId: 445,
					requesterId: 333,
					requesterName: 'user Name',
					avatarImgUrl: "https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg",
					requestDec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim justo eget aliquet efficitur. Curabitur finibus pellentesque fermentum. Aenean urna magna, maximus sed justo ac, ultrices laoreet odio. Curabitur hendrerit sollicitudin leo id convallis.",
					status: 'Pending'
				},
				{
					id: 272877289921,
					projectId: 387274874982,
					projectName: 'Project Name',
					ownerId: 445,
					requesterId: 333,
					requesterName: 'user Name',
					avatarImgUrl: "https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg",
					requestDec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim justo eget aliquet efficitur. Curabitur finibus pellentesque fermentum. Aenean urna magna, maximus sed justo ac, ultrices laoreet odio. Curabitur hendrerit sollicitudin leo id convallis.",
					status: 'Pending'
				},
				{
					id: 272877289921,
					projectId: 387274874982,
					projectName: 'Project Name',
					ownerId: 445,
					requesterId: 333,
					requesterName: 'user Name',
					avatarImgUrl: "https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg",
					requestDec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim justo eget aliquet efficitur. Curabitur finibus pellentesque fermentum. Aenean urna magna, maximus sed justo ac, ultrices laoreet odio. Curabitur hendrerit sollicitudin leo id convallis.",
					status: 'Pending'
				}
			]
		}
	}

	render() {
		const requestlist = this.state.requests;
		const list = requestlist.map( (obj, index) => 
					<Notice 
						index={index}
						projectName={obj.projectName}
						avatarImgUrl={obj.avatarImgUrl}
						requestDec={obj.requestDec}
					/>
			);


		return (
			<main role="main">
		      <section>
		        <h2 className="pageTilte">Collabs Requests</h2>
		        <ul className="projectRequests" aria-live="assertive">
		        	{list}
		        </ul>
		      </section>
		    </main>
		);

	}
}