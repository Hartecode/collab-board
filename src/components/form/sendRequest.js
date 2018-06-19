import React from 'react';
import './sendRequest.css';


export default function SendRequestForm(props) {

	return (

		<section className={(props.display)? 'overlayOutter': 'hide'} role="region">
			<div className="overlayInnerForm">
				<a href="#" 
					onClick={props.onClickPro}>
					Close
				</a>
		      	<form onSubmit={props.onSubmit}>
		      		<fieldset>
		      			<legend>
		      				Request to be appart of the project!

		      			</legend>

		      			<label htmlFor="request">
		      				Why do you want to join {props.projectname}? 
		      			</label>
		      			<br />
		      			<textarea 
		      				className="textInput"
		      				name="request"
			      			rows="4" 
			      			cols="50" 
			      			minLength="18" 
			      			maxLength="200" 
			      		>
			      			I would like to be part of this project.
						</textarea>
						<br /><br />
						<input className="btn" type="submit" />
					</fieldset>
		      	</form>
			</div>
	    </section>
	);
}

