import React from 'react';
import { connect } from 'react-redux';
import './project.css';
import { fetchSingleProject } from '../../actions';


export class Project extends React.Component {

	componentDidMount() {
		const projectId = this.props.match.params.projectId;
		this.props.dispatch(fetchSingleProject(projectId));
	}

	render(){
		const selectedProjectA =  this.props.selectedProject;
		console.log(selectedProjectA);

		const canJoin = () => {
			const currentUser = this.props.mainUser.id;
			const projectOwner = this.props.selectedProject.ownerID;
			if(currentUser != projectOwner) {
				return <button className="projectJoin">
		        		Join Team
		        	   </button>
			}
		}

		const projectCollaborators = this.props.selectedProject.collaborators;
		const collabList = <li key='404' > None </li>

		console.log(projectCollaborators);
		if(projectCollaborators) {
			const collabList = projectCollaborators.map((person, index) =>  
					<li key={index}>
						<img className="userThumpnail" 
							src={person.avatarImgUrl} 
							alt="{person.userID}" 
						/>
		            </li>          
			);
		}


		return (
			<main role="main">
		      <section className="proContainer">
		        <h2 className="pageTilte">
		        	{this.props.selectedProject.projectname}
		        </h2>
		        <p className="projectDec">
		        	{this.props.selectedProject.projectDec}
		        </p>
		        <h3 className="projectLink">
		        	Project Link
		        </h3>
		        <p>
		        	<a href={this.props.selectedProject.projectLink}>
		        		{this.props.selectedProject.projectLink}
		        	</a>
		        </p>
		        <div className="projectTeam">
		          <h3>Team Lead:</h3>
		          <img className="userThumpnail" 
		          src={this.props.selectedProject.ownerAvatarUrl} 
		          /> 
		        </div>
		        <div className="projectTeam">
		          <h3>Collabs:</h3>
		          <ul className="collabList">
		          	{collabList}
		          </ul>
		        </div> 
		        <div className="">
		        	{canJoin()}
		        </div>
		      </section>
		    </main>
		);
	}
	
	
}

const mapStateToProps = state => ({
    mainUser: state.mainUser,
    selectedProject: state.selectedProject
});

export default connect(mapStateToProps)(Project);

