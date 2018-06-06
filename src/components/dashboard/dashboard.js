import React from 'react';
import { connect } from 'react-redux';
import SnapShot from '../repository/snapshot/projectSnap';
import Profile from './profile';
import './dashboard.css';
import { fetchLoginUser } from '../../actions';

export class Dashboard extends React.Component {
	
	componentDidMount() {
		console.log(this.props);
		this.props.dispatch(fetchLoginUser(this.props.match.params.userId));
	}
 	
 	render() {
 		const displayUserRepo = () => {
			const userProjects = this.props.userRepo;
			if(userProjects.length > 0) {
				return userProjects.map( project => {
					let totalOfCollabs = project.collaborators.length;
					let userRole = (project.ownerID === this.props.mainUser.id)? 'Owner' : 'Co-Collab';
					return <SnapShot 
				        		id={project.id}
				        		key={project.id}
				        		transferProject={project}
				        		projectName={project.projectName}
				        		projectDec={project.projectDec}
				        		userRole={userRole}
				        		numberOfCollabs={totalOfCollabs}
				        	/>
				})
			} else {
				return <li><h2> There are no projects posted.</h2></li>
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
		      </section>
		    </main>
		);
 	}
	
	
}



const mapStateToProps = state => ({
    mainUser: state.mainUser,
    userRepo: state.userRepo
});

export default connect(mapStateToProps)(Dashboard);