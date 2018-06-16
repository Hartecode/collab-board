import React from 'react';
import { connect } from 'react-redux';
import './sendRequest.css';


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
		<section className={(props.display)? 'overlayOutter': 'hide'} role="region">
			<div className="overlayInnerForm">
				<a href="#" 
					onClick={props.onClick}>
					Close
				</a>
		      	<form onSubmit={props.onSubmit}>
		      		<fieldset>
		      			<legend>
		      				Select a project to add to the board.
		      			</legend>

		      			<label htmlFor="repo">
							Github Repositories
						</label>
						<br />
		      			<select name="repo" >
						    {listOfRepo()}
						</select>
						<br />
						<br />
						<label htmlFor="request">
							What skills are you seeking in a collaborator?
						</label>
		      			<br />
		      			<textarea 
		      				className="textInput"
		      				name="request"
			      			rows="4" 
			      			cols="50" 
			      			maxLength="200" 
			      		>
						</textarea>
						<br /><br />
						<input className="btn submitBtn" type="submit" />
			      		
					</fieldset>
		      	</form>
	      	</div>
      	</section>
	);
}

const mapStateToProps = state => ({
    githubRepo: state.githubRepo
});

export default connect(mapStateToProps)(AddProjectForm);