import React from 'react';
import { connect } from 'react-redux';
import './profile.css';

export class Profile extends React.Component  {
	constructor(props) {
	    super(props);
	    this.state = {
	    	addProject: false,
	    	selectValue: ''
	    };
	    this.onClickPro = this.onClickPro.bind(this);
	    this.onSubmit = this.onSubmit.bind(this);
	    this.onChange = this.onChange.bind(this);
	}

	onClickPro() {
		this.setState( prevState => ({
        	addProject: !prevState.addProject
        }));
	}

	onSubmit(e) {
		e.preventDefault();
		console.log(`submited ${e.target.repo.value} `)
		
	}

	onChange(e) {
		this.setState({
			selectValue: e.target.value
		})
	}

	render() {

		const listOfRepo = () => {
			const repos = this.props.githubRepo;
			return repos.map( pro => {
				return <option key={pro.id} value={pro.name}>{pro.name}</option>
			});
		}

		return (
			<div>
				<section className="profile" role="section">
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
			      	<form onSubmit={this.onSubmit}>
			      		<fieldset>
			      			<legend>
			      				Select a project to add
			      			</legend>

			      			<select name="repo" value={this.state.selectValue} onChange={this.onChange}>
							    {listOfRepo()}
							</select>
							<br /><br />
							<input type="submit" />
				      		
						</fieldset>
			      	</form>
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