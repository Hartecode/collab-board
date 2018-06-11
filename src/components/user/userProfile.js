import React from 'react';
import { connect } from 'react-redux';
import SnapShot from '../repository/snapshot/projectSnap';
import Profile from './profile';
import './userProfile.css';


export default class UserProfile extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	user: {
		        id: null,
		        avatarUrl: null,
		        email: null,
		        githubProfileUrl: null,
		        githubRepos: null,
		        username: null
		    },
		    userRepos: []
	    };

	}
	
	componentDidMount() {
		console.log(this.props);
		const userID = this.props.match.params.userId;
		fetch(`http://localhost:8080/api/users/loginuser/${userID}`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            console.log(res);
            return res.json();
        })
        .then( requestedUser => {
        	this.setState({
        		user: requestedUser
        	})
        	fetch(`http://localhost:8080/api/projects/own/${userID}`)
	        .then(res => {
	            if (!res.ok) {
	                return Promise.reject(res.statusText);
	            }
	            return res.json();
	        })
	        .then(projects => {
	            this.setState({
	        		userRepos: projects
	        	})
	        });
        });
	}
 	
 	render() {
 		const displayUserRepo = () => {
			const userProjects = this.state.userRepos;
			if(userProjects.length > 0) {
				return userProjects.map( project => {
					let totalOfCollabs = project.collaborators.length;
					
					return <SnapShot 
				        		id={project.id}
				        		key={project.id}
				        		projectname={project.projectname}
				        		projectDec={project.projectDec}
				        		userRole={'Owner'}
				        		numberOfCollabs={totalOfCollabs}
				        	/>
				})
			} else {
				return <li>
					<h2> 
						There are no projects posted.
					</h2>
				</li>
			}
		}

		return (
			<main className="dashboardContainer" role="main">
		      <Profile 
		      	username={this.state.user.username}
		      	avatarUrl={this.state.user.avatarUrl}
		      	githubProfileUrl={this.state.user.githubProfileUrl}
		      />
		      <section role="region">
		        <h2 className="repoTitle">
		        	Repositories
		        </h2>
		        <ul className="userprojectlist" aria-live="assertive">
		        	{displayUserRepo()}
		        </ul>
		      </section>
		    </main>
		);
 	}
}
