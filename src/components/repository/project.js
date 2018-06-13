import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SendRequestForm from '../form/sendRequest';
import './project.css';
import { fetchSingleProject, fetchPostJoin } from '../../actions';


export class Project extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			display: false
		}

		this.onClickPro = this.onClickPro.bind(this);
	    this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount() {
		const projectId = this.props.match.params.projectId;
		this.props.dispatch(fetchSingleProject(projectId));
	}

	//click listener which toggles the boolean of display
	onClickPro() {
		this.setState( prevState => ({
        	display: !prevState.display
        }));
	}
	
	//*** submit listener for request to join
	onSubmit(e) {
		e.preventDefault();
		const submited = e.target.request
		const submitedValue = submited.value;
		const postData = {
			  projectname: this.props.selectedProject.projectname,
			  projectID: this.props.selectedProject.id,
			  ownerID: this.props.selectedProject.ownerID,
			  requesterID: this.props.mainUser.id,
			  requesterUsername: this.props.mainUser.username,
			  requesterAvatarUrl: this.props.mainUser.avatarUrl,
			  requestDec: submitedValue
			};
		console.log(postData);

		this.props.dispatch(fetchPostJoin(postData));

		this.setState( prevState => ({
        	display: !prevState.display
        }));

         submited.value = "I would like to be part of this project."
	}


	render(){

		const canJoin = () => {
			const currentUser = this.props.mainUser.id;
			const projectOwner = this.props.selectedProject.ownerID;
			if(currentUser != projectOwner) {
				return <button onClick={this.onClickPro} className="projectJoin">
			        			Join Team
			        </button>
		        	   
			}
		}

		const projectCollaborators = this.props.selectedProject.collaborators;
		let collabList = <li key='404' > None </li>

		if(projectCollaborators) {
			collabList = projectCollaborators.map((person, index) =>  
					<li key={index}>
						<Link to={'/user/' +person.userID} >
							<img className="userThumpnail" 
								src={person.avatarUrl} 
								alt={person.userID} 
							/>
						</Link>
		            </li> 

			);
		}


		return (
			<main role="main">
		      <section className="proContainer" role="region">
		        <h2 className="pageTilte">
		        	{this.props.selectedProject.projectname}
		        </h2>
		        <h3>
		        	Description
		        </h3>
		        <p className="projectDec">
		        	{this.props.selectedProject.projectDec}
		        </p>
		        <h3 className="projectLink">
		        	Project Link
		        </h3>
		        <p>
		        	<a href={this.props.selectedProject.projectLink} target="_blank">
		        		{this.props.selectedProject.projectLink}
		        	</a>
		        </p>
		        <h3>
		        	What is needed in a Collab
		        </h3>
		        <p className="projectDec">
		        	{this.props.selectedProject.projectSeeking}
		        </p>
		        <div className="projectTeam">
		          <h3>Team Lead:</h3>
		          <Link to={'/user/' + this.props.selectedProject.ownerID}>
			          <img className="userThumpnail" 
			          src={this.props.selectedProject.ownerAvatarUrl} 
			          alt={this.props.selectedProject.ownerID}
			          /> 
		          </Link>
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
		      <SendRequestForm 
		      	projectname={this.props.selectedProject.projectname}
		      	display={this.state.display}
		      	onClickPro={this.onClickPro}
		      	onSubmit={this.onSubmit}
		      />
		    </main>
		);
	}
	
	
}

const mapStateToProps = state => ({
    mainUser: state.mainUser,
    selectedProject: state.selectedProject
});

export default connect(mapStateToProps)(Project);

