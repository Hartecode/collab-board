import React from 'react';
import { connect } from 'react-redux';
import "./notice.css";
import { fetchDeleteRequest } from '../../../actions';


export default class Notice extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expand: true,
			status: 'Pending'
		}
	}



	onClickExpand = () => {
		this.setState( prevState => ({
			expand: !(prevState.expand)
		}));
	}

	statusApproveClick = () => {
		this.setState(prevState => ({
			status: 'Approve'
		}));
		console.log(this.state.status);
	}

	statusDennyClick = () => {
		this.setState(prevState => ({
			status: 'Denied'
		}));
		console.log(this.state.status);
	}

	render() {
		const expandDec = this.state.expand;

		return (
			<li className="request" id={this.props.index}>
		    	<h3 className="requestProjectTitle">
		    		<button onClick={this.onClickExpand}> { expandDec ? '+' : '-'}</button> 
		    		{this.props.projectName}
		    	</h3>
		    	<div className="requestUser">
		    		<div className="requestElement">
		    			<a href="#"><img className="userThumpnail" src={this.props.avatarImgUrl} alt="User name" />
		            User Name</a>
		    		</div>
		    	<div className="requestElement">
		    		<button className="requestButton" onClick={this.statusApproveClick}>connect</button>
		            <button className="requestButton" onClick={this.statusDennyClick}>hide</button>
		          </div>
		        </div>
		        <p className={this.state.expand ? 'requestDec': ''} >{this.props.requestDec}</p>
		    </li>	
		);
	}
	
}