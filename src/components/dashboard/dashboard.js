import React from 'react';
import { connect } from 'react-redux';
import SnapShot from '../repository/snapshot/projectSnap';
import Profile from './profile';
import './dashboard.css';
import { fetchLoginUser } from '../../actions';

export class Dashboard extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {
		    repoTitleState: true
	    };
	    this.selectRepoTitle = this.selectRepoTitle.bind(this);
	    this.selectCollabTitle = this.selectCollabTitle.bind(this);
	}
	
	componentWillMount() {
		const userID = this.props.match.params.userId;
		if(userID) {
			this.props.dispatch(fetchLoginUser(userID));
		}
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
			const userProjects = this.props.userRepos;
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
				return <li><h2> There are no projects posted.</h2></li>
			}
		}

		const displayUserCollabs = () => {
			const userCollabs = this.props.userCollabs;
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
			<main role="main">
				<div className="dashboardContainer">
					<Profile />
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
						<ul className={(repoTitleState) ?  "userprojectlist" : "hide"} aria-live="assertive">
							{displayUserRepo()}
						</ul>
						<ul className={(repoTitleState) ? "hide" : "userprojectlist"} aria-live="assertive">
							{displayUserCollabs()}
						</ul>
					</section>
				</div>
		    </main>
		);
 	}
	
	
}



const mapStateToProps = state => ({
    mainUser: state.mainUser,
    userRepos: state.userRepos,
    userCollabs: state.userCollabs
});

export default connect(mapStateToProps)(Dashboard);