import React from 'react';
import { connect } from 'react-redux';
import "./notice.css";
import { fetchPostApprovedRequest, fetchDeleteRequest } from '../../../actions';


export class Notice extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			expand: true,
			status: 'Pending'
		}
	}

	//click listern to toggle expnd
	onClickExpand = () => {
		this.setState( prevState => ({
			expand: !(prevState.expand)
		}));
	}

	statusApproveClick = () => {
		const requestId = this.props.id;
		const projectId = this.props.projectID;
		const approvedPost = {
			userID: this.props.requesterId,
			avatarUrl: this.props.avatarImgUrl
		}

		console.log(approvedPost);
		this.props.dispatch(fetchPostApprovedRequest(approvedPost, projectId, requestId));
		
		this.setState(prevState => ({
			status: 'Approve'
		}));
	}

	statusDennyClick = () => {
		const requestId = this.props.id;
		this.setState(prevState => ({
			status: 'Denied'
		}));
		this.props.dispatch(fetchDeleteRequest(requestId));
	}

	render() {
		const requestId = this.props.id;
		const expandDec = this.state.expand;

		return (
			<li className="request" id={this.props.index}>
		    	<h3 className="requestProjectTitle">
		    		<button onClick={this.onClickExpand}> { expandDec ? '+' : '-'}</button> 
		    		{this.props.projectName}
		    	</h3>
		    	<div className="requestUser">
		    		<div className="requestElement">
		    			<a href="#">
		    			<img className="userThumpnail" 
		    			src={this.props.avatarImgUrl} 
		    			alt={this.props.requesterUsername} />
		            	{this.props.requesterUsername}
		            	</a>
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

export default connect()(Notice)