import React from 'react';
import { connect } from 'react-redux';


export function AddProjectForm(props) {
	
	const listOfRepo = () => {
		const repos = props.githubRepo;
		return repos.map( pro => {
			return <option key={pro.id} value={pro.id}>
					{pro.name}
					</option>
		});
	}

	return (
	      	<form onSubmit={props.onSubmit}>
	      		<fieldset>
	      			<legend>
	      				Select a project to add
	      			</legend>

	      			<select name="repo" >
					    {listOfRepo()}
					</select>
					<br /><br />
					<input type="submit" />
		      		
				</fieldset>
	      	</form>
	);
}

const mapStateToProps = state => ({
    githubRepo: state.githubRepo
});

export default connect(mapStateToProps)(AddProjectForm);