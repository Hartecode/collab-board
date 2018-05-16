import React from 'react';
import Header from '../header/header';

export default class App extends React.Component {
	render() {

		return (
			<Header />
		    <main role="main">
		      <section className="profile" role="section">
		        <div className="profileElements">
		          <img className="profileImage" src="https://uploads.teamtreehouse.com/production/profile-photos/1179602/thumb_profile.jpg" alt="User name">
		        </div>
		        <div className="profileElements">
		          <p>User Name</p>
		          <p><a href="#">www.github.com</a></p>
		          <a href="#"><i className="fas fa-plus-circle"></i> Add Project</a>
		        </div>
		      </section>
		      <section>
		        <h2>Repository</h1>
		        <ul className="userprojectlist" aria-live="assertive">
		          <li className="projectSnapShot">
		            <h3 className="projectSnapShotTitle">Project Name</h3>
		            <p className="projectSnapShotDec">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim justo eget aliquet efficitur. Curabitur finibus pellentesque fermentum. Aenean urna magna, maximus sed justo ac, ultrices laoreet odio. Curabitur hendrerit sollicitudin leo id convallis.</p>
		            <div className="projectSnapShotRole">Team Lead</div>
		            <div className="projectSnapShotCollabs">Collabs: 2</div>
		          </li>
		          <li className="projectSnapShot">
		            <h3 className="projectSnapShotTitle">Project Name</h3>
		            <p className="projectSnapShotDec">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dignissim justo eget aliquet efficitur. Curabitur finibus pellentesque fermentum. Aenean urna magna, maximus sed justo ac, ultrices laoreet odio. Curabitur hendrerit sollicitudin leo id convallis.</p>
		            <div className="projectSnapShotRole">Co-Collab</div>
		            <div className="projectSnapShotCollabs">Collabs: 2</div>
		          </li>
		        </ul>
		      </section>
		    </main>
		);
	}
}