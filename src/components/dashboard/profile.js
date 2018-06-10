import React from 'react';
import { connect } from 'react-redux';
import AddProjectForm from '../form/addProject'
import './profile.css';
import { fetchPostProject } from '../../actions';


export class Profile extends React.Component  {
	constructor(props) {
	    super(props);
	    this.state = {
	    	addProject: false,
	    };
	    this.onClickPro = this.onClickPro.bind(this);
	    this.onSubmit = this.onSubmit.bind(this);
	}

	//click listener which toggles the boolean of addProject
	onClickPro() {
		this.setState( prevState => ({
        	addProject: !prevState.addProject
        }));
	}

	//submit listener which post the selected project
	onSubmit(e) {
		e.preventDefault();
		const repos = this.props.githubRepo;
		const selectValue = e.target.repo.value;
		const selectedInfo = repos.find( obj => obj.id == selectValue);
		const addedProject = {
			projectname: selectedInfo.name,
			projectDec: selectedInfo.description,
			projectLink: selectedInfo.html_url,
			ownerID: this.props.mainUser.id,
			ownerAvatarUrl: this.props.mainUser.avatarUrl
		}

		this.props.dispatch(fetchPostProject(addedProject));

		this.setState({
			addProject: false
		})
		
	}


	render() {
		return (
			<div>
				<section className="profile" role="region">
					<div className="profileElements">
				    	<img className="profileImage" 
				    		src={this.props.mainUser.avatarUrl} 
				    		alt={this.props.mainUser.userName} 
				    	/>
				    </div>
				    <div className="profileElements">
				    	<p>
				    		{this.props.mainUser.username}
				    	</p>
				    	<p>
				    		<a href={this.props.mainUser.githubLink}>
				    			Github Profile
				    		</a>
				    	</p>
				    	<a  onClick={this.onClickPro}>
				    		<i className="fas fa-plus-circle"></i> 
				    		Add Project
				    	</a>
				    </div>
				</section>

				<section className={(this.state.addProject)? '': 'hide'} role="region">
			      	<AddProjectForm onSubmit={this.onSubmit} />
			    </section>
		    </div>
		);
	}
}

const mapStateToProps = state => ({
    mainUser: state.mainUser,
    githubRepo: state.githubRepo
});

export default connect(mapStateToProps)(Profile);