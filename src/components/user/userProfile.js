import React from 'react';
import { connect } from 'react-redux';
import SnapShot from '../repository/snapshot/projectSnap';
import Profile from './profile';
import { API_BASE_URL } from '../../config'
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
		    userRepos: [],
		    userCollabs: [],
		    repoTitleState: true
	    };

	    this.selectRepoTitle = this.selectRepoTitle.bind(this);
	    this.selectCollabTitle = this.selectCollabTitle.bind(this);
	}
	
	componentDidMount() {
		const userID = this.props.match.params.userId;
		fetch(`${API_BASE_URL}/api/users/loginuser/${userID}`)
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
        	fetch(`${API_BASE_URL}/api/projects/own/${userID}`)
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

	        	fetch(`${API_BASE_URL}/api/projects/collab/${userID}`)
			        .then(res => {
			            if (!res.ok) {
			                return Promise.reject(res.statusText);
			            }
			            return res.json();
			        })
			        .then(projects => {
			            this.setState({
			        		userCollabs: projects
			        	})
			        });
	        });
        });
	}

	selectRepoTitle() {
		this.setState( prevState => ({
			repoTitleState: true
		}));
	}
 	
 	selectCollabTitle() {
		this.setState( prevState => ({
			repoTitleState: false
		}));
	}
 	
 	render() {
 		const repoTitleState = this.state.repoTitleState;
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

		const displayUserCollabs = () => {
			const userCollabs = this.state.userCollabs;
			if(userCollabs.length > 0) {
				return userCollabs.map( project => {
					let totalOfCollabs = project.collaborators.length;
					
					return <SnapShot 
				        		id={project.id}
				        		key={project.id}
				        		projectname={project.projectname}
				        		projectDec={project.projectDec}
				        		userRole={'Co-Collab'}
				        		numberOfCollabs={totalOfCollabs}
				        	/>
				})
			} else {
				return <li><h2> There are no Collab posted.</h2></li>
			}
		}

		return (
			<main  role="main">
				<div className="dashboardContainer">
					<Profile 
						username={this.state.user.username}
						avatarUrl={this.state.user.avatarUrl}
						githubProfileUrl={this.state.user.githubProfileUrl}
					/>
					<section className="fullRepoContainer" role="region">
						<ul className="repoTitleContainer">
							<li className={(repoTitleState) ?  "selected" : "notSelected"}>
								<h2 onClick={this.selectRepoTitle} className="repoTitle" >
									Owner Repo
								</h2>
							</li>
							<li className={(repoTitleState) ?  "notSelected" : "selected"}>
								<h2 onClick={this.selectCollabTitle} className="repoTitle" >
									Collabs
								</h2>
							</li>
						</ul>
						<ul className={(this.state.repoTitleState) ?  "userprojectlist" : "hide"} aria-live="assertive">
							{displayUserRepo()}
						</ul>
						<ul className={(this.state.repoTitleState) ? "hide" : "userprojectlist"} aria-live="assertive">
							{displayUserCollabs()}
						</ul>
					</section>
				</div>
		      
		    </main>
		);
 	}
}
