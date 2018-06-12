import React from 'react';
import { connect } from 'react-redux';
import SnapShot from '../repository/snapshot/projectSnap';
import Profile from './profile';
import './dashboard.css';
import { fetchLoginUser } from '../../actions';

export class Dashboard extends React.Component {
	
	componentDidMount() {
		console.log(this.props);
		const userID = this.props.match.params.userId;
		if(userID) {
			this.props.dispatch(fetchLoginUser(userID));
		}
	}
 	
 	render() {
 		console.log(this.props.mainUser);
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
			console.log(userCollabs)
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
			<main className="dashboardContainer" role="main">
		      <Profile />
		      <section role="region">
		        <h2 className="repoTitle">Repository</h2>
		        <ul className="userprojectlist" aria-live="assertive">
		        	{displayUserRepo()}
		        </ul>
		        <ul className="userprojectlist" aria-live="assertive">
		        	{displayUserCollabs()}
		        </ul>
		      </section>
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