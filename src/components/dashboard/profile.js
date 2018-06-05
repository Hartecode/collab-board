import React from 'react';
import { connect } from 'react-redux';
import './profile.css';

export class Profile extends React.Component  {
	constructor(props) {
	    super(props);
	    this.state = {
	    	addProject: false,
	    	githubRepo: null,
	    	selectValue: ''
	    };
	    this.onClickPro = this.onClickPro.bind(this);
	    this.onSubmit = this.onSubmit.bind(this);
	}

	componentDidMount() {
		fetch(this.props.mainUser.githubRepos)
	        .then(res => {
	            if (!res.ok) {
	                return Promise.reject(res.statusText);
	            }
	            console.log(res);
	            return res.json();
	        })
	        .then( repo => {
	        	this.setState({
	        		githubRepo: repo
	        	});
	        });
	}


	onClickPro() {
		this.setState( prevState => ({
        	addProject: !prevState.addProject
        }));
	}

	onSubmit(e) {
		e.preventDefault();
		console.log(`submited ${e.target.value} `)
	}

	onChange(e) {
		this.setState({
			selectValue:e.target.value
		})
	}

	render() {

		const listOfRepo = () => {
			const repos = this.state.githubRepo;
			if(this.state.githubRepo) {
				return repos.map( pro => {
					return <option key={pro.id} value={pro.name}>{pro.name}</option>
				});
			}
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
				    		{this.props.mainUser.userName}
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
});

export default connect(mapStateToProps)(Profile);